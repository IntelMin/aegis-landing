"use client";

import React, { useState } from "react";
import { Title } from "./title";
import Image from "next/image";

type Props = {};

export const HomeSection = (props: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (event: React.MouseEvent) => {
    //? Center as center of screen;
    // setMousePosition({
    //   x: (event.clientX / window.innerWidth) * 2 - 1,
    //   y: -(event.clientY / window.innerHeight) * 2 + 1,
    // });
    //? Center as center of model;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMousePosition({
      x: ((event.clientX - 0) / centerX) * 2 - 1,
      y: -((event.clientY - 500) / centerY) * 2 + 1,
    });
  };

  return (
    <div id="home" className="bg-black w-full" onMouseMove={updateMousePosition}>
      <div className="w-full h-full pt-[100px] relative">
        <Image
          src="/linear.png"
          alt="linear"
          width={500}
          height={300}
          className="max-md:hidden absolute bottom-0 left-0 w-full h-[100px] z-[11]"
        />
        <div className="py-12 px-3 md:px-16 z-[10] relative">
          <Title mousePosition={mousePosition} />
        </div>
        <div className="max-md:hidden absolute bottom-0 right-0 w-[70%] h-[70%] overflow-hidden shadow-md shadow-black">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/factory.mkv" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};
