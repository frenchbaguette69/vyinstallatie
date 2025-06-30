import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, CheckCircle, Star, Flame, Thermometer, Shield, Clock, Wrench, Award, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function CVKetelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-red-600 text-white px-4 py-2 mb-6">
              <Flame className="w-4 h-4 mr-2" />
              CV Ketel Specialist
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              CV Ketel Installatie & Onderhoud
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professionele installatie, onderhoud en reparatie van CV ketels. Van HR-ketels tot combiketels - 
              wij zorgen voor optimale warmte en comfort in uw woning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Gratis Offerte
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
              >
                <Clock className="w-5 h-5 mr-2" />
                Plan Afspraak
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">CV Ketel Diensten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete service voor uw CV ketel - van advies tot installatie en jarenlang onderhoud
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Nieuwe Installatie</CardTitle>
                <CardDescription>Complete installatie van nieuwe CV ketels inclusief leidingwerk</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Persoonlijk advies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Professionele installatie
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Inregeling & testen
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    5 jaar garantie
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Jaarlijks Onderhoud</CardTitle>
                <CardDescription>Preventief onderhoud voor optimale prestaties en lange levensduur</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Ketelreiniging
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Veiligheidscontrole
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Druk & temperatuur check
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Onderhoudsrapport
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Reparatie & Storing</CardTitle>
                <CardDescription>24/7 spoeddienst voor alle CV ketel storingen en reparaties</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    24/7 beschikbaar
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Snelle diagnose
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Originele onderdelen
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Binnen 2 uur ter plaatse
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CV Ketel Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">CV Ketel Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij installeren en onderhouden alle types CV ketels van bekende merken
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">HR-Ketels (Hoog Rendement)</h3>
                <p className="text-gray-600">
                  Moderne HR-ketels benutten de warmte uit rookgassen optimaal en bereiken een rendement van meer dan 90%. 
                  Perfect voor nieuwbouw en renovatie.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Rendement tot 107%</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Lagere energiekosten</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Milieuvriendelijk</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Combiketels</h3>
                <p className="text-gray-600">
                  Combiketels zorgen zowel voor verwarming als warm tapwater. Ideaal voor kleinere woningen 
                  waar ruimtebesparing belangrijk is.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Verwarming + warm water</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Ruimtebesparend</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Directe warmwatervoorziening</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Bekende Merken</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-semibold">Nefit</div>
                    <div className="text-sm text-red-100">Bosch Group</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-semibold">Remeha</div>
                    <div className="text-sm text-red-100">BDR Thermea</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-semibold">Intergas</div>
                    <div className="text-sm text-red-100">Nederlandse kwaliteit</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-semibold">Vaillant</div>
                    <div className="text-sm text-red-100">Duitse technologie</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-red-100 text-sm">En vele andere merken</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Klaar voor een Nieuwe CV Ketel?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Neem contact met ons op voor een gratis adviesgesprek en offerte op maat. 
            Onze experts helpen u graag bij het kiezen van de juiste CV ketel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+31630798400">
  <Button
    size="lg"
    variant="outline"
    className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg bg-transparent"
  >
    <Phone className="w-5 h-5 mr-2" />
    Bel Direct: 06-30798400
  </Button>
</a>

            <Link href="/#contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Online Offerte
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
