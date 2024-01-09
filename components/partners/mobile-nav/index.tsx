import useCoinData from "@/utils/get-coin-data";
import Link from "next/link";
import React from "react";

type Props = {
  isNavOpen: boolean;
  setIsNavOpen: (isNavOpen: boolean) => void;
};

export const MobileNav = ({ setIsNavOpen }: Props) => {
  const coinDetail = useCoinData();
  const navArr = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Roadmap",
      link: "#roadmap",
    },
    {
      name: "Tokenomics",
      link: "#tokenomics",
    },
    {
      name: "Whitepaper",
      link: "#demo",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ];
  return (
    <div className="md:hidden fixed top-0 left-0 h-screen w-screen bg-black z-[90]">
      <div className="flex items-end justify-start h-full w-full bg bg-nav z-[91] p-2">
        <div className="flex flex-col px-9 py-16 gap-10 w-full">
          {navArr.map((nav, index) => (
            <Link
              key={index}
              href={nav.link}
              onClick={() => setIsNavOpen(false)}
              className={`text-[#FFFFFF80] hover:text-white text-[26px] font-[700]`}
            >
              {nav.name}
            </Link>
          ))}
          <div className="flex items-center gap-12">
            <p className="text-[#FFFFFF80] hover:text-white text-[26px] font-[700]">
              Token Price
            </p>
            <div className="flex items-center gap-2">
              <div className="w-[12px] h-[12px] rounded-full bg-white " />
              <p className="text-white text-[24px] font-[700]">${coinDetail?.current_price?.usd}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
