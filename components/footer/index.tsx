import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

export const FooterSection = () => {
  const socialLinks = [
    { url: "https://instagram.com", label: "Instagram" },
    { url: "https://x.com/AegisAISecurity", label: "Twitter" },
    { url: "https://t.me/AegisAISecurity", label: "Telegram" },
    { url: "https://linkedin.com", label: "LinkedIn" },
    { url: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-footer text-white px-5 md:px-20 pt-4 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-start text-start gap-4">
          <h2 className="text-2xl font-bold mb-4"></h2>
          <Image
            src="/ageislogo.png"
            className=""
            width={179}
            height={46}
            alt="ageislogo"
          />
          <nav className="flex max-md:flex-col max-md:gap-5 md:flex-wrap justify-center gap-2 mb-4 lg:justify-start md:space-x-4 mx-2">
            <a href="#" className="text-sm hover:underline">
              HOME
            </a>
            <a href="#" className="text-sm hover:underline">
              GAMES
            </a>
            <a href="#" className="text-sm hover:underline">
              BLOG
            </a>
            <a href="#" className="text-sm hover:underline">
              PRESS
            </a>
            <a href="#" className="text-sm hover:underline">
              CAREERS
            </a>
            <a href="#" className="text-sm hover:underline">
              CONTACT US
            </a>
          </nav>
          <div className="flex justify-between w-full md:justify-center gap-4 mb-4  ">
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                url={social.url}
                className="max-md:w-[20px] max-md:h-[20px] rounded-full shadow-white ring-50"
                fgColor="#FFFFFF"
                bgColor="transparent"
              />
            ))}
          </div>
          <hr className="w-full border-t border-[#FFFFFF1A] py-4" />
          <div className="flex max-md:flex-col max-md:gap-4 justify-between items-center w-full">
            <div className="text-xs max-md:flex max-md:gap-8 max-md:justify-center max-md:w-full">
              <span>Example@example.com</span>
              <span className="mx-2 max-md:text-[#FFFFFF1A]">|</span>
              <span>World wide</span>
            </div>
            <div className="flex max-md:flex-col max-md:justify-center items-center gap-6 text-xs text-gray-400 max-md:w-full">
              <div className="flex items-center gap-6 max-md:flex max-md:gap-8 max-md:justify-center max-md:w-full">
                <span className="text-white opacity-[0.3]">Privacy Policy</span>
                <span className="max-md:text-[#FFFFFF1A]">|</span>
                <span className="text-white opacity-[0.3]">
                  Terms & Service
                </span>
                <span className="max-md:hidden">|</span>
              </div>
              <span className="text-white opacity-[0.3]">
                ©2024 Enver Studio - All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
