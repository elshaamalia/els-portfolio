"use client"

import TypingText from "@/components/animations/typing-text"
import { Montserrat } from "next/font/google"
import RealtimeActivityFeed from "@/components/activity/realtime-activity"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function ActivityPage() {

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center">
      
      {/* Main container */}
      <div className="relative z-10 w-full">
        {/* Header Section */}
        <div className="px-20 mb-10">
          {/* Main title */}
          <div className="text-right text-white">
            <p className={`text-lg tracking-widest leading-relaxed ${montserrat.className}`}>
              FEATURED WORKS
            </p>
            <h1 className={`text-9xl font-black tracking-tight drop-shadow-lg ${montserrat.className}`}>
              <TypingText text="ACTIVITY" speed={50} />
            </h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className="px-20">
          {/* Realtime Activity Feed */}
          <div className="bg-black border border-border rounded-lg p-8">
              <RealtimeActivityFeed />
          </div>
        </div>
      </div>
    </div>
  )
}