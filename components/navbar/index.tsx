"use client";

import React, { useEffect, useState } from "react";
import { NavBarFixed } from "./navbar-fixed";
import { NavbarScroll } from "./navbar-scroll";
import { AnimatePresence } from "framer-motion";
import useCoinData from "@/utils/get-coin-data";

type Props = {
  isNavOpen: boolean;
  setIsNavOpen: (isNavOpen: boolean) => void;
};

const navEle = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Features",
    url: "#features",
  },
  {
    name: "Roadmap",
    url: "#roadmap",
  },
  {
    name: "FAQ",
    url: "#faq",
  },
];


export const NavbarSection = (props: Props) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const coinDetail = useCoinData();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);

  return (
    <>
      <AnimatePresence initial={false}>
        isScrolling ? (
          {/* <NavBarFixed  isScrolling={isScrolling} coinData={coinDetail} navEle={navEle} isNavOpen={props.isNavOpen} setIsNavOpen={props.setIsNavOpen} /> */}
        <NavbarScroll isScrolling={isScrolling} navEle={navEle} isNavOpen={props.isNavOpen} setIsNavOpen={props.setIsNavOpen} />
        ) : (
        <NavBarFixed coinData={coinDetail} navEle={navEle} isNavOpen={props.isNavOpen} setIsNavOpen={props.setIsNavOpen} isScrolling={isScrolling} />)
      </AnimatePresence>
    </>
  );
};
