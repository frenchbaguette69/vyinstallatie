import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

// GET - Alle service packages ophalen
export async function GET() {
  try {
    const packages = await prisma.servicePackage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(packages)
  } catch (error) {
    console.error("Error fetching service packages:", error)
    return NextResponse.json({ error: "Failed to fetch service packages" }, { status: 500 })
  }
}

// POST - Nieuwe service package aanmaken
export async function POST(request: NextRequest) {
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
        where: { mostPopular: true },
        data: { mostPopular: false },
      })
    }

    const servicePackage = await prisma.servicePackage.create({
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

    return NextResponse.json(servicePackage, { status: 201 })
  } catch (error) {
    console.error("Error creating service package:", error)
    return NextResponse.json({ error: "Failed to create service package" }, { status: 500 })
  }
}
