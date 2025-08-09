"use client"

import Link from "next/link"
import Image from "next/image"
import { categories } from "@/lib/data"

export function CategoryPills() {
  return (
    <section className="py-10">
      <div className="container-responsive text-center">
        <h3 className="mb-6 text-sm tracking-widest uppercase" style={{color: "#b9962f"}}>Shop by Categories</h3>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {categories.map((c) => (
            <Link key={c.id} href={`/collections/${c.slug}`} className="group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2" style={{borderColor: "#f2d98a"}}>
                <div className="relative w-full h-full overflow-hidden rounded-full">
                  <Image src={c.image} alt={c.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
              <p className="mt-2 text-sm text-charcoal-700">{c.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 