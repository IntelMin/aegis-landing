import Image from "next/image";
import React from "react";

type Props = {
  demo: {
    url: string;
  };
  onClick: (imageUrl: string) => void
};

export const ImageCard = ({ demo, onClick }: Props) => {
  return (
    <div className="col-span-1 flex justify-center items-center max-md:w-[300px] mt-4 ">
      <Image
        src={demo.url}
        alt="demo"
        width={212}
        height={152}
        className="object-cover max-md:min-w-[180px] w-[80%] rounded-md border-4 border-[#27272A] hover:border-white"
        onClick={() => onClick(demo.url)}
      />
    </div>
  );
};
