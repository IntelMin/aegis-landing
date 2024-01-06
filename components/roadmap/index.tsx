import React from "react";

export const Roadmap = () => {
  return (
    <div
      id="home"
      className="bg-home w-full min-h-screen pt-[200px] px-16 relative"
    >
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
  );
};

export default Roadmap;
