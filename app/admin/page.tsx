"use client"

import { StockManagementDashboard } from "@/components/stock-management-dashboard"
import { PremiumHeader } from "@/components/premium-header"
import { PremiumFooter } from "@/components/premium-footer"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-premium-gradient">
      <PremiumHeader />
      <div className="pt-20">
        <StockManagementDashboard />
      </div>
      <PremiumFooter />
    </div>
  )
}
