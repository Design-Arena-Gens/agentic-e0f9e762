"use client";

import { Canvas, useFrame } from '@react-three/fiber'
import { Line, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function WireSphere() {
  const group = useRef<THREE.Group>(null!)
  useFrame((_state, delta) => {
    group.current.rotation.y += delta * 0.05
  })

  const rings = Array.from({ length: 18 }, (_, i) => i)
  const verticals = Array.from({ length: 24 }, (_, i) => i)

  return (
    <group ref={group}>
      {rings.map((i) => {
        const points = [] as THREE.Vector3[]
        const phi = (i / (rings.length - 1)) * Math.PI - Math.PI / 2
        const radius = Math.cos(phi) * 1
        for (let t = 0; t <= 64; t++) {
          const theta = (t / 64) * Math.PI * 2
          points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(phi), Math.sin(theta) * radius))
        }
        return <Line key={`ring-${i}`} points={points} color="#C6A15B" linewidth={1} transparent opacity={0.35} />
      })}
      {verticals.map((i) => {
        const points = [] as THREE.Vector3[]
        const theta = (i / verticals.length) * Math.PI * 2
        for (let t = -32; t <= 32; t++) {
          const phi = (t / 32) * (Math.PI / 2)
          const y = Math.sin(phi)
          const r = Math.cos(phi)
          points.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r))
        }
        return <Line key={`vert-${i}`} points={points} color="#9AA3B2" linewidth={1} transparent opacity={0.25} />
      })}
    </group>
  )
}

export function GlobeHero() {
  return (
    <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[2, 2, 2]} intensity={0.6} />
        <WireSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(12,12,16,0.3),transparent)]" />
    </div>
  )
}
