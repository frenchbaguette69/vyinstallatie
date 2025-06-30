import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET - Specifieke service package ophalen
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const servicePackage = await prisma.servicePackage.findUnique({
      where: { id: params.id },
    })

    if (!servicePackage) {
      return NextResponse.json({ error: "Service package not found" }, { status: 404 })
    }

    return NextResponse.json(servicePackage)
  } catch (error) {
    console.error("Error fetching service package:", error)
    return NextResponse.json({ error: "Failed to fetch service package" }, { status: 500 })
  }
}

// PUT - Service package bijwerken
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { name, description, price, priceUnit, features, mostPopular, phoneCTA } = body

    // Validatie
    if (!name || !description || price === undefined || !priceUnit) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Als mostPopular true is, zet alle andere packages op false
    if (mostPopular) {
      await prisma.servicePackage.updateMany({
        where: {
          mostPopular: true,
          NOT: { id: params.id },
        },
        data: { mostPopular: false },
      })
    }

    const servicePackage = await prisma.servicePackage.update({
      where: { id: params.id },
      data: {
        name,
        description,
        price: Number.parseFloat(price),
        priceUnit,
        features: features || [],
        mostPopular: mostPopular || false,
        phoneCTA: phoneCTA || false,
      },
    })

    return NextResponse.json(servicePackage)
  } catch (error) {
    console.error("Error updating service package:", error)
    return NextResponse.json({ error: "Failed to update service package" }, { status: 500 })
  }
}

// DELETE - Service package verwijderen
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.servicePackage.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: "Service package deleted successfully" })
  } catch (error) {
    console.error("Error deleting service package:", error)
    return NextResponse.json({ error: "Failed to delete service package" }, { status: 500 })
  }
}
