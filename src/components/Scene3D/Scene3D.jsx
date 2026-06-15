import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useTheme } from "../../theme/themeStore";
import "./Scene3D.css";
import { useEffect, useState } from "react";

const DEFAULT_CAMERA = { position: [9, 8, 9], fov: 45 };
const BACKGROUND_COLOR_DARK = "#14121a";
const BACKGROUND_COLOR_LIGHT = "#ffffff";

export default function Scene3D({
  children,
  camera = DEFAULT_CAMERA,
  showControls = true,
}) {
  const theme = useTheme();

  const [sceneColor, useSceneColor] = useState("#14121a");

  const GetSceneColor = () => {
    return theme.theme === "dark"
      ? BACKGROUND_COLOR_DARK
      : BACKGROUND_COLOR_LIGHT;
  };

  useEffect(() => {
    useSceneColor(GetSceneColor());
  }, [theme]);

  return (
    <div className="scene-3d">
      <Canvas shadows camera={camera}>
        <color attach="background" args={[sceneColor]} />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[8, 12, 6]}
          intensity={1.1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        {children}
        {showControls && (
          <OrbitControls enablePan={false} minDistance={6} maxDistance={20} />
        )}
      </Canvas>
    </div>
  );
}
