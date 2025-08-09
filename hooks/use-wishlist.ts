"use client"

import { useState, useEffect } from "react"
import type { Product } from "@/lib/types"

export function useWishlist() {
  const [items, setItems] = useState<Product[]>([])

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      try {
        setItems(JSON.parse(savedWishlist))
      } catch (error) {
        console.error("Error loading wishlist from localStorage:", error)
      }
    }
  }, [])

  // Save wishlist to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(items))
  }, [items])

  const addItem = (product: Product) => {
    setItems((currentItems) => {
      if (currentItems.find((item) => item.id === product.id)) {
        return currentItems
      }
      return [...currentItems, product]
    })
  }

  const removeItem = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const toggleItem = (product: Product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)
      if (existingItem) {
        return currentItems.filter((item) => item.id !== product.id)
      }
      return [...currentItems, product]
    })
  }

  const clearWishlist = () => {
    setItems([])
  }

  const isInWishlist = (id: string) => {
    return items.some((item) => item.id === id)
  }

  const getItemCount = () => {
    return items.length
  }

  return {
    items,
    addItem,
    removeItem,
    toggleItem,
    clearWishlist,
    isInWishlist,
    getItemCount,
  }
}
