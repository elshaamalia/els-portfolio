"use client"

import { useEffect, useState } from "react"
import TypingText from "@/components/animations/typing-text"
import { Montserrat } from "next/font/google"
import GitHubContributionTracker from "@/components/activity/contribution-tracker"
import DailyCodingTime from "@/components/activity/daily-coding"
import LanguagesUsage from "@/components/activity/language-usage"
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
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Main container */}
      <div className="relative z-10 w-full">
        {/* Header Section */}
        <div className="pt-28 px-20">
          {/* Main title */}
          <div className="text-right mb-14">
            <p className={`text-muted-foreground text-lg tracking-widest leading-relaxed ${montserrat.className}`}>
              FEATURED WORKS
            </p>
            <h1 className={`text-foreground text-9xl font-black tracking-tight drop-shadow-lg ${montserrat.className}`}>
              <TypingText text="ACTIVITY" speed={50} />
            </h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className="px-20 pb-20 space-y-8">
          {/* GitHub Contribution Tracker */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className={`text-foreground text-2xl font-bold mb-6 ${montserrat.className}`}>
              GitHub Contribution Tracker
            </h2>
            {isLoading ? <div className="h-40 bg-muted rounded animate-pulse" /> : <GitHubContributionTracker />}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Daily Coding Time */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className={`text-foreground text-2xl font-bold mb-6 ${montserrat.className}`}>Daily Coding Time</h2>
              {isLoading ? <div className="h-64 bg-muted rounded animate-pulse" /> : <DailyCodingTime />}
            </div>

            {/* Languages Usage */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className={`text-foreground text-2xl font-bold mb-6 ${montserrat.className}`}>
                Programming Languages
              </h2>
              {isLoading ? <div className="h-64 bg-muted rounded animate-pulse" /> : <LanguagesUsage />}
            </div>
          </div>

          {/* Realtime Activity Feed */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className={`text-foreground text-2xl font-bold mb-6 ${montserrat.className}`}>
              Realtime Activity Feed
            </h2>
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
