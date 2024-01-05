import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  translate?: string;
};

export const Card = ({ title, description, image, translate }: Props) => {
  return (
    <div
      className={`col-span-1 max-w-[410px] flex flex-col justify-between border-2 border-[#27272A] rounded relative card-clip ${translate}`}
    >
      <div className="w-[100px] h-[150px] bg-[#27272A] absolute -top-[58px] left-[88.5%] rotate-[-43deg]" />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(0deg, #111 53.67%, rgba(17, 17, 17, 0.00) 102.08%)",
        }}
      />
      <div className={`${image} w-full h-[250px]`} />
      <div className="flex flex-col gap-3 bg-[#03030310] z-[10] p-4 pb-0">
        <h1 className="text-[28px] text-white font-[600] -translate-y-6">
          {title}
        </h1>
        <p className="text-sm text-[#71717A] font-[400] leading-[30px] -translate-y-6">
          {description}
        </p>
      </div>
    </div>
  );
};
