"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function GoldenFooter() {
  return (
    <footer className="bg-theme-primary text-theme-light relative">
      <div className="absolute inset-x-0 top-0 h-2 bg-cover bg-repeat-x" style={{ backgroundImage: "url('/mandala-border.png')" }}></div>
      <div className="container-responsive py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/jai-laxmi-logo-white.png"
                alt="Jai Laxmi Sarees Logo"
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold font-display text-white">
                Jai Laxmi Sarees
              </span>
            </Link>
            <p className="text-theme-quaternary">
              Celebrating Indian craftsmanship with contemporary elegance.
            </p>
            <div className="flex gap-4 mt-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="text-theme-quaternary hover:text-accent-gold transition-colors">
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/collections" className="text-theme-quaternary hover:text-accent-gold transition-colors">Collections</Link></li>
              <li><Link href="/collections/sarees" className="text-theme-quaternary hover:text-accent-gold transition-colors">Sarees</Link></li>
              <li><Link href="/collections/lehengas" className="text-theme-quaternary hover:text-accent-gold transition-colors">Lehengas</Link></li>
              <li><Link href="/about" className="text-theme-quaternary hover:text-accent-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-theme-quaternary hover:text-accent-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Customer Care</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-theme-quaternary hover:text-accent-gold transition-colors">Shipping & Delivery</Link></li>
              <li><Link href="#" className="text-theme-quaternary hover:text-accent-gold transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="#" className="text-theme-quaternary hover:text-accent-gold transition-colors">Track Your Order</Link></li>
              <li><Link href="#" className="text-theme-quaternary hover:text-accent-gold transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-theme-quaternary">
              <li className="flex items-center gap-2"><MapPin className="h-5 w-5" />Jaipur, Rajasthan, India</li>
              <li className="flex items-center gap-2"><Phone className="h-5 w-5" />+91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail className="h-5 w-5" />hello@jailaxmisarees.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-theme-secondary py-6 text-center text-theme-tertiary">
        © {new Date().getFullYear()} Jai Laxmi Sarees. All rights reserved.
      </div>
    </footer>
  )
} 