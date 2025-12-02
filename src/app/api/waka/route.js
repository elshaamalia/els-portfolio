export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY

  const res = await fetch(
    "https://wakatime.com/api/v1/users/current/summaries?range=Last7Days",
    {
      headers: {
        Authorization: "Basic " + Buffer.from(apiKey).toString("base64"),
      },
    }
  )

  const data = await res.json()

  return Response.json(data)
}
