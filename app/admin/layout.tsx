import type { Metadata } from "next"

/** Staff-only surface — never surface it in search results. */
export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
