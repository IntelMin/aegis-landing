import Link from "next/link";
import React from "react";

type Props = {
  isScrolling: boolean;
  navEle: {
    name: string;
    url: string;
  }[];
};

export const NavbarScroll = ({ isScrolling, navEle }: Props) => {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 flex items-center gap-8 top-4 w-fit bg-[#ffffff14] border border-[#ffffff14] px-8 py-2 rounded-full">
      {navEle?.map((ele) => (
        <Link
          key={ele.name}
          href={ele.url}
          className={`text-lg text-neutral-400`}
        >
          {ele.name}
        </Link>
      ))}
      <Link
        href="/"
        className="text-sm text-neutral-100 bg-black rounded-full cursor-pointer py-3 px-6"
      >
        Open dApp
      </Link>
    </div>
  );
};
