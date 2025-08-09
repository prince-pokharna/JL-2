"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, Crown, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white via-elegant-50 to-elegant-100 paisley-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 indian-card rounded-full mb-6">
            <Heart className="w-5 h-5 text-saffron-500 mr-2 animate-pulse-soft" />
            <span className="text-charcoal-700 text-sm font-semibold tracking-wider uppercase">
              Customer Stories
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-charcoal-900">What Our</span>
            <br />
            <span className="indian-text-gradient">Happy Customers Say</span>
          </h2>
          
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Read authentic reviews from our valued customers who have experienced 
            the beauty and quality of our traditional Indian wear.
          </p>
          
          <div className="ornament-divider mt-8"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`indian-card transition-all duration-500 transform ${
                  index === currentIndex
                    ? "scale-105 shadow-indian z-10"
                    : "scale-95 opacity-70 hover:opacity-90 hover:scale-100"
                }`}
              >
                <CardContent className="p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-full flex items-center justify-center shadow-indian">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Customer Image */}
                  <div className="flex justify-center mb-6 mt-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-elegant"
                      />
                      {/* Decorative ring */}
                      <div className="absolute inset-0 w-20 h-20 border-2 border-saffron-300 rounded-full animate-spin-slow opacity-50"></div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center items-center mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-saffron-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-center mb-6">
                    <p className="text-charcoal-700 text-lg leading-relaxed italic">
                      "{testimonial.comment}"
                    </p>
                  </blockquote>

                  {/* Customer Info */}
                  <div className="text-center">
                    <h4 className="text-lg font-display font-bold text-charcoal-900 mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-charcoal-600 flex items-center justify-center">
                      <Crown className="w-3 h-3 mr-1 text-saffron-500" />
                      {testimonial.location}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 opacity-10">
                    <div className="w-full h-full bg-gradient-to-br from-saffron-400 to-emerald-400 rounded-full"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-charcoal-800 hover:text-saffron-600 rounded-full w-12 h-12 transition-all duration-300 shadow-elegant hover:shadow-indian lg:flex hidden"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-charcoal-800 hover:text-saffron-600 rounded-full w-12 h-12 transition-all duration-300 shadow-elegant hover:shadow-indian lg:flex hidden"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-saffron-500 scale-125"
                    : "bg-charcoal-300 hover:bg-charcoal-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <p className="text-lg text-charcoal-600 font-medium">
              Join thousands of satisfied customers
            </p>
            <Button className="bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-elegant hover:shadow-indian">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
