"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  [
    "/placeholder.jpg",
    "/placeholder.jpg",
    "/placeholder.jpg",
    "/placeholder.jpg",
  ],
  [
    "/placeholder.jpg",
    "/placeholder.jpg",
    "/placeholder.jpg",
    "/placeholder.jpg",
  ],
]

export function MosaicHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  const images = slides[index]

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#faf4e6] via-[#fff8f0] to-[#f8efe1]">
      {/* Mosaic grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 p-2 md:p-4">
        <AnimatePresence>
          {images.map((src, i) => (
            <motion.div
              key={i + index} // ensures re-render animation
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="relative h-[260px] sm:h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Hero ${i + 1}`}
                fill
                priority
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
              {/* Soft gradient overlay for warmth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Decorative Overlay Text */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Subtle Mandala / Floral top corners */}
        <div className="absolute top-4 left-4 w-20 h-20 bg-[url('/mandala-corner.svg')] bg-contain bg-no-repeat opacity-30" />
        <div className="absolute top-4 right-4 w-20 h-20 bg-[url('/mandala-corner.svg')] bg-contain bg-no-repeat opacity-30 rotate-90" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#b88a44] via-[#e0b77b] to-[#b88a44] drop-shadow-md text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Grace in Every Look
          <br />
          A Story in Every Thread
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 text-lg md:text-xl text-[#5c4630] max-w-xl leading-relaxed font-light"
        >
          Where timeless Indian craftsmanship meets modern elegance.
        </motion.p>
      </div>
    </section>
  )
}
