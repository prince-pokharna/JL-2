"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Heart, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"

export function GoldenHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { items: cartItems } = useCart()
  const { items: wishlistItems } = useWishlist()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const nav = [
    { name: "Home", href: "/" },
    { name: "Sarees", href: "/collections/sarees" },
    { name: "Lehengas", href: "/collections/lehengas" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/jai-laxmi-logo-golden.png"
              alt="Jai Laxmi Sarees Logo"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold font-display text-theme-primary">
              Jai Laxmi Sarees
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {nav.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-theme-secondary hover:text-accent-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-6 w-6" />
                {wishlistItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 radial-accent-background text-white">
                    {wishlistItems.length}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 radial-accent-background text-white">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link href="/auth/signin">
              <Button variant="ghost" size="icon">
                <User className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-lg ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container-responsive py-4 space-y-4">
          <nav className="space-y-2">
            {nav.map(item => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg py-2 text-theme-primary hover:text-accent-gold"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
