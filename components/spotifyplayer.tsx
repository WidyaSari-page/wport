"use client";

import { motion } from 'framer-motion';

export default function SpotifyPlayer() {
  return (
    <section id="music" className="py-32 relative bg-[#050505]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            My <span className="text-blue-500">Playlist</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Songs that accompany me while coding and studying.
          </p>
        </motion.div>

        {/* Spotify Embed Player */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          className="glass-panel rounded-2xl overflow-hidden p-3 shadow-2xl border border-white/10"
        >
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/7KYwOUj9QXvpo9Ycp3IoMl?utm_source=generator&si=27aff8b51823485b"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}