import React from "react";

type Props = {};

export const HomeSection = (props: Props) => {
  return (
    <div id="home" className="bg w-full">
      <div className="relative w-full pt-32 min-h-[calc(100vh-32px)]">
        <h1 className="text-white">Hello World</h1>
      </div>
    </div>
  );
};
