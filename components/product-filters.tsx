"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface Product {
  id: string
  name: string
  subtitle: string
  price: number
  originalPrice: number
  images: string[]
  rating: number
  reviewCount: number
  badge: string
  category: string
  subcategory?: string
  colors: string[]
  sizes: string[]
  isNew: boolean
  isPremium: boolean
  inStock: boolean
  stockCount: number
  tags: string[]
}

interface ProductFiltersProps {
  products: Product[]
  onFilterChange: (filteredProducts: Product[]) => void
  category: string
  subcategories: string[]
}

export function ProductFilters({ products, onFilterChange, category, subcategories }: ProductFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)
  const [showInStockOnly, setShowInStockOnly] = useState(false)
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)
  const [showNewOnly, setShowNewOnly] = useState(false)

  // Get unique values for filters
  const allColors = Array.from(new Set(products.flatMap((p) => p.colors)))
  const allSizes = Array.from(new Set(products.flatMap((p) => p.sizes)))
  const maxPrice = Math.max(...products.map((p) => p.price))

  useEffect(() => {
    let filtered = products

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Subcategory filter
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter(
        (product) => product.subcategory && selectedSubcategories.includes(product.subcategory),
      )
    }

    // Price range filter
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) => product.colors.some((color) => selectedColors.includes(color)))
    }

    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((product) => product.sizes.some((size) => selectedSizes.includes(size)))
    }

    // Rating filter
    if (minRating > 0) {
      filtered = filtered.filter((product) => product.rating >= minRating)
    }

    // Stock filter
    if (showInStockOnly) {
      filtered = filtered.filter((product) => product.inStock)
    }

    // Premium filter
    if (showPremiumOnly) {
      filtered = filtered.filter((product) => product.isPremium)
    }

    // New arrivals filter
    if (showNewOnly) {
      filtered = filtered.filter((product) => product.isNew)
    }

    onFilterChange(filtered)
  }, [
    products,
    searchTerm,
    selectedSubcategories,
    priceRange,
    selectedColors,
    selectedSizes,
    minRating,
    showInStockOnly,
    showPremiumOnly,
    showNewOnly,
    onFilterChange,
  ])

  const clearAllFilters = () => {
    setSearchTerm("")
    setSelectedSubcategories([])
    setPriceRange([0, maxPrice])
    setSelectedColors([])
    setSelectedSizes([])
    setMinRating(0)
    setShowInStockOnly(false)
    setShowPremiumOnly(false)
    setShowNewOnly(false)
  }

  const activeFiltersCount =
    (searchTerm ? 1 : 0) +
    selectedSubcategories.length +
    (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0) +
    selectedColors.length +
    selectedSizes.length +
    (minRating > 0 ? 1 : 0) +
    (showInStockOnly ? 1 : 0) +
    (showPremiumOnly ? 1 : 0) +
    (showNewOnly ? 1 : 0)

  return (
    <div className="glass-card rounded-3xl p-8 luxury-shadow sticky top-24">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-display font-bold text-gradient">FILTERS</h3>
        {activeFiltersCount > 0 && (
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              {activeFiltersCount} active
            </Badge>
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-slate-600 hover:text-slate-900">
              Clear All
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {/* Search */}
        <div>
          <Label className="text-sm font-bold text-slate-700 mb-3 block">SEARCH</Label>
          <Input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="glass-card border-0 focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Subcategories */}
        <div>
          <Label className="text-sm font-bold text-slate-700 mb-4 block">CATEGORIES</Label>
          <div className="space-y-3">
            {subcategories.map((subcategory) => (
              <div key={subcategory} className="flex items-center space-x-3">
                <Checkbox
                  id={subcategory}
                  checked={selectedSubcategories.includes(subcategory)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedSubcategories([...selectedSubcategories, subcategory])
                    } else {
                      setSelectedSubcategories(selectedSubcategories.filter((s) => s !== subcategory))
                    }
                  }}
                  className="border-slate-300 text-yellow-500 focus:ring-yellow-400"
                />
                <Label
                  htmlFor={subcategory}
                  className="text-slate-700 hover:text-slate-900 transition-colors cursor-pointer capitalize"
                >
                  {subcategory}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-sm font-bold text-slate-700 mb-4 block">PRICE RANGE</Label>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={maxPrice} step={1000} className="w-full" />
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>₹{priceRange[0].toLocaleString()}</span>
              <span>₹{priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div>
          <Label className="text-sm font-bold text-slate-700 mb-4 block">COLORS</Label>
          <div className="grid grid-cols-4 gap-3">
            {allColors.map((color) => (
              <button
                key={color}
                onClick={() => {
                  if (selectedColors.includes(color)) {
                    setSelectedColors(selectedColors.filter((c) => c !== color))
                  } else {
                    setSelectedColors([...selectedColors, color])
                  }
                }}
                className={`w-10 h-10 rounded-full border-2 hover:scale-110 transition-all duration-300 ${
                  selectedColors.includes(color) ? "border-yellow-500 ring-2 ring-yellow-200" : "border-slate-300"
                }`}
                style={{
                  backgroundColor: color.toLowerCase().includes("multi")
                    ? "#ff6b6b"
                    : color.toLowerCase().replace(" ", "").replace("deep", "").replace("royal", ""),
                }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <Label className="text-sm font-bold text-slate-700 mb-4 block">SIZES</Label>
          <div className="grid grid-cols-3 gap-2">
            {allSizes.map((size) => (
              <button
                key={size}
                onClick={() => {
                  if (selectedSizes.includes(size)) {
                    setSelectedSizes(selectedSizes.filter((s) => s !== size))
                  } else {
                    setSelectedSizes([...selectedSizes, size])
                  }
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
                  selectedSizes.includes(size)
                    ? "bg-yellow-100 border-yellow-500 text-yellow-800"
                    : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div>
          <Label className="text-sm font-bold text-slate-700 mb-4 block">MINIMUM RATING</Label>
          <RadioGroup value={minRating.toString()} onValueChange={(value) => setMinRating(Number(value))}>
            {[4, 3, 2, 1, 0].map((rating) => (
              <div key={rating} className="flex items-center space-x-3">
                <RadioGroupItem
                  value={rating.toString()}
                  id={`rating-${rating}`}
                  className="border-slate-300 text-yellow-500 focus:ring-yellow-400"
                />
                <Label htmlFor={`rating-${rating}`} className="flex items-center space-x-2 cursor-pointer">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-slate-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-slate-700">{rating === 0 ? "All ratings" : `${rating}+ stars`}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Additional Filters */}
        <div>
          <Label className="text-sm font-bold text-slate-700 mb-4 block">ADDITIONAL FILTERS</Label>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="in-stock"
                checked={showInStockOnly}
                onCheckedChange={setShowInStockOnly}
                className="border-slate-300 text-yellow-500 focus:ring-yellow-400"
              />
              <Label
                htmlFor="in-stock"
                className="text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                In Stock Only
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                id="premium"
                checked={showPremiumOnly}
                onCheckedChange={setShowPremiumOnly}
                className="border-slate-300 text-yellow-500 focus:ring-yellow-400"
              />
              <Label htmlFor="premium" className="text-slate-700 hover:text-slate-900 transition-colors cursor-pointer">
                Premium Products Only
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                id="new"
                checked={showNewOnly}
                onCheckedChange={setShowNewOnly}
                className="border-slate-300 text-yellow-500 focus:ring-yellow-400"
              />
              <Label htmlFor="new" className="text-slate-700 hover:text-slate-900 transition-colors cursor-pointer">
                New Arrivals Only
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
