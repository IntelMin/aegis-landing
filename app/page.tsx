"use client";

import { AboutSection, HomeSection, NavbarSection } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black relative">
      {/* // TODO - Add your content here */}
      <NavbarSection />
      <HomeSection />
      <AboutSection />
    </main>
  )
}
