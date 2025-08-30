// Airtable integration for UGC platform backend
// This will handle all data operations with Airtable as the database

interface AirtableRecord {
  id: string
  fields: Record<string, any>
  createdTime: string
}

interface AirtableResponse {
  records: AirtableRecord[]
  offset?: string
}

class AirtableClient {
  private baseUrl: string
  private headers: Record<string, string>

  constructor() {
    const baseId = process.env.AIRTABLE_BASE_ID
    const apiKey = process.env.AIRTABLE_API_KEY

    if (!baseId || !apiKey) {
      throw new Error(
        "Airtable credentials not found. Please set AIRTABLE_BASE_ID and AIRTABLE_API_KEY environment variables.",
      )
    }

    this.baseUrl = `https://api.airtable.com/v0/${baseId}`
    this.headers = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    }
  }

  // Generic method to fetch records from any table
  async getRecords(
    tableName: string,
    options: {
      filterByFormula?: string
      sort?: Array<{ field: string; direction: "asc" | "desc" }>
      maxRecords?: number
      view?: string
    } = {},
  ): Promise<AirtableRecord[]> {
    try {
      const params = new URLSearchParams()

      if (options.filterByFormula) {
        params.append("filterByFormula", options.filterByFormula)
      }

      if (options.sort) {
        options.sort.forEach((sortItem, index) => {
          params.append(`sort[${index}][field]`, sortItem.field)
          params.append(`sort[${index}][direction]`, sortItem.direction)
        })
      }

      if (options.maxRecords) {
        params.append("maxRecords", options.maxRecords.toString())
      }

      if (options.view) {
        params.append("view", options.view)
      }

      const url = `${this.baseUrl}/${encodeURIComponent(tableName)}?${params.toString()}`
      const response = await fetch(url, {
        method: "GET",
        headers: this.headers,
      })

      if (!response.ok) {
        throw new Error(`Airtable API error: ${response.status} ${response.statusText}`)
      }

      const data: AirtableResponse = await response.json()
      return data.records
    } catch (error) {
      console.error("Error fetching records from Airtable:", error)
      throw error
    }
  }

  // Create a new record
  async createRecord(tableName: string, fields: Record<string, any>): Promise<AirtableRecord> {
    try {
      const response = await fetch(`${this.baseUrl}/${encodeURIComponent(tableName)}`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          fields,
        }),
      })

      if (!response.ok) {
        throw new Error(`Airtable API error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error creating record in Airtable:", error)
      throw error
    }
  }

  // Update an existing record
  async updateRecord(tableName: string, recordId: string, fields: Record<string, any>): Promise<AirtableRecord> {
    try {
      const response = await fetch(`${this.baseUrl}/${encodeURIComponent(tableName)}/${recordId}`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          fields,
        }),
      })

      if (!response.ok) {
        throw new Error(`Airtable API error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error updating record in Airtable:", error)
      throw error
    }
  }

  // Delete a record
  async deleteRecord(tableName: string, recordId: string): Promise<{ deleted: boolean; id: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/${encodeURIComponent(tableName)}/${recordId}`, {
        method: "DELETE",
        headers: this.headers,
      })

      if (!response.ok) {
        throw new Error(`Airtable API error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Error deleting record from Airtable:", error)
      throw error
    }
  }
}

// Export singleton instance
export const airtable = new AirtableClient()

// Type definitions for our UGC platform data models
export interface Creator {
  id: string
  name: string
  email: string
  handle: string
  followers: number
  engagement_rate: number
  niche: string[]
  rating: number
  bio: string
  profile_image?: string
  social_links: {
    instagram?: string
    tiktok?: string
    youtube?: string
  }
  campaigns_completed: number
  total_earnings: number
  status: "active" | "inactive" | "pending"
  created_at: string
}

export interface Brand {
  id: string
  name: string
  email: string
  company: string
  industry: string[]
  logo?: string
  description: string
  website?: string
  contact_person: string
  total_spent: number
  campaigns_created: number
  status: "active" | "inactive" | "pending"
  created_at: string
}

export interface Campaign {
  id: string
  brand_id: string
  title: string
  description: string
  budget: number
  start_date: string
  end_date: string
  target_audience: string
  content_requirements: string
  deliverables: string[]
  status: "draft" | "active" | "completed" | "cancelled"
  creators_assigned: string[]
  total_reach: number
  total_engagement: number
  roi: number
  created_at: string
}

export interface Content {
  id: string
  campaign_id: string
  creator_id: string
  type: "post" | "story" | "reel" | "video"
  platform: "instagram" | "tiktok" | "youtube"
  content_url?: string
  caption: string
  hashtags: string[]
  metrics: {
    views: number
    likes: number
    comments: number
    shares: number
    saves: number
  }
  status: "draft" | "submitted" | "approved" | "published"
  submitted_at?: string
  approved_at?: string
  published_at?: string
}

// Helper functions for specific data operations
export class CreatorService {
  static async getAll(): Promise<Creator[]> {
    const records = await airtable.getRecords("Creators", {
      sort: [{ field: "created_at", direction: "desc" }],
    })

    return records.map(
      (record) =>
        ({
          id: record.id,
          ...record.fields,
        }) as Creator,
    )
  }

  static async getById(id: string): Promise<Creator | null> {
    const records = await airtable.getRecords("Creators", {
      filterByFormula: `RECORD_ID() = '${id}'`,
    })

    if (records.length === 0) return null

    return {
      id: records[0].id,
      ...records[0].fields,
    } as Creator
  }

  static async create(creatorData: Omit<Creator, "id" | "created_at">): Promise<Creator> {
    const record = await airtable.createRecord("Creators", {
      ...creatorData,
      created_at: new Date().toISOString(),
    })

    return {
      id: record.id,
      ...record.fields,
    } as Creator
  }

