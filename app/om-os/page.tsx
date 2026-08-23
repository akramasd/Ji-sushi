import { AnimatedHeader } from "@/components/animated-header"
import { Footer } from "@/components/footer"

export default function OmOsPage() {
  return (
    <div className="min-h-[100svh] bg-[#0E0F11] text-[#ffffff] flex flex-col">
      <AnimatedHeader />

      <main className="flex-1">
        <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-b from-[#313A40] to-[#0E0F11]">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="font-bold">Ji Sushi</span> Frederikshavn
            </h1>
            <p className="text-[#C9C9CA] text-lg">Frisklavet sushi af de bedste råvarer</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-[#313A40] rounded-lg p-8 md:p-12 mb-12">
            <p className="text-[#C9C9CA] text-lg leading-relaxed mb-6">
              <span className="font-bold text-[#C1AB7F]">Ji Sushi Frederikshavn</span> er en moderne japansk
              sushi-restaurant, hvor kvalitet, friskhed og gode råvarer er i centrum. Vi bruger udelukkende nøje
              udvalgte råvarer, og al sushi bliver frisklavet ved bestilling, så du altid får den bedste smagsoplevelse.
            </p>
            <p className="text-[#C9C9CA] text-lg leading-relaxed mb-6">
              Vi tilbyder Sushi Ad Libitum (All You Can Eat) i Frederikshavn, hvor du kan bestille flere gange og nyde
              et stort udvalg af sushi og japanske retter. På menuen finder du blandt andet nigiri, maki, uramaki og
              specialruller samt varme retter og sticks – perfekt til både sushi-elskere og dem, der ønsker variation.
            </p>
            <p className="text-[#C9C9CA] text-lg leading-relaxed mb-6">
              Hos <span className="font-bold">Ji Sushi</span> lægger vi vægt på en hyggelig atmosfære og venlig service,
              hvor både familier, par og vennegrupper føler sig velkomne. Restauranten tilbyder både spisning i
              restauranten og takeaway, og børn kan spise til børnepris.
            </p>
            <p className="text-[#C9C9CA] text-lg leading-relaxed">
              Uanset om du leder efter all you can eat sushi i Frederikshavn, frisklavet sushi eller en afslappet
              japansk restaurantoplevelse, er <span className="font-bold">Ji Sushi</span> et oplagt valg.
            </p>
          </div>

          <div className="text-center">
            <p className="text-[#C1AB7F] text-2xl font-light">
              Velkommen hos <span className="font-bold">Ji Sushi</span> Frederikshavn – sushi lavet med omtanke og de
              bedste råvarer.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
