import Image from "next/image";
import React from "react";

export const TokenomicsSection = () => {
  return (
    <div className="flex flex-col gap-16 mt-[100px] items-center w-full px-16 text-white">
      <h2 className="text-4xl font-bold text-center">Tokenomics</h2>
      {/* Polygon section */}
      <div className="flex gap-5 relative">
        <Image
          src="/big-logo.png"
          alt="token"
          width={220}
          height={220}
          className="absolute top-1/2 left-1/2 -translate-x-[calc(100%-80px)] -translate-y-1/2 z-[10]"
        />
        <div className="flex flex-col gap-5">
          <div className="w-[230px] h-[250px] bg-[#18181B] rounded-md rounded-tl-[200px] flex items-start p-4 justify-end flex-col relative">
            <h1 className="text-[#71717A] text-lg font-[300]">Token Name</h1>
            <p className="text-[#fff] text-[28px] leading-[32px] font-[700]">
              Aegis
            </p>
            <div className="absolute border-l border-[#888888] top-0 left-0 w-[250px] h-[190px] rounded-tl-[190px] translate-x-[-6px] translate-y-[10px] rotate-[-5deg]" />
          </div>
          <div
            className="w-[290px] h-[320px] bg-[#18181B] rounded-md flex items-start p-4 justify-end flex-col relative"
            style={{
              clipPath: "polygon(0 0, 75% 0, 100% 20%, 100% 100%, 0 100%)",
            }}
          >
            <h1 className="text-[#71717A] text-lg font-[300]">Total Supply</h1>
            <p className="text-[#fff] text-[28px] leading-[32px] font-[700]">
              100,000,000
            </p>
            <div className="w-1/2 h-1/2 absolute top-0 right-0 border-t border-r border-[#888888]" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div
            className="w-[290px] h-[320px] bg-[#18181B] rounded-md -translate-x-[60px] flex items-end p-4 justify-start flex-col"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%, 0 77.5%)",
            }}
          >
            <h1 className="text-[#71717A] text-lg font-[300]">Tax</h1>
            <p className="text-[#fff] text-[28px] leading-[32px] font-[700]">
              5/5
            </p>
          </div>
          <div className="w-[230px] h-[250px] bg-[#18181B] rounded-md rounded-br-[200px] p-6 relative">
            <h1 className="text-[#71717A] text-lg font-[300]">Ticker</h1>
            <p className="text-[#fff] text-[28px] leading-[32px] font-[700]">
              AGS
            </p>
            <div className="absolute border-r border-[#888888] top-0 left-0 w-[250px] h-[190px] rounded-br-[190px] translate-x-[-6px] translate-y-[46px] rotate-[-7deg]" />
          </div>
        </div>
      </div>
    </div>
  );
};
