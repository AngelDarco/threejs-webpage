import { Html, useProgress } from "@react-three/drei";

export default function Loader({
  handlerModelLoader,
}: {
  handlerModelLoader: (load: boolean) => void;
}) {
  const { progress } = useProgress();
  if (progress === 100) handlerModelLoader(true);
  return <Html center>{progress}%</Html>;
}
