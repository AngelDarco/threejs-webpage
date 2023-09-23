import { useFrame } from "@react-three/fiber";
import type { OrbitControls } from "three-stdlib";

export default function Rotation({
  controls,
}: {
  controls: OrbitControls | null;
}) {
  useFrame(() => {
    if (controls) {
      // Check if the azimuth angle reaches the limits
      if (controls.getAzimuthalAngle() <= controls.minAzimuthAngle) {
        // Handle when the camera reaches the minAzimuthAngle
        controls.autoRotateSpeed = -1;
      }

      if (controls.getAzimuthalAngle() >= controls.maxAzimuthAngle) {
        // Handle when the camera reaches the maxAzimuthAngle
        controls.autoRotateSpeed = 0.5;
      }
    }
  });
  return <></>;
}
