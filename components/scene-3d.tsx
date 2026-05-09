"use client";

import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Mesh } from "three";

function Icosahedron({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.16;
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.rotation.x += (mouse.y * 0.28 - meshRef.current.rotation.x) * 0.025;
    meshRef.current.rotation.y += (mouse.x * 0.36 - meshRef.current.rotation.y) * 0.025;
  });

  return (
    <Float speed={2} rotationIntensity={0.45} floatIntensity={1.2} floatingRange={[-0.15, 0.25]}>
      <mesh ref={meshRef} scale={2.15} position={[0.8, 0, 0]}>
        <icosahedronGeometry args={[1.6, 4]} />
        <MeshDistortMaterial color="#7c3aed" distort={0.4} speed={2} roughness={0.2} metalness={0.25} />
      </mesh>
    </Float>
  );
}

function shouldEnableScene() {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  const cores = navigator.hardwareConcurrency ?? 0;
  const lowEnd = cores > 0 && cores < 6;
  const mobile = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return !lowEnd && !mobile && !reduceMotion;
}

export default function Scene3D() {
  const [enabled] = useState(shouldEnableScene);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;
    const handleMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: -(event.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled]);

  const camera = useMemo(() => ({ position: [0, 0, 6] as [number, number, number], fov: 45 }), []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-70 mix-blend-screen">
      <Canvas camera={camera} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 3, 5]} intensity={1.5} color="#00d4ff" />
        <pointLight position={[-3, -2, 4]} intensity={2.2} color="#7c3aed" />
        <Icosahedron mouse={mouse} />
      </Canvas>
    </div>
  );
}
