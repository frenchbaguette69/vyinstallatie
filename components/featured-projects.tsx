"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  slug: string
  description: string
  location: string | null
  date: string
  coverImage: string | null
  gallery: string[]
}

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedProjects()
  }, [])

  const fetchFeaturedProjects = async () => {
    try {
      const response = await fetch("/api/projects?featured=true&limit=3")
      if (response.ok) {
        const data = await response.json()
        setProjects(data.projects || data)
      }
    } catch (error) {
      console.error("Error fetching featured projects:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-lg">Projecten laden...</div>
          </div>
        </div>
      </section>
    )
  }

  if (projects.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-100 text-red-800 px-4 py-2 mb-4">Uitgelichte Projecten</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Uitgevoerd</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bekijk enkele van onze meest recente en succesvolle projecten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Link key={project.id} href={`/projecten/${project.slug}`}>
              <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="relative">
                  <img
                    src={project.coverImage || "/placeholder.svg?height=250&width=400&query=featured project"}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                  {project.gallery.length > 0 && (
                    <div className="absolute bottom-2 right-2">
                      <Badge variant="secondary" className="bg-black/50 text-white">
                        +{project.gallery.length} foto's
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    {project.location && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                    )}
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(project.date).toLocaleDateString("nl-NL", {
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="flex items-center text-red-600 font-medium">
                    Bekijk project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projecten">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Alle Projecten Bekijken
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
