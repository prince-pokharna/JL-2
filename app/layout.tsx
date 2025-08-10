import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className={`${poppins.className} antialiased`}>
        <div className="relative min-h-screen">
          <div className="absolute inset-0 radial-accent-background opacity-10"></div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
