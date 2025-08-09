"use client";

import { useState } from "react";
import { featuredProducts } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, Star } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";

export function GoldenFeaturedProducts() {
  const { addItem, isInCart } = useCart();
  const { addItem: addToWishlist, isInWishlist } = useWishlist();
  const [quickViewId, setQuickViewId] = useState<string | null>(null);

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#fff8f0] via-[#fff3e8] to-[#fde3c8] overflow-hidden">
      {/* Decorative gradient shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-[#ffd89b] to-[#ffa17f] rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#ffecd2] to-[#fcb69f] rounded-full opacity-30 blur-2xl" />
      </div>

      <div className="container-responsive relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#d4af37] bg-clip-text text-transparent">
            Featured Masterpieces
          </h2>
          <p className="mt-3 text-charcoal-700 max-w-2xl mx-auto text-lg">
            Our most loved designs blending Indian heritage with modern luxury.
          </p>
          <div className="mt-6 w-24 h-[3px] mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.slice(0, 8).map((p) => (
            <Card
              key={p.id}
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-[#f5e1c0]"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {p.isNew && (
                      <Badge className="bg-[#d4af37] text-white shadow-md">
                        NEW
                      </Badge>
                    )}
                    {p.isBestseller && (
                      <Badge className="bg-[#8b5e3c]/90 text-white shadow-md">
                        BESTSELLER
                      </Badge>
                    )}
                    {p.discount && (
                      <Badge className="bg-white/90 border border-[#d4af37] text-[#8b5e3c] shadow-sm">
                        {p.discount}% OFF
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-3 group-hover:translate-x-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-[#fff4d6]"
                      onClick={() => addToWishlist(p)}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isInWishlist(p.id)
                            ? "text-[#d97706]"
                            : "text-[#6b4c2a]"
                        }`}
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-[#fff4d6]"
                      onClick={() => setQuickViewId(p.id)}
                    >
                      <Eye className="w-5 h-5 text-[#6b4c2a]" />
                    </Button>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1 text-[#d4af37]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.round(p.rating || 0)
                            ? "fill-[#d4af37] text-[#d4af37]"
                            : "text-charcoal-300"
                        }`}
                      />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-[#6b4c2a]">
                    {p.name}
                  </h3>
                  <p className="text-sm text-charcoal-600 line-clamp-2">
                    {p.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="text-lg font-bold text-[#6b4c2a]">
                        ₹{p.price.toLocaleString()}
                      </span>
                      {p.originalPrice && (
                        <span className="text-sm text-charcoal-500 line-through ml-2">
                          ₹{p.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <Button
                      onClick={() => addItem(p, 1)}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b78e28] text-white hover:shadow-lg transition-all"
                    >
                      {isInCart(p.id) ? "Added" : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick View */}
        {quickViewId && (
          <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
            onClick={() => setQuickViewId(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full p-6 border border-[#f5e1c0] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-2xl font-display bg-gradient-to-r from-[#d4af37] to-[#b78e28] bg-clip-text text-transparent mb-4">
                Quick View
              </h4>
              <p className="text-charcoal-700">
                A detailed quick view modal can be implemented here with
                size/color selections and gallery.
              </p>
              <div className="mt-4 text-right">
                <Button
                  className="bg-gradient-to-r from-[#d4af37] to-[#b78e28] text-white rounded-full px-6"
                  onClick={() => setQuickViewId(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
