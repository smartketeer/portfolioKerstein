"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { motion, useSpring } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Environment } from "@react-three/drei";
import { Group } from "three";
import * as THREE from "three";

// Sub-component to load and animate the 3D butterfly
function ButterflyModel({ isFacingRight }: { isFacingRight: boolean }) {
  const group = useRef<Group>(null);
  // Load the GLTF model from the public folder
  const { scene, animations } = useGLTF("/butterfly.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play all available animations (like flying) automatically
    if (actions) {
      Object.values(actions).forEach((action) => {
        if (action) action.play();
      });
    }
  }, [actions]);

  useFrame((state, delta) => {
    if (group.current) {
      // By using Math.PI / 2 (90 deg) and 3 * Math.PI / 2 (270 deg),
      // the lerp will transition through Math.PI (180 deg, Front) instead of 0 (Back).
      // -Math.PI / 2 and 3 * Math.PI / 2 point in the exact same direction (Right), 
      // but the math path forces it to face the user during the turn!
      const targetRotationY = isFacingRight ? 3 * Math.PI / 2 : Math.PI / 2;
      
      // Smoothly rotate the butterfly to the target rotation
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.05);
      
      // Keep the subtle floating tilt
      group.current.rotation.z = 0.2; 
      group.current.rotation.x = 0.2; 
    }
  });

  return (
    <group ref={group}>
      {/* Drastically reduced scale to 0.5 to stop clipping. 
          Moved down slightly so it's centered when wings are up. */}
      <primitive object={scene} scale={0.5} position={[0, -1, 0]} />
    </group>
  );
}

export default function FloatingButterfly() {
  const [mounted, setMounted] = useState(false);
  const [isFacingRight, setIsFacingRight] = useState(false);

  // Extremely slow, lazy springs so the butterfly floats gently towards the cursor
  const springConfig = { damping: 100, stiffness: 10, mass: 1 };
  // Start off-screen (-300 because our new canvas is 600x600)
  const mouseX = useSpring(-300, springConfig);
  const mouseY = useSpring(-300, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Cursor following logic
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by 300 to center the new 600x600 canvas directly on the cursor
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);

      // Track the cursor's X-coordinate and compare it to the butterfly's current X-coordinate.
      // mouseX.get() returns the top-left X coordinate. The center is mouseX.get() + 300.
      const butterflyCenterX = mouseX.get() + 300;

      if (e.clientX > butterflyCenterX) {
        setIsFacingRight(true);
      } else if (e.clientX < butterflyCenterX) {
        setIsFacingRight(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted, mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      // Increased canvas size from 400x400 to 600x600 to give the wings massive room to flap
      className="fixed top-0 left-0 z-0 pointer-events-none w-[600px] h-[600px] opacity-60 mix-blend-multiply"
      style={{
        x: mouseX,
        y: mouseY,
      }}
    >
      <div className="w-full h-full drop-shadow-2xl">
        {/* Kept camera at Z=10 for a wide view */}
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 10]} intensity={2} />
          {/* Environment gives realistic lighting and reflections */}
          <Environment preset="city" />
          <Suspense fallback={null}>
            <ButterflyModel isFacingRight={isFacingRight} />
          </Suspense>
        </Canvas>
      </div>
    </motion.div>
  );
}

// Preload the model for faster rendering
useGLTF.preload("/butterfly.glb");
