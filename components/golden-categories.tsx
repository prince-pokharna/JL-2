"use client"

import Link from "next/link"
import { Flower2, Star } from "lucide-react"
import { categories } from "@/lib/data"

export function GoldenCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-5 py-2 rounded-full border" style={{borderColor: "#f2d98a"}}>
            <Flower2 className="w-4 h-4 golden-text mr-2" />
            <span className="text-sm golden-text">Explore Our Categories</span>
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-display golden-text-gradient">Traditional Collections</h2>
          <p className="mt-3 text-charcoal-600 max-w-2xl mx-auto">Curated selections celebrating Indian craftsmanship with a modern touch.</p>
          <div className="ornament-divider mt-8"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/collections/${cat.slug}`} className="group block">
              <div className="relative rounded-2xl overflow-hidden golden-card filigree-corners">
                <img src={cat.image} alt={cat.name} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-2xl font-display golden-text drop-shadow">{cat.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Star className="w-4 h-4 text-gold-400" />
                    {cat.productCount} designs
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 