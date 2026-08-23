"use client"

import { useEffect } from "react"
import { AnimatedHeader } from "@/components/animated-header"
import { Footer } from "@/components/footer"
import { Phone } from "lucide-react"

export default function SuperTilbudPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-[100svh] bg-[#0E0F11]">
      <AnimatedHeader />

      {/* Simple Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-[#ffffff] mb-4">Super Tilbud</h1>
          <p className="text-xl md:text-2xl text-[#C9C9CA] font-light tracking-wide">Take Away Menuer</p>
        </div>
      </section>

      {/* Clean Menu Cards */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu 1 */}
            <div className="group relative bg-[#C1AB7F] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#C1AB7F]/50 border border-[#C1AB7F] bg-white">
              <div className="relative p-8">
                <h3 className="text-2xl font-light text-[#0E0F11] mb-4">Menu 1</h3>
                <div className="text-4xl font-light text-[#0E0F11] mb-1">300 kr</div>
                <div className="text-[#0E0F11]/70 text-sm mb-6">36 stykker</div>

                <div className="h-px bg-[#0E0F11]/20 mb-6" />

                <ul className="space-y-2 text-[#0E0F11] text-sm leading-relaxed">
                  <li>8 stk. nigiri (2 stk. af hver: rejer, laks, tun og flamberet laks)</li>
                  <li>6 stk. futomaki med tempura rejer</li>
                  <li>6 stk. futomaki med tempura kylling</li>
                  <li>8 stk. Alaska med laks</li>
                  <li>8 stk. topping med tempurareje og flamberet laks</li>
                </ul>
              </div>
            </div>

            {/* Menu 2 - MOST POPULAR */}
            <div className="group relative bg-[#C1AB7F] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#C1AB7F]/50 border-2 border-[#ffffff] bg-background">
              <div className="absolute top-4 right-4 bg-[#0E0F11] text-[#ffffff] px-3 py-1 rounded text-xs font-medium tracking-wider">
                POPULÆR
              </div>

              <div className="relative p-8">
                <h3 className="text-2xl font-light text-[#0E0F11] mb-4">Menu 2</h3>
                <div className="text-4xl font-light text-[#0E0F11] mb-1">530 kr</div>
                <div className="text-[#0E0F11]/70 text-sm mb-6">70 stykker</div>

                <div className="h-px bg-[#0E0F11]/20 mb-6" />

                <ul className="space-y-2 text-[#0E0F11] text-sm leading-relaxed">
                  <li>12 stk. nigiri (3 stk. af hver: rejer, laks, tun og flamberet laks)</li>
                  <li>12 stk. futomaki med tempura rejer</li>
                  <li>6 stk. futomaki med tempura kylling</li>
                  <li>8 stk. Alaska med laks</li>
                  <li>8 stk. spicy rejer</li>
                  <li>8 stk. topping med tempurareje og flamberet laks</li>
                  <li>8 stk. topping rainbow med surimi</li>
                  <li>8 stk. hosomaki med agurk</li>
                </ul>
              </div>
            </div>

            {/* Menu 3 */}
            <div className="group relative bg-[#C1AB7F] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#C1AB7F]/50 border border-[#C1AB7F]">
              <div className="relative p-8 bg-background">
                <h3 className="text-2xl font-light text-[#0E0F11] mb-4">Menu 3</h3>
                <div className="text-4xl font-light text-[#0E0F11] mb-1">750 kr</div>
                <div className="text-[#0E0F11]/70 text-sm mb-6">104 stykker</div>

                <div className="h-px bg-[#0E0F11]/20 mb-6" />

                <ul className="space-y-2 text-[#0E0F11] text-sm leading-relaxed">
                  <li>16 stk. nigiri (4 stk. af hver: rejer, laks, tun og flamberet laks)</li>
                  <li>12 stk. futomaki med tempura rejer</li>
                  <li>12 stk. futomaki med tempura kylling</li>
                  <li>8 stk. Alaska med laks</li>
                  <li>8 stk. flying chicken</li>
                  <li>8 stk. spicy rejer</li>
                  <li>8 stk. spicy tun</li>
                  <li>8 stk. topping med tempurareje og flamberet laks</li>
                  <li>8 stk. topping rainbow med surimi</li>
                  <li>8 stk. hosomaki med agurk</li>
                  <li>8 stk. hosomaki med laks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="relative py-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#ffffff] mb-6">Bestil Dit Super Tilbud</h2>
          <p className="text-[#C9C9CA] text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Ring til os og få din håndlavede sushi menu klar til afhentning.
          </p>

          <a
            href="tel:+4531334486"
            className="inline-flex items-center gap-4 bg-[#ffffff] text-[#0E0F11] px-10 py-4 rounded-full text-lg font-light hover:bg-[#C1AB7F] hover:text-[#0E0F11] transition-all duration-300"
          >
            <Phone size={24} />
            <span>31 33 44 86</span>
          </a>

          <p className="text-[#C9C9CA] mt-8 text-sm font-light">Lodsgade 10, 9900 Frederikshavn</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
