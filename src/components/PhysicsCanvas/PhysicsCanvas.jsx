import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import './PhysicsCanvas.css'

const DEFAULT_GRAVITY = [0, -9.81, 0]
const DEFAULT_CAMERA = { position: [9, 8, 9], fov: 45 }

export default function PhysicsCanvas({
  children,
  gravity = DEFAULT_GRAVITY,
  camera = DEFAULT_CAMERA,
  showControls = true,
}) {
  return (
    <div className="physics-canvas">
      <Canvas shadows camera={camera}>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[8, 12, 6]}
          intensity={1.1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <Physics gravity={gravity}>{children}</Physics>
        {showControls && <OrbitControls enablePan={false} minDistance={6} maxDistance={20} />}
      </Canvas>
    </div>
  )
}
