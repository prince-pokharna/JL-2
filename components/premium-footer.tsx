"use client"

import Link from "next/link"
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Star,
  Crown,
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function PremiumFooter() {
  return (
    <footer className="bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white">
      {/* Decorative Indian border */}
      <div className="h-1 bg-indian-gradient"></div>
      
      {/* Newsletter Section */}
      <div className="border-b border-charcoal-700">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-charcoal-800/50 backdrop-blur-sm border border-charcoal-700 rounded-full mb-6">
              <Crown className="w-5 h-5 text-saffron-500 mr-2 animate-pulse-soft" />
              <span className="text-elegant-300 text-sm font-semibold tracking-wider uppercase">
                Stay Connected
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="indian-text-gradient">Join Our</span>
              <span className="text-white"> Fashion Family</span>
            </h3>
            
            <p className="text-lg text-elegant-300 mb-8 max-w-2xl mx-auto">
              Be the first to discover new collections, exclusive offers, and traditional fashion insights 
              delivered straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-charcoal-800/50 border-charcoal-600 text-white placeholder-elegant-400 focus:border-saffron-500 focus:ring-saffron-500/20 rounded-full px-6 py-3"
              />
              <Button className="bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-elegant">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-full flex items-center justify-center shadow-indian mandala-bg">
                  <span className="text-white font-bold text-xl">JL</span>
                </div>
                <div className="absolute inset-0 w-12 h-12 border-2 border-saffron-300 rounded-full animate-spin-slow opacity-30"></div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white group-hover:text-saffron-400 transition-colors duration-300">
                  Jai Laxmi Sarees
                </h3>
                <p className="text-sm text-elegant-300 flex items-center">
                  <Star className="w-3 h-3 mr-1 text-saffron-500" />
                  Premium Indian Ethnic Wear
                </p>
              </div>
            </Link>
            
            <p className="text-elegant-300 leading-relaxed mb-6">
              Celebrating 25+ years of traditional Indian craftsmanship with modern elegance. 
              Each piece tells a story of heritage, quality, and timeless beauty.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-charcoal-800 hover:bg-saffron-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-elegant indian-hover">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-charcoal-800 hover:bg-saffron-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-elegant indian-hover">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-charcoal-800 hover:bg-saffron-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-elegant indian-hover">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-charcoal-800 hover:bg-saffron-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-elegant indian-hover">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-6 flex items-center">
              <Star className="w-4 h-4 text-saffron-500 mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Collections", href: "/collections" },
                { name: "Sarees", href: "/collections/sarees" },
                { name: "Lehengas", href: "/collections/lehengas" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-elegant-300 hover:text-saffron-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-6 flex items-center">
              <Heart className="w-4 h-4 text-saffron-500 mr-2" />
              Customer Care
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Size Guide", href: "/size-guide" },
                { name: "Care Instructions", href: "/care-guide" },
                { name: "Shipping Info", href: "/shipping" },
                { name: "Returns & Exchange", href: "/returns" },
                { name: "Track Your Order", href: "/track-order" },
                { name: "FAQs", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-elegant-300 hover:text-saffron-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-saffron-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-elegant-300 leading-relaxed">
                    123 Fashion Street,<br />
                    Traditional Market,<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-saffron-500 flex-shrink-0" />
                <div>
                  <Link href="tel:+911234567890" className="text-elegant-300 hover:text-saffron-400 transition-colors duration-300">
                    +91 12345 67890
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-saffron-500 flex-shrink-0" />
                <div>
                  <Link href="mailto:info@jailaxmisarees.com" className="text-elegant-300 hover:text-saffron-400 transition-colors duration-300">
                    info@jailaxmisarees.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-6 p-4 bg-charcoal-800/50 rounded-lg border border-charcoal-700">
              <h5 className="text-white font-semibold mb-2">Store Hours</h5>
              <div className="text-sm text-elegant-300 space-y-1">
                <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                <p>Sunday: 11:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-charcoal-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-elegant-300 text-sm">
              <p>&copy; 2024 Jai Laxmi Sarees. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-elegant-300 hover:text-saffron-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-elegant-300 hover:text-saffron-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-elegant-300 hover:text-saffron-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-elegant-300 text-sm">Made with</span>
              <Heart className="w-4 h-4 text-saffron-500 animate-pulse-soft" fill="currentColor" />
              <span className="text-elegant-300 text-sm">in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
