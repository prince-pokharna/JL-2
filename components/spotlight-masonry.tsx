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
    <section className="py-16">
      <div className="container-responsive">
        <h2 className="text-3xl font-bold font-display text-theme-primary mb-8 text-center">
          In the Spotlight
        </h2>
        <div className="masonry md:masonry-lg gap-8">
          {spotlight.map((src, i) => (
            <div key={i} className="break-inside rounded-lg overflow-hidden">
              <div
                className={`relative w-full ${
                  i % 3 === 0 ? "h-[380px]" : i % 3 === 1 ? "h-[280px]" : "h-[320px]"
                }`}
              >
                <Image
                  src={src}
                  alt={`Spotlight ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 