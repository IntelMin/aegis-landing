import Image from "next/image";
import React from "react";

type Props = {};

export const AboutSection = (props: Props) => {
  return (
    <div
      id="about"
      className="bg flex max-md:flex-col gap-4 md:gap-16 max-md:items-center w-full h-full px-4 md:pl-10 md:pr-[160px] md:py-[100px]"
    >
      <div className="flex flex-col items-center md:w-[40%] gap-16">
        <div className="flex md:flex-col gap-3 max-md:text-center md:gap-6">
          <h1 className="text-[#3F3F46] text-[40px] md:text-8xl font-[600]">
            About
          </h1>
          <h2 className="text-[#FFFFFF] text-[40px] md:text-7xl font-[700]">
            Aegis
          </h2>
        </div>
        <Image
          className="max-md:hidden"
          src="/about.png"
          alt="about-bg"
          width={350}
          height={300}
        />
      </div>
      <div className="flex flex-col gap-12 md:w-[60%]">
        <div className="flex gap-1">
          <h1 className="text-white text-[40px] max-md:leading-[90px] md:text-[56px] font-medium">
            A
          </h1>
          <div>
            <p className="text-[#71717A] text-lg md:text-[20px] leading-[28px] md:leading-[42px] font-[300] translate-y-[38px]">
              <span className="text-[#FFF] text-[20px] font-[500]">egis</span>{" "}
              Security Ecosystem combines state-of-the-art technology with an
              unwavering dedication to strengthening the blockchain ecosystem.
              With its suite of decentralized apps, cutting-edge hardware, and
              artificial intelligence, Aegis is more than simply a fix for
              digital security—rather, it represents a paradigm leap.
            </p>
            <p className="text-[#71717A] text-lg md:text-[20px] leading-[28px] md:leading-[42px] font-[300] translate-y-[38px]">
              our tools are built to protect users, developers, and traders in
              the rapidly changing Web3 landscape.
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <h1 className="text-white text-[40px] max-md:leading-[90px] md:text-[56px] font-medium">
            A
          </h1>
          <div>
            <p className="text-[#71717A] text-lg md:text-[20px] leading-[28px] md:leading-[42px] font-[300] translate-y-[38px]">
              <span className="text-[#FFF] text-[20px] font-[500]">egis</span>{" "}
              is the leading blockchain security and privacy platform for the
              web3 space, powered by cutting-edge artificial intelligence,
              blockchain analysis, and data science.
            </p>
          </div>
        </div>
        <div className="md:hidden flex items-center w-full justify-center my-6">
          <Image src="/about.png" alt="about-bg" width={350} height={300} />
        </div>
      </div>
    </div>
  );
};
