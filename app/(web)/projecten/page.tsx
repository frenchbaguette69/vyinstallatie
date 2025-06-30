"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

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

const PROJECTS_PER_PAGE = 20

export default function ProjectenPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalProjects, setTotalProjects] = useState(0)

  useEffect(() => {
    fetchProjects()
  }, [currentPage])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/projects?page=${currentPage}&limit=${PROJECTS_PER_PAGE}`)
      if (response.ok) {
        const data = await response.json()
        setProjects(data.projects)
        setTotalProjects(data.total)
      }
    } catch (error) {
      console.error("Error fetching projects:", error)
    } finally {
      setLoading(false)
    }
  }

  const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE)

  if (loading && currentPage === 1) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="text-lg">Projecten laden...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge className="bg-red-100 text-red-800 px-4 py-2 mb-4">Onze Projecten</Badge>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Uitgevoerde Projecten</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bekijk onze recent uitgevoerde projecten en laat je inspireren door ons vakmanschap.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {projects.map((project) => (
          <Link key={project.id} href={`/projecten/${project.slug}`}>
            <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
              <div className="relative">
                <img
                  src={project.coverImage || "/placeholder.svg?height=200&width=300&query=project"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-red-600 text-white">Uitgelicht</Badge>
                  </div>
                )}
                {project.gallery.length > 0 && (
                  <div className="absolute bottom-2 right-2">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      +{project.gallery.length} foto's
                    </Badge>
                  </div>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  {project.location && (
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  )}
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(project.date).toLocaleDateString("nl-NL", {
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1 || loading}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Vorige
          </Button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum
              if (totalPages <= 5) {
                pageNum = i + 1
              } else if (currentPage <= 3) {
                pageNum = i + 1
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i
              } else {
                pageNum = currentPage - 2 + i
              }

              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNum)}
                  disabled={loading}
                >
                  {pageNum}
                </Button>
              )
            })}
          </div>

          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || loading}
          >
            Volgende
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}

      {projects.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-600">Geen projecten gevonden.</p>
        </div>
      )}
    </div>
  )
}
