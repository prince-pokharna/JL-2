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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_10px_rgba(0,0,0,0.08)] border-b border-adorable-100/50"
          : "bg-gradient-to-b from-white/80 via-white/50 to-transparent backdrop-blur-md"
      }`}
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blossom-300 via-dreamy-400 to-adorable-300" />

      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/jai-laxmi-logo-golden.png" 
                alt="Jai Laxmi Sarees Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-display font-bold premium-text-gradient">
                Jai Laxmi Sarees
              </h1>
              <p className="text-xs text-dreamy-600">Premium Indian Ethnic Wear</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-charcoal-700 hover:text-dreamy-700 font-medium transition-colors duration-300 group"
              >
                {item.name}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-dreamy-400 via-adorable-400 to-dreamy-400 transition-all duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-500 w-4 h-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-full bg-elegant-50 border-elegant-300 focus:border-dreamy-400 transition-all duration-300"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative">
              <Button variant="ghost" size="sm" className="rounded-full hover:bg-elegant-50">
                <Heart className="w-5 h-5" />
              </Button>
              {wishlistItems.length > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-dreamy-500 text-white rounded-full h-5 min-w-[1.25rem] flex items-center justify-center shadow-md">
                  {wishlistItems.length}
                </Badge>
              )}
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="sm" className="rounded-full hover:bg-elegant-50">
                <ShoppingCart className="w-5 h-5" />
              </Button>
              {cartItems.length > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-dreamy-500 text-white rounded-full h-5 min-w-[1.25rem] flex items-center justify-center shadow-md">
                  {cartItems.length}
                </Badge>
              )}
            </Link>

            {/* Account */}
            <Link href="/auth/signin">
              <Button variant="ghost" size="sm" className="rounded-full hover:bg-elegant-50">
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-elegant-200 shadow-inner">
          <div className="container-responsive py-4 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-500 w-4 h-4" />
              <Input
                placeholder="Search products..."
                                  className="pl-10 pr-4 py-2 rounded-full bg-elegant-50 border-elegant-300 focus:border-dreamy-400"
              />
            </div>

            {/* Nav Links */}
            <nav className="space-y-2">
              {nav.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-charcoal-700 hover:bg-gradient-to-r hover:from-elegant-50 hover:to-dreamy-50 border border-transparent hover:border-dreamy-200 transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
