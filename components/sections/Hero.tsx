"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Section } from "../ui/Section";
import Image from "next/image";
import { useState, useEffect } from "react";

const roles = ["AI Engineer", "ML Developer", "DL Developer"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Parallax rotation setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Add spring for smooth rotation back to center
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Map normalized coordinates to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  // Holographic glare tracking
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(0, 240, 255, 0.6) 0%, rgba(255, 0, 60, 0.3) 40%, transparent 70%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="home" className="min-h-screen flex items-center pt-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent-blue neon-text-blue font-bold mb-2 tracking-widest uppercase text-sm">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Sabarish S
              </h1>
              
              {/* Rotating Title */}
              <div className="h-10 md:h-12 overflow-hidden relative mb-2">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={roleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute text-2xl md:text-3xl font-bold text-accent neon-text"
                  >
                    {roles[roleIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap gap-3 mt-4 text-sm font-bold uppercase tracking-wider text-accent-blue">
                <span className="px-3 py-1 rounded-md border border-border bg-card shadow-[0_0_10px_rgba(0,240,255,0.1)]">Deep Learning</span>
                <span className="px-3 py-1 rounded-md border border-border bg-card shadow-[0_0_10px_rgba(0,240,255,0.1)]">Computer Vision</span>
                <span className="px-3 py-1 rounded-md border border-border bg-card shadow-[0_0_10px_rgba(0,240,255,0.1)]">Generative AI</span>
                <span className="px-3 py-1 rounded-md border border-border bg-card shadow-[0_0_10px_rgba(0,240,255,0.1)]">NLP</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-foreground/80 leading-relaxed max-w-xl"
            >
              Building intelligent AI systems that solve real-world problems using Deep Learning, Computer Vision, and Large Language Models.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(255,0,60,0.5)] hover:bg-accent/90 transition-all hover:scale-105 active:scale-95"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-card border border-border text-foreground font-bold tracking-wider uppercase hover:border-accent-blue hover:text-accent-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all hover:scale-105 active:scale-95"
              >
                <Download className="mr-2 w-4 h-4" />
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-card border border-border text-foreground font-bold tracking-wider uppercase hover:border-accent-blue hover:text-accent-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="mr-2 w-4 h-4" />
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center relative h-[500px]"
            style={{ perspective: 1200 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-accent-blue/30 blur-[120px] rounded-full -z-10"></div>
            
            {/* Hologram Card Container */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              animate={{ y: [-15, 15, -15] }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
              }}
              className="relative w-full h-full max-w-[450px] mix-blend-lighten cursor-crosshair group"
            >
              
              {/* The Avatar Image */}
              <Image 
                src="/matured_3d_avatar.png" 
                alt="Cyberpunk Hacker 3D Avatar" 
                fill 
                className="object-contain drop-shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300"
                priority
              />

              {/* Holographic Glare Overlay */}
              <motion.div 
                className="absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
                style={{ background: glareBackground }}
              />

              {/* Scanline Glitch Effect */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-3xl"
                style={{
                  background: 'repeating-linear-gradient(to bottom, transparent 0%, rgba(0, 240, 255, 0.2) 0.5%, transparent 1%)',
                  backgroundSize: '100% 4px'
                }}
              >
                {/* Moving Scanline */}
                <motion.div 
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-accent-blue shadow-[0_0_15px_rgba(0,240,255,1)]"
                />
              </div>

            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </Section>
  );
}
