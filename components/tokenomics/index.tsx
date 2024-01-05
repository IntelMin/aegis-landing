"use client";
import React, { useRef } from "react";
import { TokenomicsItem } from "./tokenomicsItem";

export const TokenomicsSection = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  return (
    <div
      className="bg-black w-full h-full pt-[100px] py-32 px-16 text-white"
      ref={refContainer}
    >
      <h2 className="text-4xl font-bold text-center mb-8">Tokenomics</h2>
      <div className="flex flex-col items-center space-y-4">
        <TokenomicsItem />
      </div>
    </div>
  );
};
