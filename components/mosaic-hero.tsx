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
    <section className="relative w-full h-screen bg-theme-light flex items-center justify-center">
      <div className="absolute inset-0 radial-accent-background opacity-20"></div>
      <div className="relative z-10 text-center text-theme-primary">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold font-display"
        >
          Grace in Every Look
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 text-xl md:text-2xl"
        >
          A Story in Every Thread
        </motion.p>
      </div>
    </section>
  )
}
