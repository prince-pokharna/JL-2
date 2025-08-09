import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Poppins, Crimson_Text } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "Jai Laxmi Sarees - Premium Indian Ethnic Wear",
  description:
    "Discover exquisite collection of handwoven sarees, designer lehengas, and traditional Indian wear. Premium quality, authentic craftsmanship, and timeless elegance.",
  keywords:
    "sarees, lehengas, indian wear, ethnic wear, traditional clothing, handwoven sarees, designer lehengas, bridal wear, premium sarees, indian fashion, ethnic fashion, traditional sarees, silk sarees, cotton sarees, wedding wear, festive wear",
  authors: [{ name: "Jai Laxmi Sarees" }],
  creator: "Jai Laxmi Sarees",
  publisher: "Jai Laxmi Sarees",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jailaxmisarees.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jai Laxmi Sarees - Premium Indian Ethnic Wear",
    description: "Discover exquisite collection of handwoven sarees, designer lehengas, and traditional Indian wear with authentic craftsmanship.",
    url: "https://jailaxmisarees.com",
    siteName: "Jai Laxmi Sarees",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jai Laxmi Sarees Collection - Premium Indian Ethnic Wear",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jai Laxmi Sarees - Premium Indian Ethnic Wear",
    description: "Discover exquisite collection of handwoven sarees, designer lehengas, and traditional Indian wear with authentic craftsmanship.",
    images: ["/twitter-image.jpg"],
    creator: "@jailaxmisarees",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: 'Jai Laxmi Sarees - Professional E-commerce Platform'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${poppins.variable} ${crimsonText.variable}`}>
      <body className={`${inter.className} antialiased bg-white text-charcoal-900`}>
        <div className="relative min-h-screen">
          {/* Background Pattern */}
          <div className="fixed inset-0 opacity-[0.02] pointer-events-none mandala-bg"></div>
          
          {/* Main Content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
