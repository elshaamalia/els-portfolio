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

// Interface Response API (Sesuai route.ts baru)
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

export default function ActivityComponents() {
  const [weekly, setWeekly] = useState<WeeklyData[]>([])
  const [languages, setLanguages] = useState<LanguageData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await fetch("/api/waka")
      const json: ApiResponse = await res.json()

      // ======================
      // 1. WEEKLY DATA
      // ======================
      const days = json.weeklyData || []
      const weeklyData: WeeklyData[] = days.map((day) => ({
        day: new Date(day.range.date).toDateString(),
        duration: day.grand_total.text,
        percent: Math.min(100, (day.grand_total.total_seconds / 18000) * 100),
      }))

      // ======================
      // 2. LANGUAGES DATA (ALL TIME & WARNA)
      // ======================
      const rawLanguages = json.languageData || []
      const langData: LanguageData[] = rawLanguages
        .filter((l) => l.percent > 0.5) // Filter < 0.5%
        .sort((a, b) => b.percent - a.percent) // Urutkan terbesar
        .slice(0, 5) // Ambil 5 besar
        .map((l) => ({
          name: l.name,
          percent: l.percent,
          color: LANGUAGE_COLORS[l.name] || "#0072ff", // Custom Color
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
  // SKELETON (LAYOUT ASLI)
  // ======================
  const SkeletonRow = () => (
    <div className="flex items-center gap-4 animate-pulse">
      <div className="w-40 h-6 bg-gray-800 rounded"></div>
      <div className="flex-1 bg-gray-800 h-2 rounded-full"></div>
      <div className="w-14 h-6 bg-gray-800 rounded text-right"></div>
    </div>
  )

  return (
    <div className="space-y-12 text-white p-6 w-full mx-auto rounded-lg">
      
      {/* WEEKLY ACTIVITY */}
      <div>
        <h2 className={`text-xl font-bold tracking-wider mb-6 ${montserrat.className}`}>WEEKLY ACTIVITY</h2>

        <div className="space-y-2"> 
          {isLoading
            ? Array.from({ length: 7 }).map((_, idx) => <SkeletonRow key={idx} />)
            : weekly.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 w-full">
                  <p className="w-40 text-sm md:text-base text-gray-300 whitespace-nowrap leading-6">
                    {item.day}
                  </p>

                  <div className="flex-1 bg-[#2c2f36] h-2 rounded-full">
                    <div
                      className="h-full rounded-full text-left"
                      style={{
                        width: `${item.percent}%`,
                        background: "linear-gradient(90deg,#00c6ff,#0072ff)",
                      }}
                    />
                  </div>

                  <p className="w-14 text-left text-sm md:text-base text-gray-300 whitespace-nowrap leading-6">
                    {item.duration}
                  </p>
                </div>
              ))}
        </div>
      </div>

      {/* LANGUAGES */}
      <div>
        <h2 className={`text-xl font-bold tracking-wider mb-6 ${montserrat.className}`}>LANGUAGES</h2>

        <div className="space-y-2 w-full">
          {isLoading
            ? Array.from({ length: 5 }).map((_, idx) => <SkeletonRow key={idx} />)
            : languages.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-4 w-full">
                  <span className="w-40 text-sm md:text-base text-gray-300 leading-6">
                    {lang.name}
                  </span>

                  <div className="flex-1 bg-[#2c2f36] h-2 rounded-full">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${lang.percent}%`,
                        backgroundColor: lang.color, // Warna dari Variable
                        boxShadow: `0 0 10px ${lang.color}40` // Glow dikit
                      }}
                    />
                  </div>

                  <span className="w-14 text-left text-sm md:text-base text-gray-300 leading-6">
                    {lang.percent.toFixed(1)}%
                  </span>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}