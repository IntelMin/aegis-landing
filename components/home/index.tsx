"use client";

import Image from "next/image";
import React from "react";
import { Title } from "./title";

type Props = {};

export const HomeSection = (props: Props) => {
  return (
    <div id="home" className="bg-home w-full min-h-screen pt-[100px]">
      <div className="py-12 px-16">
        <Title />
      </div>
    </div>
  );
};
