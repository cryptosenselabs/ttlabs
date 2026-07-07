import React from 'react';
import { motion } from 'framer-motion';
import { Layers, MonitorSmartphone, Cpu, Link as LinkIcon, BarChart3 } from 'lucide-react';

export const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto pointer-events-none perspective-1000">
      
      {/* Background glow to anchor the visual */}
      <div className="absolute inset-0 bg-blue-500/5 blur-[80px] rounded-full" />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Layers className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Solution Architecture</h3>
            <p className="text-xs text-slate-400">Built for clarity and reliability</p>
          </div>
        </div>

        <div className="space-y-4">
          
          {/* Layer 1: User Interfaces */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-[#0B1220]/50 border border-white/5 hover:bg-white/5 transition-colors"
          >
            <MonitorSmartphone className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-slate-200 mb-1">User Interfaces</div>
              <div className="text-xs text-slate-500">Dashboards &middot; Portals &middot; Payment Pages</div>
            </div>
          </motion.div>

          {/* Layer 2: Application Logic */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-[#0B1220]/50 border border-white/5 hover:bg-white/5 transition-colors"
          >
            <Cpu className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-slate-200 mb-1">Application Logic</div>
              <div className="text-xs text-slate-500">Workflows &middot; Automation &middot; Business Rules</div>
            </div>
          </motion.div>

          {/* Layer 3: Blockchain & Payments */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-[#0B1220]/50 border border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-transparent hover:bg-white/5 transition-colors relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-xl" />
            <LinkIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-white mb-1">Blockchain & Payments</div>
              <div className="text-xs text-blue-200/70">Wallet-aware flows &middot; Verification &middot; Transaction visibility</div>
            </div>
          </motion.div>

          {/* Layer 4: Data & Intelligence */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-[#0B1220]/50 border border-white/5 hover:bg-white/5 transition-colors"
          >
            <BarChart3 className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-medium text-slate-200 mb-1">Data & Intelligence</div>
              <div className="text-xs text-slate-500">Monitoring &middot; Analytics &middot; AI-assisted summaries</div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

