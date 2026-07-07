import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  primaryAction?: { text: string; to: string };
  secondaryAction?: { text: string; to: string };
  isMainPage?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  primaryAction, 
  secondaryAction,
  isMainPage = false
}) => {
  return (
    <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 md:py-32 min-h-[50vh] premium-gradient-bg border-b border-white/5 overflow-hidden">
      {/* Animated subtle background glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[var(--color-accent-cyan)]/20 via-[var(--color-accent-indigo)]/10 to-[var(--color-accent-magenta)]/20 blur-[100px] rounded-full pointer-events-none"
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`font-bold tracking-tight mb-6 ${isMainPage ? 'text-4xl md:text-6xl' : 'text-4xl md:text-5xl'}`}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl text-[var(--color-muted-dark-text)] mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
        
        {(primaryAction || secondaryAction) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            {primaryAction && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {primaryAction.to.startsWith('http') ? (
                  <a href={primaryAction.to} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--color-text-white)] text-[var(--color-main-dark-text)] font-medium hover:bg-gray-200 transition-colors shadow-lg w-full sm:w-auto">
                    {primaryAction.text}
                  </a>
                ) : (
                  <Link to={primaryAction.to} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--color-text-white)] text-[var(--color-main-dark-text)] font-medium hover:bg-gray-200 transition-colors shadow-lg w-full sm:w-auto">
                    {primaryAction.text}
                  </Link>
                )}
              </motion.div>
            )}
            {secondaryAction && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {secondaryAction.to.startsWith('http') ? (
                  <a href={secondaryAction.to} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text-white)] font-medium hover:bg-[var(--color-secondary-dark)] transition-colors w-full sm:w-auto">
                    {secondaryAction.text}
                  </a>
                ) : (
                  <Link to={secondaryAction.to} className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text-white)] font-medium hover:bg-[var(--color-secondary-dark)] transition-colors w-full sm:w-auto">
                    {secondaryAction.text}
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};
