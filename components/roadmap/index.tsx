import React from "react";
import { isMobile } from 'react-device-detect';

export const Roadmap = () => {
  return (
    <div
      id="home"
      className="bg-home w-full min-h-screen md:pt-[200px] md:px-16 md:relative"
    >
      {isMobile ? (
        <div>
          <h1 className="text-4xl text-center text-white font-black mt-4">Roadmap</h1>

          <div className="flex-cols justify-start items-start border-l-[12px] border-white mx-12 relative mt-[80x] text-sm">
              <div
                className="flex-cols list-none text-white  relative  "
                style={{
                  background:
                    "linear-gradient(to right, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 40.47%)",
                }}
              >
                <button className="bg-[#27272A] text-white text-center px-4 py-2 rounded-full absolute -top-5 -left-12">
                  Phase 1
                </button>
                <ul className="itm space-y-3  pt-6 text-start  pb-2 ml-8 mt-8">
                  <li>$AGS Token Launch</li>
                  <li>Aegis AI Community Establishment</li>
                  <li>Initial $AGS Marketing and Listings</li>
                  <li>2500 $AGS Holders</li>
                  <li>Awareness Ads on X, Telegram and more</li>
                  <li>Whitepaper release</li>
                </ul>
              </div>
              <div
                className="flex-cols list-none text-white  relative "
              >
               <button className="bg-[#27272A] text-white text-center px-4 py-2 rounded-full absolute -top-10 -left-12">
                  Phase 2
                </button>
                <ul className="itm space-y-3  mt-10 text-start pb-2 ml-8">
                <li>Aegis AI dApp launch</li>
                  <li>Onboarding of Global Advisors</li>
                  <li>Launch of Community Oriented Programs</li>
                  <li>Blockchain Audit Tools</li>
                  <li>Launch of Blockchain Security Tools </li>
                </ul>
              </div>
              <div
                className="flex-cols list-none text-white  relative  "
                
              >
                <button className="bg-[#27272A] text-white text-center px-4 py-2 rounded-full absolute -top-10 -left-12">
                  Phase 3
                </button>
                <ul className="itm space-y-3  mt-8 text-start ml-8 pb-2">
                <li>Listing on Tier 2 and Tier 1 exchanges</li>
                  <li>Aegis AI penetration testing tool launch</li>
                  <li>Sponsorships</li>
                  <li>Major Partnerships</li>
                  <li>Ambassador Program</li>
                  <li>Global Partnerships with Organizations/Exchanges</li>
                </ul>
              </div>
              <div className="p-4 bg-[#27272A] rotate-45 rounded-full absolute -left-[22px] -bottom-1 "></div>
              </div>
              
        </div>
      ) : (
        <div>
          <div
            className="absolute top-0 left-0 w-full h-full -translate-y-6"
            style={{
              background:
                "linear-gradient(#000000ad 1.67%, rgba(17, 17, 17, 0) 18.08%)",
            }}
          />
          <div className="py-2 w-full">
            <h1 className="text-6xl text-center text-white font-black ">Roadmap</h1>
            <div
              className="flex mt-20 h-[8px] justify-between relative mx-4 "
              style={{
                background: "linear-gradient(to right, white 25%,#27272A 50%)",
              }}
            >
              <div className="p-4 bg-white rotate-45 mb-2 absolute -top-3"></div>
              <div className="p-4 bg-[#27272A] rotate-45 rounded-full absolute right-0 -top-3 "></div>
            </div>
            <div className="flex justify-center space-x-40 ">
              <div
                className="flex-cols list-none text-white  relative border-r-4 border-white "
                style={{
                  background:
                    "linear-gradient(to left, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 40.47%)",
                }}
              >
                <button className="bg-[#27272A] text-white text-center px-8 py-2 rounded-full absolute -top-6 left-[126px]">
                  Phase 1
                </button>
                <ul className="itm space-y-3  mt-8 text-end mr-8 pb-2">
                  <li>$AGS Token Launch</li>
                  <li>Aegis AI Community Establishment</li>
                  <li>Initial $AGS Marketing and Listings</li>
                  <li>2500 $AGS Holders</li>
                  <li>Awareness Ads on X, Telegram and more</li>
                  <li>Whitepaper release</li>
                </ul>
              </div>

              <div className="flex-cols list-none text-white h-[131px] text-center relative">
                <button className="bg-[#27272A] text-white text-center px-8 py-2 rounded-full absolute -top-6 right-[85px]">
                  Phase 2
                </button>
                <ul className="space-y-3 mt-8">
                  <li>Aegis AI dApp launch</li>
                  <li>Onboarding of Global Advisors</li>
                  <li>Launch of Community Oriented Programs</li>
                  <li>Blockchain Audit Tools</li>
                  <li>Launch of Blockchain Security Tools </li>
                </ul>
              </div>

              <div className="flex-cols list-none text-white h-[131px] text-center relative">
                <button className="bg-[#27272A] text-white text-center px-8 py-2 rounded-full absolute -top-6 left-[105px]">
                  Phase 3
                </button>
                <ul className="space-y-3 mt-8">
                  <li>Listing on Tier 2 and Tier 1 exchanges</li>
                  <li>Aegis AI penetration testing tool launch</li>
                  <li>Sponsorships</li>
                  <li>Major Partnerships</li>
                  <li>Ambassador Program</li>
                  <li>Global Partnerships with Organizations/Exchanges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
