"use client";

import {
  AboutSection,
  FAQSection,
  FooterSection,
  HomeSection,
  NavbarSection,
  TokenomicsSection,
} from "@/components";
import Partners from "@/components/partners";
import Roadmap from "@/components/roadmap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black relative">
      {/* // TODO - Add your content here */}
      <NavbarSection />
      <HomeSection />
      <AboutSection />
      <TokenomicsSection />
      <Roadmap />
      <Partners />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
