import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  supportingNote?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ 
  eyebrow,
  title, 
  subtitle, 
  supportingNote
}) => {
  return (
    <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#0B1220] border-b border-white/5 py-16 md:py-20 min-h-[280px] max-h-[360px] overflow-hidden">
      {/* Base Dark Gradient & Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Very subtle blue accent line at the top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      {/* Subtle glow (centered) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 text-[14px] font-medium text-blue-400 uppercase"
          >
            {eyebrow}
          </motion.div>
        )}

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold mb-4 text-white text-[30px] sm:text-[36px] md:text-[48px] leading-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[18px] md:text-[20px] text-[#CBD5E1] leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>

        {supportingNote && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[15px] text-[#94A3B8]"
          >
            {supportingNote}
          </motion.p>
        )}
      </div>
    </section>
  );
};
