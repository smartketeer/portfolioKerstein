"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // Placeholder to avoid layout shift
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 flex items-center justify-center rounded-full bg-accent/10 hover:bg-accent/20 text-foreground transition-colors overflow-hidden focus:outline-none"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: -15 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          rotate: isDark ? 90 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <motion.mask id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <motion.circle
            cx={isDark ? "12" : "25"}
            cy={isDark ? "4" : "0"}
            r="9"
            fill="black"
            initial={false}
            animate={{
              cx: isDark ? 12 : 25,
              cy: isDark ? 4 : 0,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          />
        </motion.mask>
        <motion.circle
          cx="12"
          cy="12"
          r={isDark ? "9" : "5"}
          fill={isDark ? "currentColor" : "none"}
          mask="url(#moon-mask)"
          initial={false}
          animate={{
            r: isDark ? 9 : 5,
            fill: isDark ? "currentColor" : "none",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />
        <motion.g
          stroke="currentColor"
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
      </motion.svg>
    </motion.button>
  );
}
