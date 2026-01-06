"use client"

import { useEffect, useState } from "react"
import { Montserrat } from "next/font/google"

// ======================
// CONFIG & TYPES
// ======================

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const LANGUAGE_COLORS: Record<string, string> = {
  "TypeScript": "#3178c6",
  "JavaScript": "#f7df1e",
  "Python": "#3776ab",
  "HTML": "#e34c26",
  "CSS": "#563d7c",
  "Vue.js": "#41b883",
  "React": "#61dafb",
  "Svelte": "#ff3e00",
  "Dart": "#0175c2",
  "Java": "#b07219",
  "Kotlin": "#A97BFF",
  "Go": "#00ADD8",
  "Rust": "#dea584",
  "C++": "#f34b7d",
  "C": "#555555",
  "PHP": "#4F5D95",
  "Swift": "#ffac45",
  "JSON": "#292929",
  "Markdown": "#083fa1",
  "YAML": "#cb171e"
}

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

interface ApiResponse {
  weeklyData: {
    range: { date: string }
    grand_total: {
      text: string
      total_seconds: number
    }
  }[]
  languageData: {
    name: string
    percent: number
    total_seconds: number
  }[]
}

export default function RealtimeActivityFeed() {
  const [weekly, setWeekly] = useState<WeeklyData[]>([])
  const [languages, setLanguages] = useState<LanguageData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await fetch("/api/waka")
      const json: ApiResponse = await res.json()

      // 1. WEEKLY DATA
      const days = json.weeklyData || []
      const weeklyData: WeeklyData[] = days.map((day) => ({
        day: new Date(day.range.date).toDateString(),
        duration: day.grand_total.text,
        percent: Math.min(100, (day.grand_total.total_seconds / 18000) * 100),
      }))

      // 2. LANGUAGES DATA
      const rawLanguages = json.languageData || []
      const langData: LanguageData[] = rawLanguages
        .filter((l) => l.percent > 0.5)
        .sort((a, b) => b.percent - a.percent)
        .slice(0, 5)
        .map((l) => ({
          name: l.name,
          percent: l.percent,
          color: LANGUAGE_COLORS[l.name] || "#0072ff",
        }))

      setWeekly(weeklyData)
      setLanguages(langData)
    } catch (error) {
      console.error("Failed to fetch waka data", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 60000)
    return () => clearInterval(interval)
  }, [])

  // ======================
  // SKELETON
  // ======================
  const SkeletonRow = () => (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 animate-pulse w-full">
      <div className="w-full sm:w-32 h-3 sm:h-4 bg-gray-800 rounded"></div>
      <div className="flex-1 bg-gray-800 h-1.5 rounded-full w-full"></div>
      <div className="hidden sm:block w-12 h-4 bg-gray-800 rounded"></div>
    </div>
  )

  return (
    <div className="space-y-8 text-white w-full mx-auto rounded-lg">
      
      {/* WEEKLY ACTIVITY */}
      <div>
        <h2 className={`text-base md:text-base font-bold tracking-wider mb-4 md:mb-5 text-gray-200 ${montserrat.className}`}>WEEKLY ACTIVITY</h2>

        <div className="space-y-0 flex flex-col gap-3 sm:gap-0 sm:space-y-2"> 
          {isLoading
            ? Array.from({ length: 7 }).map((_, idx) => <SkeletonRow key={idx} />)
            : weekly.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 w-full">
                  
                  {/* LABEL ROW */}
                  <div className="flex justify-between items-center sm:block sm:w-32">
                    <p className="text-xs sm:text-xs text-gray-400 whitespace-nowrap leading-tight">
                      {item.day}
                    </p>
                    <p className="sm:hidden text-[10px] font-bold text-gray-500">
                      {item.duration}
                    </p>
                  </div>

                  {/* BAR ROW */}
                  <div className="flex-1 bg-[#2c2f36] h-1.5 rounded-full w-full">
                    <div
                      className="h-full rounded-full text-left transition-all duration-1000 ease-out"
                      style={{
                        width: `${item.percent}%`,
                        background: "linear-gradient(90deg,#00c6ff,#0072ff)",
                      }}
                    />
                  </div>

                  <p className="hidden sm:block w-20 text-right text-xs sm:text-xs text-gray-400 whitespace-nowrap leading-tight">
                    {item.duration}
                  </p>
                </div>
              ))}
        </div>
      </div>

      {/* LANGUAGES */}
      <div>
        <h2 className={`text-base md:text-base font-bold tracking-wider mb-4 md:mb-5 text-gray-200 ${montserrat.className}`}>LANGUAGES</h2>

        <div className="w-full flex flex-col gap-3 sm:gap-0 ">
          {isLoading
            ? Array.from({ length: 5 }).map((_, idx) => <SkeletonRow key={idx} />)
            : languages.map((lang, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 w-full">
                  
                  {/* LABEL ROW */}
                  <div className="flex justify-between items-center sm:block sm:w-32">
                    <span className="text-xs sm:text-xs text-gray-400 leading-tight">
                      {lang.name}
                    </span>
                    <span className="sm:hidden text-[10px] font-bold text-gray-500">
                      {lang.percent.toFixed(1)}%
                    </span>
                  </div>

                  {/* BAR ROW */}
                  <div className="flex-1 bg-[#2c2f36] h-1.5 rounded-full w-full">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${lang.percent}%`,
                        backgroundColor: lang.color,
                        boxShadow: `0 0 10px ${lang.color}40`
                      }}
                    />
                  </div>

                  {/* PERCENT (Desktop) */}
                  <span className="hidden sm:block w-14 text-right text-xs sm:text-xs text-gray-400 leading-tight">
                    {lang.percent.toFixed(1)}%
                  </span>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}