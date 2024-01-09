import React from "react";
import { isViewportValid } from "@/utils/mediaQuery";

export const Roadmap = () => {
  const isMobile = isViewportValid(700);
  return (
    <div id="roadmap" className="bg-home w-full md:py-[50px] md:px-16 md:relative">
      {isMobile ? (
        <div>
          <h1 className="text-4xl text-center text-white font-black mt-4">
            Roadmap
          </h1>
          <div className="flex-cols justify-start items-start border-l-[12px] border-white mx-12 relative mt-[80x] text-sm">
            <div
              className="flex-cols list-none text-white  relative  "
              style={{
                background:
                  "linear-gradient(to right, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 40.47%)",
              }}
            >
              <button className="bg-[#27272A] text-white text-center px-4 py-2 rounded-full absolute -top-5 -left-12">
                Module 1
              </button>
              <ul className="itm space-y-3  pt-6 text-start  pb-2 ml-8 mt-8">
                <li>Formation of Blockchain Security Team</li>
                <li>Cutting-edge LLM Models Training</li>
                <li>AEGIS Technical Framework Design</li>
                <li>Grand Unveiling of $AEGIS Token</li>
                <li>Publication of Comprehensive Whitepaper</li>
                <li>$AEGIS Tracker Listings</li>
                <li>Rigorous Testing and Development Protocols</li>
                <li>Dapp Demo/Preview</li>
              </ul>
            </div>
            <div className="flex-cols list-none text-white  relative ">
              <button className="bg-[#27272A] text-white text-center px-4 py-2 rounded-full absolute -top-10 -left-12">
                Module 2
              </button>
              <ul className="itm space-y-3  mt-10 text-start pb-2 ml-8">
                <li>Seamless Client Onboarding Processes</li>
                <li>Venture Capital Investment Rounds</li>
                <li>Launch of Web V2</li>
                <li>Evolutionary Whitepaper V2</li>
                <li>Unveiling Aegis Dapp Beta for Token and Code Analytics</li>
                <li>Launch of Staking Mechanisms and Revenue Sharing</li>
                <li>Implementation of Protocol Monitoring</li>
                <li>Launch of Bug Bounty Programs</li>
              </ul>
            </div>
            <div className="flex-cols list-none text-white  relative  ">
              <button className="bg-[#27272A] text-white text-center px-4 py-2 rounded-full absolute -top-10 -left-12">
                Module 3
              </button>
              <ul className="itm space-y-3  mt-8 text-start ml-8 pb-2">
                <li>Strategic Partnerships to Enhance Ecosystem</li>
                <li>Pentesting for Enhanced Security</li>
                <li>AEGIS Technical Framework Design</li>
                <li>Strategic Sponsorships</li>
                <li>Exchange integrations and partnerships</li>
                <li className="blur-[12px]">To be anounced soon</li>
                <li className="blur-[12px]">To be anounced soon</li>
                <li className="blur-[12px]">To be anounced soon</li>
                <li className="blur-[12px]">To be anounced soon</li>
              </ul>
            </div>
            <div className="p-4 bg-[#27272A] rotate-45 rounded-full absolute -left-[22px] -bottom-1 "></div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="absolute top-0 left-0 w-full h-full -translate-y-6 pb-6"
            style={{
              background:
                "linear-gradient(#000000ad 1.67%, rgba(17, 17, 17, 0) 18.08%)",
            }}
          />
          <div className="py-2 w-full">
            <h1 className="text-6xl text-center text-white font-black ">
              Roadmap
            </h1>
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
                  Module 1
                </button>
                <ul className="itm space-y-3  mt-8 text-end mr-8 pb-2">
                  <li>Formation of Blockchain Security Team</li>
                  <li>Cutting-edge LLM Models Training</li>
                  <li>AEGIS Technical Framework Design</li>
                  <li>Grand Unveiling of $AEGIS Token</li>
                  <li>Publication of Comprehensive Whitepaper</li>
                  <li>$AEGIS Tracker Listings</li>
                  <li>Rigorous Testing and Development Protocols</li>
                  <li>Dapp Demo/Preview</li>
                </ul>
              </div>

              <div className="flex-cols list-none text-white h-[131px] text-center relative">
                <button className="bg-[#27272A] text-white text-center px-8 py-2 rounded-full absolute -top-6 right-[85px]">
                  Module 2
                </button>
                <ul className="space-y-3 mt-8 translate-x-7">
                  <li>Seamless Client Onboarding Processes</li>
                  <li>Venture Capital Investment Rounds</li>
                  <li>Launch of Web V2</li>
                  <li>Evolutionary Whitepaper V2</li>
                  <li>
                    Unveiling Aegis Dapp Beta for Token and Code Analytics
                  </li>
                  <li>Launch of Staking Mechanisms and Revenue Sharing</li>
                  <li>Implementation of Protocol Monitoring</li>
                  <li>Launch of Bug Bounty Programs</li>
                </ul>
              </div>

              <div className="flex-cols list-none text-white h-[131px] text-center relative">
                <button className="bg-[#27272A] text-white text-center px-8 py-2 rounded-full absolute -top-6 left-[105px]">
                  Module 3
                </button>
                <ul className="space-y-3 mt-8">
                  <li>Strategic Partnerships to Enhance Ecosystem</li>
                  <li>Pentesting for Enhanced Security</li>
                  <li>AEGIS Technical Framework Design</li>
                  <li>Strategic Sponsorships</li>
                  <li>Exchange integrations and partnerships</li>
                  <li className="blur-[12px] my-2">To be anounced soon</li>
                  <li className="blur-[12px] my-2">
                    Lorem ipsum dolor sit amet, consectetur
                  </li>
                  <li className="blur-[12px] my-2">
                    Sed do eiusmod tempor incididunt ut labore
                  </li>
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
