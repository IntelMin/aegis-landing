import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Title = (props: Props) => {
  return (
    <div className="flex flex-col gap-16 w-full">
      <div className="w-full">
        <div className="flex items-center gap-6">
          <h1
            className="text-[56px] leading-[83px] font-[500]"
            style={{ color: "rgba(255, 255, 255, 0.50)" }}
          >
            Transforming
          </h1>
          <Image src="/star.png" alt="star" width={60} height={60} />
        </div>
        <h1
          className="text-[56px] leading-[83px] font-[500]"
          style={{ color: "rgba(255, 255, 255, 0.50)" }}
        >
          Blockchain Security
        </h1>
        <h1
          className="text-[56px] leading-[83px] font-[500] relative w-fit"
          style={{ color: "rgba(255, 255, 255, 0.50)" }}
        >
          with the <span className="font-[700] text-white"> Power of AI </span>
          <div className="absolute top-full right-0 w-fit h-full translate-x-[155px] z-[6] -translate-y-[34px] p-0 m-0">
            <div className="z-[6]">
              <Image
                src="/arrow.svg"
                alt="arrow"
                width={180}
                height={60}
                className="z-[6] relative"
              />
              <div className="absolute bottom-full left-full h-full w-[700px] z-[1] -translate-x-6 translate-y-3">
                <div className="py-4 px-6 bg-[#18181B] rounded-lg desc-con">
                  <p className="text-[20px] text-[#71717A] font-[300] leading-[32px]">
                    <span className="text-white font-[500]">Aegis</span> is
                    redefining the Blockchain landscape with{" "}
                    <span className="text-white font-[500]">AI powered</span>{" "}
                    tools. We are committed to security, transparency and
                    privacy for the good of the ecosystem. (paragraph)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <Link
          href="#"
          className="text-white text-lg font-[400] px-12 py-[18px] rounded-full bg-gradient-to-br from-[black] via-[#2b2b2b] to-[black]"
        >
          Buy $AEGIS Token
        </Link>
        <Link
          href="#"
          className="text-white text-lg font-[400] px-16 py-[18px] rounded-full bg-black border border-[#FFFFFF45]"
        >
          Live Chart
        </Link>
      </div>
    </div>
  );
};
