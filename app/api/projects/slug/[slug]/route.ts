import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET - Project ophalen via slug
export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const project = await prisma.project.findUnique({
      where: { slug: params.slug },
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
