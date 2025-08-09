"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function GoldenFooter() {
  return (
    <footer className="bg-charcoal-800 text-white relative">
      <div className="h-[2px] bg-gradient-to-r from-ocean-300 via-blossom-300 to-meadow-300" />

      {/* Newsletter */}
      <div className="border-b border-charcoal-700">
        <div className="container-responsive py-16 text-center">
          <h3 className="text-3xl md:text-4xl font-display premium-text-gradient mb-3">Join Our Fashion Circle</h3>
          <p className="text-charcoal-300 max-w-2xl mx-auto mb-6">Get early access to new collections and exclusive offers.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input placeholder="Enter your email" className="bg-charcoal-700 border-charcoal-600 text-white placeholder-charcoal-400 rounded-full px-6 py-3" />
            <Button className="btn-accent rounded-full px-8">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container-responsive py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/jai-laxmi-logo-golden.png" 
                alt="Jai Laxmi Sarees Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-display">Jai Laxmi Sarees</span>
          </Link>
          <p className="text-charcoal-300">Celebrating Indian craftsmanship with contemporary elegance.</p>
          <div className="flex gap-3 mt-4">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <Link key={i} href="#" className="w-10 h-10 rounded-full bg-charcoal-700 hover:bg-charcoal-600 flex items-center justify-center transition">
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-ocean-300">Quick Links</h4>
          <ul className="space-y-2 text-charcoal-300">
            <li><Link href="/collections">Collections</Link></li>
            <li><Link href="/collections/sarees">Sarees</Link></li>
            <li><Link href="/collections/lehengas">Lehengas</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-blossom-300">Customer Care</h4>
          <ul className="space-y-2 text-charcoal-300">
            <li>Shipping & Delivery</li>
            <li>Returns & Exchanges</li>
            <li>Track Your Order</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-meadow-300">Contact</h4>
          <ul className="space-y-2 text-charcoal-300">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Jaipur, Rajasthan, India</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@jailaxmisarees.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-700 py-6 text-center text-charcoal-300">
        © {new Date().getFullYear()} Jai Laxmi Sarees. All rights reserved.
      </div>
    </footer>
  )
} 