"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { featuredProducts } from "@/lib/data"

export function RecommendedMotionGrid() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const items = featuredProducts.slice(0, 6)

  return (
    <section className="py-16">
      <div className="container-responsive">
        <h2 className="text-3xl font-bold font-display text-theme-primary mb-8 text-center">
          Recommended For You
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((p, i) => (
            <Link href="/products" key={p.id} className="block group">
              <div
                className="relative overflow-hidden rounded-lg bg-theme-light"
                style={{
                  height: i % 3 === 0 ? 420 : 300,
                  transform: mounted ? "translateY(0px)" : "translateY(20px)",
                  opacity: mounted ? 1 : 0,
                  transition: `all .7s ease ${i * 80}ms`,
                }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-bold text-lg">{p.name}</h4>
                  <p className="text-sm">From ₹{p.price.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 