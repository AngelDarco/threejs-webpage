import "./App.css";
import { Canvas } from "@react-three/fiber";
import Rex from "./scenes/rex/Rex";
import { Suspense, useRef, useState } from "react";
import Loader from "./components/loader/Loader";
import { OrbitControls } from "@react-three/drei";
import Rotation from "./utils/Rotation";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import Texture from "./scenes/rex/Texture";

import { Environment } from "@react-three/drei";

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
          <mesh rotation-x={-Math.PI / 2} position={[0, -1, 0]} scale={0.8}>
            <Texture animation={animation} />
          </mesh>

          <Environment preset="city"  />

          <Rotation controls={controlsState ? controlsRef.current : null} />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;

// #915df3  #ab23c0  #445294  #ea95dd  #ffdf78  #d5a41e  #ce3554  #1eb3ed  #23c6bf   #fef373  #bc4880  #b84b73   #ed61f9  #88c300  #d7b60f  #9ff228  #bd36db
