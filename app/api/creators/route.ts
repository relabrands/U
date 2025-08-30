import { type NextRequest, NextResponse } from "next/server"
import { CreatorService } from "@/lib/airtable"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const niche = searchParams.get("niche")

    let creators
    if (niche) {
      creators = await CreatorService.getByNiche(niche)
    } else {
      creators = await CreatorService.getAll()
    }

    return NextResponse.json({ creators })
  } catch (error) {
    console.error("Error fetching creators:", error)
    return NextResponse.json({ error: "Failed to fetch creators" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const creator = await CreatorService.create(body)

    return NextResponse.json({ creator }, { status: 201 })
  } catch (error) {
    console.error("Error creating creator:", error)
    return NextResponse.json({ error: "Failed to create creator" }, { status: 500 })
  }
}
