"use client"

import { Button } from "@/components/ui/button"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/logo.png" alt="VY Installatie Logo" width={40} height={40} className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">VY Installatie</h1>
              <p className="text-sm text-gray-600">Uw specialist in CV installatie</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-red-600 transition-colors flex items-center">
                Diensten
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/cv-ketel"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                  >
                    CV Ketel
                  </Link>
                  <Link
                    href="/vloerverwarming"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                  >
                    Vloerverwarming
                  </Link>
                  <Link
                    href="/wtw-installatie"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                  >
                    WTW Installatie
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/#over-ons" className="text-gray-700 hover:text-red-600 transition-colors">
              Over Ons
            </Link>
            <Link href="/projecten" className="text-gray-700 hover:text-red-600 transition-colors">
              Projecten
            </Link>
            <Link href="/#prijzen" className="text-gray-700 hover:text-red-600 transition-colors">
              Prijzen
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Bel Nu
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Diensten</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/cv-ketel"
                    className="block text-gray-700 hover:text-red-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CV Ketel
                  </Link>
                  <Link
                    href="/vloerverwarming"
                    className="block text-gray-700 hover:text-red-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Vloerverwarming
                  </Link>
                  <Link
                    href="/wtw-installatie"
                    className="block text-gray-700 hover:text-red-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    WTW Installatie
                  </Link>
                </div>
              </div>
              <Link
                href="/#over-ons"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Over Ons
              </Link>
              <Link
                href="/projecten"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projecten
              </Link>
              <Link
                href="/#prijzen"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Prijzen
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
  asChild
  className="bg-red-600 hover:bg-red-700 text-white w-full"
>
  <a href="tel:+31630798400">
    <Phone className="w-4 h-4 mr-2" />
    Bel Nu: 06-30798400
  </a>
</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
