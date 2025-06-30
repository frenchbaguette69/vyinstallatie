import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/sonner";
import WhatsAppFloatingButton from "@/components/WhatsappFloatingButton"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "VY Installatie - CV Monteur Roermond | Installatie, Onderhoud & Reparatie",
  description:
    "Professionele CV installatie, onderhoud en reparatie in Roermond. ✓ 24/7 spoeddienst ✓ 15+ jaar ervaring ✓ Gecertificeerde monteurs ✓ 5 jaar garantie. Bel nu!",
  keywords: [
    "CV monteur Roermond",
    "CV installatie Roermond",
    "CV onderhoud Roermond",
    "CV reparatie Roermond",
    "ketel installatie Roermond",
    "spoeddienst CV Roermond",
    "loodgieter Roermond",
    "verwarmingsinstallateur Roermond",
    "VY Installatie",
  ],
  authors: [{ name: "VY Installatie" }],
  creator: "VY Installatie",
  publisher: "VY Installatie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://vyinstallatie.nl",
    siteName: "VY Installatie",
    title: "VY Installatie - CV Monteur Roermond | Professionele CV Diensten",
    description:
      "Professionele CV installatie, onderhoud en reparatie in Roermond. 24/7 spoeddienst, 15+ jaar ervaring, gecertificeerde monteurs. Bel nu voor een gratis offerte!",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "VY Installatie - CV Monteur Roermond",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VY Installatie - CV Monteur Roermond",
    description: "Professionele CV installatie, onderhoud en reparatie in Roermond. 24/7 spoeddienst beschikbaar.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://vyinstallatie.nl",
  },
  other: {
    "geo.region": "NL-LI",
    "geo.placename": "Roermond",
    "geo.position": "51.1942;5.9877",
    ICBM: "51.1942, 5.9877",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://vyinstallatie.nl",
  name: "VY Installatie",
  description: "Professionele CV installatie, onderhoud en reparatie in Roermond en omgeving",
  url: "https://vyinstallatie.nl",
  telephone: "+31630798400",
  email: "vyinstallatie@gmail.com",
    address: {
    "@type": "PostalAddress",
    streetAddress: "Donderbergweg 106",
    postalCode: "6043JJ",
    addressLocality: "Roermond",
    addressRegion: "Limburg",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.1942,
    longitude: 5.9877,
  },
  openingHours: ["Mo-Fr 08:00-18:00"],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 51.1942,
      longitude: 5.9877,
    },
    geoRadius: "30000",
  },
  priceRange: "€€",
  image: "https://vyinstallatie.nl/images/logo.png",
  logo: "https://vyinstallatie.nl/images/logo.png",
  sameAs: [
    "https://www.facebook.com/vyinstallatie",
    "https://www.instagram.com/vyinstallatie"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "CV Diensten",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CV Installatie",
          description: "Professionele installatie van CV ketels",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CV Onderhoud",
          description: "Jaarlijks onderhoud van CV systemen",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CV Reparatie",
          description: "24/7 reparatie service voor CV storingen",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={poppins.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppFloatingButton />
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
