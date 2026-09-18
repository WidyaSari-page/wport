"use client";
import { motion } from 'framer-motion';
import { Info, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 mb-8">
          <Info size={14} className="text-blue-500" /> About Widya
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-2xl md:text-4xl font-medium text-white leading-relaxed mb-8">
          I am Widya Sari, a Vocational High School student majoring in Computer and Network Engineering. I have a strong interest in <span className="font-playfair italic text-blue-500">Web Development</span> with supporting knowledge in system administration and DevOps.
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[{ value: '12+', label: 'Certifications' }, { value: '20+', label: 'IT Projects' }, { value: '3+', label: 'Achievements' }].map((stat, i) => (
            <div key={i} className="glass-panel px-6 py-6 rounded-2xl flex flex-col items-center">
              <div className="text-3xl font-display font-bold text-blue-500 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['Docker & DevOps', 'AWS Cloud', 'Linux Server', 'Nginx & Apache', 'PostgreSQL & MySQL', 'HTML, CSS, JS', 'MikroTik', 'Git & GitHub'].map((skill, i) => (
            <span key={i} className="px-4 py-2 rounded-full glass-panel text-sm text-gray-300">{skill}</span>
          ))}
        </div>
        <div className="mt-16">
          <p className="text-gray-500 mb-6 font-playfair italic text-lg">Let&apos;s take a look at the projects I&apos;ve worked on.</p>
          <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 text-sm text-white">
            <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white"><ArrowRight size={14} /></span>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}