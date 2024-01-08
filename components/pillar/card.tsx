import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  translate?: string;
};

export const Card = ({ title, description, image, translate }: Props) => {
    const words = description.split(" ");
  return (
    <div
      className={`md:col-span-1 w-[380px] min-w-[380px] max-w-[380px] flex flex-col justify-between border-2 border-[#27272A] rounded relative card-clip ${translate}`}
    >
      <div className="w-[100px] h-[150px] bg-[#27272A] absolute -top-[58px] left-[88.4%] rotate-[-42deg]" />
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
        <div className="text-sm text-[#71717A] font-[400] leading-[30px] -translate-y-6">
          {words.map((word, index) => (
            <span key={index} className={word === "Aegis" ? "text-white" : ""}>
              {word}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
