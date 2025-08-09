"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-display font-bold mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter for exclusive offers and latest collection updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full glass-card text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <Button className="bg-gradient-gold hover:bg-gradient-gold/90 text-black font-semibold px-8 py-3 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">JL</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold">Jai Laxmi</h3>
                <p className="text-sm text-white/80 -mt-1">Sarees</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted destination for authentic Indian wear. From traditional sarees to contemporary designs, we
              bring you the finest collection with unmatched quality.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-white/80 hover:text-white transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/collections/sarees" className="text-white/80 hover:text-white transition-colors">
                  Sarees
                </Link>
              </li>
              <li>
                <Link href="/collections/lehengas" className="text-white/80 hover:text-white transition-colors">
                  Lehengas
                </Link>
              </li>
              <li>
                <Link href="/collections/wedding" className="text-white/80 hover:text-white transition-colors">
                  Wedding Collection
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-white/80 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-white/80 hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-white/80 hover:text-white transition-colors">
                  Returns & Exchange
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-white/80 hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">123 Fashion Street</p>
                  <p className="text-white/80">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <p className="text-white/80">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <p className="text-white/80">info@jailaxmisarees.com</p>
              </div>
            </div>

            <div className="mt-6 p-4 glass-card rounded-lg">
              <h5 className="font-semibold mb-2">Store Hours</h5>
              <p className="text-sm text-white/80">Mon - Sat: 10:00 AM - 8:00 PM</p>
              <p className="text-sm text-white/80">Sunday: 11:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm">© 2024 Jai Laxmi Sarees. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/80 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
