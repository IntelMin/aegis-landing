import Image from "next/image";
import React from "react";
import { TokenomicsSection } from "..";
import { Information } from "../flow";

export const Demo = () => {
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
      <div className="w-full pt-[20px] flex ">
        <div className="flex-cols w-[40%] space-y-4 bg">
          <div className="text-white text-start font-normal space-y-10 mt-4 pl-20 pr-10 ">
            <h1 className="text-6xl text-start text-[#27272A] font-semibold leading-[70px]">
              Aegis <br />
              <span className="text-white">dApp</span> demo
            </h1>
            <p className="text-[#71717A] line-break">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae, repellendus iste ut soluta natus similique, veniam rem
              voluptas Lorem ipsum dolor sit, amet consectetur adi Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Recusandae,
              repellendus iste ut soluta natus similique, veniam rem
              voluptaspisicing elit. Recusandae, repellendus iste ut soluta
              natus similique, veniam rem voluptas delectus odio vitae, culpa
              quisquam!,natus similique, veniam rem voluptas delectus odio
              vitae, culpa quisquam!,natus similique, veniam rem voluptas
              delectus odio vitae, culpa quisquam!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 pl-10 mt-4 px-40">
            {demoImages.map((demo, index) => (
              <div
                key={index}
                className="col-span-1 flex justify-center items-center mt-4 "
              >
                <Image
                  src={demo.url}
                  alt="demo"
                  width={212}
                  height={152}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[60%]">
          <Image
            src="/demoImage.png"
            alt="demo"
            width={1920}
            height={1080}
            className="object-cover"
          />
        </div>
      </div>
      <Information/>
      <TokenomicsSection />
    </div>
  );
};

export default Demo;
