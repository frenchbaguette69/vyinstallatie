import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get("page") || "1")
    const limit = Number(searchParams.get("limit") || "20")
    const featured = searchParams.get("featured") === "true"

    const skip = (page - 1) * limit

    const where = featured ? { featured: true } : {}

    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        orderBy: { date: "desc" },
        skip,
        take: limit,
      }),
      prisma.project.count({ where }),
    ])

    return NextResponse.json({
      projects,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    })
  } catch (error) {
    console.error("Fout bij ophalen van projecten:", error)
    return NextResponse.json({ error: "Fout bij ophalen van projecten" }, { status: 500 })
  }
}
