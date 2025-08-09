"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Star, Eye, Crown, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/hooks/use-wishlist";
import { useCart } from "@/hooks/use-cart";

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  images: string[];
  rating: number;
  reviewCount: number;
  badge: string;
  category: string;
  subcategory?: string;
  colors: string[];
  sizes: string[];
  isNew: boolean;
  isPremium: boolean;
  inStock: boolean;
  stockCount: number;
  tags: string[];
}

interface ProductGridProps {
  products: Product[];
  viewMode: "grid" | "list";
}

export function ProductGrid({ products, viewMode }: ProductGridProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleWishlistToggle = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      product,
      quantity: 1,
      selectedSize: product.sizes[0],
      selectedColor: product.colors[0],
    });
  };

  return (
    <div
      className={`grid gap-8 ${
        viewMode === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
      }`}
    >
      {products.map((product, index) => (
        <div
          key={product.id}
          className="group glass-card rounded-3xl overflow-hidden luxury-shadow hover:scale-[1.02] transition-all duration-500"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className={`${viewMode === "list" ? "flex flex-col md:flex-row" : ""}`}>
            {/* Image Wrapper */}
            <div className={`relative overflow-hidden ${viewMode === "list" ? "md:w-80 flex-shrink-0" : ""}`}>
              <Link href={`/product/${product.id}`}>
                <div className={`${viewMode === "list" ? "h-80" : "h-96"} relative`}>
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                  />
                </div>
              </Link>

              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2 text-xs font-bold">
                {product.isPremium && (
                  <div className="premium-gradient text-white px-3 py-1 rounded-full flex items-center gap-1 shadow">
                    <Crown className="w-3 h-3" />
                    <span>PREMIUM</span>
                  </div>
                )}
                {product.isNew && (
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow">
                    <Zap className="w-3 h-3" />
                    <span>NEW</span>
                  </div>
                )}
                {!product.isNew && !product.isPremium && product.badge && (
                  <div className="bg-slate-800 text-white px-3 py-1 rounded-full shadow">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Discount */}
              {product.originalPrice > product.price && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow">
                  {Math.round(
                    ((product.originalPrice - product.price) / product.originalPrice) * 100
                  )}
                  % OFF
                </div>
              )}

              {/* Hover Actions */}
              <div
                className={`absolute top-1/2 right-4 -translate-y-1/2 flex-col space-y-3 transition-all duration-300 hidden md:flex ${
                  hoveredProduct === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
              >
                <Button
                  size="sm"
                  className={`glass-button w-12 h-12 rounded-full p-0 hover:scale-110 transition-transform ${
                    isInWishlist(product.id) ? "bg-red-100 text-red-600" : ""
                  }`}
                  onClick={() => handleWishlistToggle(product)}
                >
                  <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
                </Button>
                <Link href={`/product/${product.id}`}>
                  <Button
                    size="sm"
                    className="glass-button w-12 h-12 rounded-full p-0 hover:scale-110 transition-transform"
                  >
                    <Eye className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Add to Cart Overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent transition-all duration-300 ${
                  hoveredProduct === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Button
                  className="w-full premium-gradient hover:scale-105 text-white font-bold rounded-full py-3 transition-transform"
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  {product.inStock ? "ADD TO CART" : "OUT OF STOCK"}
                </Button>
              </div>
            </div>

            {/* Product Info */}
            <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "text-sunset-500 fill-current" : "text-slate-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-slate-500 ml-2">({product.reviewCount})</span>
                  </div>
                  {!product.inStock && (
                    <span className="text-sm text-red-600 font-bold">Out of Stock</span>
                  )}
                </div>

                {/* Title */}
                <p className="text-sm text-ocean-700 font-semibold tracking-wide uppercase">
                  {product.subtitle}
                </p>
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-slate-700 transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>

                {/* Price */}
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-gradient">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice > product.price && (
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
                        className="w-5 h-5 rounded-full border border-slate-300 hover:scale-110 transition-transform cursor-pointer"
                        style={{
                          backgroundColor:
                            color.toLowerCase().includes("multi") ? "#ff6b6b" : color,
                        }}
                        title={color}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs text-slate-500 self-center">
                        +{product.colors.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Sizes */}
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-slate-600 font-medium">Sizes:</span>
                  <div className="flex space-x-2">
                    {product.sizes.slice(0, 4).map((size) => (
                      <span
                        key={size}
                        className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                      >
                        {size}
                      </span>
                    ))}
                    {product.sizes.length > 4 && (
                      <span className="text-xs text-slate-500 self-center">
                        +{product.sizes.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Stock Warning */}
                {product.inStock && product.stockCount < 10 && (
                  <div className="text-sm text-orange-600 font-medium">
                    Only {product.stockCount} left in stock!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
