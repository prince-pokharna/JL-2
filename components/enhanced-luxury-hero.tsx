"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, Sparkles, Crown, Lotus } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    id: 1,
    title: "Exquisite Handwoven Sarees",
    subtitle: "Timeless Elegance",
    description: "Discover our premium collection of handcrafted sarees, woven with love and tradition by skilled artisans across India",
    image: "/placeholder.svg?height=600&width=800&text=Elegant+Saree+Collection",
    cta: "Explore Sarees",
    link: "/collections/sarees",
    accent: "from-charcoal-900 to-charcoal-700",
    pattern: "advanced-mandala",
    animation: "animate-mandala-rotate"
  },
  {
    id: 2,
    title: "Designer Lehengas",
    subtitle: "Royal Heritage",
    description: "Step into royalty with our stunning designer lehengas, perfect for weddings and grand celebrations",
    image: "/placeholder.svg?height=600&width=800&text=Designer+Lehengas",
    cta: "View Collection",
    link: "/collections/lehengas",
    accent: "from-charcoal-800 to-charcoal-600",
    pattern: "sophisticated-paisley",
    animation: "animate-paisley-float"
  },
  {
    id: 3,
    title: "Bridal Couture",
    subtitle: "Your Dream Wedding",
    description: "Make your special day unforgettable with our exclusive bridal wear collection crafted for the modern Indian bride",
    image: "/placeholder.svg?height=600&width=800&text=Bridal+Collection",
    cta: "Bridal Collection",
    link: "/collections",
    accent: "from-charcoal-900 to-charcoal-800",
    pattern: "elegant-lotus",
    animation: "animate-lotus-bloom"
  },
]

export function EnhancedLuxuryHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Indian Pattern */}
      <div className={`absolute inset-0 ${currentSlideData.pattern} opacity-30`}></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 indian-premium-gradient opacity-95"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-20 w-32 h-32 ${currentSlideData.animation} opacity-20`}>
          <div className="w-full h-full rounded-full border-2 border-charcoal-300"></div>
        </div>
        <div className={`absolute bottom-20 right-20 w-24 h-24 ${currentSlideData.animation} opacity-15`}>
          <div className="w-full h-full rounded-full border border-charcoal-400"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Subtitle */}
          <div className="inline-flex items-center px-6 py-3 indian-luxury-card rounded-full mb-8 animate-shimmer-indian">
            <Crown className="w-5 h-5 text-charcoal-600 mr-2" />
            <span className="elegant-subtitle">{currentSlideData.subtitle}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 indian-display-text leading-tight">
            {currentSlideData.title}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-charcoal-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            {currentSlideData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href={currentSlideData.link}>
              <Button className="indian-button text-lg px-8 py-4">
                {currentSlideData.cta}
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/collections">
              <Button variant="outline" className="text-lg px-8 py-4 border-2 border-charcoal-300 text-charcoal-700 hover:bg-charcoal-50 premium-hover-effect">
                View All Collections
              </Button>
            </Link>
          </div>

          {/* Decorative Divider */}
          <div className="indian-divider"></div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-charcoal-200 hover:bg-white premium-hover-effect"
        >
          <ChevronLeft className="w-5 h-5 text-charcoal-700" />
        </Button>
        
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-charcoal-700 w-8'
                  : 'bg-charcoal-300 hover:bg-charcoal-500'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border-charcoal-200 hover:bg-white premium-hover-effect"
        >
          <ChevronRight className="w-5 h-5 text-charcoal-700" />
        </Button>
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute top-8 right-8">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            isAutoPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-charcoal-400'
          }`}
          title={isAutoPlaying ? 'Auto-play enabled' : 'Auto-play disabled'}
        />
      </div>
    </section>
  )
}