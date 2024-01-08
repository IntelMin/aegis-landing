import Image from "next/image";
import React from "react";
import { TokenomicsSection } from "..";
import { ImageCard } from "./image-card";
import { isViewportValid } from "@/utils/mediaQuery";
import { Information } from "../flow";

export const Demo = () => {
  const isMobile = isViewportValid(700);
  const demoImages = [
    {
      url: "/democollection/image 8.png",
    },
    {
      url: "/democollection/image 9.png",
    },
    {
      url: "/democollection/image 10.png",
    },
    {
      url: "/democollection/image 11.png",
    },
  ];

  return (
    <div id="demo" className="bg-circle mb-10">
      <div className="w-full pt-[20px] flex max-md:flex-col max-md:gap-10 max-md:px-6 bg">
        <div className="flex-cols w-full md:w-[40%]">
          <div className="text-white text-start font-normal space-y-6 md:space-y-10 mt-4 md:pl-20 md:pr-10">
            <h1 className="text-[40px] md:text-6xl text-center md:text-start text-[#27272A] font-semibold leading-[50px] md:leading-[70px]">
              Aegis <br />
              <span className="text-white">dApp</span> demo
            </h1>
            <p className="text-[#71717A] line-break max-md:text-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 pl-10 mt-4 max-md:hidden">
            {demoImages.map((demo, index) => (
              <ImageCard key={index} demo={demo} />
            ))}
          </div>
        </div>
        <div className="w-full md:w-[60%]">
          <Image
            src={isMobile ? "/demoMobileImage.png" : "/demoImage.png"}
            alt="demo"
            width={1920}
            height={1080}
            layout="responsive"
            className="md:object-cover"
          />
        </div>
        <div className="gap-2 flex overflow-x-scroll md:pl-10 mt-4 md:hidden">
          {demoImages.map((demo, index) => (
            <ImageCard key={index} demo={demo} />
          ))}
        </div>
      </div>
      <Information/>
      <TokenomicsSection />
    </div>
  );
};

export default Demo;