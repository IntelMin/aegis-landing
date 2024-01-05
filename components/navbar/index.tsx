"use client";

import React, { useEffect, useState } from "react";
import { NavBarFixed } from "./navbar-fixed";
import { NavbarScroll } from "./navbar-scroll";
import { AnimatePresence } from "framer-motion";

type Props = {};

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
      <AnimatePresence>
        isScrolling ? (
        <NavbarScroll isScrolling={isScrolling} navEle={navEle} />
        ) : (
        <NavBarFixed navEle={navEle} />)
      </AnimatePresence>
    </>
  );
};
