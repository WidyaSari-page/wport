"use client";
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Lock, X } from 'lucide-react';
import Link from 'next/link';
import { certificationsData, Certification } from '@/data/mockData';

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <Link href="/" className="text-blue-500 hover:text-blue-400 text-sm mb-4 inline-block transition-colors">&larr; Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Certification <span className="text-blue-500">Gallery</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">A collection of my certifications and continuous learning achievements.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div key={cert.id} initial={{ opacity: 0, y: 100, rotate: -10 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 80, damping: 20, delay: index * 0.1 }} onClick={() => !cert.isComingSoon && setSelectedCert(cert)} className={`glass-panel p-6 rounded-2xl flex flex-col items-center text-center relative overflow-hidden ${cert.isComingSoon ? 'opacity-50 grayscale cursor-not-allowed' : 'cursor-pointer group'}`}>
              {cert.isComingSoon && <div className="absolute top-3 right-3 bg-gray-800 text-gray-400 text-[10px] font-bold px-2 py-1 rounded">Coming Soon</div>}
              <div className={`w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-5 border border-white/10 ${!cert.isComingSoon && 'group-hover:scale-110 transition-transform duration-300'}`}>
                <cert.icon size={36} className={cert.color} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{cert.issuer}</p>
              {!cert.isComingSoon ? (
                <span className="mt-auto text-sm text-blue-500 flex items-center gap-1.5 font-medium">View Details <ExternalLink size={14} /></span>
              ) : (
                <div className="mt-auto text-sm text-gray-600 flex items-center gap-1.5 font-medium"><Lock size={14} /> Locked</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6" onClick={() => setSelectedCert(null)}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }} onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()} className="glass-panel w-full max-w-md rounded-3xl p-8 relative z-10 text-center">
              <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-blue-600 transition-colors backdrop-blur-md">
                <X size={16} />
              </button>
              <div className="w-20 h-20 mx-auto rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <selectedCert.icon size={40} className={selectedCert.color} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
              <p className="text-blue-500 font-medium mb-4">{selectedCert.issuer}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{selectedCert.description || 'Description coming soon.'}</p>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full justify-center">
                Verify Certificate <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}