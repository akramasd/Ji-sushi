"use client"

import { useEffect } from "react"
import { AnimatedHeader } from "@/components/animated-header"
import { Footer } from "@/components/footer"

export default function VinmenuPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const cloudName = "dwvvmlteg"

  return (
    <div className="min-h-[100svh] bg-[#0E0F11] text-[#ffffff] flex flex-col">
      <AnimatedHeader />

      <main className="flex-1">
        <section className="relative h-[250px] flex items-center justify-center bg-gradient-to-b from-[#313A40] to-[#0E0F11]">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Vin Menu</h1>
            <p className="text-[#C9C9CA] text-lg">Scroll for at se vores vinmenu</p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="text-center py-20">
            <h2 className="text-3xl md:text-4xl font-light text-[#C1AB7F] mb-4">Kommer Snart!</h2>
            <p className="text-[#C9C9CA] text-lg">Vores vinmenu er på vej </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
