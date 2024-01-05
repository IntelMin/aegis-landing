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
      <div className="w-[14%] flex items-center justify-center py-8 nav-ele-bg">
        <div>
          <Link
            className="text-[#FFFFFF80] text-[18px] text-center w-full"
            href="link"
          >
            Link
          </Link>
        </div>
      </div>
      <div className="w-[14%] flex items-center justify-center py-8 nav-ele-bg">
        <Link
          className="text-[#FFFFFF80] text-[18px] text-center w-full"
          href="link"
        >
          Link
        </Link>
      </div>
      <div className="w-[14%] flex items-center justify-center py-8 nav-ele-bg">
        <Link
          className="text-[#FFFFFF80] text-[18px] text-center w-full"
          href="link"
        >
          Link
        </Link>
      </div>
      <div className="w-[16%] flex items-center justify-center py-8 nav-ele-bg relative">
        <Link
          className="text-[#FFFFFF80] text-[18px] text-center w-full z-[2]"
          href="link"
        >
          Link
        </Link>
        <div className="absolute w-[100%] h-[150%] bottom-0 left-0 -translate-x-[40%] nav-absolute-ele" />
        <div className="absolute w-[100%] h-[160%] bottom-0 left-0 translate-x-[40%] nav-absolute-ele" />
      </div>
      <div className="w-[17.5%] flex items-center justify-center py-8 nav-ele-bg">
        <Link
          className="text-[#FFFFFF80] text-[18px] text-center w-full"
          href="link"
        >
          Link
        </Link>
      </div>
      <div className="w-[12.5%] flex items-center justify-center py-8 nav-ele-bg">
        <Link
          className="text-[#FFFFFF80] text-[18px] text-center w-full"
          href="link"
        >
          Link
        </Link>
      </div>
      <div className="w-[12%] flex items-center justify-center py-8 nav-ele-bg">
        <Link
          className="text-[#FFFFFF80] text-[18px] text-center w-full"
          href="link"
        >
          Link
        </Link>
      </div>
    </div>
  );
};
