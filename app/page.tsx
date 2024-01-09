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
    }, 7880);
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
    <Preloader setIsLoading={setIsLoading} />
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

const Preloader = ({ setIsLoading }) => (
  <div className="absolute max-md:hidden top-0 left-0 w-full h-full z-[999]">
  <div className="relative w-full h-full">
    <video autoPlay loop={false} muted className="w-full h-full object-cover">
      <source src="/preloader.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <button type="button" className="absolute rounded-full bg-gray-400 z-100 bg-white right-6 bottom-4 px-6 py-2 font-semibold border-gray-500 text-black hover:bg-transparent hover:text-white" onClick={() => setIsLoading(false)}> Skip</button>
  </div>
</div>
);
