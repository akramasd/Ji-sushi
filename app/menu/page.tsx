"use client"

import Link from "next/link"
import { Footer } from "@/components/footer"
import { AnimatedHeader } from "@/components/animated-header"
import { useState, useEffect } from "react"
import { CldImage } from "next-cloudinary"
import Image from "next/image"

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<"allyoucaneat" | "takeaway" | "drinks">("allyoucaneat")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [activeTab])

  return (
    <div className="min-h-[100svh] bg-[#0E0F11]">
      <AnimatedHeader />

      {/* Page Hero */}
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-b from-[#17181B] to-[#0E0F11]">
        <h1 className="relative z-10 text-[#ffffff] text-5xl md:text-6xl font-light text-center px-4">Menu</h1>
      </section>

      

      <div className="sticky top-0 z-40 bg-[#313A40] shadow-lg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-2 md:gap-4">
            <button
              onClick={() => setActiveTab("allyoucaneat")}
              className={`flex-1 py-4 px-4 text-base md:text-lg font-medium transition-all duration-300 border-b-2 ${
                activeTab === "allyoucaneat"
                  ? "text-[#C1AB7F] border-[#C1AB7F]"
                  : "text-[#C9C9CA] border-transparent hover:text-[#ffffff]"
              }`}
            >
              All You Can Eat
            </button>
            
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {activeTab === "allyoucaneat" && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#C1AB7F] text-4xl md:text-5xl font-light mb-6">Sushi Ad Libitum</h2>
              <p className="text-[#C9C9CA] text-lg leading-relaxed">
                Bestil så meget du vil fra vores fulde menu - se Takeaway Menu for alle retter
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-[#313A40] rounded-lg p-8 text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,140,0,0.4)] transition-all duration-300">
                <h3 className="text-[#C1AB7F] text-3xl font-light mb-3">Frokost</h3>
                <p className="text-[#ffffff] text-5xl font-light mb-3">239,-</p>
                <p className="text-[#C9C9CA]">(12:00 – 15:00)</p>
              </div>
              <div className="bg-[#313A40] rounded-lg p-8 text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,140,0,0.4)] transition-all duration-300">
                <h3 className="text-[#C1AB7F] text-3xl font-light mb-3">Aften</h3>
                <p className="text-[#ffffff] text-5xl font-light mb-3">269,-</p>
                <p className="text-[#C9C9CA]">(15:00 – Lukket)</p>
              </div>
            </div>

            <div className="bg-[#313A40] rounded-lg p-8 text-center">
              <p className="text-[#C9C9CA] text-sm italic">*Børn under 11 år halv pris</p>
            </div>
          </div>
        )}

        {activeTab === "takeaway" && (
          <div className="space-y-20">
            <div>
              <h2 className="text-[#C1AB7F] text-3xl md:text-4xl font-light mb-12 text-center">Forretter</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Edamame Card with Image */}
                <div className="bg-[#313A40] rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,140,0,0.4)] transition-all duration-300">
                  <div className="relative h-48">
                    <CldImage
                      src="forretter/edamame"
                      alt="Edamame bønner"
                      fill
                      className="object-cover"
                      crop={{
                        type: "auto",
                        source: true,
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal text-lg">1. Edamame bønner</h4>
                      <span className="text-[#C1AB7F] font-normal text-xl ml-4">45,-</span>
                    </div>
                  </div>
                </div>

                {/* Spring Rolls Card with Image */}
                <div className="bg-[#313A40] rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,140,0,0.4)] transition-all duration-300">
                  <div className="relative h-48">
                    <CldImage
                      src="forretter/spring-rolls"
                      alt="Forårs ruller"
                      fill
                      className="object-cover"
                      crop={{
                        type: "auto",
                        source: true,
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal text-lg">2. Forårs ruller</h4>
                      <span className="text-[#C1AB7F] font-normal text-xl ml-4">48,-</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rest of Forretter in compact list format */}
              <div className="bg-[#313A40] rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-[#C9C9CA]">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">3. Friteret rejer med chili</h4>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">58,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">4. Friteret kylling med sød chilisauce</h4>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">68,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">5. Dim Sum</h4>
                      <p className="text-sm text-[#C9C9CA]">5 stk.</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">45,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">6. Gyoza</h4>
                      <p className="text-sm text-[#C9C9CA]">5 stk.</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">45,-</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticks Section */}
            <div>
              <h2 className="text-[#C1AB7F] text-3xl md:text-4xl font-light mb-12 text-center">Sticks</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-[#313A40] rounded-lg p-6 md:p-8 order-1 md:order-2">
                  <p className="text-[#C9C9CA] text-sm mb-6">1 stk.</p>
                  <div className="space-y-4 text-[#C9C9CA]">
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">7. Kyllingefilet</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">33,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">8. Oksekød</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">38,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">9. Lam</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">38,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">10. Kæmpe tigerreje</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">35,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">11. Laks</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">35,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">12. Kylling kødboller</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">30,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">13. Asparges med bacon</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">35,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">14. Squash</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">25,-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sashimi Section */}
            <div>
              <h2 className="text-[#C1AB7F] text-3xl md:text-4xl font-light mb-12 text-center">Sashimi</h2>
              <div className="bg-[#313A40] rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
                <p className="text-[#C9C9CA] text-sm mb-6">Serveres med ris</p>
                <div className="space-y-4 text-[#C9C9CA]">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">15. Laks Sashimi</h4>
                      <p className="text-sm text-[#C9C9CA]">6 skiver</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">85,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">16. Tun Sashimi</h4>
                      <p className="text-sm text-[#C9C9CA]">6 skiver</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">89,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">17. Sashimi Menu</h4>
                      <p className="text-sm text-[#C9C9CA]">12 skiver og 5 tigerrejer</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">205,-</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Toppet Maki Section */}
            <div>
              <h2 className="text-[#C1AB7F] text-3xl md:text-4xl font-light mb-12 text-center">Toppet Maki</h2>
              <div className="bg-[#313A40] rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                <p className="text-[#C9C9CA] text-sm mb-6">8 stk.</p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-[#C9C9CA]">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">18. Tempura Rejer Tun Deluxe Roll</h4>
                      <p className="text-sm text-[#C9C9CA]">
                        Tempura rejer, avocado og agurk, toppet med tun og spicy mayo
                      </p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">125,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">19. Tempura Rejer Grillet Laks Deluxe Roll</h4>
                      <p className="text-sm text-[#C9C9CA]">
                        Tempura rejer, avocado og mango, toppet med grillet laks og spicy mayo
                      </p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">125,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">20. Tempura Rejer Avocado Deluxe Roll</h4>
                      <p className="text-sm text-[#C9C9CA]">
                        Tempura rejer, avocado og agurk, toppet med avocado og teriyaki
                      </p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">125,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">21. Tempura Rejer Rainbow Deluxe Roll</h4>
                      <p className="text-sm text-[#C9C9CA]">
                        Tempura rejer, avocado og agurk, toppet med laks, tun, rejer, hvidfisk og bønnespirer
                      </p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">125,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">22. Tempura Kylling Deluxe Roll</h4>
                      <p className="text-sm text-[#C9C9CA]">
                        Tempura kylling og agurk, toppet med avocado og spicy mayo
                      </p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">120,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">23. Vegetar Deluxe Roll</h4>
                      <p className="text-sm text-[#C9C9CA]">
                        Salat mix, tofu, agurk og avocado, toppet med tangsalat og chili sesamfrø
                      </p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">115,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">24. Grillet Laks Deluxe Roll</h4>
                      <p className="text-sm text-[#C9C9CA]">
                        Laks, avocado og agurk, toppet med grillet laks og forårsløg
                      </p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">125,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">25. Laks Deluxe Roll</h4>
                      <p className="text-sm text-[#C9C9CA]">Laks, avocado og agurk, toppet med laks og forårsløg</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">125,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">26. Laks Avocado Deluxe Roll</h4>
                      <p className="text-sm text-[#C9C9CA]">Laksemousse og tobiko, toppet med forårsløg og avocado</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">120,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">27. Rainbow Roll</h4>
                      <p className="text-sm text-[#C9C9CA]">
                        Surimi, avocado og agurk, toppet med laks, rejer og hvidfisk
                      </p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">120,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">28. Tun Avocado Deluxe Roll</h4>
                      <p className="text-sm text-[#C9C9CA]">Tun og tobiko, toppet med tun og forårsløg</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">120,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">29. Tempura Surimi Deluxe Roll</h4>
                      <p className="text-sm text-[#C9C9CA]">Tempura surimi, avocado og agurk, toppet med bønnespirer</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">120,-</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Uramaki Section */}
            <div>
              <h2 className="text-[#C1AB7F] text-3xl md:text-4xl font-light mb-12 text-center">Uramaki</h2>
              <div className="bg-[#313A40] rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                <p className="text-[#C9C9CA] text-sm mb-6">8 stk.</p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-[#C9C9CA]">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">30. Sesamfrø Ebi Tempura</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">93,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">31. San Francisco</h4>
                      <p className="text-sm text-[#C9C9CA]">Laks, avocado, agurk, basilikum og ørredrogn</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">90,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">32. Super California</h4>
                      <p className="text-sm text-[#C9C9CA]">Krebsehaler, avocado, agurk og tobiko</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">90,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">33. Alaska</h4>
                      <p className="text-sm text-[#C9C9CA]">Laks, flødeost, avocado, agurk og tobiko</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">90,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">34. California</h4>
                      <p className="text-sm text-[#C9C9CA]">Surimi, avocado, agurk og sesamfrø</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">80,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">35. Spicy Laks</h4>
                      <p className="text-sm text-[#C9C9CA]">Laks, flødeost, agurk, avocado og tobiko</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">83,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">36. Spicy Rejer</h4>
                      <p className="text-sm text-[#C9C9CA]">Tigerrejer, spicy sauce, agurk, avocado og sesamfrø</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">85,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">37. Spicy Tun</h4>
                      <p className="text-sm text-[#C9C9CA]">Tun, spicy sauce, agurk, avocado og sesamfrø</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">85,-</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hosomaki & Futomaki Section */}
            <div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#313A40] rounded-lg p-6 md:p-8">
                  <h2 className="text-[#C1AB7F] text-2xl md:text-3xl font-light mb-6">Hosomaki</h2>
                  <p className="text-[#C9C9CA] text-sm mb-6">8 stk.</p>
                  <div className="space-y-4 text-[#C9C9CA]">
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">38. Tigerrejer</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">53,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">39. Tun</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">50,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">40. Laks</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">50,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">41. Agurk</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">43,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">42. Avocado</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">43,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">43. Tun med avocado</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">53,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#ffffff] font-normal">44. Laks med avocado</h4>
                      <span className="text-[#C1AB7F] font-normal ml-4">53,-</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6 md:p-8">
                  <h2 className="text-[#C1AB7F] text-2xl md:text-3xl font-light mb-6">Futomaki</h2>
                  <p className="text-[#C9C9CA] text-sm mb-6">5 stk.</p>
                  <div className="space-y-4 text-[#C9C9CA]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#ffffff] font-normal">45. Yami Ebi Rejer</h4>
                        <p className="text-sm text-[#C9C9CA]">Ebi rejer, avocado og mango</p>
                      </div>
                      <span className="text-[#C1AB7F] font-normal ml-4">73,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#ffffff] font-normal">46. Tempura Rejer</h4>
                        <p className="text-sm text-[#C9C9CA]">Ebi rejer, avocado og agurk</p>
                      </div>
                      <span className="text-[#C1AB7F] font-normal ml-4">70,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#ffffff] font-normal">47. Spicy Rejer</h4>
                        <p className="text-sm text-[#C9C9CA]">Tigerrejer, avocado og agurk</p>
                      </div>
                      <span className="text-[#C1AB7F] font-normal ml-4">70,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#ffffff] font-normal">48. Big Alaska</h4>
                        <p className="text-sm text-[#C9C9CA]">Laks, flødeost, avocado, agurk og tobiko</p>
                      </div>
                      <span className="text-[#C1AB7F] font-normal ml-4">70,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#ffffff] font-normal">49. California Laks</h4>
                        <p className="text-sm text-[#C9C9CA]">Surimi, laks, avocado og agurk</p>
                      </div>
                      <span className="text-[#C1AB7F] font-normal ml-4">73,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#ffffff] font-normal">50. Spicy Laks</h4>
                        <p className="text-sm text-[#C9C9CA]">Laks, avocado og agurk</p>
                      </div>
                      <span className="text-[#C1AB7F] font-normal ml-4">70,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#ffffff] font-normal">51. Spicy Tun</h4>
                        <p className="text-sm text-[#C9C9CA]">Tun, agurk og avocado</p>
                      </div>
                      <span className="text-[#C1AB7F] font-normal ml-4">73,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#ffffff] font-normal">52. California</h4>
                        <p className="text-sm text-[#C9C9CA]">Surimi, avocado og agurk</p>
                      </div>
                      <span className="text-[#C1AB7F] font-normal ml-4">65,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-[#ffffff] font-normal">53. Vegetar</h4>
                        <p className="text-sm text-[#C9C9CA]">Avocado, agurk, tofu og salat mix</p>
                      </div>
                      <span className="text-[#C1AB7F] font-normal ml-4">60,-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nigiri Section */}
            <div>
              <h2 className="text-[#C1AB7F] text-3xl md:text-4xl font-light mb-12 text-center">Nigiri</h2>
              <div className="bg-[#313A40] rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                <p className="text-[#C9C9CA] text-sm mb-6">1 stk.</p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-[#C9C9CA]">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">54. Laks</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">22,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">55. Grillet Laks</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">24,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">56. Laks med Avocado</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">24,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">57. Grillet Laks med Bønnespirer</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">24,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">58. Tun</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">22,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">59. Tun Tataki</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">24,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">60. Tun med Avocado</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">24,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">61. Tun med Forårsløg</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">24,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">62. Hvidfisk</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">24,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">63. Tigerrejer</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">22,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">64. Tigerrejer med Spicy Sauce</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">24,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">65. Krebsehaler</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">27,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">66. Laks Gunkan</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">27,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">67. Ørredrogn</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">27,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">68. Avocado</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">20,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">69. Agurk</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">17,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">70. Inari Tofu</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">22,-</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rispapir Ruller Section */}
            <div>
              <h2 className="text-[#C1AB7F] text-3xl md:text-4xl font-light mb-12 text-center">Rispapir Ruller</h2>
              <div className="bg-[#313A40] rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
                <p className="text-[#C9C9CA] text-sm mb-6">8 stk.</p>
                <div className="space-y-4 text-[#C9C9CA]">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">71. Rispapir Laks</h4>
                      <p className="text-sm text-[#C9C9CA]">Laks, salat mix, agurk og avocado med spicy sauce</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">85,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">72. Rispapir Ebi Rejer</h4>
                      <p className="text-sm text-[#C9C9CA]">
                        Ebi rejer, salat mix, agurk og avocado med spicy sauce og teriyaki sauce
                      </p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">85,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">73. Rispapir Tempura Kylling</h4>
                      <p className="text-sm text-[#C9C9CA]">
                        Tempura kylling, salat mix, agurk og avocado med spicy sauce og goma sauce
                      </p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">85,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[#ffffff] font-normal">74. Rispapir Oksekød</h4>
                      <p className="text-sm text-[#C9C9CA]">Oksekød, salat mix, agurk og avocado med teriyaki sauce</p>
                    </div>
                    <span className="text-[#C1AB7F] font-normal ml-4">85,-</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sushi Box Menuer Section */}
            <div>
              <h2 className="text-[#C1AB7F] text-3xl md:text-4xl font-light mb-12 text-center">Sushi Box Menuer</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">Menu - 8 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">138,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">30. Laks med avocado, 31. Grillet laks, 32. Tun</p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">Vegetar Menu - 18 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">168,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">
                    33. Toppet maki: vegetar Roll med avocado, 34. Hosomaki: agurk, 35. Nigiri: 1 tofu, 1 agurk
                  </p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">10 Box - 10 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">120,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">
                    36. Uramaki: ebi tempura rejer med sesamfrø, 37. Nigiri: laks
                  </p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">20 Box - 20 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">260,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">
                    38. Uramaki: ebi tempura rejer med sesamfrø, 39. Uramaki: spicy laks, 40. Nigiri: 2 laks, 2 tun
                  </p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">Ebi Tempura Menu - 24 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">328,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">
                    41. Deluxe ebi tempura rejer med avocado, 42. Deluxe ebi tempura rejer med laks, 43. Deluxe ebi
                    tempura rejer med regnbue
                  </p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">30 Box - 30 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">360,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">
                    44. Uramaki: ebi tempura rejer med sesamfrø, 45. Uramaki: spicy laks, 46. Toppet maki: rainbow roll,
                    47. Nigiri: 2 laks, 2 tun, 2 rejer
                  </p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">Uramaki Menu - 32 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">388,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">
                    48. Ebi tempura rejer med sesamfrø, 49. Laks deluxe roll, 50. Rainbow roll, 51. Alaska roll
                  </p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">40 Box - 40 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">460,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">
                    52. Uramaki: California, 53. Uramaki: Spicy laks, 54. Toppet maki: Ebi tempura rejer med avocado,
                    55. Nigiri: 4 laks, 4 tun, 4 rejer, 4 grillet laks
                  </p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">50 Box - 50 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">600,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">
                    56. Uramaki: Spicy laks, 57. Uramaki: California, 58. Toppet maki: Ebi tempura med avocado, 59.
                    Toppet maki: Laks deluxe roll, 60. Nigiri: 4 laks, 4 tun, 4 rejer, 4 grillet laks, 2 avocado
                  </p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">60 Box - 60 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">700,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">
                    61. Uramaki: Spicy tun, 62. Uramaki: Alaska, 63. Toppet maki: Ebi tempura med avocado, 64. Toppet
                    maki: Laks deluxe roll, 65. Rainbow roll, 66. Nigiri: 5 laks, 5 tun, 5 rejer, 5 grillet laks
                  </p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">70 Box - 70 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">820,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">
                    67. Uramaki: Spicy tun, 68. Uramaki: Alaska, 69. Toppet maki: Ebi tempura med avocado, 70. Toppet
                    maki: Ebi tempura med laks, 71. Toppet maki: Rainbow roll, 72. Toppet maki: Laks deluxe roll, 73.
                    Nigiri: 5 laks, 5 tun, 5 rejer, 5 grillet laks, 2 krebsehaler
                  </p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">80 Box - 80 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">950,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">
                    74. Uramaki: Spicy tun, 75. Uramaki: Alaska, 76. Uramaki: California, 77. Topping maki: Ebi tempura
                    med avocado, 78. Topping maki: Ebi tempura med laks, 79. Topping maki: Rainbow roll, 80. Topping
                    maki: Laks deluxe roll, 81. Nigiri: 5 laks, 5 tun, 5 rejer, 5 grillet laks, 4 krebsehaler
                  </p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">Box 90 - 90 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">1050,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">Box menuen sammensættes af sushikok</p>
                </div>

                <div className="bg-[#313A40] rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-[#ffffff] text-xl font-normal">Box 100 - 100 stk.</h3>
                    <span className="text-[#C1AB7F] font-normal text-xl">1200,-</span>
                  </div>
                  <p className="text-[#C9C9CA] text-sm">Box menuen sammensættes af sushikok</p>
                </div>
              </div>
            </div>

            {/* Tilbehør Section */}
            <div>
              <h2 className="text-[#C1AB7F] text-3xl md:text-4xl font-light mb-12 text-center">Tilbehør</h2>
              <div className="bg-[#313A40] rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-[#C9C9CA]">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">82. Goma dressing</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">10,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">83. Hjemmelavet wasabi-mayo</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">10,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">84. Hjemmelavet chili-mayo</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">10,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">85. Hjemmelavet teriyaki</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">10,-</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#ffffff] font-normal">86. Sød chilisauce</h4>
                    <span className="text-[#C1AB7F] font-normal ml-4">10,-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "drinks" && (
          <div className="space-y-12">
            {/* Bobler Section */}
            <div className="bg-[#313A40] rounded-lg p-6 md:p-8">
              <h3 className="text-[#ffffff] text-2xl font-light mb-6 border-b border-[#C1AB7F] pb-2">Bobler</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Moscato Spumante, Conti D'Elsa, Italien</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      Luksus-Asti Sødmefyldt duft af modne frugter. God balance mellem det søde og det friske. Moscato
                      er fremragende til lette desserter eller et glas uden mad. Sød.
                    </p>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">298,-</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Patriarche Bourgogne Brut, Frankrig</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      Aromaen er elegant og udtryksfuld med noter af citrus og tørret frugt. Den harmoniske smag med fin
                      frugt afsluttes af en vedvarende, fydig eftersmag. Tør, men dejlig afrundet.
                    </p>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">388,-</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Lanson, Black Label Brut, Champagne Frankrig</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      Aromaen er elegant og udtryksfuld med noter af citrus og tørret frugt. Den harmoniske smag med fin
                      frugt afsluttes af en vedvarende, fydig eftersmag. Tør, men dejlig afrundet.
                    </p>
                    <div className="flex gap-8 mt-2">
                      <span className="text-[#C9C9CA] text-sm">
                        Halv fl. <span className="text-[#C1AB7F]">388,-</span>
                      </span>
                      <span className="text-[#C9C9CA] text-sm">
                        Flaske <span className="text-[#C1AB7F]">588,-</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hvidvin Section */}
            <div className="bg-[#313A40] rounded-lg p-6 md:p-8">
              <h3 className="text-[#ffffff] text-2xl font-light mb-6 border-b border-[#C1AB7F] pb-2">Hvidvin</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Hunter's Creek Chardonnay, Australien</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      De fuldmodne druer giver her en aromatisk hvidvin med en lækker aroma af tropisk frugt. Vinen er
                      ganske fyldig og kombinerer elegant den bløde fylde med et flot, frisk pift af citrus. Halvtør.
                    </p>
                    <div className="flex gap-8 mt-2">
                      <span className="text-[#C9C9CA] text-sm">
                        Glas <span className="text-[#C1AB7F]">65,-</span>
                      </span>
                      <span className="text-[#C9C9CA] text-sm">
                        Flaske <span className="text-[#C1AB7F]">258,-</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Le Morette Serai Bianco, Italien</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      En elegant og balanceret duft med toner af hyldeblomster, pærer og abrikoser. Smagen er medium
                      fyldig og har en frugtrig og lang eftersmag med nuancer af citrusfrugter. Dejlig frugtrig og
                      halvtør.
                    </p>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">298,-</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Riesling Dopff Au Moulin, Frankrig</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      En elegant frugtagtig aroma med lemon, grape og fersken, men også noter af hvide blomster. Smagen
                      er tør, intens og frisk, med god fyldig struktur og elegant citrus i eftersmagen. Tør og frisk.
                    </p>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">318,-</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Sauvignon Blanc Stables, New Zealand</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      Lys citrongul farve med grønne reflekser. Duften er hyldeblomst med noter af tropiske frugter samt
                      stikkelsbær og citrus. Smagen er lang og vedholdende, med citrus og fuldmodne tropiske frugter i
                      eftersmagen. Tør men dejlig afrundet.
                    </p>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">358,-</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Orange Gold Gerard Bertrand, Frankrig</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      Vinen en smuk gylden ravfarve. Duften er intens og kompleks med en eksplosion af blomsternøter,
                      kandiserede frugter og hvid peber. Smagen er fyldig og frisk med en aroma af eksotiske frugter.
                      Dejlig fyldig med sødmefyldte toner.
                    </p>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">388,-</span>
                </div>
              </div>
            </div>

            {/* Rosévin Section */}
            <div className="bg-[#313A40] rounded-lg p-6 md:p-8">
              <h3 className="text-[#ffffff] text-2xl font-light mb-6 border-b border-[#C1AB7F] pb-2">Rosévin</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Hunter's Creek Shiraz Rosé, Australien</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      Smagen er dejlig frugtrig med noter af modne sommer bær som f.eks. jordbær og hindbær, med en fint
                      afstemt krydret eftersmag. Frisk, dejlig afrundet og halvtør.
                    </p>
                    <div className="flex gap-8 mt-2">
                      <span className="text-[#C9C9CA] text-sm">
                        Glas <span className="text-[#C1AB7F]">65,-</span>
                      </span>
                      <span className="text-[#C9C9CA] text-sm">
                        Flaske <span className="text-[#C1AB7F]">258,-</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Domaine Houchart Côtes de Provence, Frankrig</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      Domaine Houchart Rosé er flot, klar i farven. Har en lækker bouquet med fine frugtnuancer. Den er
                      frisk, let tør i smagen og bør nydes afkølet. Tør og afrundet.
                    </p>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">318,-</span>
                </div>
              </div>
            </div>

            {/* Rødvin Section */}
            <div className="bg-[#313A40] rounded-lg p-6 md:p-8">
              <h3 className="text-[#ffffff] text-2xl font-light mb-6 border-b border-[#C1AB7F] pb-2">Rødvin</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Hunter's Creek Shiraz/Cabernet Sauvignon, Australien</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      Smagen er dejlig frugtrig med noter af modne sommer bær som f.eks. jordbær og hindbær, med en fint
                      afstemt krydret eftersmag. Fyldig og dejlig afrundet.
                    </p>
                    <div className="flex gap-8 mt-2">
                      <span className="text-[#C9C9CA] text-sm">
                        Glas <span className="text-[#C1AB7F]">65,-</span>
                      </span>
                      <span className="text-[#C9C9CA] text-sm">
                        Flaske <span className="text-[#C1AB7F]">258,-</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Montepulciano D'Abruzzo Il Faggio, Italien</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      Duft af modne frugter, blommer, kirsebær og strejf af mokka. Smagen er blød og fyldig og ledsages
                      af bløde, modne tanniner. Eftersmagen er dejlig frugtrig og afrundet.
                    </p>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">278,-</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Zin-Phomaniac Lodi Zinfandel - Old Vine, Californien</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      En kompleks og fyldig vin med saftig, ligefrem smag af modne blå-lilla frugter og mørk halvsød
                      chokolade. Et kys af vanilje og et strejf af brunt bagekrydderi tilføjer dybde. En lang og blød
                      eftersmag.
                    </p>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">398,-</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Monte Zovo Amarone, Italien</h4>
                    <p className="text-[#C9C9CA] text-sm mt-1">
                      Aromaer af modne blommer og sorte kirsebær, krydderier, vanille, lakrids og chokolade. Intens
                      varme og godt integrerede tanniner i perfekt afbalanceret samspil med noter af vanille og
                      chokolade. Meget fyldig og koncentreret.
                    </p>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">618,-</span>
                </div>
              </div>
            </div>

            {/* Øl Section */}
            <div className="bg-[#313A40] rounded-lg p-6 md:p-8">
              <h3 className="text-[#ffffff] text-2xl font-light mb-6 border-b border-[#C1AB7F] pb-2">Øl</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Japansk Sapporo Øl, Large</h4>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">85,-</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Kirin Ichiban</h4>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">50,-</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Iki Beer</h4>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">50,-</span>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-[#ffffff] font-medium">Carlsberg Alcohol Free</h4>
                  </div>
                  <span className="text-[#C1AB7F] font-medium ml-4 whitespace-nowrap">50,-</span>
                </div>

                <div className="mt-6 pt-6 border-t border-[#6E747A]">
                  <h4 className="text-[#ffffff] font-medium mb-3">Fadøl</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-[#C9C9CA]">Carlsberg Pilsner</span>
                      <div className="flex gap-4">
                        <span className="text-[#C9C9CA] text-sm">
                          Lille <span className="text-[#C1AB7F]">45,-</span>
                        </span>
                        <span className="text-[#C9C9CA] text-sm">
                          Mellem <span className="text-[#C1AB7F]">60,-</span>
                        </span>
                        <span className="text-[#C9C9CA] text-sm">
                          Stor <span className="text-[#C1AB7F]">88,-</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-[#C9C9CA]">Tuborg Classic</span>
                      <div className="flex gap-4">
                        <span className="text-[#C9C9CA] text-sm">
                          Lille <span className="text-[#C1AB7F]">48,-</span>
                        </span>
                        <span className="text-[#C9C9CA] text-sm">
                          Mellem <span className="text-[#C1AB7F]">65,-</span>
                        </span>
                        <span className="text-[#C1AB7F] text-sm">
                          Stor <span className="text-[#C1AB7F]">92,-</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-[#C9C9CA]">Grimbergen</span>
                      <span className="text-[#C1AB7F]">50 cl 75,-</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-[#C9C9CA]">1664 Kronenbourg Blanc</span>
                      <span className="text-[#C1AB7F]">50 cl 75,-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spiritus Section */}
            <div className="bg-[#313A40] rounded-lg p-6 md:p-8">
              <h3 className="text-[#ffffff] text-2xl font-light mb-6 border-b border-[#C1AB7F] pb-2">Spiritus</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[#ffffff] font-medium mb-3">Rom</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Bacardi White</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 60,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Ron Varadero Silver Dry</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 30,-</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#ffffff] font-medium mb-3">Gin</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Gilbeys</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 30,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">MG Rosa</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 30,-</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#ffffff] font-medium mb-3">Vodka</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Absolut Blå</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 30,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Smirnoff</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 30,-</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#ffffff] font-medium mb-3">Whisky</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Lauders Queen Mary</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 30,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Glen Silver Malt</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 35,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Chivas 12</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 40,-</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#ffffff] font-medium mb-3">Likør</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Baileys Irish</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 30,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Cointreau</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 35,-</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#ffffff] font-medium mb-3">Bitter</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Gammel Dansk</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 30,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Jägermeister</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 30,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Campari</span>
                      <span className="text-[#C1AB7F] text-sm">2 cl. 30,-</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#ffffff] font-medium mb-3">Cognac Excellent</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Reviseur XO Cognac</span>
                      <span className="text-[#C1AB7F] text-sm">4 cl. 128,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">Reviseur VSOP Cognac</span>
                      <span className="text-[#C1AB7F] text-sm">4 cl. 98,-</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#ffffff] font-medium mb-3">Sake</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA] text-sm">10 cl</span>
                      <span className="text-[#C1AB7F] text-sm">100,-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sodavand & Varme Drikke Section */}
            <div className="bg-[#313A40] rounded-lg p-6 md:p-8">
              <h3 className="text-[#ffffff] text-2xl font-light mb-6 border-b border-[#C1AB7F] pb-2">
                Sodavand & Varme Drikke
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[#ffffff] font-medium mb-3">Sodavand</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-[#C9C9CA]">Coca Cola / Coca Cola Zero / Fanta</span>
                      <div className="flex gap-4">
                        <span className="text-[#C9C9CA] text-sm">
                          Lille <span className="text-[#C1AB7F]">45,-</span>
                        </span>
                        <span className="text-[#C9C9CA] text-sm">
                          Mellem <span className="text-[#C1AB7F]">50,-</span>
                        </span>
                        <span className="text-[#C9C9CA] text-sm">
                          Stor <span className="text-[#C1AB7F]">68,-</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-[#C9C9CA]">Sprite / Schweppes Lemon</span>
                      <div className="flex gap-4">
                        <span className="text-[#C9C9CA] text-sm">
                          Lille <span className="text-[#C1AB7F]">45,-</span>
                        </span>
                        <span className="text-[#C9C9CA] text-sm">
                          Mellem <span className="text-[#C1AB7F]">50,-</span>
                        </span>
                        <span className="text-[#C9C9CA] text-sm">
                          Stor <span className="text-[#C1AB7F]">68,-</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-[#C9C9CA]">Danskvand </span>
                      <div className="flex gap-4">
                        <span className="text-[#C9C9CA] text-sm mx-3.5">
                          Lille <span className="text-[#C1AB7F]">45,-</span>
                        </span>
                        <span className="text-[#C9C9CA] text-sm">
                          Mellem <span className="text-[#C1AB7F]">50,-</span>
                        </span>
                        <span className="text-[#C9C9CA] text-sm">
                          Stor <span className="text-[#C1AB7F]">68,-</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA]">Ramune (Japansk Sodavand) Melon/Jordbær/Blåbær</span>
                      <span className="text-[#C1AB7F]">Flaske 50,-</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#6E747A]">
                  <h4 className="text-[#ffffff] font-medium mb-3">Økologiske Drikke</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#C9C9CA]">Hyldeblomst</span>
                      <span className="text-[#C1AB7F]">50,-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-[#C9C9CA] text-lg mb-6">Klar til at opleve autentisk japansk gastronomi?</p>
        <Link
          href="/booking"
          className="inline-block bg-[#C1AB7F] text-[#ffffff] px-8 py-3 rounded-lg font-normal hover:bg-[#A8906A] transition-colors"
        >
          Bestil Bord
        </Link>
      </section>

      <Footer />
    </div>
  )
}
