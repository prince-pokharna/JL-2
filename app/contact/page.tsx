"use client"

import type React from "react"

import { useState } from "react"
import { GoldenHeader } from "@/components/golden-header"
import { GoldenFooter } from "@/components/golden-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, Star, Users, Award } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", inquiryType: "" })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-theme-light">
      <GoldenHeader />

      <main>
        {/* Hero Section */}
        <section className="py-20 text-center bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.jpg')" }}>
          <div className="container-responsive bg-white/80 backdrop-blur-sm py-12 rounded-lg">
            <h1 className="text-5xl font-bold font-display text-theme-primary">Contact Us</h1>
            <p className="mt-4 text-xl text-theme-secondary max-w-2xl mx-auto">
              We're here to help you find the perfect outfit for your special occasions. Reach out to us anytime!
            </p>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-20">
          <div className="container-responsive grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-4xl font-bold font-display text-theme-primary mb-6">Get in Touch</h2>
              <div className="space-y-6 text-lg text-theme-secondary">
                <p className="flex items-center gap-4"><MapPin className="h-6 w-6 text-theme-tertiary" />123 Fashion Street, Mumbai, India</p>
                <p className="flex items-center gap-4"><Phone className="h-6 w-6 text-theme-tertiary" />+91 98765 43210</p>
                <p className="flex items-center gap-4"><Mail className="h-6 w-6 text-theme-tertiary" />hello@jailaxmisarees.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              {isSubmitted ? (
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 mx-auto text-accent-gold mb-4" />
                  <h3 className="text-3xl font-bold font-display text-theme-primary">Message Sent!</h3>
                  <p className="mt-2 text-xl text-theme-secondary">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required className="w-full" />
                  <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required className="w-full" />
                  <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="w-full" />
                  <Input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => handleInputChange("subject", e.target.value)} required className="w-full" />
                  <Textarea placeholder="Message" value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} required rows={6} className="w-full" />
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-theme-primary text-white hover:bg-theme-secondary">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <GoldenFooter />
    </div>
  )
}
