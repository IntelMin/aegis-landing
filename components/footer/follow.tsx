import React from "react";
import Image from "next/image";
import { isViewportValid } from "@/utils/mediaQuery";

export const FollowSection = () => {
  const isMobile = isViewportValid(700);
  
  const socialLinks = [
    { url: "/socialIcons/etherscan-logo-circle.svg", label: "Etherscan", },
    { url: "/socialIcons/dextools.svg", label: "Dextools" },
    { url: "/socialIcons/Telegram_logo.svg.webp", label: "Telegram" },
    { url: "/socialIcons/Uniswap.png", label: "Uniswap" },
    
  ];

  return (
    <div className="text-white text-center text-xl font-normal px-5 mr-4 md:mr-0 md:px-20 overflow-hidden">
        Find us on
    <footer className="flex text-white px-8 md:px-20 pt-4 pb-6 md:space-x-12 space-x-7 justify-center items-center">
      {socialLinks.map((link, i) => (
          <div key={i} className="flex items-center justify-start py-4 text h-[55px]">
                <Image src={link.url} alt={link.label} width={isMobile?20:60} height={isMobile?20:60} className="object-cover"/>
            <span className="md:pl-4 pl-1 md:text-2xl text-sm md:font-semibold">
              {link.label}
            </span>
          </div>
        ))}
    </footer>
    </div>
  );
};
