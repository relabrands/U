import { type NextRequest, NextResponse } from "next/server"
import { ContentService } from "@/lib/airtable"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const campaignId = searchParams.get("campaignId")
    const creatorId = searchParams.get("creatorId")
    const status = searchParams.get("status")

    let content
    if (campaignId) {
      content = await ContentService.getByCampaign(campaignId)
    } else if (creatorId) {
      content = await ContentService.getByCreator(creatorId)
    } else if (status === "pending") {
      content = await ContentService.getPendingApproval()
    } else {
      content = await ContentService.getAll()
    }

    return NextResponse.json({ content })
  } catch (error) {
    console.error("Error fetching content:", error)
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const content = await ContentService.create(body)

    return NextResponse.json({ content }, { status: 201 })
  } catch (error) {
    console.error("Error creating content:", error)
    return NextResponse.json({ error: "Failed to create content" }, { status: 500 })
  }
}
