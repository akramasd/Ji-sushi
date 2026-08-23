import Image from "next/image"
import Link from "next/link"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { Footer } from "@/components/footer"
import { AnimatedHeader } from "@/components/animated-header"
import { NewYearBanner } from "@/components/new-year-banner"
import Script from "next/script"

export default function Page() {
  const cloudName = "dwvvmlteg"

  return (
    <div className="min-h-[100svh] bg-[#0E0F11]">
      <AnimatedHeader />

      <div id="fb-root"></div>
      <Script
        src="https://connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v24.0"
        strategy="lazyOnload"
        async
        defer
        crossOrigin="anonymous"
      />

      {/* Hero Section - shortened */}
      <section className="relative min-h-[42svh] sm:min-h-[48svh] flex items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="ji-eyebrow text-white/70 mb-5 animate-fade-in">
            Lodsgade 10 · Frederikshavn
          </p>
          <h1 className="ji-display text-white text-[clamp(2.1rem,7vw,4.6rem)] leading-[1.06] font-normal animate-fade-in-up">
            En moderne japansk restaurant
          </h1>
          <div className="mt-9 flex flex-wrap justify-center items-center gap-3 sm:gap-5">
            <Link
              href="/takeaway"
              className="ji-accent text-[13px] tracking-[0.2em] uppercase bg-gold text-sumi px-7 py-4 hover:bg-gold-lit transition-colors"
            >
              Bestil takeaway
            </Link>
            <Link
              href="/booking"
              className="ji-accent text-[13px] tracking-[0.2em] uppercase border border-white/50 text-white px-7 py-4 hover:bg-white hover:text-sumi transition-colors"
            >
              Bestil bord
            </Link>
          </div>
        </div>
      </section>

      {/* New Year Banner */}
      <NewYearBanner />

      {/* Super Tilbud Take Away Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="ji-display text-[clamp(1.9rem,5vw,3rem)] font-normal mb-4 text-gold">Super Tilbud Take Away</h2>
          <p className="text-[#C9C9CA] text-lg">Vælg mellem vores 3 fantastiske takeaway menuer</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Menu 1 */}
          <div className="bg-[#313A40] rounded-lg p-6 transition-all duration-300 hover:bg-[#3B444A] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,140,0,0.4)] cursor-pointer">
            <div className="text-center mb-6">
              <h3 className="text-[#C1AB7F] text-2xl font-light mb-2">Menu 1</h3>
              <p className="text-[#ffffff] text-4xl font-light mb-1">300 kr</p>
              <p className="text-[#C9C9CA] text-sm">36 stk.</p>
            </div>
            <ul className="text-[#C9C9CA] text-sm space-y-2 leading-relaxed">
              <li>• 8 stk. nigiri (2 stk. af hver: rejer, laks, tun og flamberet laks)</li>
              <li>• 6 stk. futomaki med tempura rejer</li>
              <li>• 6 stk. futomaki med tempura kylling</li>
              <li>• 8 stk. Alaska med laks</li>
              <li>• 8 stk. topping med tempurareje og flamberet laks</li>
            </ul>
          </div>

          {/* Menu 2 */}
          <div className="bg-[#313A40] rounded-lg p-6 transition-all duration-300 hover:bg-[#3B444A] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,140,0,0.4)] cursor-pointer border-2 border-[#C1AB7F]">
            <div className="text-center mb-6">
              <div className="inline-block bg-[#C1AB7F] text-[#0E0F11] text-xs font-bold px-3 py-1 rounded-full mb-2">
                POPULÆR
              </div>
              <h3 className="text-[#C1AB7F] text-2xl font-light mb-2">Menu 2</h3>
              <p className="text-[#ffffff] text-4xl font-light mb-1">530 kr</p>
              <p className="text-[#C9C9CA] text-sm">70 stk.</p>
            </div>
            <ul className="text-[#C9C9CA] text-sm space-y-2 leading-relaxed">
              <li>• 12 stk. nigiri (3 stk. af hver: rejer, laks, tun og flamberet laks)</li>
              <li>• 12 stk. futomaki med tempura rejer</li>
              <li>• 6 stk. futomaki med tempura kylling</li>
              <li>• 8 stk. Alaska med laks</li>
              <li>• 8 stk. spicy rejer</li>
              <li>• 8 stk. topping med tempurareje og flamberet laks</li>
              <li>• 8 stk. topping rainbow med surimi</li>
              <li>• 8 stk. hosomaki med agurk</li>
            </ul>
          </div>

          {/* Menu 3 */}
          <div className="bg-[#313A40] rounded-lg p-6 transition-all duration-300 hover:bg-[#3B444A] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,140,0,0.4)] cursor-pointer">
            <div className="text-center mb-6">
              <h3 className="text-[#C1AB7F] text-2xl font-light mb-2">Menu 3</h3>
              <p className="text-[#ffffff] text-4xl font-light mb-1">750 kr</p>
              <p className="text-[#C9C9CA] text-sm">104 stk.</p>
            </div>
            <ul className="text-[#C9C9CA] text-sm space-y-2 leading-relaxed">
              <li>• 16 stk. nigiri (4 stk. af hver: rejer, laks, tun og flamberet laks)</li>
              <li>• 12 stk. futomaki med tempura rejer</li>
              <li>• 12 stk. futomaki med tempura kylling</li>
              <li>• 8 stk. Alaska med laks</li>
              <li>• 8 stk. flying chicken</li>
              <li>• 8 stk. spicy rejer</li>
              <li>• 8 stk. spicy tun</li>
              <li>• 8 stk. topping med tempurareje og flamberet laks</li>
              <li>• 8 stk. topping rainbow med surimi</li>
              <li>• 8 stk. hosomaki med agurk</li>
              <li>• 8 stk. hosomaki med laks</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="tel:31334486"
            className="inline-block bg-[#C1AB7F] hover:bg-[#D4C29D] text-[#0E0F11] font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,140,0,0.5)]"
          >
            Ring og Bestil: 31 33 44 86
          </a>
        </div>
      </section>

      {/* Frisk og Lækker Sushi Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square group">
          <Image
            src={`https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/476297839_589640257266474_4179298734876294183_n_adivfr`}
            alt="Sushi platter"
            fill
            className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="text-[#C9C9CA]">
          <h2 className="ji-display text-[clamp(1.7rem,4vw,2.6rem)] font-normal mb-6 text-white">Frisk og Lækker Sushi</h2>
          <p className="leading-relaxed text-base">
            Vores koncept er kvalitet og kreativitet. Vi gir meget op i kvalitet, derfor bliver der altid fokuseret på
            de bedste råvarer. Vores mål er at præsentere vores gæster for unikke og eksklusive oplevelser fra det
            japanske køkken.
          </p>
        </div>
      </section>

      {/* All You Can Eat Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="ji-display text-[clamp(1.7rem,4vw,2.6rem)] font-normal mb-4 text-white">All you can eat</h2>
        <p className="text-[#C1AB7F] text-xl mb-8 font-light">Sushi Ad Libitum</p>
        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
          <div className="price-card bg-[#313A40] rounded-lg p-6 transition-all duration-300 hover:bg-[#3B444A] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,140,0,0.4)] cursor-pointer">
            <h3 className="text-[#C1AB7F] text-2xl font-light mb-2">Frokost</h3>
            <p className="text-[#ffffff] text-3xl font-light mb-2">239,-</p>
            <p className="text-[#C9C9CA] text-sm">(12:00 – 15:00)</p>
          </div>
          <div className="price-card bg-[#313A40] rounded-lg p-6 transition-all duration-300 hover:bg-[#3B444A] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,140,0,0.4)] cursor-pointer">
            <h3 className="text-[#C1AB7F] text-2xl font-light mb-2">Aften</h3>
            <p className="text-[#ffffff] text-3xl font-light mb-2">269,-</p>
            <p className="text-[#C9C9CA] text-sm">(15:00 – Lukket)</p>
          </div>
        </div>
        <div className="bg-[#313A40] rounded-lg p-8 max-w-2xl mx-auto mb-4">
          <p className="text-[#C9C9CA] leading-relaxed">
            Ji Sushi ad libitum er et koncept, hvor du kan spise dig mæt i din yndlingssushi, varme retter. Du kan
            bestille alt du har lyst til, præcis det du har lyst til, og dushen bliver serveret absolut frisklavet til
            dig.
          </p>
        </div>
        <p className="text-[#C9C9CA] text-sm italic">*Børn under 11 år halv pris</p>
      </section>

      {/* Quote Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <blockquote className="text-[#C9C9CA] text-xl md:text-2xl font-light italic">
          "Et bid af Japansk kultur"
        </blockquote>
      </section>

      {/* Facebook Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="ji-display text-[clamp(1.7rem,4vw,2.6rem)] font-normal mb-12 text-center text-white">Følg os på Facebook</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Post 1 */}
          <div className="flex justify-center">
            <div
              className="fb-post"
              data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid02cqCS6tKh8yLhx8BBMLReXGKivm97aJPAFFc6NikXwCy49RHWZsT9uQDcnA4YZadAl&id=100086615153169"
              data-width="500"
              data-show-text="true"
            >
              <blockquote
                cite="https://www.facebook.com/permalink.php?story_fbid=pfbid02cqCS6tKh8yLhx8BBMLReXGKivm97aJPAFFc6NikXwCy49RHWZsT9uQDcnA4YZadAl&id=100086615153169"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/people/Ji-Sushi-Frederikshavn/100086615153169/">
                  Ji Sushi - Frederikshavn
                </a>
              </blockquote>
            </div>
          </div>

          {/* Post 2 */}
          <div className="flex justify-center">
            <div
              className="fb-post"
              data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid02pSNP9N9bSp7zEsizEMu1Tx1gQ9fCGRvMdKePUbce5bNseKdpAz67SEVPwqGiqYJZl&id=100086615153169"
              data-width="500"
              data-show-text="true"
            >
              <blockquote
                cite="https://www.facebook.com/permalink.php?story_fbid=pfbid02pSNP9N9bSp7zEsizEMu1Tx1gQ9fCGRvMdKePUbce5bNseKdpAz67SEVPwqGiqYJZl&id=100086615153169"
                className="fb-xfbml-parse-ignore"
              >
                <p>
                  ✨ Tak for et fantastisk år! ✨ 2025 har været helt særligt for os – vi fyldte 3 år, og det havde
                  aldrig været muligt...
                </p>
                Slået op af{" "}
                <a href="https://www.facebook.com/people/Ji-Sushi-Frederikshavn/100086615153169/">
                  Ji Sushi - Frederikshavn
                </a>{" "}
                i Onsdag den 31. december 2025
              </blockquote>
            </div>
          </div>

          {/* Post 3 */}
          <div className="flex justify-center">
            <div
              className="fb-post"
              data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid02KymVSF5t51ZBNUcea7nbmaoSE1233S5dqdEWNQxN4RdAQgWwwSaPBfvtE3HkMAoql&id=100086615153169"
              data-width="500"
              data-show-text="true"
            >
              <blockquote
                cite="https://www.facebook.com/permalink.php?story_fbid=pfbid02KymVSF5t51ZBNUcea7nbmaoSE1233S5dqdEWNQxN4RdAQgWwwSaPBfvtE3HkMAoql&id=100086615153169"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/people/Ji-Sushi-Frederikshavn/100086615153169/">
                  Ji Sushi - Frederikshavn
                </a>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.facebook.com/profile.php?id=100086615153169"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C1AB7F] hover:bg-[#D4C29D] text-[#0E0F11] font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,140,0,0.5)]"
          >
            Se mere
          </a>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
