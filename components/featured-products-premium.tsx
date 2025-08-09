"use client"

import Link from "next/link"
import { Star, Heart, ShoppingCart, Eye, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { featuredProducts } from "@/lib/data"
import { useCart } from "@/hooks/use-cart"
import { useWishlist } from "@/hooks/use-wishlist"

export function FeaturedProductsPremium() {
  const { addItem, isInCart } = useCart()
  const { addItem: addToWishlist, isInWishlist } = useWishlist()

  const handleAddToCart = (product: any) => {
    addItem(product, 1)
  }

  const handleAddToWishlist = (product: any) => {
    addToWishlist(product)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-elegant-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 indian-card rounded-full mb-6">
            <Crown className="w-5 h-5 text-saffron-500 mr-2 animate-pulse-soft" />
            <span className="text-charcoal-700 text-sm font-semibold tracking-wider uppercase">
              Featured Collection
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-charcoal-900">Handpicked</span>
            <br />
            <span className="indian-text-gradient">Premium Designs</span>
          </h2>
          
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most loved pieces, carefully selected for their exceptional quality, 
            intricate craftsmanship, and timeless appeal.
          </p>
          
          <div className="ornament-divider mt-8"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {featuredProducts.slice(0, 8).map((product, index) => (
            <Card 
              key={product.id} 
              className="group indian-card overflow-hidden transition-all duration-500 hover:shadow-indian hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10">
                    {product.isNew && (
                      <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white mb-2 shadow-indian">
                        NEW
                      </Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-indian">
                        BESTSELLER
                      </Badge>
                    )}
                    {product.discount && (
                      <Badge className="bg-gradient-to-r from-royal-500 to-royal-600 text-white mt-2 shadow-indian">
                        {product.discount}% OFF
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleAddToWishlist(product)}
                      className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-elegant indian-hover ${
                        isInWishlist(product.id) 
                          ? "text-saffron-600 hover:text-saffron-700" 
                          : "text-charcoal-600 hover:text-saffron-600"
                      }`}
                    >
                      <Heart className="w-4 h-4" fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                    </Button>
                    
                    <Link href={`/products/${product.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-charcoal-600 hover:text-saffron-600 shadow-elegant indian-hover"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Stock indicator */}
                  {product.stockCount && product.stockCount < 10 && (
                    <div className="absolute bottom-4 left-4 z-10">
                      <Badge variant="destructive" className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-indian animate-pulse-soft">
                        Only {product.stockCount} left!
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating!)
                                ? "text-saffron-500 fill-current"
                                : "text-elegant-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-charcoal-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  )}

                  {/* Product Name */}
                  <div>
                    <h3 className="text-lg font-display font-bold text-charcoal-900 group-hover:text-saffron-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-charcoal-600 mt-1 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Colors */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-charcoal-500 font-medium">Colors:</span>
                      <div className="flex space-x-1">
                        {product.colors.slice(0, 3).map((color, colorIndex) => (
                          <div
                            key={colorIndex}
                            className="w-4 h-4 rounded-full border-2 border-elegant-300 shadow-sm"
                            style={{ 
                              backgroundColor: color === "Deep Burgundy" ? "#6C2E34" : 
                                             color === "Golden" ? "#ff8f00" : 
                                             color === "Cream" ? "#E9DDCF" :
                                             color === "Dusty Rose" ? "#D9B4B0" :
                                             color === "Forest Green" ? "#1E4B3A" :
                                             color === "Charcoal" ? "#3B2E2E" : "#6b7280"
                            }}
                            title={color}
                          />
                        ))}
                        {product.colors.length > 3 && (
                          <span className="text-xs text-charcoal-500">+{product.colors.length - 3}</span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-charcoal-900">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-charcoal-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full font-semibold py-3 rounded-full transition-all duration-300 ${
                      product.inStock
                        ? "bg-gradient-to-r from-charcoal-900 to-charcoal-800 hover:from-charcoal-800 hover:to-charcoal-700 text-white hover:shadow-indian hover:scale-105"
                        : "bg-elegant-300 text-charcoal-500 cursor-not-allowed"
                    }`}
                  >
                    {product.inStock ? (
                      <>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                      </>
                    ) : (
                      "Out of Stock"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link href="/products">
              <Button className="bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-elegant hover:shadow-indian">
                <Sparkles className="w-5 h-5 mr-2" />
                View All Products
              </Button>
            </Link>
            
            <span className="text-charcoal-500 hidden sm:block">or</span>
            
            <Link href="/collections">
              <Button 
                variant="outline" 
                className="bg-white border-2 border-charcoal-300 text-charcoal-800 hover:bg-charcoal-50 hover:border-saffron-500 hover:text-saffron-600 font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Browse by Category
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
