import { AnimatedHeader } from "@/components/animated-header"
import { Footer } from "@/components/footer"

export default function RetningslinjerPage() {
  return (
    <div className="min-h-[100svh] bg-[#0E0F11] text-[#ffffff]">
      <AnimatedHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-[#ffffff]">Retningslinjer</h1>
          <p className="text-xl text-[#C1AB7F] font-light">All You Can Eat koncept</p>
          <p className="text-lg text-[#C9C9CA] mt-2">hos Ji Sushi Frederikshavn</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#313A40] rounded-lg p-8 md:p-12 space-y-8">
          <p className="text-[#C9C9CA] text-lg leading-relaxed">
            For at sikre en god og fair oplevelse for alle gæster beder vi venligst om, at følgende retningslinjer
            overholdes:
          </p>

          {/* New Guidelines Section */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-light text-[#C1AB7F]">Vores All You Can Eat-koncept</h2>
            <ul className="space-y-2 text-[#C9C9CA] leading-relaxed list-disc list-inside">
              <li>Vores All You Can Eat-koncept gælder pr. person</li>
              <li>Alle, der spiser, skal bestille og betale hver for sig</li>
              <li>Det er ikke tilladt at dele retter eller spise flere personer på én All You Can Eat-bestilling</li>
              <li>Smagsprøver tilbydes ikke</li>
            </ul>
          </div>

          {/* All You Can Eat – fælles for hele bordet */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-light text-[#C1AB7F]">All You Can Eat – fælles for hele bordet</h2>
            <p className="text-[#C9C9CA] leading-relaxed">
              All You Can Eat gælder for hele bordet, hvilket betyder, at alle gæster ved samme bord skal vælge det
              samme koncept.
            </p>
          </div>

          {/* Madspild */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-light text-[#C1AB7F]">Madspild</h2>
            <p className="text-[#C9C9CA] leading-relaxed">
              Vi opfordrer til at bestille mindre portioner ad gangen og bestille flere gange efter behov.
            </p>
            <p className="text-[#C9C9CA] leading-relaxed">
              Ved madspild på mere end 3 stk. sushi opkræves der{" "}
              <span className="text-[#ffffff] font-medium">10 kr. pr. stk.</span>
            </p>
          </div>

          {/* Drikkevarer */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-light text-[#C1AB7F]">Drikkevarer</h2>
            <p className="text-[#C9C9CA] leading-relaxed">
              Ved vores All You Can Eat-koncept forventes det, at der bestilles drikkevarer pr. person.
            </p>
          </div>

          {/* Closing */}
          <div className="pt-6 border-t border-[#5A6167] space-y-3">
            <p className="text-[#C9C9CA] leading-relaxed">
              Tak for jeres forståelse og for at hjælpe os med at sikre kvalitet, friskhed og mindre madspild.
            </p>
            <p className="text-[#ffffff] text-lg font-light">Vi ønsker jer en rigtig god spiseoplevelse.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
