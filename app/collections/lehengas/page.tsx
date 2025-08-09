"use client"

import { useState } from "react"
import { GoldenHeader } from "@/components/golden-header"
import { GoldenFooter } from "@/components/golden-footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { Button } from "@/components/ui/button"
import { Crown, SlidersHorizontal, Grid3X3, List } from "lucide-react"

const lehengaProducts = [
  {
    id: "lehenga-1",
    name: "Designer Bridal Lehenga",
    subtitle: "Bridal Couture",
    price: 45999,
    originalPrice: 55999,
    images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
    rating: 4.9,
    reviewCount: 67,
    badge: "PREMIUM",
    category: "lehengas",
    subcategory: "bridal",
    colors: ["Deep Red", "Royal Pink", "Golden"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: false,
    isPremium: true,
    inStock: true,
    stockCount: 8,
    tags: ["bridal", "heavy work", "designer"],
  },
  {
    id: "lehenga-2",
    name: "Party Wear Lehenga",
    subtitle: "Festive Collection",
    price: 18999,
    originalPrice: 24999,
    images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
    rating: 4.7,
    reviewCount: 134,
    badge: "BESTSELLER",
    category: "lehengas",
    subcategory: "party",
    colors: ["Navy Blue", "Emerald", "Wine"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    isPremium: false,
    inStock: true,
    stockCount: 23,
    tags: ["party wear", "sequins", "modern"],
  },
  {
    id: "lehenga-3",
    name: "Traditional Ghagra Choli",
    subtitle: "Heritage Collection",
    price: 12999,
    originalPrice: 16999,
    images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
    rating: 4.6,
    reviewCount: 89,
    badge: "TRADITIONAL",
    category: "lehengas",
    subcategory: "traditional",
    colors: ["Red", "Yellow", "Green"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    isPremium: false,
    inStock: true,
    stockCount: 34,
    tags: ["traditional", "mirror work", "rajasthani"],
  },
  {
    id: "lehenga-4",
    name: "Indo-Western Lehenga",
    subtitle: "Fusion Collection",
    price: 22999,
    originalPrice: 28999,
    images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
    rating: 4.8,
    reviewCount: 56,
    badge: "NEW ARRIVAL",
    category: "lehengas",
    subcategory: "indo-western",
    colors: ["Black", "Nude", "Mint"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isPremium: true,
    inStock: true,
    stockCount: 15,
    tags: ["indo-western", "contemporary", "chic"],
  },
]

export default function LehengasPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filteredProducts, setFilteredProducts] = useState(lehengaProducts)

  return (
    <div className="min-h-screen bg-golden-gradient">
      <GoldenHeader />

      {/* Page Header */}
      <section className="relative py-20 bg-white text-elegant-900 overflow-hidden floral-bg">
        <div className="absolute inset-0 opacity-10 pointer-events-none" />

        <div className="relative container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Crown className="w-8 h-8" style={{color: "#d4af37"}} />
            <span className="font-semibold tracking-widest uppercase" style={{color: "#b9962f"}}>Bridal Magnificence</span>
            <Crown className="w-8 h-8" style={{color: "#d4af37"}} />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold golden-text-gradient mb-6">LEHENGAS COLLECTION</h1>
          <p className="text-xl text-charcoal-700 max-w-3xl mx-auto">
            Stunning bridal and festive lehengas with intricate embroidery, perfect for your most special occasions
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <ProductFilters
              products={lehengaProducts}
              onFilterChange={setFilteredProducts}
              category="lehengas"
              subcategories={["bridal", "party", "traditional", "indo-western"]}
            />
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="golden-card p-6 mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden bg-white border-elegant-300 text-charcoal-700 hover:border-gold-400"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <div>
                    <h2 className="text-3xl font-display font-bold golden-text-gradient">LEHENGAS</h2>
                    <p className="text-charcoal-700">
                      Showing {filteredProducts.length} of {lehengaProducts.length} products
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex border border-elegant-300 rounded-lg overflow-hidden">
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
            <ProductGrid products={filteredProducts} viewMode={viewMode} />
          </div>
        </div>
      </div>

      <GoldenFooter />
    </div>
  )
}
