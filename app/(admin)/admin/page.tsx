import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, FolderOpen, Plus, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welkom in het beheerportaal. Kies een sectie om te beheren.</p>
      </div>

      {/* Main Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Diensten Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <CardTitle className="text-xl">Diensten Beheer</CardTitle>
                <CardDescription>Beheer uw service pakketten en prijzen</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Functies:</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Service pakketten aanmaken en bewerken</li>
                <li>• Prijzen en features beheren</li>
                <li>• Populaire diensten markeren</li>
                <li>• Telefoon CTA configureren</li>
              </ul>
            </div>
            <div className="flex space-x-3">
              <Link href="/admin/diensten" className="flex-1">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Diensten Beheren
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Projecten Card */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <FolderOpen className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <CardTitle className="text-xl">Projecten Beheer</CardTitle>
                <CardDescription>Beheer uw uitgevoerde projecten en portfolio</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Functies:</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Projecten aanmaken en bewerken</li>
                <li>• Foto's uploaden en galerijen beheren</li>
                <li>• Uitgelichte projecten selecteren</li>
                <li>• Project details en locaties</li>
              </ul>
            </div>
            <div className="flex space-x-3">
              <Link href="/admin/projecten" className="flex-1">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Projecten Beheren
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      
    </div>
  )
}
