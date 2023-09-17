import "./App.css";
import { Canvas } from "@react-three/fiber";
import Model from "./scenes/Model";
import { Suspense } from "react";
import Loader from "./components/loader/Loader";
function App() {
  return (
    <Canvas shadows camera={{ fov: 50 }}>
      <ambientLight intensity={1.8} />
      <Suspense fallback={<Loader />}>
        <Model rotation={[0, 10, 0]} position={[200, -220, -1000]} />
      </Suspense>
    </Canvas>
  );
}

export default App;
