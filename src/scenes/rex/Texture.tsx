import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Texture({ animation }: { animation: number }) {
  const texture = useTexture({
    map: "../src/scenes/rex/coast_sand_rocks_02_diff_1k.jpg",
    displacementMap: "../src/scenes/rex/coast_sand_rocks_02_disp_1k.jpg",
    aoMap: "../src/scenes/rex/coast_sand_rocks_02_arm_1k.jpg",
    roughnessMap: "../src/scenes/rex/coast_sand_rocks_02_arm_1k.jpg",
    metalnessMap: "../src/scenes/rex/coast_sand_rocks_02_arm_1k.jpg",
    normalMap: "../src/scenes/rex/coast_sand_rocks_02_nor_gl_1k.jpg",
  });
  const sphereRef = useRef<THREE.Mesh | null>(null);
  useFrame(() => {
    if (sphereRef.current && animation === 0) {
      sphereRef.current.rotation.z -= 0.005;
    }
  });

  return (
    <mesh ref={sphereRef} position={[-0, 0, -0.2]} receiveShadow>
      <circleGeometry args={[10, 100]} />
      <meshStandardMaterial {...texture} />
    </mesh>
  );
}
