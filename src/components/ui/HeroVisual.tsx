import React from 'react';
import { motion } from 'framer-motion';

export const HeroVisual = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 blur-[80px] rounded-full" />
      
      {/* Main Image */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative z-20 w-full max-w-md mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
          <img 
            src="/assets/hero_graphic.png" 
            alt="Abstract Software Solutions Graphic" 
            className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      </motion.div>
    </div>
  );
};

