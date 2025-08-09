"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "Royal Collection",
    subtitle: "Exquisite Banarasi Sarees",
    description: "Discover our premium collection of handwoven Banarasi sarees with intricate gold zari work",
    image: "/placeholder.svg?height=800&width=1200",
    cta: "Shop Sarees",
    link: "/collections/sarees",
  },
  {
    id: 2,
    title: "Bridal Elegance",
    subtitle: "Designer Lehengas",
    description: "Make your special day unforgettable with our stunning bridal lehenga collection",
    image: "/placeholder.svg?height=800&width=1200",
    cta: "Explore Lehengas",
    link: "/collections/lehengas",
  },
  {
    id: 3,
    title: "Festive Vibes",
    subtitle: "Vibrant Lehriya Collection",
    description: "Celebrate in style with our colorful and traditional Rajasthani lehriya designs",
    image: "/placeholder.svg?height=800&width=1200",
    cta: "Shop Lehriya",
    link: "/collections/lehriya",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-pattern opacity-90" />

      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-gold-400" />
              <span className="text-gold-400 font-medium tracking-wide uppercase text-sm">
                {heroSlides[currentSlide].subtitle}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">{heroSlides[currentSlide].description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-gold hover:bg-gradient-gold/90 text-black font-semibold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-gold-500/25 transition-all duration-300"
              >
                {heroSlides[currentSlide].cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                View All Collections
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 glass-card p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 glass-card p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-gold-400 w-8" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
