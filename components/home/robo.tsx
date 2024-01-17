import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { easing } from "maath";
import { useVideoTexture, Environment, MeshDistortMaterial, useAspect, OrbitControls } from "@react-three/drei";

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
  dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  const gltf = useLoader(GLTFLoader, "./images/newRobo.glb", (loader) => {
    loader.setDRACOLoader(dracoLoader);
  });
  gltf.scene.rotation.y = -Math.PI / 2;
  const roboPosition = { x: -300, y: 0, z: 0 };
  const [dummy] = useState(() => {
    const dummyObject = new THREE.Object3D();
    dummyObject.position.set(roboPosition.x, roboPosition.y, roboPosition.z);
    return dummyObject;
  });

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

  function VideoMaterial({ url }: { url: string }) {
    const texture = useVideoTexture(url);
    return <MeshDistortMaterial
    map={texture}
    blending={THREE.AdditiveBlending}
    toneMapped={true}
  />;
  }
  function VideoMaterialInner({ url }: { url: string }) {
    const texture = useVideoTexture(url);
    return <MeshDistortMaterial
    map={texture}
    toneMapped={true}
  />;
  }
  const size = useAspect(1, 1)

  return (
    <>
      <ambientLight intensity={6} />
      <directionalLight position={[6, 6, 2  ]} intensity={5} />
      <pointLight position={[1,1,3]} intensity={3} />
      <pointLight position={[-1,-3,5]} intensity={6} />
      <group>
        <mesh ref={mesh} scale={[1.4, 1.4, 1.4]} {...props}>
          <primitive object={gltf.scene} />
          <mesh scale={[1.5,1.5,1.5]} position={[0, 0, 1.1]} >
          <planeGeometry />
          <React.Suspense fallback={<meshBasicMaterial wireframe />}>
            <VideoMaterialInner url="/inner.mp4" />
          </React.Suspense>
        </mesh>
        <mesh scale={[2,1.2,0]} position={[0, 0, 2]}>
          <planeGeometry />
          <React.Suspense fallback={<meshBasicMaterial wireframe />}>
            <VideoMaterial url="/HUD.mp4" />
          </React.Suspense>
        </mesh>
        </mesh>
      </group>
    </>
  );
};
