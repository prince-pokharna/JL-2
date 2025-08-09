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
    <div className="min-h-screen bg-golden-gradient">
      <GoldenHeader />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Crown className="w-8 h-8" style={{color: "#d4af37"}} />
              <span className="font-semibold tracking-widest uppercase text-sm" style={{color: "#b9962f"}}>Join Our Family</span>
              <Crown className="w-8 h-8" style={{color: "#d4af37"}} />
            </div>
            <h1 className="text-4xl font-display font-bold golden-text-gradient mb-4">CREATE ACCOUNT</h1>
            <p className="text-charcoal-700">
              Join thousands of satisfied customers and start your premium shopping journey
            </p>
          </div>

          {/* Welcome Offer */}
          <div className="golden-card p-6 text-center mb-8">
            <Gift className="w-12 h-12" style={{color: "#d4af37"}} />
            <h3 className="text-xl font-display font-bold text-elegant-900 mb-2">WELCOME OFFER</h3>
            <p className="text-charcoal-700 mb-4">Get 10% off on your first order when you sign up today!</p>
            <div className="inline-block px-4 py-2 rounded-full text-sm font-bold" style={{background: "#f7e7b1", color: "#111827"}}>
              Use Code: WELCOME10
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="golden-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-elegant-900 mb-2">FIRST NAME</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      className="pl-12 h-12 bg-white border-elegant-300 focus:border-gold-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-elegant-900 mb-2">LAST NAME</label>
                  <Input
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="h-12 bg-white border-elegant-300 focus:border-gold-400"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-bold text-elegant-900 mb-2">EMAIL ADDRESS</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="pl-12 h-12 bg-white border-elegant-300 focus:border-gold-400"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-bold text-elegant-900 mb-2">PHONE NUMBER</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400 w-5 h-5" />
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-12 h-12 bg-white border-elegant-300 focus:border-gold-400"
                  />
                </div>
              </div>

              {/* Password Fields */}
              <div>
                <label className="block text-sm font-bold text-elegant-900 mb-2">PASSWORD</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400 w-5 h-5" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    required
                    className="pl-12 pr-12 h-12 bg-white border-elegant-300 focus:border-gold-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-charcoal-400 hover:text-charcoal-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-elegant-900 mb-2">CONFIRM PASSWORD</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400 w-5 h-5" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    required
                    className="pl-12 pr-12 h-12 bg-white border-elegant-300 focus:border-gold-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-charcoal-400 hover:text-charcoal-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    className="border-elegant-300 mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-charcoal-700 cursor-pointer leading-relaxed">
                    I agree to the {" "}
                    <Link href="/terms" className="text-gold-600 hover:underline font-medium">Terms of Service</Link> and {" "}
                    <Link href="/privacy" className="text-gold-600 hover:underline font-medium">Privacy Policy</Link>
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.subscribeNewsletter}
                    onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked as boolean)}
                    className="border-elegant-300 mt-1"
                  />
                  <label htmlFor="newsletter" className="text-sm text-charcoal-700 cursor-pointer leading-relaxed">
                    Subscribe to our newsletter for exclusive offers and updates
                  </label>
                </div>
              </div>

              {/* Sign Up Button */}
              <Button
                type="submit"
                disabled={isLoading || !formData.agreeToTerms}
                className="w-full golden-button"
              >
                {isLoading ? "CREATING ACCOUNT..." : (
                  <>
                    CREATE ACCOUNT
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-8">
              <Separator className="bg-elegant-200" />
              <div className="relative -top-3 text-center">
                <span className="bg-white px-4 text-sm text-charcoal-600">OR SIGN UP WITH</span>
              </div>
            </div>

            {/* Social Sign Up */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full border-elegant-300 bg-white py-3 font-semibold">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </Button>

              <Button variant="outline" className="w-full border-elegant-300 bg-white py-3 font-semibold">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Continue with Facebook
              </Button>
            </div>

            {/* Sign In Link */}
            <div className="text-center mt-8">
              <p className="text-charcoal-700">
                Already have an account? {" "}
                <Link href="/auth/signin" className="text-gold-600 hover:text-gold-700 font-semibold">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <GoldenFooter />
    </div>
  )
}
