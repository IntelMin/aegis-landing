"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Gate } from "./gate";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
type Props = {};

export const EntranceGate = (props: Props) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Canvas className="w-full border" style={{ height: "80vh" }}>
        <ambientLight intensity={1.7} />
        <directionalLight position={[10, 100, 10]} intensity={10} />
        <pointLight position={[10, 10, 10]} />
        {/* <OrbitControls /> */}
        <PerspectiveCamera makeDefault position={[10, 0, -90]} fov={75} />
        <Gate />
      </Canvas>
    </div>
  );
};
