"use client"

import { useEffect, useState } from "react"
import TypingText from "@/components/animations/typing-text"
import { Montserrat } from "next/font/google"
import RealtimeActivityFeed from "@/components/activity/realtime-activity"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function ActivityPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Main container */}
      <div className="relative z-10 w-full">
        {/* Header Section */}
        <div className="pt-28 px-20">
          {/* Main title */}
          <div className="text-right mb-14 text-white">
            <p className={`text-lg tracking-widest leading-relaxed ${montserrat.className}`}>
              FEATURED WORKS
            </p>
            <h1 className={`text-9xl font-black tracking-tight drop-shadow-lg ${montserrat.className}`}>
              <TypingText text="ACTIVITY" speed={50} />
            </h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className="px-20 pb-20 space-y-8">
          {/* Realtime Activity Feed */}
          <div className="bg-black border border-border rounded-lg p-8">
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 bg-muted rounded animate-pulse" />
                ))}
              </div>
            ) : (
              <RealtimeActivityFeed />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
