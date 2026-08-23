"use client"

import { useEffect } from "react"
import { Footer } from "@/components/footer"
import { AnimatedHeader } from "@/components/animated-header"
import { Phone } from "lucide-react"
import Image from "next/image"

export default function KontaktPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-[100svh] bg-[#0E0F11]">
      <AnimatedHeader />

      <section className="relative h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E0F11]">
          <Image
            src="/images/sushi-hero.jpg"
            alt="Contact background"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-light text-center px-4 text-[#ffffff]">Kontakt</h1>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="bg-[#313A40] rounded-lg p-12 md:p-16">
          <Phone className="w-16 h-16 text-[#C1AB7F] mx-auto mb-8" />
          <h2 className="text-[#ffffff] text-3xl md:text-4xl font-light mb-6">Ring til os</h2>
          <a
            href="tel:+4531334486"
            className="text-[#C1AB7F] text-4xl md:text-5xl font-light hover:text-[#A8906A] transition-colors inline-block"
          >
            +45 31 33 44 86
          </a>
          <p className="text-[#C9C9CA] mt-8 text-lg leading-relaxed">
            Vi er klar til at besvare dine spørgsmål og tage imod din reservation
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
