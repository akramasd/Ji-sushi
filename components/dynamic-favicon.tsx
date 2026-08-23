"use client"

import { useEffect } from "react"

export function DynamicFavicon() {
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement

    if (!favicon) {
      const newFavicon = document.createElement("link")
      newFavicon.rel = "icon"
      newFavicon.type = "image/png"
      newFavicon.href = "/images/ji-sushi-logo.png"
      document.head.appendChild(newFavicon)
    }
  }, [])

  return null
}