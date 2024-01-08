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
import Roadmap from "@/components/roadmap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black relative">
      {/* // TODO - Add your content here */}
      {/* <EntranceGate /> */}
      <NavbarSection />
      <HomeSection />
      <AboutSection />
      <PillarsSection />
      <ExploreSection />
      <Demo />
      <Roadmap />
      <Partners />
      <FAQSection /> 
      <FooterSection /> 
    </main>
  );
}
