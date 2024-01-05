"use client";

import {
  AboutSection,
  ExploreSection,
  FAQSection,
  FooterSection,
  HomeSection,
  NavbarSection,
  PillarsSection,
  TokenomicsSection,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black relative">
      {/* // TODO - Add your content here */}
      <NavbarSection />
      <HomeSection />
      <AboutSection />
      <PillarsSection />
      <ExploreSection />
      <TokenomicsSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
