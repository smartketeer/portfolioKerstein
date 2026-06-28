"use client";

import React from "react";

interface AnimatedIconProps {
  src?: string;
  name?: string;
  trigger?: "hover" | "click" | "loop" | "morph" | "loop-on-hover" | "in" | "boomerang";
  colors?: {
    primary?: string;
    secondary?: string;
  };
  size?: number;
  className?: string;
}

export default function AnimatedIcon({
  src,
  name,
  trigger = "hover",
  colors,
  size = 32,
  className = "",
}: AnimatedIconProps) {
  const colorString = [
    colors?.primary ? `primary:${colors.primary}` : "",
    colors?.secondary ? `secondary:${colors.secondary}` : "",
  ]
    .filter(Boolean)
    .join(",");

  // Cast the custom element to any to bypass TypeScript JSX.IntrinsicElements errors
  const LordIcon = "lord-icon" as any;

  // Use src if provided, otherwise fetch by name via our API route
  const finalSrc = src || (name ? `/api/lordicon?query=${encodeURIComponent(name)}` : "");

  if (!finalSrc) {
    return null; // Return nothing if neither src nor name are provided
  }

  return (
    <div
      className={`inline-flex justify-center items-center ${className}`}
      style={{ width: size, height: size }}
    >
      <LordIcon
        src={finalSrc}
        trigger={trigger}
        colors={colorString || undefined}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    </div>
  );
}

