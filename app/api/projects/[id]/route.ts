import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET - Specifiek project ophalen
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const project = await prisma.project.findUnique({
      where: { id: params.id },
    })

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error("Error fetching project:", error)
    return NextResponse.json({ error: "Failed to fetch project" }, { status: 500 })
  }
}

// PUT - Project bijwerken
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { title, slug, description, content, location, date, coverImage, gallery, featured } = body

    // Validatie
    if (!title || !slug || !description || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if slug already exists (excluding current project)
    const existingProject = await prisma.project.findUnique({
      where: { slug },
    })

    if (existingProject && existingProject.id !== params.id) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 400 })
    }

    // Als featured true is, zet alle andere projecten op false
    if (featured) {
      await prisma.project.updateMany({
        where: {
          featured: true,
          NOT: { id: params.id },
        },
        data: { featured: false },
      })
    }

    const project = await prisma.project.update({
      where: { id: params.id },
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

    return NextResponse.json(project)
  } catch (error) {
    console.error("Error updating project:", error)
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 })
  }
}

// DELETE - Project verwijderen
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.project.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: "Project deleted successfully" })
  } catch (error) {
    console.error("Error deleting project:", error)
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 })
  }
}
