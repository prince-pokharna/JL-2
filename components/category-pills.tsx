"use client"

import Link from "next/link"
import Image from "next/image"
import { categories } from "@/lib/data"

export function CategoryPills() {
  return (
    <section className="py-16">
      <div className="container-responsive text-center">
        <h2 className="text-3xl font-bold font-display text-theme-primary mb-8">
          Shop by Category
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {categories.map((c) => (
            <Link key={c.id} href={`/collections/${c.slug}`} className="group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-theme-light group-hover:border-accent-gold transition-colors">
                <div className="relative w-full h-full">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <p className="mt-4 text-lg font-medium text-theme-secondary">
                {c.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 