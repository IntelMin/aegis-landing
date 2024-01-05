import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  navEle: {
    name: string;
    url: string;
  }[];
};

export const NavBarFixed = ({ navEle }: Props) => {
  return (
    <div className="absolute w-[100vw] top-0 left-0 flex items-center nav-container">
      <div className="w-[10%] flex items-center justify-center nav-ele-bg">
        <div>
          <Link
            className="text-[#FFFFFF80] text-[16px] text-center w-full"
            href="link"
          >
            About
          </Link>
        </div>
      </div>
      <div className="w-[14.5%] flex items-center justify-center nav-ele-bg">
        <Link
          className="translate-x-4 text-[#FFFFFF80] text-[16px] text-center w-full"
          href="link"
        >
          Roadmap
        </Link>
      </div>
      <div className="w-[17.5%] flex items-center justify-center nav-ele-bg">
        <Link
          className="text-[#FFFFFF80] text-[16px] text-center w-full"
          href="link"
        >
          Tokenomics
        </Link>
      </div>
      <div className="w-[16%] flex items-center justify-center nav-ele-bg relative">
        <Link
          className="text-[#FFFFFF80] flex items-center justify-center z-[2]"
          href="link"
        >
          <div className="logo-bg relative z-[3] w-[100px] flex items-center justify-center logo-bg">
            <Image src="/logo.png" alt="logo" width={70} height={70} />
          </div>
        </Link>
        <div className="absolute w-[100%] h-[150%] bottom-0 left-0 -translate-x-[30%] nav-absolute-ele" />
        <div className="absolute w-[100%] h-[160%] bottom-0 left-0 translate-x-[40%] nav-absolute-ele" />
      </div>
      <div className="w-[17.5%] flex items-center justify-center nav-ele-bg">
        <Link
          className="text-[#FFFFFF80] text-[16px] text-center w-full"
          href="link"
        >
          Whitepaper
        </Link>
      </div>
      <div className="w-[12.5%] flex items-center justify-center nav-ele-bg">
        <Link
          className="text-[#FFFFFF80] text-[16px] text-center w-full"
          href="link"
        >
          FAQ
        </Link>
      </div>
      <div className="w-[12%] flex items-center justify-center nav-ele-bg">
        <Link
          className="text-[#FFFFFF80] text-[16px] text-center w-full"
          href="link"
        >
          Link
        </Link>
      </div>
    </div>
  );
};
