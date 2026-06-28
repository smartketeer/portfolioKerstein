"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import lottie from "lottie-web";

export default function FloatingButterfly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isFacingRight, setIsFacingRight] = useState(false);

  // Extremely slow, lazy springs so the butterfly floats gently towards the cursor
  const springConfig = { damping: 100, stiffness: 10, mass: 1 };
  const mouseX = useSpring(-200, springConfig);
  const mouseY = useSpring(-200, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    // Initialize the Lottie animation
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animated-butterfly.json"
    });
    return () => anim.destroy();
  }, [mounted]);

  // Cursor following logic
  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by 200 to center the 400x400 butterfly on the cursor
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);

      // Track the cursor's X-coordinate and compare it to the butterfly's current X-coordinate.
      // mouseX.get() returns the top-left X coordinate. The center is mouseX.get() + 200.
      const butterflyCenterX = mouseX.get() + 200;

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

  // The butterfly natively faces left.
  // We use 3D rotation with perspective to make it look like a realistic 3D turn
  const rotationStyle = isFacingRight ? "rotateY(180deg)" : "rotateY(0deg)";

  return (
    <motion.div
      className="fixed top-0 left-0 z-0 pointer-events-none w-[400px] h-[400px] opacity-15 mix-blend-multiply [perspective:1000px]"
      style={{
        x: mouseX,
        y: mouseY,
      }}
    >
      <div 
        ref={containerRef} 
        className="w-full h-full drop-shadow-2xl transition-transform duration-1000 ease-in-out"
        style={{ transform: rotationStyle }}
      />
    </motion.div>
  );
}
