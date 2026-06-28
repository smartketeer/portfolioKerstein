"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

const SERVICES = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences for web and mobile applications.",
    iconUrl: "https://cdn.lordicon.com/wloilxuq.json"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Building responsive, modern websites using cutting-edge technologies.",
    iconUrl: "https://cdn.lordicon.com/hursldrn.json"
  },
  {
    id: 3,
    title: "Brand Identity",
    description: "Developing cohesive visual identities that communicate your brand's core values.",
    iconUrl: "https://cdn.lordicon.com/pithnlch.json"
  },
  {
    id: 4,
    title: "Prototyping",
    description: "Interactive prototypes to visualize and test concepts before development.",
    iconUrl: "https://cdn.lordicon.com/svbmmyue.json"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-surface border-t border-muted">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-12"
        >
          <div className="bg-background border border-muted px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-foreground/70 shadow-sm mb-4">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Design <span className="text-accent">Services</span> I am providing
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-muted p-8 rounded-3xl group hover:border-accent/50 transition-colors shadow-sm flex flex-col h-full"
            >
               <div className="w-16 h-16 rounded-xl bg-surface border border-muted flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <AnimatedIcon src={service.iconUrl} trigger="hover" colors={{ primary: "#C9B59C", secondary: "#2C2A28" }} size={40} />
               </div>
               
               <h3 className="text-xl font-bold mb-3">{service.title}</h3>
               <p className="text-foreground/70 text-sm leading-relaxed mb-8 flex-grow">
                 {service.description}
               </p>

               <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent hover:opacity-80 transition-opacity mt-auto">
                 Read More <AnimatedIcon src="https://cdn.lordicon.com/bxxnzvfm.json" trigger="hover" colors={{ primary: "#C9B59C", secondary: "#C9B59C" }} size={20} />
               </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
