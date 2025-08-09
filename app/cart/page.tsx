"use client"

import { useState } from "react"
import { GoldenHeader } from "@/components/golden-header"
import { GoldenFooter } from "@/components/golden-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Gift, Truck, Shield, Tag, Crown, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CartItem {
  id: string
  name: string
  subtitle: string
  price: number
  originalPrice: number
  image: string
  quantity: number
  size: string
  color: string
  inStock: boolean
  isPremium: boolean
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Royal Silk Banarasi Saree",
      subtitle: "Heritage Collection",
      price: 15999,
      originalPrice: 19999,
      image: "/placeholder.svg?height=300&width=200",
      quantity: 1,
      size: "Free Size",
      color: "Deep Red",
      inStock: true,
      isPremium: true,
    },
    {
      id: "2",
      name: "Designer Bridal Lehenga",
      subtitle: "Bridal Couture",
      price: 45999,
      originalPrice: 55999,
      image: "/placeholder.svg?height=300&width=200",
      quantity: 1,
      size: "M",
      color: "Royal Pink",
      inStock: true,
      isPremium: true,
    },
    {
      id: "3",
      name: "Elegant Coord Set",
      subtitle: "Contemporary Wear",
      price: 5999,
      originalPrice: 7999,
      image: "/placeholder.svg?height=300&width=200",
      quantity: 2,
      size: "L",
      color: "Mint Green",
      inStock: false,
      isPremium: false,
    },
  ])

  const [promoCode, setPromoCode] = useState("")
  const [appliedPromo, setAppliedPromo] = useState("")

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setAppliedPromo("WELCOME10")
      setPromoCode("")
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const savings = cartItems.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0)
  const promoDiscount = appliedPromo ? Math.floor(subtotal * 0.1) : 0
  const shipping = subtotal > 29999 ? 0 : 499
  const total = subtotal - promoDiscount + shipping

  return (
    <div className="min-h-screen bg-golden-gradient">
      <GoldenHeader />

      {/* Page Header */}
      <section className="relative py-16 bg-white text-elegant-900 overflow-hidden floral-bg">
        <div className="absolute inset-0 opacity-10 pointer-events-none" />

        <div className="relative container mx-auto px-4">
          <div className="flex items-center gap-6">
            <Link href="/products">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <ShoppingBag className="w-6 h-6" style={{color: "#d4af37"}} />
                <span className="font-semibold tracking-widest uppercase text-sm" style={{color: "#b9962f"}}>Shopping Cart</span>
              </div>
              <h1 className="text-4xl font-display font-bold golden-text-gradient">YOUR CART</h1>
              <p className="text-charcoal-700 mt-2">{cartItems.length} items selected</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="glass-card rounded-3xl p-16 max-w-2xl mx-auto luxury-shadow">
              <ShoppingBag className="h-24 w-24 text-slate-300 mx-auto mb-8" />
              <h2 className="text-3xl font-display font-bold text-gradient mb-4">Your Cart is Empty</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Looks like you haven't added any items to your cart yet. Discover our beautiful collection!
              </p>
              <Link href="/products">
                <Button className="premium-gradient hover:scale-105 text-white font-bold px-12 py-4 rounded-full text-lg transition-all duration-300 shadow-xl">
                  CONTINUE SHOPPING
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-card rounded-3xl overflow-hidden luxury-shadow">
                <div className="p-8 border-b border-slate-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display font-bold text-gradient">CART ITEMS ({cartItems.length})</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-500 hover:text-red-600 transition-colors"
                      onClick={() => setCartItems([])}
                    >
                      Clear All
                    </Button>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-6 p-6 glass-card rounded-2xl">
                      <div className="relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={150}
                          height={200}
                          className="rounded-xl object-cover shadow-lg"
                        />
                        {item.isPremium && (
                          <div className="absolute -top-2 -right-2 premium-gradient text-white p-1 rounded-full">
                            <Crown className="w-4 h-4" />
                          </div>
                        )}
                        {!item.inStock && (
                          <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              Out of Stock
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 space-y-4">
                        <div>
                          <p className="text-sm text-yellow-600 font-semibold tracking-wide uppercase">
                            {item.subtitle}
                          </p>
                          <h3 className="text-xl font-display font-bold text-slate-900">{item.name}</h3>
                          <div className="flex items-center gap-6 text-sm text-slate-600 mt-2">
                            <span>
                              Size: <span className="font-semibold">{item.size}</span>
                            </span>
                            <span>
                              Color: <span className="font-semibold">{item.color}</span>
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-bold text-gradient">₹{item.price.toLocaleString()}</span>
                          <span className="text-lg text-slate-500 line-through">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                            Save ₹{(item.originalPrice - item.price).toLocaleString()}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center glass-card rounded-full p-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10 rounded-full hover:bg-slate-200"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={!item.inStock}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="px-4 py-2 min-w-[3rem] text-center font-bold">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10 rounded-full hover:bg-slate-200"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={!item.inStock}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full px-4 py-2"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promo Code */}
              <div className="glass-card rounded-3xl p-8 luxury-shadow">
                <div className="flex items-center gap-4">
                  <Tag className="h-6 w-6 text-yellow-600" />
                  <div className="flex-1 flex gap-4">
                    <Input
                      placeholder="Enter promo code (try: WELCOME10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 glass-card border-0 focus:ring-2 focus:ring-yellow-400"
                    />
                    <Button
                      onClick={applyPromoCode}
                      className="premium-gradient text-white font-bold px-8 rounded-full hover:scale-105 transition-transform"
                    >
                      APPLY
                    </Button>
                  </div>
                </div>
                {appliedPromo && (
                  <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-green-800 font-semibold">
                      🎉 Promo code "{appliedPromo}" applied! You saved ₹{promoDiscount.toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="glass-card rounded-3xl overflow-hidden luxury-shadow">
                <div className="p-8 border-b border-slate-200">
                  <h2 className="text-2xl font-display font-bold text-gradient">ORDER SUMMARY</h2>
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-lg">
                      <span className="text-slate-600">Subtotal</span>
                      <span className="font-bold">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-lg text-green-600">
                      <span>You Save</span>
                      <span className="font-bold">-₹{savings.toLocaleString()}</span>
                    </div>
                    {appliedPromo && (
                      <div className="flex justify-between text-lg text-green-600">
                        <span>Promo Discount</span>
                        <span className="font-bold">-₹{promoDiscount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg">
                      <span className="text-slate-600">Shipping</span>
                      <span className="font-bold">{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                    </div>
                    {shipping === 0 && (
                      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-xl">
                        <Truck className="h-4 w-4" />
                        <span className="font-semibold">Free shipping applied!</span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="flex justify-between text-2xl font-bold">
                    <span className="text-slate-900">Total</span>
                    <span className="text-gradient">₹{total.toLocaleString()}</span>
                  </div>

                  <Button className="w-full premium-gradient hover:scale-105 text-white font-bold py-4 rounded-full text-lg transition-all duration-300 shadow-xl">
                    PROCEED TO CHECKOUT
                  </Button>

                  <div className="text-center">
                    <Link href="/products">
                      <Button
                        variant="ghost"
                        className="text-slate-600 hover:text-slate-900 font-semibold rounded-full px-6"
                      >
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Security & Benefits */}
              <div className="glass-card rounded-3xl p-8 luxury-shadow space-y-6">
                <h3 className="text-lg font-display font-bold text-slate-900">WHY SHOP WITH US</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="glass-card rounded-full p-3">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Secure Checkout</p>
                      <p className="text-sm text-slate-600">SSL encrypted payment</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="glass-card rounded-full p-3">
                      <Truck className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Free Shipping</p>
                      <p className="text-sm text-slate-600">On orders above ₹29,999</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="glass-card rounded-full p-3">
                      <Gift className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Easy Returns</p>
                      <p className="text-sm text-slate-600">7-day return policy</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="glass-card rounded-full p-3">
                      <Star className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Premium Quality</p>
                      <p className="text-sm text-slate-600">Handcrafted excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <GoldenFooter />
    </div>
  )
}
