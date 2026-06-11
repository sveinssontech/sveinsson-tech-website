import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './Scene3D.css'

const DEFAULT_CAMERA = { position: [9, 8, 9], fov: 45 }
const BACKGROUND_COLOR = '#14121a'

export default function Scene3D({
  children,
  camera = DEFAULT_CAMERA,
  showControls = true,
}) {
  return (
    <div className="scene-3d">
      <Canvas shadows camera={camera}>
        <color attach="background" args={[BACKGROUND_COLOR]} />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[8, 12, 6]}
          intensity={1.1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        {children}
        {showControls && <OrbitControls enablePan={false} minDistance={6} maxDistance={20} />}
      </Canvas>
    </div>
  )
}