  static async update(id: string, updates: Partial<Creator>): Promise<Creator> {
    const record = await airtable.updateRecord("Creators", id, updates)

    return {
      id: record.id,
      ...record.fields,
    } as Creator
  }

  static async getByNiche(niche: string): Promise<Creator[]> {
    const records = await airtable.getRecords("Creators", {
      filterByFormula: `FIND('${niche}', ARRAYJOIN({niche}, ',')) > 0`,
      sort: [{ field: "rating", direction: "desc" }],
    })

    return records.map(
      (record) =>
        ({
          id: record.id,
          ...record.fields,
        }) as Creator,
    )
  }
}

export class BrandService {
  static async getAll(): Promise<Brand[]> {
    const records = await airtable.getRecords("Brands", {
      sort: [{ field: "created_at", direction: "desc" }],
    })

    return records.map(
      (record) =>
        ({
          id: record.id,
          ...record.fields,
        }) as Brand,
    )
  }

  static async getById(id: string): Promise<Brand | null> {
    const records = await airtable.getRecords("Brands", {
      filterByFormula: `RECORD_ID() = '${id}'`,
    })

    if (records.length === 0) return null

    return {
      id: records[0].id,
      ...records[0].fields,
    } as Brand
  }

  static async create(brandData: Omit<Brand, "id" | "created_at">): Promise<Brand> {
    const record = await airtable.createRecord("Brands", {
      ...brandData,
      created_at: new Date().toISOString(),
    })

    return {
      id: record.id,
      ...record.fields,
    } as Brand
  }

  static async update(id: string, updates: Partial<Brand>): Promise<Brand> {
    const record = await airtable.updateRecord("Brands", id, updates)

    return {
      id: record.id,
      ...record.fields,
    } as Brand
  }
}

export class CampaignService {
  static async getAll(): Promise<Campaign[]> {
    const records = await airtable.getRecords("Campaigns", {
      sort: [{ field: "created_at", direction: "desc" }],
    })

    return records.map(
      (record) =>
        ({
          id: record.id,
          ...record.fields,
        }) as Campaign,
    )
  }

  static async getById(id: string): Promise<Campaign | null> {
    const records = await airtable.getRecords("Campaigns", {
      filterByFormula: `RECORD_ID() = '${id}'`,
    })

    if (records.length === 0) return null

    return {
      id: records[0].id,
      ...records[0].fields,
    } as Campaign
  }

  static async getByBrand(brandId: string): Promise<Campaign[]> {
    const records = await airtable.getRecords("Campaigns", {
      filterByFormula: `{brand_id} = '${brandId}'`,
      sort: [{ field: "created_at", direction: "desc" }],
    })

    return records.map(
      (record) =>
        ({
          id: record.id,
          ...record.fields,
        }) as Campaign,
    )
  }

  static async create(campaignData: Omit<Campaign, "id" | "created_at">): Promise<Campaign> {
    const record = await airtable.createRecord("Campaigns", {
      ...campaignData,
      created_at: new Date().toISOString(),
    })

    return {
      id: record.id,
      ...record.fields,
    } as Campaign
  }

  static async update(id: string, updates: Partial<Campaign>): Promise<Campaign> {
    const record = await airtable.updateRecord("Campaigns", id, updates)

    return {
      id: record.id,
      ...record.fields,
    } as Campaign
  }

  static async getActive(): Promise<Campaign[]> {
    const records = await airtable.getRecords("Campaigns", {
      filterByFormula: `{status} = 'active'`,
      sort: [{ field: "start_date", direction: "asc" }],
    })

    return records.map(
      (record) =>
        ({
          id: record.id,
          ...record.fields,
        }) as Campaign,
    )
  }
}

export class ContentService {
  static async getAll(): Promise<Content[]> {
    const records = await airtable.getRecords("Content", {
      sort: [{ field: "submitted_at", direction: "desc" }],
    })

    return records.map(
      (record) =>
        ({
          id: record.id,
          ...record.fields,
        }) as Content,
    )
  }

  static async getByCampaign(campaignId: string): Promise<Content[]> {
    const records = await airtable.getRecords("Content", {
      filterByFormula: `{campaign_id} = '${campaignId}'`,
      sort: [{ field: "submitted_at", direction: "desc" }],
    })

    return records.map(
      (record) =>
        ({
          id: record.id,
          ...record.fields,
        }) as Content,
    )
  }

  static async getByCreator(creatorId: string): Promise<Content[]> {
    const records = await airtable.getRecords("Content", {
      filterByFormula: `{creator_id} = '${creatorId}'`,
      sort: [{ field: "submitted_at", direction: "desc" }],
    })

    return records.map(
      (record) =>
        ({
          id: record.id,
          ...record.fields,
        }) as Content,
    )
  }

  static async create(contentData: Omit<Content, "id">): Promise<Content> {
    const record = await airtable.createRecord("Content", contentData)

    return {
      id: record.id,
      ...record.fields,
    } as Content
  }

  static async update(id: string, updates: Partial<Content>): Promise<Content> {
    const record = await airtable.updateRecord("Content", id, updates)

    return {
      id: record.id,
      ...record.fields,
    } as Content
  }

  static async getPendingApproval(): Promise<Content[]> {
    const records = await airtable.getRecords("Content", {
      filterByFormula: `{status} = 'submitted'`,
      sort: [{ field: "submitted_at", direction: "asc" }],
    })

    return records.map(
      (record) =>
        ({
          id: record.id,
          ...record.fields,
        }) as Content,
    )
  }
}
