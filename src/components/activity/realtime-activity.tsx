"use client"

import { useEffect, useState } from "react"

interface Activity {
  id: string
  type: string
  repo: string
  message: string
  timestamp: string
  actor: string
}

const RealtimeActivityFeed = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("/api/github/activities")
        const data = await response.json()
        setActivities(data)
      } catch (error) {
        console.error("Error fetching activities:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchActivities()

    // Poll every 30 seconds for realtime updates
    const interval = setInterval(fetchActivities, 30 * 1000)

    return () => clearInterval(interval)
  }, [])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "PushEvent":
        return "↗"
      case "PullRequestEvent":
        return "⎇"
      case "CreateEvent":
        return "+"
      case "IssuesEvent":
        return "!"
      default:
        return "•"
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "PushEvent":
        return "text-blue-500"
      case "PullRequestEvent":
        return "text-purple-500"
      case "CreateEvent":
        return "text-green-500"
      case "IssuesEvent":
        return "text-orange-500"
      default:
        return "text-gray-500"
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 bg-muted rounded animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {activities.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">No recent activities</p>
      ) : (
        activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 p-4 bg-muted rounded-lg hover:bg-accent transition-colors"
          >
            <div className={`text-2xl ${getActivityColor(activity.type)} flex-shrink-0`}>
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-foreground font-medium truncate">
                {activity.actor} <span className="text-muted-foreground">{activity.type}</span>
              </p>
              <p className="text-muted-foreground text-sm truncate">{activity.repo}</p>
              <p className="text-muted-foreground text-xs mt-1">{activity.message}</p>
            </div>
            <div className="text-muted-foreground text-xs flex-shrink-0 whitespace-nowrap">{activity.timestamp}</div>
          </div>
        ))
      )}
    </div>
  )
}

export default RealtimeActivityFeed
