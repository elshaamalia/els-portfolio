"use client"

import { useEffect, useState } from "react"

// ======================
// TYPE DEFINITIONS
// ======================

interface WeeklyData {
  day: string
  duration: string
  percent: number
}

interface LanguageData {
  name: string
  percent: number
  color: string
}

interface WakaDay {
  range: { date: string }
  grand_total: {
    text: string
    total_seconds: number
  }
  languages: {
    name: string
    percent: number
  }[]
}

export default function ActivityComponents() {
  const [weekly, setWeekly] = useState<WeeklyData[]>([])
  const [languages, setLanguages] = useState<LanguageData[]>([])

  const fetchData = async () => {
    const res = await fetch("/api/waka")
    const json = await res.json()

    const days: WakaDay[] = json.data || []

    // ======================
    // WEEKLY ACTIVITY
    // ======================
    const weeklyData: WeeklyData[] = days.map((day: WakaDay) => ({
      day: new Date(day.range.date).toDateString(),
      duration: day.grand_total.text,
      percent: Math.min(100, (day.grand_total.total_seconds / 18000) * 100),
    }))

    // ======================
    // LANGUAGES (FROM LAST DAY)
    // ======================
    const langData: LanguageData[] =
      (days[days.length - 1]?.languages || []).map((l) => ({
        name: l.name,
        percent: l.percent,
        color: "#0072ff",
      }))

    // SAFE STATE SET (tidak cascading)
    setWeekly(weeklyData)
    setLanguages(langData)
  }

  useEffect(() => {
  // bikin wrapper async
  const load = async () => {
    await fetchData()
  }

  load()

  const interval = setInterval(fetchData, 10000)
  return () => clearInterval(interval)
}, [])

  return (
    <div className="space-y-12 text-white bg-black p-6 w-full mx-auto rounded-lg">

      {/* WEEKLY ACTIVITY */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Weekly Activity</h2>

        <div className="space-y-2">
          {weekly.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 w-full">
              <p className="w-40 text-m text-gray-300 whitespace-nowrap">{item.day}</p>

              <div className="flex-1 bg-[#2c2f36] h-2 rounded-full">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${item.percent}%`,
                    background: "linear-gradient(90deg,#00c6ff,#0072ff)",
                  }}
                />
              </div>

              <p className="w-14 text-right text-m text-gray-300 whitespace-nowrap">
                {item.duration}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* LANGUAGES */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Coding Languages</h2>

        <div className="space-y-2 w-full">
          {languages.map((lang, idx) => (
            <div key={idx} className="flex items-center gap-4 w-full">
              <span className="w-40 text-m text-gray-300">{lang.name}</span>

              <div className="flex-1 bg-[#2c2f36] h-2 rounded-full">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${lang.percent}%`,
                    backgroundColor: lang.color,
                  }}
                />
              </div>

              <span className="w-14 text-right text-m text-gray-300">
                {lang.percent.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
