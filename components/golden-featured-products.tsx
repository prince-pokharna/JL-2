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

  return (
    <section className="py-16 bg-theme-light">
      <div className="container-responsive">
        <h2 className="text-3xl font-bold font-display text-theme-primary mb-8 text-center">
          Featured Masterpieces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.slice(0, 8).map((p) => (
            <Card key={p.id} className="group overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-[3/4]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/80"
                      onClick={() => addToWishlist(p)}
                    >
                      <Heart className={`h-6 w-6 ${isInWishlist(p.id) ? "text-red-500" : "text-theme-tertiary"}`} />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-theme-primary">{p.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-theme-primary">
                      ₹{p.price.toLocaleString()}
                    </span>
                    <Button
                      onClick={() => addItem(p, 1)}
                      className="bg-theme-primary text-white hover:bg-theme-secondary"
                    >
                      {isInCart(p.id) ? "Added" : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
