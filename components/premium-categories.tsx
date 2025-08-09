"use client"

import Link from "next/link"
import { ArrowRight, Crown, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data"

export function PremiumCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 indian-card rounded-full mb-6">
            <Crown className="w-5 h-5 text-saffron-500 mr-2" />
            <span className="text-charcoal-700 text-sm font-semibold tracking-wider uppercase">
              Our Collections
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="indian-text-gradient">Explore Our</span>
            <br />
            <span className="text-charcoal-900">Premium Collections</span>
          </h2>
          
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Discover handcrafted elegance in every thread. From traditional sarees to contemporary designs, 
            each piece tells a story of Indian heritage and modern sophistication.
          </p>
          
          <div className="ornament-divider mt-8"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/collections/${category.id}`}
              className="group block"
            >
              <div className="relative indian-card overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-indian hover:scale-105">
                {/* Indian pattern overlay */}
                <div className="absolute inset-0 mandala-bg opacity-20"></div>
                
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-saffron-400 to-saffron-500 rounded-full flex items-center justify-center shadow-indian">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-display font-bold text-charcoal-900 group-hover:text-saffron-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-saffron-500 mr-1" />
                      <span className="text-sm text-charcoal-600 font-medium">
                        {category.productCount}+
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-charcoal-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-saffron-600 font-semibold group-hover:text-saffron-700 transition-colors duration-300">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-saffron-500/0 via-saffron-500/0 to-saffron-500/0 group-hover:from-saffron-500/5 group-hover:via-emerald-500/5 group-hover:to-royal-500/5 transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link href="/collections">
              <Button className="bg-gradient-to-r from-charcoal-900 to-charcoal-800 hover:from-charcoal-800 hover:to-charcoal-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-elegant hover:shadow-indian">
                View All Collections
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <span className="text-charcoal-500 hidden sm:block">or</span>
            
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="bg-white border-2 border-charcoal-300 text-charcoal-800 hover:bg-charcoal-50 hover:border-saffron-500 hover:text-saffron-600 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Get Personalized Recommendations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
