import * as THREE from "three";
import {
  Box,
  Environment,
  OrbitControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import Overlay from "./layout/Overlay";

// Doggo 3D Model
const Model = ({ z, scale }) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/doge-transformed.glb");
  const [clicked, setClicked] = useState(false);

  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI * 2,
    rY: Math.random() * Math.PI * 2,
    rZ: Math.random() * Math.PI * 2,
  });

  // Animation loop
  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.01),
      (data.rY += 0.01),
      (data.rZ += 0.01)
    );
    ref.current.position.set(data.x * width, (data.y += 0.01), z);
    if (data.y > height) {
      data.y = -height;
    }
  });

  // Component
  return (
    <mesh
      geometry={nodes.Cylinder_Material002_0.geometry}
      material={materials["Material.002"]}
      rotation={[-Math.PI, 0, 0]}
      material-emissive={"blue"}
      ref={ref}
      scale={scale}
    />
  );
};

const App = ({ count = 100, depth = 100 }) => {
  return (
    <>
      <Canvas
        gl={{ alpha: true }}
        camera={{ near: 0.01, far: 110, fov: 30 }}
      >
        {/* <color
          attach={"background"}
          args={["#382859"]}
        /> */}
        <spotLight
          position={[10, 10, 10]}
          intensity={1}
        />
        <Suspense fallback={null}>
          <Environment
            preset="sunset"
            intensity={2}
          />
          {Array.from({ length: count }, (_, i) => (
            <Model
              key={i}
              z={-(i / count) * depth}
            />
          ))}
          <EffectComposer>
            <DepthOfField
              target={[0, 0, depth / 2]}
              focalLength={0.1}
              bokehScale={6}
              height={1000}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <Overlay />
    </>
  );
};

export default App;
