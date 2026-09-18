"use client";
import { useState, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData, Project } from '@/data/mockData';

export default function AllProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <Link href="/" className="text-blue-500 hover:text-blue-400 text-sm mb-4 inline-block transition-colors">&larr; Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">All <span className="text-blue-500">Projects</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">A complete collection of projects I have worked on.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 3) * 0.1 }} onClick={() => setSelectedProject(project)} className="glass-panel rounded-2xl overflow-hidden cursor-pointer group relative">
              <div className="relative h-48 overflow-hidden">
                <Image src={project.images[0]} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white font-medium flex items-center gap-2 text-xs">View Details <ExternalLink size={14} className="text-blue-500" /></span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-base font-display font-bold text-white leading-tight">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedProject(null)}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }} onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()} className="glass-panel w-full max-w-4xl rounded-3xl overflow-hidden flex flex-col md:flex-row relative max-h-[85vh] z-10">
              <button onClick={() => setSelectedProject(null)} className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-blue-600 transition-colors backdrop-blur-md">
                <X size={16} />
              </button>
              <div className="md:w-1/2 bg-black/50 relative h-56 md:h-auto min-h-62.5">
                <Image src={selectedProject.images[0]} alt="screenshot" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest mb-2 block">{selectedProject.category}</span>
                <h3 className="text-2xl font-display font-bold text-white mb-3">{selectedProject.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{selectedProject.description}</p>
                <h4 className="text-xs font-bold text-white mb-3 uppercase tracking-wider">Tech Stack</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-300">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}