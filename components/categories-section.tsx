"use client"

import Link from "next/link"
import { categories } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function CategoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">Explore Our Collections</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From traditional sarees to modern coord sets, discover the perfect outfit for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/collections/${category.id}`}
              className="group relative overflow-hidden rounded-2xl glass-card hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 shimmer" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {category.name}
                </h3>
                <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">Explore Collection</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
