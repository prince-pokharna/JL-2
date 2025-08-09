"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag, User, Heart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(3)

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-white/20">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-white/10">
          <div className="text-white/80">Free shipping on orders above ₹2999 | Call: +91 98765 43210</div>
          <div className="hidden md:flex items-center space-x-4 text-white/80">
            <Link href="/track-order" className="hover:text-white transition-colors">
              Track Order
            </Link>
            <Link href="/help" className="hover:text-white transition-colors">
              Help
            </Link>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/jai-laxmi-logo-white.png" 
                alt="Jai Laxmi Sarees Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-white">Jai Laxmi</h1>
              <p className="text-sm text-white/80 -mt-1">Sarees</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gold-300 transition-colors font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-gold-300 transition-colors font-medium">Collections</button>
              <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    href="/collections/sarees"
                    className="text-white/90 hover:text-white p-2 rounded hover:bg-white/10 transition-colors"
                  >
                    Sarees
                  </Link>
                  <Link
                    href="/collections/lehengas"
                    className="text-white/90 hover:text-white p-2 rounded hover:bg-white/10 transition-colors"
                  >
                    Lehengas
                  </Link>
                  <Link
                    href="/collections/coord-sets"
                    className="text-white/90 hover:text-white p-2 rounded hover:bg-white/10 transition-colors"
                  >
                    Coord Sets
                  </Link>
                  <Link
                    href="/collections/lehriya"
                    className="text-white/90 hover:text-white p-2 rounded hover:bg-white/10 transition-colors"
                  >
                    Lehriya
                  </Link>
                  <Link
                    href="/collections/wedding"
                    className="text-white/90 hover:text-white p-2 rounded hover:bg-white/10 transition-colors"
                  >
                    Wedding Collection
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-white hover:text-gold-300 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gold-300 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for sarees, lehengas..."
                className="w-full pl-4 pr-12 py-2 glass-card rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-gold hover:bg-gradient-gold/90 rounded-full p-2"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-gold-300 hover:bg-white/10">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-gold-300 hover:bg-white/10">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="relative text-white hover:text-gold-300 hover:bg-white/10">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-gold-300 hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-12 py-2 glass-card rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-gold hover:bg-gradient-gold/90 rounded-full p-2"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-white hover:text-gold-300 transition-colors py-2">
                  Home
                </Link>
                <Link href="/collections" className="text-white hover:text-gold-300 transition-colors py-2">
                  Collections
                </Link>
                <Link href="/about" className="text-white hover:text-gold-300 transition-colors py-2">
                  About
                </Link>
                <Link href="/contact" className="text-white hover:text-gold-300 transition-colors py-2">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
