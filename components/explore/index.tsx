"use client";

import React, { useRef, useState } from "react";
import { DetailCard } from "./detail-card";
import Tilt from "react-parallax-tilt";
import { isViewportValid } from "@/utils/mediaQuery";

type Props = {};

export const ExploreSection = (props: Props) => {
  const isMobile = isViewportValid(700);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; 
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div className="bg-circumcircle flex flex-col gap-20 w-full min-h-screen ">
      <div className="relative px-3 md:px-16 py-[100px] w-full h-full">
        <div
          className="absolute top-0 left-0 w-full h-full -translate-y-6"
          style={{
            background:
              "linear-gradient(#000000ad 1.67%, rgba(17, 17, 17, 0) 18.08%)",
          }}
        />
        <div className="w-full h-full flex-col gap-3 items-center flex justify-center">
          <h1 className="text-[40px] max-md:flex max-md:flex-col max-md:items-center md:text-[64px] text-[#3F3F46] font-[500]">
            Explore Our <span className="text-white font-[500]">Solutions</span>
          </h1>
          <p className="text-[20px] font-[400] leading-[32px] text-[#71717A] text-center">
            <span className="text-white">Aegis</span> Security Ecosystem has a
            combination of tools to help you {!isMobile && <br />}
            navigate your journey in Web3 in the most secure way:
          </p>
          <div
            className="w-full overflow-y-scroll py-10 px-4 flex items-center gap-8 z-[20]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            ref={containerRef}
          >
            <DetailCard
              title="Token Analysis"
              description="Analyze tokens involved in the transactions to get information such as name, symbol, decimals, price, supply, liquidity, holders, transfers, and more."
              image="/token.png"
              gradient="pink-noise"
            />
            <DetailCard
              title="Token Audits"
              description="Verify the legitimacy, functionality, and security of any token. It helps to identify any red flags or issues."
              image="/token-audit.png"
              gradient="green-noise"
            />
            <DetailCard
              title="Code Audits"
              description="Run quick code audits, unit testing, test environment, test execution, and code quality checks on any smart contract."
              image="/code-audit.png"
              gradient="gray-noise"
            />
            <DetailCard
              title="Protocol Monitoring"
              description="Monitor systems and protocols to detects potential exploits, hacks, and threats dapp."
              image="/protocol.png"
              gradient="purple-noise"
            />
            <DetailCard
              title="Bug Bounty"
              description="Participate in Aegis’s bug bounty programs and earn rewards for finding and reporting vulnerabilities."
              image="/bug.png"
              gradient="orange-noise"
            />
            <DetailCard
              title="Pentesting"
              description="Test the security and resilience of protocols and dapps. You can as well as learn from the best practices and techniques of whitehats."
              image="/pentest.png"
              gradient="blue-noise"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
