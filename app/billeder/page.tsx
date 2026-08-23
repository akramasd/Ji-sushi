"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { AnimatedHeader } from "@/components/animated-header"
import { Footer } from "@/components/footer"
import { X, ZoomIn } from "lucide-react"

const galleryImages = [
  { src: "https://cdn.designfast.io/image/2026-02-07/64959fbb-47f1-4d2e-b991-e7725453e90c.jpeg", alt: "Sushi udvalg" },
  { src: "https://cdn.designfast.io/image/2026-02-07/02c38a9d-347b-4832-afbd-7c2a9ae73191.jpeg", alt: "Sushi platter" },
  { src: "https://cdn.designfast.io/image/2026-02-07/448f4591-f91c-412c-830b-47e117cba082.jpeg", alt: "Maki rolls" },
  { src: "https://cdn.designfast.io/image/2026-02-07/7f62211a-af87-40e6-b4e1-86732705c7b1.jpeg", alt: "Nigiri selection" },
  { src: "https://cdn.designfast.io/image/2026-02-07/7cd4c7c0-8cc9-493b-be0c-4c89ebd28bc3.jpeg", alt: "Sashimi" },
  { src: "https://cdn.designfast.io/image/2026-02-07/c8bc62dc-18ea-47f4-ab6e-d0cc0b0721f3.jpeg", alt: "Sushi box" },
  { src: "https://cdn.designfast.io/image/2026-02-07/6f13e75b-ae33-4aac-b8db-f721e0792678.jpeg", alt: "Forretter" },
  { src: "https://cdn.designfast.io/image/2026-02-07/a1eae993-7299-4583-9019-50f635798347.jpeg", alt: "Tempura" },
  { src: "https://cdn.designfast.io/image/2026-02-07/d933d7bf-80c7-47b2-a022-d5f084fb2a9e.jpeg", alt: "Restaurant" },
]

const cloudName = "your-cloud-name"; // Declare the cloudName variable here

export default function BillederPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedAlt, setSelectedAlt] = useState<string>("")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedImage])

  return (
    <main className="min-h-[100svh] bg-[#0E0F11]">
      <AnimatedHeader />

      {/* Page Header */}
      <section className="relative h-[200px] flex items-center justify-center bg-gradient-to-b from-[#313A40] to-[#0E0F11]">
        <h1 className="text-[#ffffff] text-4xl md:text-5xl font-light text-center animate-fade-in-up">
          Billeder
        </h1>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <p className="text-[#C9C9CA] text-center mb-12 text-lg font-light">
          Et udvalg af vores retter fra Ji Sushi Frederikshavn
        </p>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => {
                setSelectedImage(image.src)
                setSelectedAlt(image.alt)
              }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-[110]"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={selectedAlt}
              width={1200}
              height={900}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              unoptimized
            />
            <p className="text-white/70 text-center mt-4 text-sm font-light">{selectedAlt}</p>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
