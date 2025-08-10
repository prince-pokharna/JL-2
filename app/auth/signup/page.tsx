"use client"

import type React from "react"

import { useState } from "react"
import { GoldenHeader } from "@/components/golden-header"
import { GoldenFooter } from "@/components/golden-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Crown, User, Mail, Lock, Eye, EyeOff, ArrowRight, Phone, Gift } from "lucide-react"
import Link from "next/link"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: true,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-theme-light min-h-screen">
      <GoldenHeader />

      <main className="container-responsive py-20 flex items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold font-display text-theme-primary">Create an Account</h1>
            <p className="mt-2 text-lg text-theme-secondary">Join us and get a 10% discount on your first order!</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} required />
                <Input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} required />
              </div>
              <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
              <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
              <div className="relative">
                <Input type={showPassword ? "text" : "password"} placeholder="Password" value={formData.password} onChange={(e) => handleInputChange("password", e.target.value)} required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
                  {showPassword ? <EyeOff className="h-6 w-6 text-theme-tertiary" /> : <Eye className="h-6 w-6 text-theme-tertiary" />}
                </button>
              </div>
              <div className="relative">
                <Input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" value={formData.confirmPassword} onChange={(e) => handleInputChange("confirmPassword", e.target.value)} required />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
                  {showConfirmPassword ? <EyeOff className="h-6 w-6 text-theme-tertiary" /> : <Eye className="h-6 w-6 text-theme-tertiary" />}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" checked={formData.agreeToTerms} onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)} />
                <label htmlFor="terms" className="text-theme-secondary">I agree to the <Link href="/terms" className="text-accent-gold hover:underline">Terms of Service</Link></label>
              </div>
              <Button type="submit" disabled={isLoading || !formData.agreeToTerms} className="w-full bg-theme-primary text-white hover:bg-theme-secondary">
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-theme-secondary">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-accent-gold hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <GoldenFooter />
    </div>
  )
}
