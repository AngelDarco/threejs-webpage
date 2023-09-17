import "./App.css";
import { Canvas } from "@react-three/fiber";
import Model from "./scenes/Model";
function App() {
  return (
    <Canvas shadows camera={{ fov: 50 }}>
      <ambientLight intensity={1.8} />
      <Model rotation={[0, 10, 0]} position={[200, -220, -850]} />
    </Canvas>
  );
}

export default App;
