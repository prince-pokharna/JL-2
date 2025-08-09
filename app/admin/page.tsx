"use client"

import { StockManagementDashboard } from "@/components/stock-management-dashboard"
import { GoldenHeader } from "@/components/golden-header"
import { PremiumFooter } from "@/components/premium-footer"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-premium-gradient">
      <GoldenHeader />
      <div className="pt-20">
        <StockManagementDashboard />
      </div>
      <PremiumFooter />
    </div>
  )
}
