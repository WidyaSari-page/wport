"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { certificationsData } from '@/data/mockData';

export default function Certifications() {
  const displayedCerts = certificationsData.slice(0, 3);

  return (
    <section id="certifications" className="py-32 relative bg-[#050505]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Certifications & <br /><span className="font-playfair italic text-blue-500">Training</span></h2>
            <p className="text-gray-400 text-sm max-w-lg mt-4">Continuous learning achievements in the IT field.</p>
          </div>
          <Link href="/certifications" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-blue-500 text-sm text-white transition-colors">
            View All Certifications <ArrowRight size={16} />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCerts.map((cert, index) => (
            <motion.div key={cert.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <cert.icon size={32} className={cert.color} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}