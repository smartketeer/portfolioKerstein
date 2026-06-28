"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <section id="home" className="pt-32 pb-20 px-6 md:px-12 lg:px-24 min-h-screen flex items-center relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-foreground/60 dark:text-foreground/80">
            Kerstein Kyle
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.1]">
            <span className="block text-foreground">Hay! I&apos;m Kerstein</span>
            <span className="block text-accent mt-2 flex items-center">
              I&apos;m a Designer
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-[4px] h-[60px] md:h-[70px] bg-accent ml-2 inline-block"
              />
            </span>
          </h1>

          <p className="text-foreground/70 dark:text-foreground/80 max-w-lg leading-relaxed text-lg mt-4">
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-8">
            <button className="bg-accent text-background px-8 py-3.5 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity uppercase tracking-wider text-sm">
              Get in touch
              <AnimatedIcon 
                src="https://cdn.lordicon.com/bxxnzvfm.json" 
                trigger="hover" 
                colors={{ 
                  primary: isDark ? "#1A1816" : "#F9F8F6", 
                  secondary: isDark ? "#1A1816" : "#F9F8F6" 
                }} 
                size={20} 
                className="ml-1" 
              />
            </button>
            
            <div className="flex items-center gap-3">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-accent text-background dark:text-background flex items-center justify-center hover:bg-accent/90"
                whileHover="hover"
                initial="initial"
              >
                <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <motion.path 
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    variants={{
                      initial: { pathLength: 1 },
                      hover: { pathLength: [0, 1], transition: { duration: 0.8, ease: "easeInOut" } }
                    }}
                  />
                </motion.svg>
              </motion.a>

              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-accent/80 text-background dark:text-background flex items-center justify-center hover:bg-accent/90"
                whileHover="hover"
                initial="initial"
              >
                <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <motion.path 
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                    variants={{
                      initial: { pathLength: 1 },
                      hover: { pathLength: [0, 1], transition: { duration: 0.8, ease: "easeInOut" } }
                    }}
                  />
                </motion.svg>
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/kersteinviolon1009" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent/60 text-background dark:text-background flex items-center justify-center hover:bg-accent/90"
                whileHover="hover"
                initial="initial"
              >
                <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <motion.path 
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    variants={{
                      initial: { pathLength: 1 },
                      hover: { pathLength: [0, 1], transition: { duration: 0.8, ease: "easeInOut" } }
                    }}
                  />
                  <motion.rect 
                    x="2" y="9" width="4" height="12"
                    variants={{
                      initial: { pathLength: 1 },
                      hover: { pathLength: [0, 1], transition: { duration: 0.8, ease: "easeInOut" } }
                    }}
                  />
                  <motion.circle 
                    cx="4" cy="4" r="2"
                    variants={{
                      initial: { pathLength: 1 },
                      hover: { pathLength: [0, 1], transition: { duration: 0.8, ease: "easeInOut" } }
                    }}
                  />
                </motion.svg>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Image & Graphics */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full h-[600px] flex justify-center items-center"
        >
          {/* Background Graphic Rings */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[120%] h-full flex flex-col justify-center gap-[12px] opacity-20 dark:opacity-10">
              {/* Fake lines to mimic the circular background graphic from the mockup */}
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-[2px] bg-foreground rounded-full mx-auto dark:bg-foreground/50"
                  style={{ width: `${100 - Math.abs(10 - i) * 8}%` }}
                />
              ))}
            </div>
          </div>
          
          {/* Main Image */}
          <div className="w-[400px] h-[500px] rounded-t-[200px] rounded-b-[20px] bg-muted relative overflow-hidden shadow-2xl dark:shadow-black/60 border-4 border-background z-10 transition-colors duration-300">
            <Image 
              src="/photo/hero-profile.png"
              alt="Kerstein Kyle"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Floating Spheres / Elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[15%] w-16 h-16 rounded-full bg-accent/20 dark:bg-accent/10 backdrop-blur-md shadow-lg dark:shadow-black/60 border border-white/20 dark:border-white/10 flex items-center justify-center"
          >
             <AnimatedIcon 
                src="https://cdn.lordicon.com/vhyuhmbl.json" 
                trigger="loop" 
                colors={{ 
                  primary: isDark ? "#D2BB9E" : "#C9B59C", 
                  secondary: isDark ? "#F5F2EB" : "#2C2A28" 
                }} 
                size={32} 
             />
          </motion.div>
          <motion.div 
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] right-[5%] w-24 h-24 rounded-full bg-foreground/10 dark:bg-foreground/5 backdrop-blur-md shadow-lg dark:shadow-black/60 border border-white/20 dark:border-white/10 flex items-center justify-center"
          >
             <AnimatedIcon 
                src="https://cdn.lordicon.com/qhgmphtg.json" 
                trigger="loop" 
                colors={{ 
                  primary: isDark ? "#F5F2EB" : "#2C2A28", 
                  secondary: isDark ? "#D2BB9E" : "#C9B59C" 
                }} 
                size={48} 
             />
          </motion.div>
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] left-[5%] w-12 h-12 rounded-full bg-accent/40 dark:bg-accent/20 backdrop-blur-md shadow-lg dark:shadow-black/60 border border-white/20 dark:border-white/10 flex items-center justify-center"
          >
             <AnimatedIcon 
                src="https://cdn.lordicon.com/wloilxuq.json" 
                trigger="loop" 
                colors={{ 
                  primary: isDark ? "#1A1816" : "#F9F8F6", 
                  secondary: isDark ? "#F5F2EB" : "#2C2A28" 
                }} 
                size={24} 
             />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
