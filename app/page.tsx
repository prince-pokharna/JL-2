import { GoldenHeader } from "@/components/golden-header"
import { GoldenFooter } from "@/components/golden-footer"
import { MosaicHero } from "@/components/mosaic-hero"
import { CategoryPills } from "@/components/category-pills"
import { RecommendedMotionGrid } from "@/components/recommended-motion-grid"
import { GoldenFeaturedProducts } from "@/components/golden-featured-products"
import { SpotlightMasonry } from "@/components/spotlight-masonry"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <GoldenHeader />
      <MosaicHero />
      <CategoryPills />
      <RecommendedMotionGrid />
      <GoldenFeaturedProducts />
      <SpotlightMasonry />
      <GoldenFooter />
    </main>
  )
}
