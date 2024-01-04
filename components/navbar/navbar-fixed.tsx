import Link from "next/link";
import React from "react";

type Props = {
  navEle: {
    name: string;
    url: string;
  }[];
};

export const NavBarFixed = ({ navEle }: Props) => {
  return (
    <div className="absolute w-full top-0 left-0 flex items-center justify-between p-6">
      <div>
        <h1 className="text-neutral-50 font-medium text-2xl">LOGO</h1>
      </div>
      <div className="flex gap-12 items-center">
        {navEle?.map((ele) => (
          <Link
            key={ele.name}
            href={ele.url}
            className={`text-lg text-neutral-400`}
          >
            {ele.name}
          </Link>
        ))}
      </div>
      <div>
        <Link
          href="/"
          className="text-sm text-neutral-200 bg-zinc-400 rounded-full cursor-pointer py-3 px-6"
          style={{
            backgroundImage: "linear-gradient(135deg, #566070 15%, #060606)",
          }}
        >
          Open dApp
        </Link>
      </div>
    </div>
  );
};
