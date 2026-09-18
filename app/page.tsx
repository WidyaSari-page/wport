"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Intro from '@/components/intro';
import CursorGlow from '@/components/cursor-glow';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Certifications from '@/components/certifications';
import SpotifyPlayer from '@/components/spotifyplayer';
import Contact from '@/components/contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CursorGlow />
      <AnimatePresence>
        {isLoading && <Intro onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {!isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Certifications />
            <SpotifyPlayer />
            <Contact />
          </main>
        </motion.div>
      )}
    </>
  );
}