"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "sonner"

interface ServicePackage {
  id: string
  name: string
  description: string
  price: number
  priceUnit: string
  features: string[]
  mostPopular: boolean
  phoneCTA: boolean
  createdAt: string
  updatedAt: string
}

export default function AdminDienstenPage() {
  const [packages, setPackages] = useState<ServicePackage[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingPackage, setEditingPackage] = useState<ServicePackage | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    priceUnit: "jaar",
    features: [""],
    mostPopular: false,
    phoneCTA: false,
  })

  useEffect(() => {
    fetchPackages()
  }, [])

  const fetchPackages = async () => {
    try {
      const response = await fetch("/api/service-packages")
      if (response.ok) {
        const data = await response.json()
        setPackages(data)
      }
    } catch (error) {
      toast.error("Kon diensten niet laden")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const filteredFeatures = formData.features.filter((feature) => feature.trim() !== "")

    const packageData = {
      ...formData,
      features: filteredFeatures,
    }

    try {
      const url = editingPackage ? `/api/service-packages/${editingPackage.id}` : "/api/service-packages"

      const method = editingPackage ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(packageData),
      })

      if (response.ok) {
        toast.success(editingPackage ? "Dienst succesvol bijgewerkt" : "Dienst succesvol aangemaakt")
        fetchPackages()
        resetForm()
        setDialogOpen(false)
      } else {
        throw new Error("Failed to save package")
      }
    } catch (error) {
      toast.error("Kon dienst niet opslaan")
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Weet je zeker dat je deze dienst wilt verwijderen?")) {
      return
    }

    try {
      const response = await fetch(`/api/service-packages/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast.success("Dienst succesvol verwijderd")
        fetchPackages()
      } else {
        throw new Error("Failed to delete package")
      }
    } catch (error) {
      toast.error("Kon dienst niet verwijderen")
    }
  }

  const handleEdit = (pkg: ServicePackage) => {
    setEditingPackage(pkg)
    setFormData({
      name: pkg.name,
      description: pkg.description,
      price: pkg.price,
      priceUnit: pkg.priceUnit,
      features: pkg.features.length > 0 ? pkg.features : [""],
      mostPopular: pkg.mostPopular,
      phoneCTA: pkg.phoneCTA,
    })
    setDialogOpen(true)
  }

  const resetForm = () => {
    setEditingPackage(null)
    setFormData({
      name: "",
      description: "",
      price: 0,
      priceUnit: "jaar",
      features: [""],
      mostPopular: false,
      phoneCTA: false,
    })
  }

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }))
  }

  const updateFeature = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.map((feature, i) => (i === index ? value : feature)),
    }))
  }

  const removeFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }))
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
          <h1 className="text-3xl font-bold">Diensten Beheer</h1>
          <p className="text-muted-foreground">Beheer je service pakketten</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="w-4 h-4 mr-2" />
              Nieuwe Dienst
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingPackage ? "Dienst Bewerken" : "Nieuwe Dienst"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Naam</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Beschrijving</Label>
                  <Input
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Prijs</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, price: Number.parseFloat(e.target.value) || 0 }))
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="priceUnit">Prijs Eenheid</Label>
                  <Input
                    id="priceUnit"
                    value={formData.priceUnit}
                    onChange={(e) => setFormData((prev) => ({ ...prev, priceUnit: e.target.value }))}
                    placeholder="bijv. jaar, uur, maand"
                    required
                  />
                </div>
              </div>

              <div>
                <Label>Features</Label>
                <div className="space-y-2">
                  {formData.features.map((feature, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={feature}
                        onChange={(e) => updateFeature(index, e.target.value)}
                        placeholder="Feature beschrijving"
                      />
                      {formData.features.length > 1 && (
                        <Button type="button" variant="outline" size="icon" onClick={() => removeFeature(index)}>
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button type="button" variant="outline" onClick={addFeature}>
                    <Plus className="w-4 h-4 mr-2" />
                    Feature Toevoegen
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="mostPopular"
                    checked={formData.mostPopular}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, mostPopular: checked }))}
                  />
                  <Label htmlFor="mostPopular">Meest Populair</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="phoneCTA"
                    checked={formData.phoneCTA}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, phoneCTA: checked }))}
                  />
                  <Label htmlFor="phoneCTA">Telefoon CTA</Label>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                  Annuleren
                </Button>
                <Button type="submit">{editingPackage ? "Bijwerken" : "Aanmaken"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Service Pakketten</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Naam</TableHead>
                <TableHead>Beschrijving</TableHead>
                <TableHead>Prijs</TableHead>
                <TableHead>Features</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Acties</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {packages.map((pkg) => (
                <TableRow key={pkg.id}>
                  <TableCell className="font-medium">{pkg.name}</TableCell>
                  <TableCell>{pkg.description}</TableCell>
                  <TableCell>
                    €{pkg.price}/{pkg.priceUnit}
                  </TableCell>
                  <TableCell>
                    <div className="max-w-xs">
                      {pkg.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="text-sm text-muted-foreground">
                          • {feature}
                        </div>
                      ))}
                      {pkg.features.length > 2 && (
                        <div className="text-sm text-muted-foreground">+{pkg.features.length - 2} meer</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {pkg.mostPopular && <Badge variant="default">Populair</Badge>}
                      {pkg.phoneCTA && <Badge variant="secondary">Telefoon</Badge>}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" onClick={() => handleEdit(pkg)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={() => handleDelete(pkg.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {packages.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Geen diensten gevonden. Maak je eerste dienst aan.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
