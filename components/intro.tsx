"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<'loading' | 'intro'>('loading');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('intro'), 1500);
    const timer2 = setTimeout(() => onComplete(), 4000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-999 bg-[#050505] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {stage === 'loading' && (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -50 }} className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-2 border-white/10 border-t-blue-500 rounded-full animate-spin"></div>
          </motion.div>
        )}
        {stage === 'intro' && (
          <motion.div key="intro" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-5xl md:text-7xl font-playfair italic text-white">
              Hola, <br className="md:hidden" />
              <span className="text-blue-500">im Widya</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}