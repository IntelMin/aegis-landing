"use client";

import React from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

type Props = {};

export const Gate = (props: Props) => {
  const gltf = useLoader(GLTFLoader, "./images/entrance.glb");
  const animations = gltf.animations || [];

  const mixer = new THREE.AnimationMixer(gltf.scene);
  animations.forEach((clip, index) => {
    console.log(`Animation ${index + 1} name: ${clip.name}`);
    const action = mixer.clipAction(clip);
    action.play();
  });

  useFrame((state, dt) => {
    mixer.update(dt);
  });

  return (
    <mesh scale={[2, 2, 2]} rotation={[0, 3.14, 0]} {...props}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};
