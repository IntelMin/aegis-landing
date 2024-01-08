import React from "react";

type Props = {};

export const Information = (props: Props) => {
  return (
    <div id="about" className="bg">
      <video autoPlay muted loop>
        <source src="./Information.mp4" type="video/mp4" />
      </video>
    </div>
  );
};