import React from "react";
import { Card } from "./card";
import { isViewportValid } from "@/utils/mediaQuery";

type Props = {};

export const PillarsSection = (props: Props) => {
  const isMobile = isViewportValid(700);
  return (
    <div className="bg flex flex-col gap-16 w-full px-4 md:px-16 p-[70px] mt-[60px]">
      <div className="flex flex-col gap-0 md:gap-3 max-md:items-center">
        <h1 className="text-[#3F3F46] text-[40px] md:text-[64px] font-[600] md:leading-[80px]">
          Discover Our
        </h1>
        <h2 className="text-[#FFFFFF] text-[40px] md:text-[64px] font-[700] md:leading-[80px]">
          Core Pillars
        </h2>
      </div>
      {/* Cards Section */}
      <div className="max-md:flex grid grid-cols-3 gap-8 w-full overflow-x-scroll md:pt-[128px] md:translate-y-[-128px]">
        <Card
          title="Decentralized Trust"
          description="Aegis is founded on the principles of decentralization, trust is dispersed throughout our network. We create a transparent, flexible, and resilient trust architecture by utilizing cutting-edge technologies and AI."
          image="bank"
          translate={isMobile ? "" : "-translate-y-6"}
        />
        <Card
          title="Inclusive Innovation"
          description="Our mantra at Aegis is that everyone has a responsibility to ensure security. The Inclusive Innovation pillar places a strong emphasis on democratizing access to security solutions so that both non-programmers and developers may use them."
          image="clock"
          translate={isMobile ? "" : "-translate-y-16"}
        />
        <Card
          title="Holistic Security Solutions"
          description="Aegis guarantees that security is not a piecemeal but rather an integrated, comprehensive strategy with its safe hardware breakthroughs, browser extension protection, smart contract audits, and real-time threat monitoring."
          image="lock"
          translate={isMobile ? "" : "-translate-y-32"}
        />
      </div>
    </div>
  );
};
