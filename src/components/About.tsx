"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Column - Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex justify-center lg:justify-start"
        >
          {/* Circular Graphic Element */}
          <div className="absolute -left-10 bottom-0 w-64 h-64 border-[1px] border-foreground/10 rounded-full flex items-center justify-center -z-10">
            <div className="w-56 h-56 border-[1px] border-foreground/15 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 border-[1px] border-foreground/20 rounded-full flex items-center justify-center">
                <div className="w-40 h-40 border-[1px] border-foreground/25 rounded-full flex items-center justify-center">
                   <div className="w-32 h-32 border-[1px] border-foreground/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[350px] md:w-[400px] aspect-[4/5] bg-surface rounded-3xl overflow-hidden shadow-xl border border-muted relative">
             <Image 
               src="/photo/about-profile.png"
               alt="About Kerstein Kyle"
               fill
               className="object-cover object-center"
             />
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start gap-6 relative"
        >
          {/* Top right decorative circle */}
          <div className="absolute -top-12 -right-12 w-24 h-24 border-[8px] border-accent/20 rounded-full opacity-50 blur-[1px]"></div>

          <div className="bg-surface border border-muted px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-foreground/70 shadow-sm">
            About Us
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight text-foreground">
            I am available for <span className="text-accent">UI UX Design</span> project
          </h2>

          <p className="text-foreground/70 text-base md:text-lg max-w-xl leading-relaxed">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 w-full max-w-xl">
            <div className="bg-surface border border-muted p-6 rounded-2xl flex flex-col justify-center items-start shadow-sm hover:border-accent/50 transition-colors">
              <AnimatedIcon src="https://cdn.lordicon.com/nizfqlnk.json" trigger="hover" colors={{ primary: "#C9B59C", secondary: "#2C2A28" }} size={40} className="mb-2" />
              <span className="text-3xl font-bold text-foreground">280+</span>
              <span className="text-xs font-medium uppercase tracking-wider text-foreground/60 mt-1">Google Review</span>
            </div>
            <div className="bg-surface border border-muted p-6 rounded-2xl flex flex-col justify-center items-start shadow-sm hover:border-accent/50 transition-colors">
              <AnimatedIcon src="https://cdn.lordicon.com/gqdyesfu.json" trigger="hover" colors={{ primary: "#C9B59C", secondary: "#2C2A28" }} size={40} className="mb-2" />
              <span className="text-3xl font-bold text-foreground">15+</span>
              <span className="text-xs font-medium uppercase tracking-wider text-foreground/60 mt-1">Years Experience</span>
            </div>
            <div className="bg-surface border border-muted p-6 rounded-2xl flex flex-col justify-center items-start shadow-sm hover:border-accent/50 transition-colors col-span-2 md:col-span-1">
              <AnimatedIcon src="https://cdn.lordicon.com/pithnlch.json" trigger="hover" colors={{ primary: "#C9B59C", secondary: "#2C2A28" }} size={40} className="mb-2" />
              <span className="text-3xl font-bold text-foreground">49+</span>
              <span className="text-xs font-medium uppercase tracking-wider text-foreground/60 mt-1">Award Winning</span>
            </div>
          </div>

          <button className="mt-4 bg-accent text-background px-8 py-3.5 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity uppercase tracking-wider text-sm shadow-md">
            Get in touch
            <AnimatedIcon src="https://cdn.lordicon.com/bxxnzvfm.json" trigger="hover" colors={{ primary: "#F9F8F6", secondary: "#F9F8F6" }} size={20} className="ml-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
