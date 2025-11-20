"use client"

import { useEffect, useState } from "react"

interface TypingTextProps {
  text: string
  speed?: number
  className?: string
  cursor?: boolean
}

export default function TypingText({ text, speed = 50, className = "", cursor = true }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayedText}
      {cursor && currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  )
}
