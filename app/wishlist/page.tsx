"use client"

import { GoldenHeader } from "@/components/golden-header"
import { GoldenFooter } from "@/components/golden-footer"
import { Button } from "@/components/ui/button"
import { Crown, Heart, ShoppingBag, Trash2, Share2, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useWishlist } from "@/hooks/use-wishlist"
import { useCart } from "@/hooks/use-cart"

export default function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleAddToCart = (product: any) => {
    addToCart({
      product,
      quantity: 1,
      selectedSize: product.sizes[0],
      selectedColor: product.colors[0],
    })
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Wishlist - Jai Laxmi Sarees",
          text: "Check out my wishlist from Jai Laxmi Sarees!",
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Wishlist link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen bg-golden-gradient">
      <GoldenHeader />

      {/* Page Header */}
      <section className="relative py-16 bg-white text-elegant-900 overflow-hidden floral-bg">
        <div className="absolute inset-0 opacity-10 pointer-events-none" />

        <div className="relative container mx-auto px-4">
          <div className="flex items-center gap-6">
            <Link href="/products">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </Link>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="w-6 h-6" style={{color: "#d4af37"}} />
                <span className="font-semibold tracking-widest uppercase text-sm" style={{color: "#b9962f"}}>My Wishlist</span>
              </div>
              <h1 className="text-4xl font-display font-bold golden-text-gradient">SAVED ITEMS</h1>
              <p className="text-charcoal-700 mt-2">{items.length} items in your wishlist</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="glass-card rounded-3xl p-16 max-w-2xl mx-auto luxury-shadow">
              <Heart className="h-24 w-24 text-slate-300 mx-auto mb-8" />
              <h2 className="text-3xl font-display font-bold text-gradient mb-4">Your Wishlist is Empty</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Save your favorite items to your wishlist and never lose track of what you love!
              </p>
              <Link href="/products">
                <Button className="premium-gradient hover:scale-105 text-white font-bold px-12 py-4 rounded-full text-lg transition-all duration-300 shadow-xl">
                  START SHOPPING
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Wishlist Actions */}
            <div className="glass-card rounded-2xl p-6 mb-8 luxury-shadow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-display font-bold text-gradient mb-2">MY WISHLIST</h2>
                  <p className="text-slate-600">Showing {items.length} saved items</p>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="outline" onClick={handleShare} className="glass-button bg-transparent font-semibold">
                    <Share2 className="h-4 w-4 mr-2" />
                    SHARE
                  </Button>
                  {items.length > 0 && (
                    <Button
                      variant="outline"
                      onClick={clearWishlist}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 font-semibold bg-transparent"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      CLEAR ALL
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Wishlist Items */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {items.map((product, index) => (
                <div
                  key={product.id}
                  className="group glass-card rounded-3xl overflow-hidden luxury-shadow hover:scale-105 transition-all duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <Link href={`/product/${product.id}`}>
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={500}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                      />
                    </Link>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 space-y-2">
                      {product.isPremium && (
                        <div className="premium-gradient text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                          <Crown className="w-3 h-3" />
                          <span>PREMIUM</span>
                        </div>
                      )}
                      {product.isNew && (
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</div>
                      )}
                    </div>

                    {/* Discount Badge */}
                    {product.originalPrice && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </div>
                    )}

                    {/* Remove from Wishlist */}
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-1/2 right-4 -translate-y-1/2 glass-button w-12 h-12 rounded-full p-0 hover:scale-110 transition-transform bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>

                    {/* Add to Cart Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        className="w-full premium-gradient hover:scale-105 text-white font-bold rounded-full py-3 transition-transform"
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        {product.inStock ? "ADD TO CART" : "OUT OF STOCK"}
                      </Button>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      {/* Product Info */}
                      <div>
                        <p className="text-sm text-yellow-600 font-semibold tracking-wide uppercase">
                          {product.subtitle}
                        </p>
                        <Link href={`/product/${product.id}`}>
                          <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-slate-700 transition-colors cursor-pointer">
                            {product.name}
                          </h3>
                        </Link>
                      </div>

                      {/* Price */}
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-gradient">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-slate-500 line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Colors */}
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-slate-600 font-medium">Colors:</span>
                        <div className="flex space-x-2">
                          {product.colors.slice(0, 3).map((color, i) => (
                            <div
                              key={i}
                              className="w-5 h-5 rounded-full border-2 border-slate-300"
                              style={{
                                backgroundColor: color.toLowerCase().includes("multi")
                                  ? "#ff6b6b"
                                  : color.toLowerCase().replace(" ", "").replace("deep", "").replace("royal", ""),
                              }}
                              title={color}
                            />
                          ))}
                          {product.colors.length > 3 && (
                            <span className="text-xs text-slate-500 self-center">+{product.colors.length - 3}</span>
                          )}
                        </div>
                      </div>

                      {/* Stock Info */}
                      {product.inStock && product.stockCount < 10 && (
                        <div className="text-sm text-orange-600 font-medium">
                          Only {product.stockCount} left in stock!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="text-center mt-16">
              <div className="glass-card rounded-3xl p-12 max-w-2xl mx-auto luxury-shadow">
                <h3 className="text-2xl font-display font-bold text-gradient mb-4">DISCOVER MORE</h3>
                <p className="text-slate-600 mb-8">
                  Explore our complete collection and find more items to add to your wishlist
                </p>
                <Link href="/products">
                  <Button className="premium-gradient text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-xl">
                    CONTINUE SHOPPING
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      <GoldenFooter />
    </div>
  )
}
