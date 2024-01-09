import Image from "next/image";
import React from "react";

type Props = {};

export const Information = (props: Props) => {
  const [isBugOpen, setIsBugOpen] = React.useState(false);
  const [isContractOpen, setIsContractOpen] = React.useState(false);
  const [isProtocolOpen, setIsProtocolOpen] = React.useState(false);

  const bugbounty = [
    "Vulnerability Checks",
    "Bounty Rewards",
    "Community Development",
  ];
  const smartContract = ["Token Analysis", "Token Audits", "Code Audits"];
  const protocolMonitoring = [
    "AI-enhanced Monitoring",
    "Threat Detections",
    "Real-time Monitoring System Setup",
  ];
  return (
    <div id="about" className="bg">
      <video autoPlay muted loop className="max-md:hidden">
        <source src="./Information.webm" type="video/webm" />
      </video>
      <div className="md:hidden flex items-center mt-8 flex-col gap-10">
        <div className="flex flex-col gap-3 p-5 items-center bg-[#27272A] w-[235px] info-card-clip">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className="text-white font-[700] text-[28px]">Aegis Dapp</h1>
        </div>
        <div className="flex flex-col items-center gap-4 relative">
          <div className="absolute top-[0px] right-0 w-[36px] h-[75px] bg-white rotate-[35deg] -translate-x-[20px] translate-y-[2.9px]" />
          <div
            className={`flex gap-3 p-5 rounded-lg items-center bg-[#F44336] w-[235px] h-[100px] info-card-clip justify-center border-[1.15px] border-white`}
            onClick={() => setIsBugOpen(!isBugOpen)}
          >
            <h1 className="text-white font-[500] text-[20px]">Bug Bounty</h1>
            <Image src="/up-arrow.svg" alt="logo" width={30} height={30} />
          </div>
          {isBugOpen &&
            bugbounty?.map((item) => (
              <div
                key={item}
                className={`flex gap-3 rounded-lg p-5 items-center bg-[#27272A] w-[235px] h-[80px] info-card-clip-child justify-center`}
              >
                <h1 className="text-white font-[400] text-[20px] text-center">
                  {item}
                </h1>
              </div>
            ))}
        </div>
        <div className="flex flex-col items-center gap-4 relative">
          <div className="absolute top-[0px] right-0 w-[36px] h-[75px] bg-white rotate-[35deg] -translate-x-[20px] translate-y-[2.9px]" />
          <div
            className={`flex gap-3 p-5 rounded-lg items-center bg-[#2962FF] w-[235px] h-[100px] info-card-clip justify-center border-[1.15px] border-white`}
            onClick={() => setIsContractOpen(!isContractOpen)}
            style={{
              filter:
                "drop-shadow(-6.845px 19.395px 87.618px rgba(41, 98, 255, 0.50))",
            }}
          >
            <h1 className="text-white font-[500] text-[20px] text-center">
              Smart Contract Security
            </h1>
            <Image src="/up-arrow.svg" alt="logo" width={30} height={30} />
          </div>
          {isContractOpen &&
            smartContract?.map((item) => (
              <div
                key={item}
                className={`flex gap-3 p-5 items-center bg-[#27272A] w-[235px] h-[80px] info-card-clip  rounded-lg justify-center`}
              >
                <h1 className="text-white font-[400] text-[20px] text-center">
                  {item}
                </h1>
              </div>
            ))}
        </div>
        <div className="flex flex-col items-center gap-4 relative">

        <div className="absolute top-[0px] left-0 w-[36px] h-[40px] bg-white rotate-[35deg] translate-x-[8px] translate-y-[6px]" />
          <div
            className={`flex gap-3 p-5 items-center rounded-lg bg-[#d79325] w-[235px] h-[100px] info-card-clip-child justify-center border-[1.15px] border-white`}
            style={{
              filter: "drop-shadow(6px 20px 42px #d79325)",
            }}
            onClick={() => setIsProtocolOpen(!isProtocolOpen)}
          >
            <h1 className="text-white font-[500] text-[20px] text-center">
              Protocol Monitoring
            </h1>
            <Image src="/up-arrow.svg" alt="logo" width={30} height={30} />
          </div>
          {isProtocolOpen &&
            protocolMonitoring?.map((item) => (
              <div
                key={item}
                className={`flex gap-3 p-5 items-center bg-[#27272A] w-[235px] h-[80px] info-card-clip rounded-lg justify-center`}
              >
                <h1 className="text-white font-[400] text-[20px] text-center">
                  {item}
                </h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
