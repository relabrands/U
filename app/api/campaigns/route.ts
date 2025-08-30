import { type NextRequest, NextResponse } from "next/server"
import { CampaignService } from "@/lib/airtable"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const brandId = searchParams.get("brandId")
    const status = searchParams.get("status")

    let campaigns
    if (brandId) {
      campaigns = await CampaignService.getByBrand(brandId)
    } else if (status === "active") {
      campaigns = await CampaignService.getActive()
    } else {
      campaigns = await CampaignService.getAll()
    }

    return NextResponse.json({ campaigns })
  } catch (error) {
    console.error("Error fetching campaigns:", error)
    return NextResponse.json({ error: "Failed to fetch campaigns" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const campaign = await CampaignService.create(body)

    return NextResponse.json({ campaign }, { status: 201 })
  } catch (error) {
    console.error("Error creating campaign:", error)
    return NextResponse.json({ error: "Failed to create campaign" }, { status: 500 })
  }
}
