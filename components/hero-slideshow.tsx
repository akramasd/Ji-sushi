"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { HERO_SLIDES } from "@/lib/site"

/**
 * Crossfading hero. Only the first frame is marked `priority` — it is the LCP
 * element; giving every slide priority would make the browser race four large
 * images at once and slow the very thing we're trying to speed up.
 */
export function HeroSlideshow() {
  const [i, setI] = useState(0)

  useEffect(() => {
    // Respect the OS setting: a looping background is exactly what
    // "reduce motion" is asking us not to do.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce || HERO_SLIDES.length < 2) return
    const id = setInterval(() => setI((n) => (n + 1) % HERO_SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-sumi">
      {HERO_SLIDES.map((s, n) => (
        <Image
          key={s.src}
          src={s.src}
          alt=""
          fill
          priority={n === 0}
          loading={n === 0 ? undefined : "lazy"}
          sizes="100vw"
          unoptimized
          className={`object-cover transition-opacity duration-[1400ms] ease-out ${
            n === i ? "opacity-60" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-sumi via-sumi/55 to-sumi/35" />
    </div>
  )
}
