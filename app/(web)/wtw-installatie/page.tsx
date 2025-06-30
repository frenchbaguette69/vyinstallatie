import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Wind, Leaf, Home, Heart, Clock, ArrowRight, Filter, Thermometer } from "lucide-react"
import Link from "next/link"

export default function WTWInstallatiePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center bg-gradient-to-br from-red-900 to-red-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-red-600 text-white px-4 py-2 mb-6">
              <Wind className="w-4 h-4 mr-2" />
              WTW Specialist
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">WTW Installatie</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Warmte Terugwin installatie voor een gezond binnenklimaat en maximale energiebesparing. Mechanische
              ventilatie met warmte terugwinning voor optimaal wooncomfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Gratis Advies
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 text-lg bg-transparent"
              >
                <Clock className="w-5 h-5 mr-2" />
                Plan Afspraak
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is WTW Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Wat is WTW?</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  WTW staat voor Warmte Terugwin installatie. Dit is een mechanisch ventilatiesysteem dat verse
                  buitenlucht aanvoert en vervuilde binnenlucht afvoert, terwijl de warmte uit de afgevoerde lucht wordt
                  teruggewonnen.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Hoe werkt het?</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Luchtaanvoer</h4>
                      <p className="text-gray-600 text-sm">Verse buitenlucht wordt aangezogen en gefilterd</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Warmte terugwinning</h4>
                      <p className="text-gray-600 text-sm">Warmte uit afgevoerde lucht wordt overgedragen</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Luchtafvoer</h4>
                      <p className="text-gray-600 text-sm">Vervuilde lucht wordt afgevoerd naar buiten</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">WTW Voordelen</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Leaf className="w-6 h-6 text-green-200" />
                    <span>Tot 30% energiebesparing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-red-200" />
                    <span>Gezonder binnenklimaat</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Filter className="w-6 h-6 text-blue-200" />
                    <span>Gefilterde lucht</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="w-6 h-6 text-yellow-200" />
                    <span>Geen condensatie</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Voordelen van WTW</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek alle voordelen van een WTW installatie voor uw woning
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Energiebesparing</CardTitle>
                <CardDescription>Maximale energiebesparing door warmte terugwinning</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Tot 30% lagere energiekosten
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Rendement tot 95%
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Minder CO2 uitstoot
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Gezond Wonen</CardTitle>
                <CardDescription>Optimaal binnenklimaat voor uw gezondheid</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Constante verse lucht
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Geen schimmel of vocht
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Minder allergenen
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Filter className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Gefilterde Lucht</CardTitle>
                <CardDescription>Schone lucht door geavanceerde filtersystemen</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pollen en stof gefilterd
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Fijnstof verwijdering
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Ideaal voor astma/allergie
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Comfort</CardTitle>
                <CardDescription>Optimale temperatuur en luchtvochtigheid</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Geen tocht
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Constante temperatuur
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Optimale luchtvochtigheid
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Onderhoud</CardTitle>
                <CardDescription>Minimaal onderhoud voor jarenlang comfort</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Filtervervanging 2x/jaar
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Lange levensduur
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Betrouwbare werking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Geluidloos</CardTitle>
                <CardDescription>Stille werking voor optimaal wooncomfort</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Zeer stil in bedrijf
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Geen hinder van geluid
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Rustige slaap
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">WTW Systemen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Verschillende WTW systemen voor elke woningsituatie
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Centrale WTW</CardTitle>
                <CardDescription>Eén centrale unit voor de hele woning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Ideaal voor:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Nieuwbouw woningen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Grote renovaties
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Woningen met kruipruimte/zolder
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Kenmerken:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Hoogste rendement (tot 95%)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Kanaalwerk door hele woning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Centrale bediening
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Wind className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Decentrale WTW</CardTitle>
                <CardDescription>Individuele units per ruimte</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Ideaal voor:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Renovatie zonder grote ingrepen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Appartementen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Specifieke ruimtes
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Kenmerken:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Eenvoudige installatie
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Geen kanaalwerk nodig
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Per ruimte regelbaar
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">WTW Installatie Informatie</h2>
              <p className="text-xl text-gray-600">Alles wat u moet weten over WTW installatie en kosten</p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wat kost een WTW installatie?</h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    De kosten voor een WTW installatie variëren sterk afhankelijk van het type systeem en de grootte van
                    uw woning. Voor een <strong>decentrale WTW unit</strong> kunt u rekenen op ongeveer{" "}
                    <strong>€850-1.200 per unit</strong> inclusief installatie.
                  </p>
                  <p className="mb-4">
                    Een <strong>centrale WTW installatie</strong> voor een gemiddelde woning kost tussen de{" "}
                    <strong>€4.500-7.500</strong> inclusief materiaal, kanaalwerk en montage. Voor grotere woningen of
                    complexere installaties kunnen de kosten oplopen tot €10.000 of meer.
                  </p>
                  <p className="mb-4">
                    Jaarlijks onderhoud kost ongeveer <strong>€125 per jaar</strong> en omvat filtervervanging,
                    reiniging en controle van het systeem.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Welk WTW systeem kiezen?</h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    <strong>Centrale WTW</strong> is de beste keuze voor nieuwbouw of grote renovaties. Het systeem
                    heeft het hoogste rendement (tot 95%) en zorgt voor optimale ventilatie in de hele woning. U heeft
                    wel ruimte nodig voor kanaalwerk en een centrale unit.
                  </p>
                  <p className="mb-4">
                    <strong>Decentrale WTW</strong> is ideaal voor renovaties zonder grote ingrepen, appartementen of
                    specifieke ruimtes. De installatie is eenvoudiger en er is geen kanaalwerk nodig, maar het rendement
                    is iets lager dan centrale systemen.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Energiebesparing en terugverdientijd</h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Een WTW installatie bespaart <strong>20-30% op uw energierekening</strong> voor verwarming. Bij een
                    gemiddelde woning betekent dit een besparing van €300-600 per jaar. De terugverdientijd ligt tussen
                    de 8-15 jaar, afhankelijk van het type systeem en uw huidige energieverbruik.
                  </p>
                  <p className="mb-4">
                    Naast energiebesparing zorgt WTW voor een gezonder binnenklimaat, minder condensatie en schimmel, en
                    een hogge woningwaarde. Deze voordelen zijn moeilijk in geld uit te drukken maar zeer waardevol.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Onderhoud en levensduur</h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    WTW systemen hebben een <strong>levensduur van 15-20 jaar</strong> bij goed onderhoud. Het
                    belangrijkste onderhoud is het vervangen van filters (2x per jaar) en jaarlijkse reiniging van de
                    warmtewisselaar.
                  </p>
                  <p className="mb-4">
                    Wij bieden onderhoudscontracten aan voor €125 per jaar. Dit omvat alle benodigde filters, reiniging,
                    controle en inregeling van het systeem. Zo bent u verzekerd van optimale werking en maximale
                    energiebesparing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Klaar voor Gezonder Wonen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ontdek de voordelen van een WTW installatie voor uw woning. Onze specialisten adviseren u graag over de
            beste oplossing voor uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel Direct: 06-30798400
            </Button>
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Gratis Adviesgesprek
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
