"use client";

import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { isViewportValid } from "@/utils/mediaQuery";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = isViewportValid(700);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 12720);
  }, []);

  return isMobile ? (
    <div>{children}</div>
  ) : isLoading ? (
    <Preloader />
  ) : (
    <div>{children}</div>
  );
};

export { Provider };

const Preloader = () => (
  <div className="absolute max-md:hidden top-0 left-0 w-full h-full z-[999]">
    <video autoPlay loop muted className="w-full h-full object-cover">
      <source src="/preloader.mkv" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);
