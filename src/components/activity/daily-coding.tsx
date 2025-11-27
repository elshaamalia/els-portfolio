"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface CodingTimeData {
  day: string
  hours: number
}

const DailyCodingTime = () => {
  const [data, setData] = useState<CodingTimeData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCodingTime = async () => {
      try {
        const response = await fetch("/api/github/coding-time")
        const codingData = await response.json()
        setData(codingData)
      } catch (error) {
        console.error("Error fetching coding time:", error)
        // Fallback data
        setData([
          { day: "Mon", hours: 8 },
          { day: "Tue", hours: 7 },
          { day: "Wed", hours: 9 },
          { day: "Thu", hours: 6 },
          { day: "Fri", hours: 10 },
          { day: "Sat", hours: 4 },
          { day: "Sun", hours: 5 },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchCodingTime()

    // Poll every 1 hour
    const interval = setInterval(fetchCodingTime, 60 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <div className="h-64 bg-muted rounded animate-pulse" />
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
        <YAxis stroke="hsl(var(--muted-foreground))" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
          }}
          labelStyle={{ color: "hsl(var(--foreground))" }}
        />
        <Line
          type="monotone"
          dataKey="hours"
          stroke="#22c55e"
          strokeWidth={2}
          dot={{ fill: "#22c55e", r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default DailyCodingTime
