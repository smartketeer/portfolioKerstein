"use client";

import { motion } from "framer-motion";
import { 
  FaReact, 
  FaLaravel, 
  FaGithub, 
  FaFigma 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVercel, 
  SiHostinger, 
  SiCanva,
  SiJavascript
} from "react-icons/si";

const TECH_STACK = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
  { name: "GitHub", icon: FaGithub, color: "" },
  { name: "Vercel", icon: SiVercel, color: "" },
  { name: "Hostinger", icon: SiHostinger, color: "#673DE6" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
];

export default function LogoStrip() {
  return (
    <section className="py-12 bg-surface border-y border-muted overflow-hidden relative flex">
      {/* Gradient masks for smooth fading on edges */}
      <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust speed
        }}
        className="flex whitespace-nowrap gap-12 md:gap-24 items-center w-max pl-12 md:pl-24"
      >
        {/* We duplicate the array to create a seamless loop */}
        {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
          <div key={index} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity group cursor-default">
            <tech.icon 
              className="text-3xl md:text-4xl transition-colors duration-300"
              style={{ color: tech.color || "currentColor" }}
            />
            <span className="text-xl md:text-2xl font-bold tracking-wider uppercase text-foreground/80 group-hover:text-foreground transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
