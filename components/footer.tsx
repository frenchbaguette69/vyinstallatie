import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/images/logo.png" alt="VY Installatie Logo" width={32} height={32} className="w-8 h-8" />
              <div>
                <h3 className="font-bold">VY Installatie</h3>
                <p className="text-sm text-gray-400">Uw CV specialist</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professionele CV installatie, onderhoud en reparatie in Roermond en omgeving.
            </p>
            <div className="text-sm text-gray-400">
              <p>KVK: 81869975</p>
              <p>Eenmanszaak – Hoofdvestiging</p>
              <p>Vestigingsnr: 000048134783</p>
              <p>Donderbergweg 106, 6043JJ Roermond</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/cv-ketel" className="hover:text-white transition-colors">
                  CV Ketel
                </Link>
              </li>
              <li>
                <Link href="/vloerverwarming" className="hover:text-white transition-colors">
                  Vloerverwarming
                </Link>
              </li>
              <li>
                <Link href="/wtw-installatie" className="hover:text-white transition-colors">
                  WTW-Installatie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Informatie</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#over-ons" className="hover:text-white">Over Ons</Link></li>
              <li><Link href="#prijzen" className="hover:text-white">Prijzen</Link></li>
              <li><Link href="/garantie" className="hover:text-white">Garantie</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="tel:+31630798400" className="hover:text-white">06-30798400</a></li>
              <li><a href="mailto:vyinstallatie@gmail.com" className="hover:text-white">vyinstallatie@gmail.com</a></li>
              <li>Donderbergweg 106, Roermond</li>
              <li>24/7 Spoeddienst</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} VY Installatie. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
