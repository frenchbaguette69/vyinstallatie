"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Wrench, Shield, Clock, Phone } from "lucide-react"
import Link from "next/link"

interface ServicePackage {
  id: string
  name: string
  description: string
  price: number
  priceUnit: string
  features: string[]
  mostPopular: boolean
  phoneCTA: boolean
}

const getPackageIcon = (name: string, phoneCTA: boolean) => {
  if (phoneCTA) return Clock
  if (name.toLowerCase().includes("premium")) return Shield
  return Wrench
}

export default function Pricing() {
  const [packages, setPackages] = useState<ServicePackage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPackages()
  }, [])

  const fetchPackages = async () => {
    try {
      const response = await fetch("/api/service-packages")
      if (response.ok) {
        const data = await response.json()
        setPackages(data)
      } else {
        setError("Kon prijzen niet laden")
      }
    } catch (error) {
      setError("Kon prijzen niet laden")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section id="prijzen" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-lg">Prijzen laden...</div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="prijzen" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-lg text-red-600">{error}</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="prijzen" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-red-100 text-red-800 px-4 py-2 mb-4">Onze Prijzen</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparante Tarieven</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eerlijke prijzen zonder verborgen kosten. Alle prijzen zijn inclusief BTW.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => {
            const IconComponent = getPackageIcon(pkg.name, pkg.phoneCTA)

            return (
              <Card
                key={pkg.id}
                className={`relative hover:shadow-xl transition-shadow ${
                  pkg.mostPopular ? "border-2 border-red-600" : ""
                }`}
              >
                {pkg.mostPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white px-4 py-2">Meest Populair</Badge>
                  </div>
                )}

                <CardHeader className={`text-center pb-8 ${pkg.mostPopular ? "pt-8" : ""}`}>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="text-4xl font-bold text-gray-900 mt-4">
                    €{pkg.price}
                    <span className="text-lg font-normal text-gray-600">/{pkg.priceUnit}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.phoneCTA ? (
                    <a href="tel:+31630798400">
  <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-6">
    <Phone className="w-4 h-4 mr-2" />
    Bel Nu: 06-30798400
  </Button>
</a>

                  ) : (
                    <Link href="/#contact" className="w-full">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-6 cursor-pointer">Contact opnemen</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {packages.length === 0 && (
          <div className="text-center py-8 text-gray-600">Geen prijspakketten beschikbaar op dit moment.</div>
        )}
      </div>
    </section>
  )
}
