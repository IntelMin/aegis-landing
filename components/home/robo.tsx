import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { easing } from "maath";

type MouseProps = {
  x: number;
  y: number;
};

type Props = {
  mousePosition: MouseProps;
};

export const Robo = (props: Props) => {
  const mesh = useRef<THREE.Mesh | null>(null);
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
  const gltf = useLoader(GLTFLoader, "./images/robot.glb", (loader) => {
    loader.setDRACOLoader(dracoLoader);
  });

  // const gltf = useLoader(GLTFLoader, "./images/robo.glb");
  const [dummy] = useState(() => new THREE.Object3D());
  useFrame((state, dt) => {
    dummy.position.set(
      mesh.current?.position.x || 0,
      mesh.current?.position.y || 0,
      mesh.current?.position.z || 0
    );
    dummy.lookAt(props.mousePosition.x, props.mousePosition.y, 1);

    if (mesh.current) {
      easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt);
      mesh.current.quaternion.copy(dummy.quaternion);
    }
  });
  return (
    <mesh ref={mesh} scale={[1.5, 1.5, 1.5]} {...props}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};
