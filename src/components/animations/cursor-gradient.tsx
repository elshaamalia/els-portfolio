"use client"

import { useEffect, useRef } from "react"

export default function CursorGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const sharinganRef = useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      angle: number
      type: "sharingan" | "shuriken"
    }>
  >([])
  const isMoving = useRef(false)
  const movingTimeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      isMoving.current = true

      if (Math.random() > 0.6) {
        const type = Math.random() > 0.5 ? "sharingan" : "shuriken"
        sharinganRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 3,
          vy: Math.random() * 3 + 1,
          life: 1,
          angle: Math.random() * Math.PI * 2,
          type: type,
        })
      }

      clearTimeout(movingTimeout.current)
      movingTimeout.current = setTimeout(() => {
        isMoving.current = false
      }, 50)
    }

    const drawSharingan = (x: number, y: number, size: number, opacity: number) => {
      ctx.fillStyle = `rgba(255, 50, 50, ${opacity})`
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.8})`
      ctx.beginPath()
      ctx.arc(x, y, size * 0.6, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = `rgba(255, 100, 100, ${opacity * 0.7})`
      ctx.lineWidth = size * 0.15
      for (let i = 0; i < 3; i++) {
        const angle = ((Math.PI * 2) / 3) * i
        const tx = x + Math.cos(angle) * size * 0.3
        const ty = y + Math.sin(angle) * size * 0.3
        ctx.beginPath()
        ctx.arc(tx, ty, size * 0.15, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    const drawShuriken = (x: number, y: number, size: number, opacity: number, angle: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)

      ctx.fillStyle = `rgba(255, 150, 0, ${opacity})`
      for (let i = 0; i < 4; i++) {
        ctx.save()
        ctx.rotate((Math.PI / 2) * i)
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(size * 0.3, -size * 0.2)
        ctx.lineTo(size * 0.5, 0)
        ctx.lineTo(size * 0.3, size * 0.2)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      }

      ctx.fillStyle = `rgba(255, 200, 0, ${opacity})`
      ctx.beginPath()
      ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sharinganRef.current = sharinganRef.current.filter((effect) => {
        effect.x += effect.vx
        effect.y += effect.vy
        effect.vy += 0.1
        effect.life -= 0.015
        effect.angle += 0.08

        if (effect.life > 0) {
          const size = 8 * (effect.life > 0.5 ? 1 : effect.life * 2)
          const opacity = Math.max(0, effect.life)

          if (effect.type === "sharingan") {
            drawSharingan(effect.x, effect.y, size, opacity)
          } else {
            drawShuriken(effect.x, effect.y, size, opacity, effect.angle)
          }

          return true
        }
        return false
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(movingTimeout.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-5" />
}
