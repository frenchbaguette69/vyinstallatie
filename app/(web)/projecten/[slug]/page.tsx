import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowLeft, Phone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { prisma } from "@/lib/prisma"

interface Project {
  id: string
  title: string
  slug: string
  description: string
  content: string | null
  location: string | null
  date: string
  coverImage: string | null
  gallery: string[]
  featured: boolean
}

async function getProject(slug: string): Promise<Project | null> {
  try {
    const project = await prisma.project.findUnique({
      where: { slug },
    })

    if (!project) {
      return null
    }

    return {
      ...project,
      date: project.date.toISOString(),
    }
  } catch (error) {
    console.error("Error fetching project:", error)
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return {
      title: "Project niet gevonden",
    }
  }

  return {
    title: `${project.title} - Projecten`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.coverImage ? [project.coverImage] : [],
    },
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const allImages = [...(project.coverImage ? [project.coverImage] : []), ...project.gallery]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/projecten">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar projecten
            </Button>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {project.featured && <Badge className="bg-red-600 text-white">Uitgelicht</Badge>}
                <Badge variant="outline">Project</Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-gray-500">
                {project.location && (
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {project.location}
                  </div>
                )}
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(project.date).toLocaleDateString("nl-NL", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Phone className="w-4 h-4 mr-2" />
                Contact Opnemen
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Cover Image */}
            {project.coverImage && (
              <div className="mb-8">
                <img
                  src={project.coverImage || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Content */}
            {project.content && (
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Projectdetails</h2>
                  <div className="prose max-w-none">
                    {project.content.split("\n").map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Projectfoto's</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} foto ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Projectinformatie</h3>

                <div className="space-y-4">
                  <div>
                    <dt className="font-medium text-gray-900">Locatie</dt>
                    <dd className="text-gray-600">{project.location || "Niet opgegeven"}</dd>
                  </div>

                  <div>
                    <dt className="font-medium text-gray-900">Uitvoeringsdatum</dt>
                    <dd className="text-gray-600">
                      {new Date(project.date).toLocaleDateString("nl-NL", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-medium text-gray-900">Foto's</dt>
                    <dd className="text-gray-600">{allImages.length} afbeelding(en)</dd>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-medium text-gray-900 mb-4">Interesse in een soortgelijk project?</h4>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Neem Contact Op
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
