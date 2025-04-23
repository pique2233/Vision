"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"

export default function Fallback3DViewer() {
  return (
    <div className="w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>
        <Environment preset="studio" />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
