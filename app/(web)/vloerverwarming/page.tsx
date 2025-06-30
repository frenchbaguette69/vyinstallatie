import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, CheckCircle, Thermometer, Home, Zap, Droplets, Clock, ArrowRight, Leaf } from "lucide-react"
import Link from "next/link"

export default function VloerverwarmingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[60vh] flex items-center bg-gradient-to-br from-red-900 to-red-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="bg-red-600 text-white px-4 py-2 mb-6">
              <Thermometer className="w-4 h-4 mr-2" />
              Vloerverwarming Specialist
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Vloerverwarming Installatie</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Geniet van comfortabele warmte door de hele woning met vloerverwarming. Energiezuinig, gezond en
              onzichtbaar verwarmingssysteem voor optimaal wooncomfort.
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Voordelen van Vloerverwarming</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek waarom steeds meer mensen kiezen voor vloerverwarming
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Optimaal Comfort</CardTitle>
                <CardDescription>Gelijkmatige warmteverdeling door de hele ruimte</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Warme voeten, koele kop
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Geen koude plekken
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Ideale temperatuurverdeling
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Energiezuinig</CardTitle>
                <CardDescription>Lagere energiekosten door efficiënte warmteafgifte</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Tot 15% energiebesparing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Lagere aanvoertemperatuur
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Ideaal voor warmtepompen
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Ruimtewinst</CardTitle>
                <CardDescription>Geen zichtbare radiatoren, meer vrijheid in inrichting</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Onzichtbaar systeem
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Meer inrichtingsvrijheid
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Moderne uitstraling
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types Vloerverwarming</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij installeren verschillende types vloerverwarming, passend bij uw situatie
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Natte Vloerverwarming</CardTitle>
                <CardDescription>Warm water door leidingen in de vloer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Ideaal voor:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Nieuwbouw en grote renovaties
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Grote oppervlaktes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Combinatie met warmtepomp
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Voordelen:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Zeer energiezuinig
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Lange levensduur
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Geschikt voor alle vloertypes
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl">Elektrische Vloerverwarming</CardTitle>
                <CardDescription>Verwarmingskabels of matten onder de vloer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Ideaal voor:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Badkamers en kleine ruimtes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Renovatie zonder grote ingrepen
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Bijverwarming
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Voordelen:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Snelle installatie
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Lage aanschafkosten
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Geen onderhoud nodig
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ons Installatieproces</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van advies tot oplevering - zo verloopt de installatie van uw vloerverwarming
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Adviesgesprek</h3>
              <p className="text-gray-600">Gratis advies op locatie en berekening warmtebehoefte</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Ontwerp & Offerte</h3>
              <p className="text-gray-600">Technisch ontwerp en gedetailleerde offerte op maat</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Installatie</h3>
              <p className="text-gray-600">Professionele installatie door gecertificeerde monteurs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Oplevering</h3>
              <p className="text-gray-600">Testen, inregelen en uitleg van het systeem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Vloerverwarming Informatie</h2>
              <p className="text-xl text-gray-600">Alles wat u moet weten over vloerverwarming installatie en kosten</p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wat kost vloerverwarming?</h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    De kosten voor vloerverwarming variëren afhankelijk van het type systeem, de oppervlakte en de
                    complexiteit van de installatie. Voor elektrische vloerverwarming kunt u rekenen op ongeveer{" "}
                    <strong>€45-65 per m²</strong> inclusief installatie. Natte vloerverwarming kost gemiddeld{" "}
                    <strong>€55-85 per m²</strong> inclusief materiaal en montage.
                  </p>
                  <p className="mb-4">
                    Bij een complete renovatie waarbij ook de vloer vervangen wordt, liggen de kosten tussen de{" "}
                    <strong>€95-150 per m²</strong>. Deze prijs is inclusief isolatie, dekvloer, vloerverwarming en
                    nieuwe vloerbedekking.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Welk type vloerverwarming kiezen?</h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    <strong>Elektrische vloerverwarming</strong> is ideaal voor kleinere ruimtes zoals badkamers,
                    toiletten of als bijverwarming. Het systeem is snel te installeren en heeft lage aanschafkosten,
                    maar hogere gebruikskosten.
                  </p>
                  <p className="mb-4">
                    <strong>Natte vloerverwarming</strong> is de beste keuze voor nieuwbouw of grote renovaties. Het
                    systeem is zeer energiezuinig, heeft lage gebruikskosten en werkt uitstekend samen met warmtepompen
                    en zonneboilers.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Geschikt voor elke vloer?</h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Vloerverwarming is geschikt voor vrijwel alle vloertypes. <strong>Tegels en natuursteen</strong>{" "}
                    geleiden warmte het beste en zijn daarom ideaal.
                    <strong>Laminaat en parket</strong> zijn ook geschikt, mits ze speciaal voor vloerverwarming zijn
                    goedgekeurd.
                  </p>
                  <p className="mb-4">
                    <strong>Tapijt</strong> kan ook, maar kies dan voor dunne varianten met lage isolatiewaarde. Wij
                    adviseren u graag over de beste vloerkeuze voor uw vloerverwarmingssysteem.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Energiebesparing en comfort</h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Vloerverwarming bespaart tot <strong>15% op uw energierekening</strong> vergeleken met traditionele
                    radiatoren. Dit komt door de lagere aanvoertemperatuur (35-45°C) en de gelijkmatige warmteverdeling.
                  </p>
                  <p className="mb-4">
                    Het comfort is ongeëvenaard: warme voeten, geen koude plekken en een gezond binnenklimaat zonder
                    luchtstromingen. Bovendien krijgt u meer vrijheid in de inrichting omdat er geen radiatoren aan de
                    muur hangen.
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
          <h2 className="text-4xl font-bold mb-6">Klaar voor Vloerverwarming?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Laat u vrijblijvend adviseren over de mogelijkheden van vloerverwarming in uw woning. Onze specialisten
            komen graag langs voor een gratis adviesgesprek.
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
