import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

useGLTF.preload("../src/scenes/girl.glb");
export default function Box(): JSX.Element {
  const gltf = useLoader(GLTFLoader, "../src/scenes/girl.glb");
  return (
    <primitive
      object={gltf.scene}
      position={[10, -220, -390]}
      scale={1}
      rotation={[0.1, 80, -0.1]}
    />
  );
}
