"use client"

import { useState } from "react"
import { GoldenHeader } from "@/components/golden-header"
import { GoldenFooter } from "@/components/golden-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingBag, Star, Eye, Filter, Grid3X3, List, Crown } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: "1",
    name: "Royal Silk Banarasi Saree",
    subtitle: "Heritage Collection",
    price: 15999,
    originalPrice: 19999,
    image: "/placeholder.svg?height=600&width=400",
    rating: 4.8,
    reviewCount: 124,
    badge: "BESTSELLER",
    category: "sarees",
    colors: ["Maroon", "Gold", "Deep Red"],
    isPremium: true,
  },
  {
    id: "2",
    name: "Designer Bridal Lehenga",
    subtitle: "Bridal Couture",
    price: 45999,
    originalPrice: 55999,
    image: "/placeholder.svg?height=600&width=400",
    rating: 4.9,
    reviewCount: 67,
    badge: "PREMIUM",
    category: "lehengas",
    colors: ["Deep Red", "Royal Pink", "Golden"],
    isPremium: true,
  },
  {
    id: "3",
    name: "Vibrant Lehriya Set",
    subtitle: "Rajasthani Collection",
    price: 3999,
    originalPrice: 4999,
    image: "/placeholder.svg?height=600&width=400",
    rating: 4.6,
    reviewCount: 89,
    badge: "NEW ARRIVAL",
    category: "lehriya",
    colors: ["Multi Color", "Pink Yellow", "Blue Green"],
    isPremium: false,
  },
  {
    id: "4",
    name: "Modern Coord Set",
    subtitle: "Contemporary Wear",
    price: 5999,
    originalPrice: 7999,
    image: "/placeholder.svg?height=600&width=400",
    rating: 4.7,
    reviewCount: 156,
    badge: "TRENDING",
    category: "coord-sets",
    colors: ["Mint Green", "Coral Pink", "Lavender"],
    isPremium: false,
  },
  {
    id: "5",
    name: "Elegant Wedding Saree",
    subtitle: "Bridal Collection",
    price: 25999,
    originalPrice: 32999,
    image: "/placeholder.svg?height=600&width=400",
    rating: 4.9,
    reviewCount: 45,
    badge: "EXCLUSIVE",
    category: "wedding",
    colors: ["Deep Red", "Golden", "Maroon"],
    isPremium: true,
  },
  {
    id: "6",
    name: "Summer Cotton Saree",
    subtitle: "Comfort Collection",
    price: 2999,
    originalPrice: 3999,
    image: "/placeholder.svg?height=600&width=400",
    rating: 4.5,
    reviewCount: 203,
    badge: "SUMMER SPECIAL",
    category: "summer",
    colors: ["Light Blue", "Mint", "Peach"],
    isPremium: false,
  },
]

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-golden-gradient">
      <GoldenHeader />

      {/* Page Header */}
      <section className="relative py-20 bg-white text-elegant-900 overflow-hidden floral-bg">
        <div className="absolute inset-0 opacity-10 pointer-events-none" />

        <div className="relative container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Crown className="w-8 h-8" style={{color: "#d4af37"}} />
            <span className="font-semibold tracking-widest uppercase" style={{color: "#b9962f"}}>Premium Collection</span>
            <Crown className="w-8 h-8" style={{color: "#d4af37"}} />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold golden-text-gradient mb-6">OUR PRODUCTS</h1>
          <p className="text-xl text-charcoal-700 max-w-3xl mx-auto">
            Discover our exquisite range of traditional and contemporary Indian wear, crafted with precision and love
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="glass-card rounded-3xl p-8 luxury-shadow sticky top-24">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-display font-bold text-gradient">FILTERS</h3>
                <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                  Clear All
                </Button>
              </div>

              {/* Search */}
              <div className="mb-8">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full glass-card border-0 focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">CATEGORIES</h4>
                <div className="space-y-3">
                  {["All", "Sarees", "Lehengas", "Coord Sets", "Lehriya", "Wedding", "Summer"].map((category) => (
                    <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="rounded border-slate-300 text-yellow-500 focus:ring-yellow-400"
                      />
                      <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">PRICE RANGE</h4>
                <div className="space-y-3">
                  {["Under ₹5,000", "₹5,000 - ₹15,000", "₹15,000 - ₹30,000", "₹30,000 - ₹50,000", "Above ₹50,000"].map(
                    (range) => (
                      <label key={range} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="price"
                          className="border-slate-300 text-yellow-500 focus:ring-yellow-400"
                        />
                        <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{range}</span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-8">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">COLORS</h4>
                <div className="grid grid-cols-4 gap-3">
                  {["red", "blue", "green", "yellow", "pink", "purple", "orange", "black"].map((color) => (
                    <button
                      key={color}
                      className="w-10 h-10 rounded-full border-2 border-slate-300 hover:border-slate-500 hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="glass-card rounded-2xl p-6 mb-8 luxury-shadow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden glass-button bg-transparent"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <span className="text-slate-600 font-medium">
                    Showing {products.length} of {products.length} products
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-48 glass-card border-0">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex border border-slate-300 rounded-lg overflow-hidden">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="rounded-none"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="rounded-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-8 ${viewMode === "grid" ? "md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="group glass-card rounded-3xl overflow-hidden luxury-shadow hover:scale-105 transition-all duration-700"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`${viewMode === "list" ? "flex" : ""}`}>
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "w-80 flex-shrink-0" : ""}`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={600}
                        className={`object-cover group-hover:scale-110 transition-transform duration-700 ${
                          viewMode === "list" ? "w-full h-80" : "w-full h-96"
                        }`}
                      />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 space-y-2">
                        {product.isPremium && (
                          <div className="premium-gradient text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                            <Crown className="w-3 h-3" />
                            <span>PREMIUM</span>
                          </div>
                        )}
                        <div className="bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {product.badge}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div
                        className={`absolute top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-3 transition-all duration-300 ${
                          hoveredProduct === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        }`}
                      >
                        <Button size="sm" className="glass-button w-12 h-12 rounded-full p-0">
                          <Heart className="w-5 h-5" />
                        </Button>
                        <Button size="sm" className="glass-button w-12 h-12 rounded-full p-0">
                          <Eye className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                    <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="space-y-4">
                        {/* Rating */}
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-slate-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-slate-500">({product.reviewCount})</span>
                        </div>

                        {/* Product Info */}
                        <div>
                          <p className="text-sm text-yellow-600 font-semibold tracking-wide uppercase">
                            {product.subtitle}
                          </p>
                          <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                            {product.name}
                          </h3>
                        </div>

                        {/* Price */}
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-bold text-gradient">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-slate-500 line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        {/* Colors */}
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-slate-600 font-medium">Colors:</span>
                          <div className="flex space-x-2">
                            {product.colors.slice(0, 3).map((color, i) => (
                              <div
                                key={i}
                                className="w-5 h-5 rounded-full border-2 border-slate-300"
                                style={{ backgroundColor: color.toLowerCase().replace(" ", "") }}
                                title={color}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Add to Cart */}
                        <Button className="w-full premium-gradient hover:scale-105 text-white font-bold rounded-full py-3 transition-transform">
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          ADD TO CART
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-16">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled className="glass-button bg-transparent">
                  Previous
                </Button>
                <Button className="premium-gradient text-white">1</Button>
                <Button variant="outline" className="glass-button bg-transparent">
                  2
                </Button>
                <Button variant="outline" className="glass-button bg-transparent">
                  3
                </Button>
                <Button variant="outline" className="glass-button bg-transparent">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GoldenFooter />
    </div>
  )
}
