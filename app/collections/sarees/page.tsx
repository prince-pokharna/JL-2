"use client"

import { useState } from "react"
import { GoldenHeader } from "@/components/golden-header"
import { GoldenFooter } from "@/components/golden-footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { Button } from "@/components/ui/button"
import { Crown, Grid3X3, List, SlidersHorizontal, Star, Sparkles } from "lucide-react"

const sareeProducts = [
  {
    id: "saree-1",
    name: "Royal Silk Banarasi Saree",
    subtitle: "Heritage Collection",
    price: 15999,
    originalPrice: 19999,
    images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
    rating: 4.8,
    reviewCount: 124,
    badge: "BESTSELLER",
    category: "sarees",
    subcategory: "banarasi",
    colors: ["Maroon", "Gold", "Deep Red"],
    sizes: ["Free Size"],
    isNew: false,
    isPremium: true,
    inStock: true,
    stockCount: 25,
    tags: ["handwoven", "silk", "traditional"],
  },
  {
    id: "saree-2",
    name: "Elegant Georgette Saree",
    subtitle: "Contemporary Collection",
    price: 8999,
    originalPrice: 12999,
    images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
    rating: 4.6,
    reviewCount: 89,
    badge: "NEW ARRIVAL",
    category: "sarees",
    subcategory: "georgette",
    colors: ["Navy Blue", "Emerald Green", "Wine Red"],
    sizes: ["Free Size"],
    isNew: true,
    isPremium: false,
    inStock: true,
    stockCount: 45,
    tags: ["lightweight", "party wear", "modern"],
  },
  {
    id: "saree-3",
    name: "Pure Cotton Handloom Saree",
    subtitle: "Comfort Collection",
    price: 4999,
    originalPrice: 6999,
    images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
    rating: 4.7,
    reviewCount: 156,
    badge: "ECO-FRIENDLY",
    category: "sarees",
    subcategory: "cotton",
    colors: ["White", "Cream", "Light Blue"],
    sizes: ["Free Size"],
    isNew: false,
    isPremium: false,
    inStock: true,
    stockCount: 67,
    tags: ["handloom", "cotton", "daily wear"],
  },
  {
    id: "saree-4",
    name: "Designer Chiffon Saree",
    subtitle: "Party Collection",
    price: 12999,
    originalPrice: 16999,
    images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
    rating: 4.9,
    reviewCount: 78,
    badge: "TRENDING",
    category: "sarees",
    subcategory: "chiffon",
    colors: ["Black", "Royal Blue", "Magenta"],
    sizes: ["Free Size"],
    isNew: true,
    isPremium: true,
    inStock: true,
    stockCount: 23,
    tags: ["designer", "party wear", "embellished"],
  },
  {
    id: "saree-5",
    name: "Traditional Kanjivaram Saree",
    subtitle: "Temple Collection",
    price: 25999,
    originalPrice: 32999,
    images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
    rating: 4.9,
    reviewCount: 45,
    badge: "PREMIUM",
    category: "sarees",
    subcategory: "kanjivaram",
    colors: ["Deep Red", "Golden", "Purple"],
    sizes: ["Free Size"],
    isNew: false,
    isPremium: true,
    inStock: true,
    stockCount: 12,
    tags: ["kanjivaram", "silk", "wedding"],
  },
  {
    id: "saree-6",
    name: "Printed Crepe Saree",
    subtitle: "Office Collection",
    price: 3999,
    originalPrice: 5999,
    images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
    rating: 4.5,
    reviewCount: 203,
    badge: "OFFICE WEAR",
    category: "sarees",
    subcategory: "crepe",
    colors: ["Grey", "Navy", "Beige"],
    sizes: ["Free Size"],
    isNew: false,
    isPremium: false,
    inStock: true,
    stockCount: 89,
    tags: ["printed", "office wear", "comfortable"],
  },
]

export default function SareesPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filteredProducts, setFilteredProducts] = useState(sareeProducts)

  return (
    <div className="min-h-screen bg-golden-gradient">
      <GoldenHeader />

      {/* Enhanced Page Header */}
      <section className="relative py-24 bg-white text-elegant-900 overflow-hidden floral-bg">
        <div className="absolute inset-0 opacity-10 pointer-events-none" />

        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full border mb-6" style={{borderColor: "#f2d98a"}}>
            <Crown className="w-6 h-6 mr-2" style={{color: "#d4af37"}} />
            <span className="font-semibold tracking-widest uppercase" style={{color: "#b9962f"}}>Traditional Elegance</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 golden-text-gradient">SAREES COLLECTION</h1>
          
          <p className="text-xl md:text-2xl text-charcoal-700 max-w-4xl mx-auto leading-relaxed">
            Discover our exquisite collection of handwoven sarees from across India, each piece telling a story of tradition, craftsmanship, and timeless beauty.
          </p>
          
          <div className="ornament-divider mt-12"></div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="golden-card p-6 sticky top-24">
              <h3 className="text-xl font-display font-bold text-elegant-900 mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2" style={{color: "#d4af37"}} />
                Filter Products
              </h3>
              <ProductFilters
                products={sareeProducts}
                onFilterChange={setFilteredProducts}
                category="sarees"
                subcategories={["banarasi", "georgette", "cotton", "chiffon", "kanjivaram", "crepe"]}
              />
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Enhanced Toolbar */}
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
                    <h2 className="text-3xl font-display font-bold golden-text-gradient">SAREES</h2>
                    <p className="text-charcoal-700 mt-1">
                      Showing {filteredProducts.length} of {sareeProducts.length} exquisite designs
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
