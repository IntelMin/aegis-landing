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
import { isViewportValid } from "@/utils/mediaQuery";
import { useEffect, useState } from "react";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMobile = isViewportValid(700);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 12720);
  }, []);
  return isMobile ? (
    <main className="flex min-h-screen flex-col bg-black relative">
      {/* // TODO - Add your content here */}
      {/* <EntranceGate /> */}
      <NavbarSection isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {isNavOpen && (
        <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      )}
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
  ) : isLoading ? (
    <Preloader />
  ) : (
    <main className="flex min-h-screen flex-col bg-black relative">
      {/* // TODO - Add your content here */}
      {/* <EntranceGate /> */}
      <NavbarSection isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {isNavOpen && (
        <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      )}
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

const Preloader = () => (
  <div className="absolute max-md:hidden top-0 left-0 w-full h-full z-[999]">
    <video autoPlay loop muted className="w-full h-full object-cover">
      <source src="/preloader.mkv" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);
