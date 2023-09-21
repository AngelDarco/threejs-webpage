import "./App.css";
import { Canvas } from "@react-three/fiber";
// import Model from "./scenes/girl-reverence/Model";
// import Bird from "./scenes/bird/Bird";
import Rex from "./scenes/rex/Rex";
import { Suspense, useRef, useState } from "react";
import Loader from "./components/loader/Loader";
function App() {
  const [animation, setAnimation] = useState(4);
  const ref = useRef(animation);

  const handlerAnimations = () => {
    ref.current++;
    if (ref.current > 4) ref.current = 0;

    setAnimation(ref.current);
  };

  return (
    <>
      {/* <div className="bg-transparent flex w-full h-screen items-center justify-around [&>*]:bg-inherit [&>*]:w-[200px] absolute top-0 left-0 z-20 ">
        <h1 className="text-4xl text-center !w-[300px] text-green-500">
          Always the best in the field
        </h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis
          aut voluptatem perferendis dolores accusantium iusto explicabo, vitae
          mollitia corporis sint vel sunt voluptas perspiciatis rem labore
          recusandae repellat. Quaerat!
        </span>
      </div> */}
      <Canvas shadows>
        <ambientLight intensity={1.8} />
        <pointLight position={[1, 0, 2]} intensity={1} />

        <Suspense fallback={<Loader />}>
          <Rex
            position={[-1, -1.5, 0]}
            scale={2}
            handlerAnimations={handlerAnimations}
            anime={animation}
          />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
