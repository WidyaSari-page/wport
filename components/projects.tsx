"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { projectsData } from '@/data/mockData';

export default function Projects() {
  const displayedProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-32 relative bg-black/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Projects & <br /><span className="font-playfair italic text-blue-500">Portfolio</span></h2>
            <p className="text-gray-400 text-sm max-w-lg mt-4">A real exploration of my learning in Web Development, Cloud, and Network Security.</p>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-blue-500 text-sm text-white transition-colors">
            View All Projects <ArrowRight size={16} />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-panel p-6 rounded-2xl flex flex-col relative overflow-hidden group">
              <div className="absolute top-4 right-6 text-5xl font-bold text-white/5 group-hover:text-blue-500/10 transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="relative z-10 flex-1">
                <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest mb-3 block">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-6 leading-tight">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="mt-8 relative z-10">
                <Link href="/projects" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}