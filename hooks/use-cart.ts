"use client"

import { useState, useEffect } from "react"
import type { Product } from "@/lib/types"

interface CartItem extends Product {
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addItem = (product: Product, quantity = 1, size?: string, color?: string) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id && item.selectedSize === size && item.selectedColor === color,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity,
          selectedSize: size,
          selectedColor: color,
        },
      ]
    })
  }

  const removeItem = (id: string, size?: string, color?: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => !(item.id === id && item.selectedSize === size && item.selectedColor === color)),
    )
  }

  const updateQuantity = (id: string, quantity: number, size?: string, color?: string) => {
    if (quantity <= 0) {
      removeItem(id, size, color)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.selectedSize === size && item.selectedColor === color ? { ...item, quantity } : item,
      ),
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getItemCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const isInCart = (id: string, size?: string, color?: string) => {
    return items.some((item) => item.id === id && item.selectedSize === size && item.selectedColor === color)
  }

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemCount,
    getTotalPrice,
    isInCart,
  }
}
