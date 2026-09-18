"use client";
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-125 h-125 rounded-full bg-blue-600/10 blur-[120px] z-0 hidden md:block will-change-transform"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}