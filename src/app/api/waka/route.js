import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const API_KEY = process.env.WAKATIME_API_KEY
    const BASE_URL = "https://wakatime.com/api/v1/users/current"

    // Request 2 data sekaligus (Weekly & All Time)
    const [summariesRes, statsRes] = await Promise.all([
      fetch(`${BASE_URL}/summaries?range=last_7_days&api_key=${API_KEY}`),
      fetch(`${BASE_URL}/stats/all_time?api_key=${API_KEY}`),
    ])

    const summariesJson = await summariesRes.json()
    const statsJson = await statsRes.json()

    return NextResponse.json({
      // Frontend butuh key 'weeklyData' dan 'languageData' ini
      weeklyData: summariesJson.data || [],
      languageData: statsJson.data?.languages || [],
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Wakatime data" },
      { status: 500 }
    )
  }
}