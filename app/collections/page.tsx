"use client"

import Link from "next/link"
import Image from "next/image"
import { GoldenHeader } from "@/components/golden-header"
import { GoldenFooter } from "@/components/golden-footer"
import { categories } from "@/lib/data"

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <GoldenHeader />

      <section className="pt-24 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold premium-text-gradient">Collections</h1>
      </section>

      <section className="pb-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((c) => (
              <Link key={c.id} href={`/collections/${c.slug}`} className="group">
                <div className="relative rounded-2xl overflow-hidden bg-white border border-elegant-200 hover:shadow-elegant transition">
                  <div className="relative w-full h-72">
                    <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-charcoal-900">{c.name}</h3>
                    <p className="text-charcoal-600 text-sm line-clamp-2">{c.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldenFooter />
    </div>
  )
}
