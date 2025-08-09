"use client"

import { GoldenHeader } from "@/components/golden-header"
import { GoldenFooter } from "@/components/golden-footer"
import { Button } from "@/components/ui/button"
import { Crown, Heart, Award, Users, Sparkles, CheckCircle } from "lucide-react"
import Image from "next/image"

const milestones = [
  { year: "1985", title: "Founded", description: "Started as a small family business in Mumbai" },
  { year: "1995", title: "First Store", description: "Opened our flagship store in the textile district" },
  { year: "2005", title: "Online Presence", description: "Launched our first e-commerce website" },
  { year: "2015", title: "National Recognition", description: "Won the Best Traditional Wear Brand award" },
  { year: "2020", title: "Digital Transformation", description: "Complete digital makeover and modern platform" },
  { year: "2024", title: "Premium Collection", description: "Launched our luxury premium collection line" },
]

const values = [
  {
    icon: Heart,
    title: "PASSION FOR CRAFT",
    description:
      "Every piece is crafted with love and attention to detail, preserving traditional techniques passed down through generations.",
  },
  {
    icon: Award,
    title: "QUALITY EXCELLENCE",
    description:
      "We source only the finest fabrics and materials, ensuring each garment meets our exacting standards of quality.",
  },
  {
    icon: Users,
    title: "CUSTOMER FIRST",
    description:
      "Your satisfaction is our priority. We provide personalized service and support throughout your shopping journey.",
  },
  {
    icon: Sparkles,
    title: "INNOVATION",
    description:
      "While honoring tradition, we embrace modern design and technology to create contemporary masterpieces.",
  },
]

const achievements = [
  "25,000+ Happy Customers",
  "1000+ Unique Designs",
  "50+ Skilled Artisans",
  "15+ Awards Won",
  "99% Customer Satisfaction",
  "24/7 Customer Support",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-golden-gradient">
      <GoldenHeader />

      {/* Hero Section */}
      <section className="relative py-20 bg-white text-elegant-900 overflow-hidden floral-bg">
        <div className="absolute inset-0 opacity-10 pointer-events-none" />

        <div className="relative container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Crown className="w-8 h-8 text-gold-500" />
            <span className="text-gold-600 font-semibold tracking-widest uppercase">Our Story</span>
            <Crown className="w-8 h-8 text-gold-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold golden-text-gradient mb-6">ABOUT JAI LAXMI</h1>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            A legacy of excellence in traditional Indian wear, crafted with passion and perfected over generations
          </p>
          <div className="ornament-divider mt-10" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-display font-bold golden-text-gradient mb-6">OUR HERITAGE</h2>
                <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                  Founded in 1985 by Mrs. Laxmi Devi, Jai Laxmi Sarees began as a small family business with a simple
                  vision: to preserve and celebrate the rich tradition of Indian textiles while making them accessible
                  to modern women.
                </p>
                <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                  What started as a humble store in Mumbai's textile district has grown into a trusted name in
                  traditional Indian wear, serving customers across the globe. Our commitment to quality, authenticity,
                  and customer satisfaction has remained unchanged through the decades.
                </p>
                <p className="text-lg text-charcoal-700 leading-relaxed">
                  Today, we continue to honor our founder's vision by combining traditional craftsmanship with
                  contemporary design, creating pieces that celebrate both heritage and modernity.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                    <span className="text-charcoal-800 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="golden-card rounded-3xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Jai Laxmi Heritage"
                  width={500}
                  height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Mrs. Laxmi Devi</h3>
                  <p className="text-white/90">Founder & Visionary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold golden-text-gradient mb-4">OUR JOURNEY</h2>
            <p className="text-xl text-charcoal-700 max-w-2xl mx-auto">
              Milestones that mark our evolution from a small family business to a premium brand
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full" style={{background: "linear-gradient(to bottom,#f7e7b1,#d4af37)"}}></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div className="golden-card rounded-2xl p-8">
                      <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4" style={{background: "#f7e7b1", color: "#111827"}}>
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-display font-bold text-elegant-900 mb-3">{milestone.title}</h3>
                      <p className="text-charcoal-700 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full border-4 border-white shadow-elegant" style={{background: "#d4af37"}}></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-golden-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold golden-text-gradient mb-4">OUR VALUES</h2>
            <p className="text-xl text-charcoal-700 max-w-2xl mx-auto">
              The principles that guide everything we do and every piece we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="golden-card rounded-3xl p-8 hover:scale-105 transition-all duration-500 text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: "#f7e7b1"}}>
                  <value.icon className="w-8 h-8" style={{color: "#111827"}} />
                </div>
                <h3 className="text-xl font-display font-bold text-elegant-900 mb-4">{value.title}</h3>
                <p className="text-charcoal-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="golden-card rounded-3xl p-16 text-center max-w-4xl mx-auto">
            <Crown className="w-16 h-16 mx-auto mb-8" style={{color: "#d4af37"}} />
            <h2 className="text-4xl font-display font-bold golden-text-gradient mb-6">JOIN OUR STORY</h2>
            <p className="text-xl text-charcoal-700 mb-8 max-w-2xl mx-auto">
              Become part of our legacy. Experience the perfect blend of tradition and modernity with our exquisite
              collection of Indian wear.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="golden-button px-12 py-4 text-lg">EXPLORE COLLECTIONS</Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 golden-border text-elegant-900 px-12 py-4 rounded-xl text-lg font-semibold"
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </section>

      <GoldenFooter />
    </div>
  )
}
