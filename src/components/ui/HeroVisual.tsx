import React from 'react';
import { motion } from 'framer-motion';

export const HeroVisual = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center pointer-events-none">
      
      {/* Background glow for the chain */}
      <div className="absolute inset-0 bg-[var(--color-accent-blue)]/5 blur-[100px] rounded-full" />

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M 120,250 Q 200,180 250,250 T 380,250" 
          stroke="url(#line-gradient)" 
          strokeWidth="3" 
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Pulsing data packet 1 */}
        <motion.circle 
          r="4" 
          fill="var(--color-accent-cyan)"
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          style={{ offsetPath: "path('M 120,250 Q 200,180 250,250 T 380,250')" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="shadow-[0_0_10px_var(--color-accent-cyan)]"
        />
        {/* Pulsing data packet 2 */}
        <motion.circle 
          r="4" 
          fill="var(--color-accent-magenta)"
          animate={{
            offsetDistance: ["100%", "0%"],
          }}
          style={{ offsetPath: "path('M 120,250 Q 200,180 250,250 T 380,250')" }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          className="shadow-[0_0_10px_var(--color-accent-magenta)]"
        />
        <defs>
          <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-accent-blue)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="var(--color-accent-cyan)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-accent-blue)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Block 1 */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[45%] w-28 h-32 glass-card border border-white/20 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl shadow-[0_0_30px_rgba(37,99,235,0.15)] flex flex-col justify-between p-3 z-10 rounded-xl"
      >
        <div className="flex justify-between items-center">
          <div className="w-6 h-6 rounded border border-[var(--color-accent-cyan)]/50 bg-[var(--color-accent-cyan)]/20 flex items-center justify-center">
            <div className="w-2 h-2 bg-[var(--color-accent-cyan)] rounded-full animate-pulse" />
          </div>
          <span className="text-[10px] font-mono text-slate-400">#1024</span>
        </div>
        <div className="space-y-1.5 mt-4">
          <div className="w-full h-1 bg-white/10 rounded-full" />
          <div className="w-4/5 h-1 bg-white/10 rounded-full" />
          <div className="w-full h-1 bg-white/10 rounded-full" />
        </div>
      </motion.div>

      {/* Block 2 (Central) */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-1/2 -translate-x-1/2 top-[40%] w-36 h-40 glass-card border border-[var(--color-accent-cyan)]/30 bg-gradient-to-b from-[var(--color-accent-blue)]/20 to-transparent backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.2)] flex flex-col justify-between p-4 z-20 rounded-xl"
      >
        <div className="flex justify-between items-center">
          <div className="w-8 h-8 rounded border border-[var(--color-accent-blue)]/50 bg-[var(--color-accent-blue)]/20 flex items-center justify-center shadow-[0_0_15px_var(--color-accent-blue)]">
            <div className="w-3 h-3 bg-[var(--color-accent-cyan)] rounded-full animate-pulse" />
          </div>
          <span className="text-[11px] font-mono text-[var(--color-accent-cyan)]">#1025</span>
        </div>
        <div className="space-y-2 mt-6">
          <div className="w-full h-1.5 bg-white/20 rounded-full" />
          <div className="w-5/6 h-1.5 bg-white/20 rounded-full" />
          <div className="w-full h-1.5 bg-[var(--color-accent-cyan)]/40 rounded-full" />
          <div className="w-3/4 h-1.5 bg-white/20 rounded-full" />
        </div>
      </motion.div>

      {/* Block 3 */}
      <motion.div 
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[10%] top-[45%] w-28 h-32 glass-card border border-white/20 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl shadow-[0_0_30px_rgba(217,70,239,0.15)] flex flex-col justify-between p-3 z-10 rounded-xl"
      >
        <div className="flex justify-between items-center">
          <div className="w-6 h-6 rounded border border-[var(--color-accent-magenta)]/50 bg-[var(--color-accent-magenta)]/20 flex items-center justify-center">
            <div className="w-2 h-2 bg-[var(--color-accent-magenta)] rounded-full animate-pulse" />
          </div>
          <span className="text-[10px] font-mono text-slate-400">#1026</span>
        </div>
        <div className="space-y-1.5 mt-4">
          <div className="w-full h-1 bg-white/10 rounded-full" />
          <div className="w-2/3 h-1 bg-[var(--color-accent-magenta)]/40 rounded-full" />
          <div className="w-full h-1 bg-white/10 rounded-full" />
        </div>
      </motion.div>

    </div>
  );
};

