"use client"

import Image from "next/image"

const spotlight = [
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
  "/placeholder.jpg",
]

export function SpotlightMasonry() {
  return (
    <section className="py-12">
      <div className="container-responsive">
        <h3 className="text-center text-lg tracking-widest uppercase mb-6" style={{color: "#b9962f"}}>Our Spotlight</h3>
        <div className="masonry md:masonry-lg gap-4">
          {spotlight.map((src, i) => (
            <div key={i} className="break-inside rounded-2xl overflow-hidden">
              <div className={`relative w-full ${i % 3 === 0 ? 'h-[380px]' : i % 3 === 1 ? 'h-[280px]' : 'h-[320px]'} rounded-2xl overflow-hidden`}>
                <Image src={src} alt={`Spotlight ${i + 1}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 