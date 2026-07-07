import React from 'react';
import { motion } from 'framer-motion';

export const HeroVisual = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center pointer-events-none">
      
      {/* Central Glass Sphere */}
      <motion.div 
        animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-10 w-64 h-64 rounded-full border border-white/20 bg-gradient-to-tr from-white/5 to-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(37,99,235,0.2)] inset-0 m-auto flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
        {/* Inner core */}
        <div className="w-32 h-32 rounded-full border border-[var(--color-accent-cyan)]/30 bg-gradient-to-br from-[var(--color-accent-cyan)]/20 to-[var(--color-accent-blue)]/20 blur-[2px]" />
      </motion.div>

      {/* Orbiting Abstract Elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-white/10 flex items-center justify-center"
      >
        {/* Orbiting Card 1 */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-6 w-32 h-16 rounded-xl border border-white/20 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl shadow-lg p-3 flex flex-col justify-between"
        >
          <div className="w-8 h-2 rounded-full bg-white/40" />
          <div className="w-full h-1 rounded-full bg-white/10" />
        </motion.div>

        {/* Orbiting Card 2 */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-8 right-10 w-24 h-24 rounded-2xl border border-[var(--color-accent-cyan)]/30 bg-gradient-to-tr from-[var(--color-accent-blue)]/20 to-transparent backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.2)] flex items-center justify-center"
        >
          <div className="w-10 h-10 rounded-full border border-[var(--color-accent-cyan)]/50 border-t-transparent animate-spin" />
        </motion.div>
      </motion.div>

      {/* Floating UI Panel */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          x: { duration: 0.8, ease: "easeOut" },
          opacity: { duration: 0.8 }
        }}
        className="absolute right-0 bottom-20 w-48 rounded-xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl p-4 space-y-3 z-20"
      >
        <div className="flex justify-between items-center border-b border-white/10 pb-2">
          <div className="w-12 h-2 rounded-full bg-[var(--color-accent-blue)]" />
          <div className="w-4 h-4 rounded-full bg-green-400/50" />
        </div>
        <div className="space-y-2">
          <div className="w-full h-1.5 rounded-full bg-white/10" />
          <div className="w-4/5 h-1.5 rounded-full bg-white/10" />
          <div className="w-full h-1.5 rounded-full bg-white/10" />
        </div>
      </motion.div>
      
    </div>
  );
};

