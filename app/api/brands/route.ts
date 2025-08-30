import { type NextRequest, NextResponse } from "next/server"
import { BrandService } from "@/lib/airtable"

export async function GET() {
  try {
    const brands = await BrandService.getAll()
    return NextResponse.json({ brands })
  } catch (error) {
    console.error("Error fetching brands:", error)
    return NextResponse.json({ error: "Failed to fetch brands" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const brand = await BrandService.create(body)

    return NextResponse.json({ brand }, { status: 201 })
  } catch (error) {
    console.error("Error creating brand:", error)
    return NextResponse.json({ error: "Failed to create brand" }, { status: 500 })
  }
}
