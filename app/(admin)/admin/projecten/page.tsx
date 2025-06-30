"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, X, Upload, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

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
  createdAt: string
  updatedAt: string
}

export default function AdminProjectenPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    location: "",
    date: "",
    coverImage: "",
    gallery: [] as string[],
    featured: false,
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
  try {
    const response = await fetch("/api/projects/admin")
    if (!response.ok) throw new Error("Response niet OK")

    const data = await response.json()
    setProjects(data.projects) // ✅ data.projects is een array
  } catch (error) {
    console.error(error)
    toast.error("Kon projecten niet laden")
  } finally {
    setLoading(false)
  }
}


  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()
  }

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: editingProject ? prev.slug : generateSlug(title),
    }))
  }

  const handleImageUpload = async (file: File, isGallery = false) => {
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        const imageUrl = data.url

        if (isGallery) {
          setFormData((prev) => ({
            ...prev,
            gallery: [...prev.gallery, imageUrl],
          }))
        } else {
          setFormData((prev) => ({
            ...prev,
            coverImage: imageUrl,
          }))
        }

        toast.success("Afbeelding succesvol geüpload")
      } else {
        throw new Error("Upload failed")
      }
    } catch (error) {
      toast.error("Kon afbeelding niet uploaden")
    } finally {
      setUploading(false)
    }
  }

  const removeGalleryImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const url = editingProject ? `/api/projects/${editingProject.id}` : "/api/projects"
      const method = editingProject ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: new Date(formData.date).toISOString(),
        }),
      })

      if (response.ok) {
        toast.success(editingProject ? "Project succesvol bijgewerkt" : "Project succesvol aangemaakt")
        fetchProjects()
        resetForm()
        setDialogOpen(false)
      } else {
        throw new Error("Failed to save project")
      }
    } catch (error) {
      toast.error("Kon project niet opslaan")
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Weet je zeker dat je dit project wilt verwijderen?")) {
      return
    }

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast.success("Project succesvol verwijderd")
        fetchProjects()
      } else {
        throw new Error("Failed to delete project")
      }
    } catch (error) {
      toast.error("Kon project niet verwijderen")
    }
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      slug: project.slug,
      description: project.description,
      content: project.content || "",
      location: project.location || "",
      date: new Date(project.date).toISOString().split("T")[0],
      coverImage: project.coverImage || "",
      gallery: project.gallery || [],
      featured: project.featured,
    })
    setDialogOpen(true)
  }

  const resetForm = () => {
    setEditingProject(null)
    setFormData({
      title: "",
      slug: "",
      description: "",
      content: "",
      location: "",
      date: "",
      coverImage: "",
      gallery: [],
      featured: false,
    })
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Laden...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Projecten Beheer</h1>
          <p className="text-muted-foreground">Beheer je uitgevoerde projecten</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="w-4 h-4 mr-2" />
              Nieuw Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProject ? "Project Bewerken" : "Nieuw Project"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Titel</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="slug">Slug (URL)</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Beschrijving</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="content">Uitgebreide Inhoud</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                  rows={6}
                  placeholder="Uitgebreide beschrijving van het project..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Locatie</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    placeholder="bijv. Roermond"
                  />
                </div>
                <div>
                  <Label htmlFor="date">Uitvoeringsdatum</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div>
                <Label>Cover Afbeelding</Label>
                <div className="space-y-4">
                  {formData.coverImage && (
                    <div className="relative">
                      <img
                        src={formData.coverImage || "/placeholder.svg"}
                        alt="Cover"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => setFormData((prev) => ({ ...prev, coverImage: "" }))}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                  <div>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) handleImageUpload(file, false)
                      }}
                      disabled={uploading}
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label>Galerij</Label>
                <div className="space-y-4">
                  {formData.gallery.length > 0 && (
                    <div className="grid grid-cols-3 gap-4">
                      {formData.gallery.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-1 right-1"
                            onClick={() => removeGalleryImage(index)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => {
                        const files = Array.from(e.target.files || [])
                        files.forEach((file) => handleImageUpload(file, true))
                      }}
                      disabled={uploading}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, featured: checked }))}
                />
                <Label htmlFor="featured">Uitgelicht (tonen op homepage)</Label>
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                  Annuleren
                </Button>
                <Button type="submit" disabled={uploading}>
                  {uploading ? "Uploaden..." : editingProject ? "Bijwerken" : "Aanmaken"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Projecten</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cover</TableHead>
                <TableHead>Titel</TableHead>
                <TableHead>Locatie</TableHead>
                <TableHead>Datum</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Acties</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    {project.coverImage ? (
                      <img
                        src={project.coverImage || "/placeholder.svg"}
                        alt={project.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Upload className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{project.title}</div>
                      <div className="text-sm text-muted-foreground">{project.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-muted-foreground" />
                      {project.location || "Niet opgegeven"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-muted-foreground" />
                      {new Date(project.date).toLocaleDateString("nl-NL")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {project.featured && <Badge variant="default">Uitgelicht</Badge>}
                      {project.gallery.length > 0 && <Badge variant="secondary">{project.gallery.length} foto's</Badge>}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" onClick={() => handleEdit(project)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleDelete(project.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {projects.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Geen projecten gevonden. Maak je eerste project aan.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
