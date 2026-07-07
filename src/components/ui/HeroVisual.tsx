import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Activity, Shield } from 'lucide-react';

export const HeroVisual = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[var(--color-accent-cyan)]/20 blur-[60px] rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-[var(--color-accent-magenta)]/20 blur-[70px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--color-accent-indigo)]/20 blur-[80px] rounded-full" />

      {/* Layer 1: WhaleScanner Card */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-8 right-12 w-64 glass-card p-4 border-l-2 border-l-[var(--color-accent-cyan)] shadow-xl z-20"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-[var(--color-accent-cyan)]" />
            <span className="text-sm font-semibold text-slate-900">WhaleScanner</span>
          </div>
          <span className="text-xs text-[var(--color-accent-cyan)] font-mono">LIVE</span>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
          <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
          <div className="flex justify-between items-end pt-2">
            <div className="h-8 w-full bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/20 to-transparent rounded-sm opacity-50" />
          </div>
        </div>
      </motion.div>

      {/* Layer 2: GoPaySol Card */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute bottom-12 left-8 w-72 glass-card p-4 border-t-2 border-t-[var(--color-accent-magenta)] shadow-xl z-30"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[var(--color-accent-magenta)]" />
            <span className="text-sm font-semibold text-slate-900">GoPaySol</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-full border border-slate-200">Payment Flow</span>
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200">
            <div className="w-6 h-6 border-2 border-dashed border-slate-300 rounded-sm" />
          </div>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-2 w-full bg-slate-200 rounded-full" />
            <div className="h-2 w-2/3 bg-[var(--color-accent-magenta)]/50 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Background Floating Elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-12 h-12 glass-card flex items-center justify-center border border-slate-200 z-10"
      >
        <Activity className="w-5 h-5 text-[var(--color-accent-indigo)]" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-10 h-10 glass-card flex items-center justify-center border border-slate-200 z-10"
      >
        <Shield className="w-4 h-4 text-slate-400" />
      </motion.div>
    </div>
  );
};
