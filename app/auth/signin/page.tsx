"use client"

import type React from "react"

import { useState } from "react"
import { GoldenHeader } from "@/components/golden-header"
import { GoldenFooter } from "@/components/golden-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Crown, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
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
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold font-display text-theme-primary">Welcome Back</h1>
            <p className="mt-2 text-lg text-theme-secondary">Sign in to your account</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
              <div className="relative">
                <Input type={showPassword ? "text" : "password"} placeholder="Password" value={formData.password} onChange={(e) => handleInputChange("password", e.target.value)} required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
                  {showPassword ? <EyeOff className="h-6 w-6 text-theme-tertiary" /> : <Eye className="h-6 w-6 text-theme-tertiary" />}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" checked={formData.rememberMe} onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)} />
                  <label htmlFor="remember" className="text-theme-secondary">Remember me</label>
                </div>
                <Link href="/auth/forgot-password" className="text-accent-gold hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <Button type="submit" disabled={isLoading} className="w-full bg-theme-primary text-white hover:bg-theme-secondary">
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="my-6 text-center text-theme-tertiary">
              OR
            </div>

            <div className="space-y-4">
              <Button variant="outline" className="w-full">Continue with Google</Button>
              <Button variant="outline" className="w-full">Continue with Facebook</Button>
            </div>

            <div className="text-center mt-6">
              <p className="text-theme-secondary">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-accent-gold hover:underline">
                  Sign up
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
