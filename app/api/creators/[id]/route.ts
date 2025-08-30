import { type NextRequest, NextResponse } from "next/server"
import { CreatorService } from "@/lib/airtable"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const creator = await CreatorService.getById(params.id)

    if (!creator) {
      return NextResponse.json({ error: "Creator not found" }, { status: 404 })
    }

    return NextResponse.json({ creator })
  } catch (error) {
    console.error("Error fetching creator:", error)
    return NextResponse.json({ error: "Failed to fetch creator" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const creator = await CreatorService.update(params.id, body)

    return NextResponse.json({ creator })
  } catch (error) {
    console.error("Error updating creator:", error)
    return NextResponse.json({ error: "Failed to update creator" }, { status: 500 })
  }
}
