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
    <section className="py-12">
      <div className="container-responsive">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <Link href="/products" key={p.id} className="block group">
              <div
                className="relative overflow-hidden rounded-3xl bg-white border border-elegant-200"
                style={{
                  height: i % 3 === 0 ? 420 : 300,
                  transform: mounted ? "translateY(0px)" : "translateY(20px)",
                  opacity: mounted ? 1 : 0,
                  transition: `all .7s ease ${i * 80}ms`,
                }}
              >
                <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white/85 backdrop-blur p-3">
                  <p className="text-xs text-charcoal-600">{p.category}</p>
                  <h4 className="font-semibold text-elegant-900 line-clamp-1">{p.name}</h4>
                  <div className="text-sm text-charcoal-800">From ₹{p.price.toLocaleString()}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 