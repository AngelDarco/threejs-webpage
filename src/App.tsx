import "./App.css";
import { Canvas } from "@react-three/fiber";
import Rex from "./scenes/rex/Rex";
import { Suspense, useRef, useState } from "react";
import Loader from "./components/loader/Loader";
import { OrbitControls } from "@react-three/drei";
import Rotation from "./utils/Rotation";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import Texture from "./scenes/rex/Texture";

function App() {
  const [animation, setAnimation] = useState(4);
  const ref = useRef(animation);

  /**   * Change the animation in loop.   */
  const handlerAnimations = () => {
    ref.current++;
    if (ref.current > 4) ref.current = 0;
    setAnimation(ref.current);
  };

  /** rotate the camera position */
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const [controlsState, setControls] = useState<null | boolean>(null);

  const handlerModelLoader = (load: boolean) => {
    setTimeout(() => {
      setControls(load);
    }, 500);
  };

  return (
    <>
      <Canvas shadows camera={{ position: [-1, 0.8, 4] }}>
        <directionalLight intensity={6} castShadow position={[-10, 20, 10]} />
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} intensity={0.5} />
        <Suspense fallback={<Loader handlerModelLoader={handlerModelLoader} />}>
          <Rex
            position={[-1.5, -0.7, 0.2]}
            scale={1.7}
            handlerAnimations={handlerAnimations}
            anime={animation}
          />
          <shadowMaterial transparent opacity={1} />
          <OrbitControls
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            maxDistance={5}
            minDistance={4}
            autoRotate={true}
            autoRotateSpeed={0.5}
            ref={controlsRef}
          />
          <mesh
            rotation-x={-Math.PI / 2}
            receiveShadow
            position={[0, -1, 0]}
            scale={0.8}
          >
            <Texture animation={animation} />
          </mesh>
          <Rotation controls={controlsState ? controlsRef.current : null} />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
