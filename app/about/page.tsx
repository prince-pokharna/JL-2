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
]

const values = [
  {
    icon: Heart,
    title: "Passion for Craft",
    description: "Every piece is crafted with love and attention to detail, preserving traditional techniques.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We source only the finest fabrics and materials, ensuring each garment meets our exacting standards.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We provide personalized service and support.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "While honoring tradition, we embrace modern design and technology.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-theme-light">
      <GoldenHeader />

      <main>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container-responsive">
            <h1 className="text-5xl font-bold font-display text-theme-primary">About Jai Laxmi</h1>
            <p className="mt-4 text-xl text-theme-secondary max-w-2xl mx-auto">
              A legacy of excellence in traditional Indian wear, crafted with passion and perfected over generations.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container-responsive grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-display text-theme-primary mb-6">Our Heritage</h2>
              <p className="text-lg text-theme-secondary mb-4">
                Founded in 1985, Jai Laxmi Sarees began as a small family business with a simple vision: to preserve and celebrate the rich tradition of Indian textiles.
              </p>
              <p className="text-lg text-theme-secondary">
                Today, we continue to honor our founder's vision by combining traditional craftsmanship with contemporary design.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Jai Laxmi Heritage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container-responsive text-center">
            <h2 className="text-4xl font-bold font-display text-theme-primary mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 w-0.5 h-full bg-theme-quaternary -translate-x-1/2"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center w-full">
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold font-display text-theme-primary">{milestone.year}</h3>
                        <p className="text-lg text-theme-secondary">{milestone.title}</p>
                      </div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container-responsive text-center">
            <h2 className="text-4xl font-bold font-display text-theme-primary mb-12">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-theme-light p-8 rounded-lg">
                  <value.icon className="h-12 w-12 mx-auto text-accent-gold mb-4" />
                  <h3 className="text-xl font-bold text-theme-primary">{value.title}</h3>
                  <p className="mt-2 text-theme-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <GoldenFooter />
    </div>
  )
}
