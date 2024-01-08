import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavAnimations } from "./animation-var";
import Image from "next/image";

type Props = {
  isScrolling: boolean;
  navEle: {
    name: string;
    url: string;
  }[];
  isNavOpen: boolean;
  setIsNavOpen: (isNavOpen: boolean) => void;
};

export const NavbarScroll = ({
  isScrolling,
  navEle,
  isNavOpen,
  setIsNavOpen,
}: Props) => {
  return (
    <motion.div
      key={1}
      initial="initial"
      animate={isScrolling ? "animate" : "initial"}
      exit="exit"
      variants={NavAnimations}
      className="fixed left-1/2 z-[999] -translate-x-1/2 flex items-center gap-8 top-4 w-fit bg-[#ffffff14] border border-[#ffffff14] pl-2 md:pl-6 pr-2 py-2 rounded-full backdrop-blur-lg"
    >
      {navEle?.map((ele) => (
        <Link
          key={ele.name}
          href={ele.url}
          className={`text-lg text-neutral-400 max-md:hidden`}
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
      <button type="button" onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden">
        <Image
          alt="burger-icon"
          src={isNavOpen ? "/close.svg" : "/burger-icon.png"}
          width={40}
          height={40}
        />
      </button>
    </motion.div>
  );
};
