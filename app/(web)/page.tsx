import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Wrench,
  Thermometer,
  CheckCircle,
  Star,
  Users,
  Award,
  Flame,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeroTitle from "@/components/herotitle"
import OfferteForm from "@/components/OfferteForm"
import Pricing from "@/components/pricing"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="VY Installatie CV monteur aan het werk"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white">
            <div className="space-y-8">
              <div className="space-y-4">
                <HeroTitle plaats="roermond"/>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Professionele installatie, onderhoud en reparatie van CV ketels. Met meer dan 15 jaar ervaring zorgen
                  wij voor optimale warmte in uw woning.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>

      {/* Services Tiles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Onze Specialisaties</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Ontdek onze complete dienstverlening voor al uw verwarmings- en ventilatiebehoeften
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* CV Ketel Tile */}
            <Link href="/cv-ketel" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border-2 border-transparent group-hover:border-red-600">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=256&width=400"
                    alt="CV Ketel Installatie"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-3">
                      <Flame className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">CV Ketel</h3>
                    <p className="text-red-200">Onze specialiteit</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      Installatie, onderhoud en reparatie van CV ketels. Van HR-ketels tot combiketels - wij zorgen voor
                      optimale warmte.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        24/7 storingsdienst
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Alle bekende merken
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />5 jaar garantie
                      </li>
                    </ul>
                    <div className="flex items-center justify-between pt-4">
                      <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Vloerverwarming Tile */}
            <Link href="/vloerverwarming" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border-2 border-transparent group-hover:border-red-600">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=256&width=400"
                    alt="Vloerverwarming Installatie"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-3">
                      <Thermometer className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Vloerverwarming</h3>
                    <p className="text-red-200">Comfort & besparing</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      Comfortabele warmte door de hele woning. Energiezuinig, gezond en onzichtbaar verwarmingssysteem.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Tot 15% energiebesparing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Natte & elektrische systemen
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Nieuwbouw & renovatie
                      </li>
                    </ul>
                    <div className="flex items-center justify-between pt-4">
                      <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* WTW Installatie Tile */}
            <Link href="/wtw-installatie" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border-2 border-transparent group-hover:border-red-600">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=256&width=400"
                    alt="WTW Installatie"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-3">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">WTW Installatie</h3>
                    <p className="text-red-200">Gezond binnenklimaat</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      Warmte terugwinning voor een gezond en energiezuinig binnenklimaat. Mechanische ventilatie met
                      optimaal rendement.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Tot 30% energiebesparing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Gefilterde verse lucht
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Centrale & decentrale systemen
                      </li>
                    </ul>
                    <div className="flex items-center justify-between pt-4">
                      <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

<section id="over-ons" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-red-100 text-red-800 px-4 py-2 mb-4">Over VY Installatie</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">15 Jaar Ervaring in CV Installaties</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Wij zijn een gespecialiseerd bedrijf in de installatie, het onderhoud en de reparatie van CV systemen.
                  Met onze jarenlange ervaring en vakkennis zorgen wij ervoor dat uw woning altijd comfortabel warm is.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ons team bestaat uit gecertificeerde monteurs die up-to-date zijn met de nieuwste technieken en
                  regelgeving. Wij werken alleen met kwaliteitsproducten van bekende merken.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Users className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Tevreden Klanten</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Award className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Jaar Ervaring</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Waarom Kiezen Voor Ons?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Gecertificeerde Monteurs</h4>
                      <p className="text-red-100 text-sm">Al onze monteurs zijn volledig gecertificeerd en ervaren</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">5 Jaar Garantie</h4>
                      <p className="text-red-100 text-sm">Uitgebreide garantie op alle installaties</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">24/7 Service</h4>
                      <p className="text-red-100 text-sm">Altijd bereikbaar voor spoedgevallen</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Vaste Prijzen</h4>
                      <p className="text-red-100 text-sm">Transparante prijzen zonder verrassingen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      

      <Pricing />

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-800 px-4 py-2 mb-4">Klantbeoordelingen</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wat Onze Klanten Zeggen</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Uitstekende service! Snel ter plaatse en vakkundig werk. Onze nieuwe CV ketel werkt perfect."
                </p>
                <div className="flex items-center">
                
                  <div>
                    <div className="font-semibold text-gray-900">Jan de Vries</div>
                    <div className="text-sm text-gray-600">Roermond</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Zeer tevreden over het onderhoudscontract. Altijd op tijd en zeer professioneel."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Maria Jansen</div>
                    <div className="text-sm text-gray-600">Venlo</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Midden in de nacht storing gehad. Binnen 1 uur was de monteur er en was alles weer opgelost!"
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Piet Bakker</div>
                    <div className="text-sm text-gray-600">Weert</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-16">
      <div className="space-y-8">
        <div>
          <Badge className="bg-red-600 text-white px-4 py-2 mb-4">Contact</Badge>
          <h2 className="text-4xl font-bold mb-6">Neem Contact Met Ons Op</h2>
          <p className="text-xl leading-relaxed">
            Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met ons op. Wij helpen u graag verder.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Telefoon</h3>
              <a href="tel:+31630798400" className="text-red-600 hover:underline">
                06-30798400
              </a>
              <p className="text-sm text-gray-500">24/7 bereikbaar voor spoedgevallen</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:vyinstallatie@gmail.com" className="text-red-600 hover:underline">
                vyinstallatie@gmail.com
              </a>
              <p className="text-sm text-gray-500">Wij reageren binnen 24 uur</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Werkgebied</h3>
              <p>Roermond en omgeving</p>
              <p className="text-sm text-gray-500">Binnen 30 km van Roermond</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Openingstijden</h3>
              <p>Ma-Vr: 08:00 - 18:00</p>
              <p className="text-sm text-gray-500">24/7 spoeddienst beschikbaar</p>
            </div>
          </div>
        </div>
      </div>

      <OfferteForm />
    </div>
  </div>
</section>

    </div>
  )
}
