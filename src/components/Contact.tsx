"use client";

import { motion } from "framer-motion";
import AnimatedIcon from "./AnimatedIcon";
import { Mail, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Contact() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending...");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult(data.message || "Something went wrong.");
        setStatus("error");
      }
    } catch (error) {
      setResult("Network error. Please try again.");
      setStatus("error");
    }
    
    setTimeout(() => {
      setStatus("idle");
      setResult("");
    }, 5000);
  };

  const isDark = mounted && theme === "dark";

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Let&apos;s Build <br/>
                <span className="text-accent">Something Great</span>
              </h2>
              <p className="text-foreground/70 mb-12 max-w-md text-lg leading-relaxed">
                Whether you have a project in mind, looking for a collaboration, or just want to say hi, my inbox is always open. Let&apos;s turn your vision into reality.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <AnimatedIcon 
                      src="https://cdn.lordicon.com/diihvcfp.json" 
                      trigger="hover" 
                      colors={{ primary: isDark ? "#F5F2EB" : "#2C2A28", secondary: "#C9B59C" }} 
                      size={24} 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-1">Email</h4>
                    <a href="mailto:workwithkerstein@outlook.com" className="text-lg font-medium hover:text-accent transition-colors">
                      workwithkerstein@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <AnimatedIcon 
                      src="https://cdn.lordicon.com/oaflahpk.json" 
                      trigger="hover" 
                      colors={{ primary: isDark ? "#F5F2EB" : "#2C2A28", secondary: "#C9B59C" }} 
                      size={24} 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-1">Location</h4>
                    <p className="text-lg font-medium">
                      Digos City, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface p-8 md:p-10 rounded-3xl border border-muted/50 relative overflow-hidden shadow-xl dark:shadow-black/60"
          >
            <form className="space-y-6 relative z-10" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                  <input 
                    suppressHydrationWarning
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    placeholder="John Doe" 
                    className="w-full bg-background border border-muted rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-foreground/30"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                  <input 
                    suppressHydrationWarning
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-background border border-muted rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-foreground/30"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium ml-1">Subject</label>
                <input 
                  suppressHydrationWarning
                  type="text" 
                  id="subject" 
                  name="subject"
                  required
                  placeholder="How can I help you?" 
                  className="w-full bg-background border border-muted rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-foreground/30"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                <textarea 
                  suppressHydrationWarning
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..." 
                  className="w-full bg-background border border-muted rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-foreground/30 resize-none"
                />
              </div>

              <div className="space-y-4">
                <motion.button 
                  suppressHydrationWarning
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  whileHover={status === "loading" || status === "success" ? {} : { scale: 1.02 }}
                  whileTap={status === "loading" || status === "success" ? {} : { scale: 0.98 }}
                  className="w-full bg-accent text-background dark:text-background font-semibold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-accent/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
                  {status !== "loading" && status !== "success" && (
                    <AnimatedIcon 
                      src="https://cdn.lordicon.com/bxxnzvfm.json" 
                      trigger="hover" 
                      colors={{ primary: isDark ? "#1A1816" : "#F9F8F6", secondary: isDark ? "#1A1816" : "#F9F8F6" }} 
                      size={20} 
                    />
                  )}
                </motion.button>

                {result && (
                  <div className={`text-center text-sm font-medium ${status === "success" ? "text-green-500" : "text-red-500"}`}>
                    {result}
                  </div>
                )}
              </div>
            </form>
            
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
