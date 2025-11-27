"use client"

import { useEffect, useState } from "react"

interface ContributionData {
  date: string
  count: number
}

const ContributionTracker = () => {
  const [contributions, setContributions] = useState<ContributionData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch("/api/github/contributions")
        const data = await response.json()
        setContributions(data)
      } catch (error) {
        console.error("Error fetching contributions:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchContributions()

    // Poll every 5 minutes for realtime updates
    const interval = setInterval(fetchContributions, 5 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <div className="h-40 bg-muted rounded animate-pulse" />
  }

  // Generate 52 weeks of contribution data
  const weeks = Array.from({ length: 52 })
  const days = ["Mon", "Wed", "Fri"]

  const getColor = (count: number) => {
    if (count === 0) return "bg-muted"
    if (count < 5) return "bg-green-200 dark:bg-green-900"
    if (count < 10) return "bg-green-400 dark:bg-green-700"
    if (count < 20) return "bg-green-600 dark:bg-green-500"
    return "bg-green-800 dark:bg-green-400"
  }

  return (
    <div className="overflow-x-auto">
      <div className="inline-block">
        {/* Legend */}
        <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded ${
                  i === 0
                    ? "bg-muted"
                    : i === 1
                      ? "bg-green-200 dark:bg-green-900"
                      : i === 2
                        ? "bg-green-400 dark:bg-green-700"
                        : "bg-green-800 dark:bg-green-400"
                }`}
              />
            ))}
          </div>
          <span>More</span>
        </div>

        {/* Contribution Grid */}
        <div className="flex gap-1">
          {/* Day labels */}
          <div className="flex flex-col gap-1 pr-2">
            {days.map((day) => (
              <div key={day} className="text-xs text-muted-foreground h-5 flex items-center">
                {day}
              </div>
            ))}
          </div>

          {/* Month labels and grid */}
          <div>
            <div className="flex gap-1 mb-2 h-5">
              {["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"].map((month, i) => (
                <div key={month} className="text-xs text-muted-foreground w-8 text-center">
                  {month}
                </div>
              ))}
            </div>

            {/* Contribution boxes */}
            <div className="flex gap-1">
              {weeks.map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {days.map((_, dayIndex) => {
                    const dayIndex2 = dayIndex * 2 // Mon=0, Wed=2, Fri=4
                    const date = new Date()
                    date.setDate(date.getDate() - (52 * 7 - weekIndex * 7 + dayIndex2))
                    const count = Math.floor(Math.random() * 25)

                    return (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`w-5 h-5 rounded transition-all hover:ring-2 ring-foreground cursor-pointer ${getColor(count)}`}
                        title={`${count} contributions on ${date.toDateString()}`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContributionTracker
