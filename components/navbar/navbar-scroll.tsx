import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavAnimations } from "./animation-var";

type Props = {
  isScrolling: boolean;
  navEle: {
    name: string;
    url: string;
  }[];
};

export const NavbarScroll = ({ isScrolling, navEle }: Props) => {
  return (
    <motion.div
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed left-1/2 z-[999] -translate-x-1/2 flex items-center gap-8 top-4 w-fit bg-[#ffffff14] border border-[#ffffff14] pl-6 pr-2 py-2 rounded-full"
    >
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
    </motion.div>
  );
};
