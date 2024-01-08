"use client";

import {
  AboutSection,
  EntranceGate,
  ExploreSection,
  FAQSection,
  FooterSection,
  HomeSection,
  NavbarSection,
  PillarsSection,
} from "@/components";
import Demo from "@/components/demo";
import Partners from "@/components/partners";
import { MobileNav } from "@/components/partners/mobile-nav";
import Roadmap from "@/components/roadmap";
import { useState } from "react";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <main className="flex min-h-screen flex-col bg-black relative">
      {/* // TODO - Add your content here */}
      {/* <EntranceGate /> */}
      <NavbarSection isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {isNavOpen && <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />}
      <HomeSection />
      <AboutSection />
      <PillarsSection />
      <ExploreSection />
      <Demo />
      <Roadmap />
      <Partners />
      <Roadmap />
      <Partners />
      <FAQSection /> 
      <FooterSection /> 
    </main>
  );
}
