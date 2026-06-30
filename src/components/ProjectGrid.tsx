"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";
import Link from "next/link";
import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    title: "Tours Ads Graphics",
    category: "Higanteng Laagan (SMM)",
    image: "/photo/toursads.jpg",
  },
  {
    id: 2,
    title: "Travel Quotes",
    category: "Higanteng Laagan (SMM)",
    image: "/photo/travelquotes.jpg",
  },
  {
    id: 3,
    title: "Local Flowershop",
    category: "Bloomfields (SMM)",
    image: "/photo/bloom.jpg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-12"
        >
          <div className="bg-surface border border-muted px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-foreground/70 shadow-sm mb-4">
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Recent Project
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group flex flex-col p-4 rounded-3xl bg-surface border border-muted hover:border-accent/50 transition-colors shadow-sm"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full rounded-2xl bg-muted/50 border border-muted overflow-hidden relative mb-4">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content area */}
              <div className="flex items-end justify-between px-2 pb-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/60">
                    {project.category}
                  </p>
                </div>
                
                <Link href="#contact" suppressHydrationWarning className="w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center shadow-md group-hover:-rotate-45 transition-transform duration-300">
                  <AnimatedIcon src="https://cdn.lordicon.com/bxxnzvfm.json" trigger="hover" colors={{ primary: "#F9F8F6", secondary: "#F9F8F6" }} size={24} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Pagination Dots Placeholder */}
        <div className="flex justify-center items-center gap-2 mt-12">
           <div className="w-8 h-2 rounded-full bg-accent"></div>
           <div className="w-2 h-2 rounded-full border border-foreground/30"></div>
        </div>
      </div>
    </section>
  );
}
