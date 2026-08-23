"use client"

import { useEffect } from "react"
import { AnimatedHeader } from "@/components/animated-header"
import { Footer } from "@/components/footer"
import { Mail } from "lucide-react"

export default function JobsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-[100svh] bg-[#0E0F11] text-[#ffffff] flex flex-col">
      <AnimatedHeader />

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center">
          <Mail className="w-16 h-16 text-[#C1AB7F] mx-auto mb-8" />
          <h1 className="text-3xl md:text-4xl font-light mb-6 text-[#C9C9CA]">Send din ansøgning til</h1>
          <a
            href="mailto:info@jisushi.dk"
            className="text-4xl md:text-5xl font-light text-[#ffffff] hover:text-[#C1AB7F] transition-colors"
          >
            info@jisushi.dk
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
