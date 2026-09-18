"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden animated-grid pt-20">
      <div className="absolute inset-0 bg-linear-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -top-10 -left-4 md:left-10 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full rotate-[-10deg]">Web Dev</motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="absolute top-20 -right-4 md:right-10 bg-white text-black text-xs font-bold px-4 py-1.5 rounded-full rotate-10">DevOps</motion.div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }} className="absolute -bottom-10 left-1/4 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full rotate-[5deg]">Cloud</motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-6">
            Designing <br />
            <span className="font-playfair italic text-blue-500">Digital Futures</span>
          </h1>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          Transforming ideas into reality. Crafting the digital future, one design at a time. Shaping tomorrow, today. Designing digital futures with innovation and precision.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}>
          <Link href="#about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 text-sm text-white">
            <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white"><ArrowRight size={14} /></span>
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}