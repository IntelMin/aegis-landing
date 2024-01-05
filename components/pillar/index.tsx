import React from "react";
import { Card } from "./card";

type Props = {};

export const PillarsSection = (props: Props) => {
  return (
    <div className="bg flex flex-col gap-16 w-full h-screen px-16 py-[70px] mt-[60px]">
      <div className="flex flex-col gap-3">
        <h1 className="text-[#3F3F46] text-[64px] font-[600] leading-[80px]">
          Discover Out
        </h1>
        <h2 className="text-[#FFFFFF] text-[64px] font-[700] leading-[80px]">
          Core Pillars
        </h2>
      </div>
      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-16 w-full">
        <Card
          title="Decentralized Trust"
          description="Aegis is founded on the principles of decentralization, trust is dispersed throughout our network. We create a transparent, flexible, and resilient trust architecture by utilizing cutting-edge technologies and AI."
          image="bank"
          translate="-translate-y-6"
          />
        <Card
          title="Inclusive Innovation"
          description="Our mantra at Aegis is that everyone has a responsibility to ensure security. The Inclusive Innovation pillar places a strong emphasis on democratizing access to security solutions so that both non-programmers and developers may use them."
          image="clock"
          translate="-translate-y-16"
          />
        <Card
          title="Holistic Security Solutions"
          description="Aegis guarantees that security is not a piecemeal but rather an integrated, comprehensive strategy with its safe hardware breakthroughs, browser extension protection, smart contract audits, and real-time threat monitoring."
          image="lock"
          translate="-translate-y-32"
        />
      </div>
    </div>
  );
};
