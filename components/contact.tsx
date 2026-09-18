"use client";
import { motion } from 'framer-motion';
import type { ElementType } from 'react';
import { Camera, GitBranch, Link2, Mail } from 'lucide-react';

type SocialLink = {
  url: string;
  color: string;
  name: string;
  icon: ElementType;
};

const socialLinks: SocialLink[] = [
  { url: '#', color: 'hover:bg-gray-800', name: 'GitHub', icon: GitBranch },
  { url: '#', color: 'hover:bg-blue-800', name: 'LinkedIn', icon: Link2 },
  { url: '#', color: 'hover:bg-pink-800', name: 'Instagram', icon: Camera },
  { url: 'mailto:', color: 'hover:bg-red-800', name: 'Email', icon: Mail },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-black/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-gray-500 mb-4 font-playfair italic text-xl">Interested in working together?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let&apos;s <span className="font-playfair italic text-blue-500">Connect</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">Have a project idea, want to discuss, or just say hi? Feel free to reach out through the platforms below.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {socialLinks.map((social: SocialLink, index: number) => (
            <motion.a key={index} href={social.url} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ scale: 1.05, y: -5 }} className={`glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-3 group transition-colors duration-300 ${social.color}`}>
              <social.icon size={28} className="text-gray-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">{social.name}</span>
            </motion.a>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-xs">© 2026 Widya Sari. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}