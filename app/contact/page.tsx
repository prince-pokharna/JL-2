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
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-golden-gradient">
      <GoldenHeader />

      {/* Hero Section */}
      <section className="relative py-20 bg-white text-elegant-900 overflow-hidden floral-bg">
        <div className="absolute inset-0 opacity-10 pointer-events-none" />

        <div className="relative container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Crown className="w-8 h-8 text-gold-500" />
            <span className="text-gold-600 font-semibold tracking-widest uppercase">Get In Touch</span>
            <Crown className="w-8 h-8 text-gold-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold golden-text-gradient mb-6">CONTACT US</h1>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            We're here to help you find the perfect outfit for your special occasions. Reach out to us anytime!
          </p>
          <div className="ornament-divider mt-10" />
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="golden-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full p-3" style={{background: "#f7e7b1"}}>
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-elegant-900 mb-2">VISIT OUR STORE</h3>
                      <p className="text-charcoal-700 leading-relaxed">
                        123 Fashion Street, Textile Market
                        <br />
                        Mumbai, Maharashtra 400001
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="golden-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full p-3" style={{background: "#f7e7b1"}}>
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-elegant-900 mb-2">CALL US</h3>
                      <p className="text-charcoal-700 leading-relaxed">
                        Main: +91 98765 43210
                        <br />
                        WhatsApp: +91 98765 43211
                        <br />
                        Toll Free: 1800-123-4567
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="golden-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full p-3" style={{background: "#f7e7b1"}}>
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-elegant-900 mb-2">EMAIL US</h3>
                      <p className="text-charcoal-700 leading-relaxed">
                        General: info@jailaxmisarees.com
                        <br />
                        Orders: orders@jailaxmisarees.com
                        <br />
                        Support: support@jailaxmisarees.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="golden-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full p-3" style={{background: "#f7e7b1"}}>
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-elegant-900 mb-2">STORE HOURS</h3>
                      <div className="text-charcoal-700 space-y-1">
                        <div className="flex justify-between">
                          <span>Monday - Saturday</span>
                          <span className="font-medium">10:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span className="font-medium">11:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Holidays</span>
                          <span className="font-medium">By Appointment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="golden-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-display font-bold golden-text-gradient mb-6">WHY CHOOSE US</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-gold-600" />
                      <span className="text-charcoal-800">25,000+ Happy Customers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-gold-500" />
                      <span className="text-charcoal-800">4.9/5 Average Rating</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-gold-600" />
                      <span className="text-charcoal-800">15+ Industry Awards</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold-600" />
                      <span className="text-charcoal-800">24/7 Customer Support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="golden-card">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <MessageCircle className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-display font-bold golden-text-gradient mb-4">SEND US A MESSAGE</h2>
                  <p className="text-charcoal-700">
                    Have a question or need assistance? Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-gold-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-display font-bold text-elegant-900 mb-4">Message Sent Successfully!</h3>
                    <p className="text-charcoal-700 mb-6">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <div className="inline-block px-6 py-2 rounded-full text-sm font-bold" style={{background: "#f7e7b1", color: "#111827"}}>
                      Redirecting...
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-elegant-900 mb-2">FULL NAME *</label>
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="h-12 bg-white border-elegant-300 focus:border-gold-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-elegant-900 mb-2">EMAIL ADDRESS *</label>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="h-12 bg-white border-elegant-300 focus:border-gold-400"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-elegant-900 mb-2">PHONE NUMBER</label>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="h-12 bg-white border-elegant-300 focus:border-gold-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-elegant-900 mb-2">INQUIRY TYPE</label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => handleInputChange("inquiryType", value)}
                        >
                          <SelectTrigger className="h-12 bg-white border-elegant-300 focus:border-gold-400">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="product">Product Information</SelectItem>
                            <SelectItem value="order">Order Support</SelectItem>
                            <SelectItem value="custom">Custom Design</SelectItem>
                            <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                            <SelectItem value="complaint">Complaint</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-elegant-900 mb-2">SUBJECT *</label>
                      <Input
                        type="text"
                        placeholder="Enter the subject of your message"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                        className="h-12 bg-white border-elegant-300 focus:border-gold-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-elegant-900 mb-2">MESSAGE *</label>
                      <Textarea
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        rows={6}
                        className="resize-none bg-white border-elegant-300 focus:border-gold-400"
                      />
                    </div>

                    <div className="text-center pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="golden-button"
                      >
                        {isSubmitting ? "SENDING..." : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            SEND MESSAGE
                          </>
                        )}
                      </Button>
                    </div>

                    <p className="text-sm text-charcoal-600 text-center">
                      By submitting this form, you agree to our {" "}
                      <a href="/privacy" className="text-gold-600 hover:underline">Privacy Policy</a> and {" "}
                      <a href="/terms" className="text-gold-600 hover:underline">Terms of Service</a>.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="golden-card overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-elegant-200 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-charcoal-500 mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold text-charcoal-700 mb-2">INTERACTIVE MAP</h3>
                  <p className="text-charcoal-600">
                    Visit our flagship store in Mumbai's textile district
                    <br />
                    123 Fashion Street, Mumbai 400001
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <GoldenFooter />
    </div>
  )
}
