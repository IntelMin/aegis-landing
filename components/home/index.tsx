"use client";

import Image from "next/image";
import React from "react";
import { Title } from "./title";

type Props = {};

export const HomeSection = (props: Props) => {
  return (
    <div id="home" className="bg-home w-full min-h-screen pt-[100px]">
      <div className="relative h-full min-h-[calc(100vh-100px)] ">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(0deg, rgb(17 17 17 / 22%) 1.67%, rgba(17, 17, 17, 0.00) 102.08%)",
          }}
        />
        <div className="py-12 w-full px-16">
          <Title />
        </div>
      </div>
    </div>
  );
};
