"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Music', href: '#music' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-white z-50">
          widya<span className="text-blue-500">.</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 bg-white/5 px-6 py-2.5 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="text-sm text-gray-300 hover:text-blue-500 transition-colors duration-300">
              {link.name}
            </Link>
          ))}
        </div>
        <Link href="#contact" className="hidden md:block px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300">
          Contact me
        </Link>
        <button className="md:hidden text-white z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>}
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden absolute w-full left-0 top-20">
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map(link => (
                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-blue-500">
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}