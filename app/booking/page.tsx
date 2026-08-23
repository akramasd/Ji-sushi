"use client"

import type React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { AnimatedHeader } from "@/components/animated-header"
import { Phone } from "lucide-react"
import Image from "next/image"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Booking submitted:", formData)
    alert("Tak for din reservation! Vi kontakter dig snart for at bekræfte.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const cloudName = "dwvvmlteg"

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-[100svh] bg-[#0E0F11]">
      <AnimatedHeader />

      <section className="relative h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E0F11]">
          <Image
            src={`https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/476297839_589640257266474_4179298734876294183_n_adivfr`}
            alt="Restaurant atmosphere"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-[#ffffff] mb-4">Bestil Bord</h1>
          <p className="text-[#C9C9CA] text-lg">Ring til os for at reservere bord</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-[#C9C9CA] mb-4">{"Ring til os 👇🏻"}</p>
          <div className="space-y-2 text-[#ffffff]">
            <a
              href="tel:+4531334486"
              className="inline-flex items-center gap-4 bg-[#C1AB7F] text-[#ffffff] px-12 py-6 rounded-lg hover:bg-[#D4C29D] transition-all hover:scale-105 group"
            >
              <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform" />
              <span className="text-3xl font-light">31 33 44 86</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
