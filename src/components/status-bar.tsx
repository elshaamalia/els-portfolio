"use client"

import { useEffect, useState } from "react"

export default function StatusBar() {
  const [time, setTime] = useState("0 hrs 0 mins")

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const hours = now.getHours()
      const mins = now.getMinutes()
      setTime(`${hours} hrs ${mins} mins`)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black border-t border-slate-800 px-8 py-3 flex items-center justify-between font-mono text-sm text-slate-400">
      <div className="flex items-center gap-4">
        <span className="text-blue-400">▶</span>
        <span>main</span>
        <span className="text-slate-600">|</span>
        <span>📊 0 ⚡ 0 ◯ 0 ⓘ 0</span>
      </div>
      <div className="flex items-center gap-4">
        <span>⏱️ {time}</span>
        <span className="text-green-400">● Available for a work!</span>
      </div>
      <div className="flex items-center gap-2">
        <span>🎨 Prettier</span>
        <span>| elshaamalia 🔗</span>
      </div>
    </div>
  )
}
