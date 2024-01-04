"use client";

import { AboutSection, NavbarSection } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black relative">
      {/* // TODO - Add your content here */}
      <NavbarSection />
      <AboutSection />
      <AboutSection />
    </main>
  )
}
