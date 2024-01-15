import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Robo } from "./robo";
import { PerspectiveCamera } from "@react-three/drei";
import { isViewportValid } from "@/utils/mediaQuery";

type MouseProps = {
  x: number;
  y: number;
};

type Props = {
  mousePosition: MouseProps;
};

export const Title = (props: Props) => {
  const isMobile = isViewportValid(700);
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="w-full">
        <div className="flex items-center gap-6 max-md:text-center">
          <h1
            className="text-[40px] md:text-[56px] leading-[60px] md:leading-[83px] font-[500] max-md:w-full"
            style={{ color: "rgba(255, 255, 255, 0.50)" }}
          >
            Transforming
          </h1>
          <Image
            src="/star.png"
            alt="star"
            width={60}
            height={60}
            className="max-md:hidden"
          />
        </div>
        <h1
          className="text-[40px] md:text-[56px] leading-[60px] md:leading-[83px] font-[500] max-md:w-full max-md:text-center"
          style={{ color: "rgba(255, 255, 255, 0.50)" }}
        >
          Blockchain {isMobile ? "" : "Security"}
        </h1>
        <div
          className="text-[40px] md:text-[56px] max-md:flex max-md:text-center max-md:justify-center max-md:mdw-full max-md:items-center flex-col leading-[60px] md:leading-[83px] font-[500] relative md:w-fit"
          style={{ color: "rgba(255, 255, 255, 0.50)" }}
        >
          <span> {!isMobile ? "" : "Security"} with the</span>{" "}
          <span className="font-[700] text-white"> Power of AI </span>
          <div className="absolute top-full right-1/2 md:right-0 w-fit h-full translate-x-[200px] md:translate-x-[155px] z-[6] translate-y-[40px] md:-translate-y-[34px] p-0 m-0 ">
            <div className="z-[6] max-md:translate-x-[-140px] max-md:translate-y-[-30px]">
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={180}
                height={60}
                className="z-[6] relative  max-md:rotate-90 max-md:w-[90px]"
              />
              <div className="absolute bottom-full left-0 md:left-full h-full w-[350px] md:w-[600px] z-[1] -translate-x-[150px] md:-translate-x-6 translate-y-[120px] md:translate-y-3">
                <div className="py-2 md:py-4 px-4 md:px-6 bg-gradient-to-br from-[#2b2b2b] to-[black] rounded-lg desc-con text-left">
                  <p className="text-[16px] md:text-[20px] text-[#71717A] font-[300] leading-[24px] md:leading-[32px]">
                    <span className="text-white font-[500]">Aegis</span> is
                    redefining the Blockchain landscape with{" "}
                    <span className="text-white font-[500]">AI powered</span>{" "}
                    tools. We are committed to security, transparency and
                    privacy for the good of the ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center max-md:justify-between md:gap-5 max-md:mt-[200px] max-md:px-3 z-[10]">
        <Link
          href="https://app.uniswap.org/swap?outputCurrency=0x55a8f6c6b3aa58ad6d1f26f6afeded78f32e19f4"
          className="z-[10] text-white text-lg font-[400] min-w-[170px] text-center px-4 md:px-12 py-3 md:py-[18px] rounded-[15px] md:rounded-xl bg-gradient-to-br from-[#2b2b2b] to-[black] border border-2 border-[#0f0f0f] hover:border-[#363636] hover:from-[black] hover:to-[#2b2b2b]  transition-all ease-in duration-350"
        >
          Buy <span className="font-bold">$AEGIS</span>
        </Link>

        <Link
          href="https://www.dextools.io/app/ether/pair-explorer/0xFe73c784D047ff1bfc06230D6001DDc9FF1F59BB"
          className="text-white text-lg font-[400] px-6 md:px-16 py-3 md:py-[18px] rounded-[15px] md:rounded-xl bg-black hover:bg-[#82828245] border border-2 border-[#FFFFFF85] hover:border-[#fff] transition-all ease-in duration-350"
        >
          Live Chart
        </Link>
      </div>
      <div className="md:w-1/2 mt-4 md:translate-x-[40px]">
        <Canvas
          className="h-[365px]"
          style={{
            height: "360px",
            width: isMobile ? "" : "550px",
            transform: isMobile ? "translateX(0)" : "translateX(-70px)",
          }}
        >
          <ambientLight intensity={1.7} />
          <directionalLight position={[10, 10, 10]} intensity={3} />
          <pointLight position={[10, 10, 10]} />
          {/* <PerspectiveCamera makeDefault position={[-10, 0, -90]} fov={75} /> */}
          <Robo mousePosition={props.mousePosition} />
        </Canvas>
      </div>
    </div>
  );
};
