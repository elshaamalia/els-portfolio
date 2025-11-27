"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

interface LanguageData {
  name: string
  value: number
  color: string
}

const LanguagesUsage = () => {
  const [languages, setLanguages] = useState<LanguageData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch("/api/github/languages")
        const langData = await response.json()
        setLanguages(langData)
      } catch (error) {
        console.error("Error fetching languages:", error)
        // Fallback data
        setLanguages([
          { name: "TypeScript", value: 45, color: "#3178c6" },
          { name: "JavaScript", value: 25, color: "#f1e05a" },
          { name: "Python", value: 15, color: "#3572A5" },
          { name: "CSS", value: 10, color: "#563d7c" },
          { name: "Other", value: 5, color: "#858585" },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchLanguages()

    // Poll every 1 hour
    const interval = setInterval(fetchLanguages, 60 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <div className="h-64 bg-muted rounded animate-pulse" />
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={languages}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, value }) => `${name} ${value}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {languages.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
          }}
          formatter={(value) => `${value}%`}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default LanguagesUsage
