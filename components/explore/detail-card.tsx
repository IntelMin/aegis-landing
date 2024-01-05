import Image from "next/image";
import React from "react";

type Props = {
    title: string;
    description: string;
    image: string;
    gradient: string;
};

export const DetailCard = ({ title, description, image, gradient }: Props) => {
  return (
    <div
      className="flex flex-col justify-between p-8 rounded-[40px] h-[390px] w-[360px] min-w-[360px]"
      style={{
        background: `${gradient}`,
      }}
    >
      <div className="flex flex-col gap-2">
        <Image src={image} alt="token" width={52} height={52} />
        <h1 className="text-[32px] text-white font-[700]">{title}</h1>
      </div>
      <div>
        <p className="text-[16px] font-[500] leading-[32px] text-[#FFF]">
          {description}
        </p>
      </div>
    </div>
  );
};
