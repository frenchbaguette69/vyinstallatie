import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET - Alle projecten ophalen met pagination en filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "20")
    const featured = searchParams.get("featured") === "true"

    const skip = (page - 1) * limit

    const where = featured ? { featured: true } : {}

    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        orderBy: {
          date: "desc",
        },
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
    console.error("Error fetching projects:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}

// POST - Nieuw project aanmaken
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { title, slug, description, content, location, date, coverImage, gallery, featured } = body

    // Validatie
    if (!title || !slug || !description || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if slug already exists
    const existingProject = await prisma.project.findUnique({
      where: { slug },
    })

    if (existingProject) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 400 })
    }

    // Als featured true is, zet alle andere projecten op false
    if (featured) {
      await prisma.project.updateMany({
        where: { featured: true },
        data: { featured: false },
      })
    }

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        description,
        content: content || null,
        location: location || null,
        date: new Date(date),
        coverImage: coverImage || null,
        gallery: gallery || [],
        featured: featured || false,
      },
    })

    return NextResponse.json(project, { status: 201 })
  } catch (error) {
    console.error("Error creating project:", error)
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
  }
}
