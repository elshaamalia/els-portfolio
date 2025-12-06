export async function GET() {
    const apiKey = process.env.WAKATIME_API_KEY

    const end = new Date().toISOString().split("T")[0]
    const start = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0]

    const url = `https://wakatime.com/api/v1/users/current/summaries?start=${start}&end=${end}`

    const res = await fetch(url, {
      headers: {
        Authorization: "Basic " + Buffer.from(apiKey).toString("base64"),
      },
    })

    const data = await res.json()
    return Response.json(data)
}
