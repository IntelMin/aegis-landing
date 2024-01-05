import Image from "next/image";
import React from "react";

type Props = {};

export const AboutSection = (props: Props) => {
  return (
    <div id="about" className="bg w-full">
      <div className="relative w-full min-h-[calc(100vh-32px)] flex items-center">
        <div className="flex flex-col gap-4 w-[60%] px-20 h-full">
          <h1 className="font-black text-7xl text-white leading-[83px]">
            About
          </h1>
          <p className="text-[20px] text-[#ffffff74] leading-[38px] w-[80%] font-[400]">
            Aegis AI is an AI-powered smart contract auditing tool that empowers
            end users with the ability to assess and enhance the security of
            their smart contracts, even without any coding knowledge. It is a
            revolutionary tool designed to bring accessibility, transparency,
            and trust to the world of blockchain technology. 
          </p>
        </div>
        <div className="w-[800px] h-[550px] absolute bottom-0 right-0">
          <Image
            src="/dApp.png"
            alt="dApp-image"
            width={500}
            height={500}
            className="w-full h-full"
          />
          </div>
      </div>
    </div>
  );
};
