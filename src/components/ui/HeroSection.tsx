import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  primaryAction?: { text: string; to: string };
  secondaryAction?: { text: string; to: string };
  isMainPage?: boolean;
  rightContent?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  primaryAction, 
  secondaryAction,
  isMainPage = false,
  rightContent
}) => {
  return (
    <section className={`relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[var(--color-navy-bg)] border-b border-white/10 ${
      isMainPage ? 'py-16 md:py-24 min-h-[40vh]' : 'py-24 md:py-32 min-h-[50vh]'
    }`}>
      {/* Animated subtle background glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-accent-blue)]/5 blur-[120px] rounded-full pointer-events-none"
      />
      
      <div className={`relative z-10 w-full ${rightContent ? 'max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' : 'max-w-4xl mx-auto text-center'}`}>
        
        {/* Left Side (Text & Actions) */}
        <div className={rightContent ? 'text-left' : ''}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`font-bold tracking-tight mb-6 text-white ${isMainPage ? 'text-4xl md:text-5xl lg:text-6xl leading-tight' : 'text-4xl md:text-5xl'}`}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`text-xl text-slate-300 mb-10 leading-relaxed ${rightContent ? 'max-w-xl' : 'max-w-2xl mx-auto'}`}
          >
            {subtitle}
          </motion.p>
          
          {(primaryAction || secondaryAction) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col sm:flex-row gap-4 ${rightContent ? 'justify-start' : 'justify-center'}`}
            >
              {primaryAction && (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {primaryAction.to.startsWith('http') ? (
                    <a href={primaryAction.to} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[var(--color-accent-blue)] text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
                      {primaryAction.text}
                    </a>
                  ) : (
                    <Link to={primaryAction.to} className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[var(--color-accent-blue)] text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
                      {primaryAction.text}
                    </Link>
                  )}
                </motion.div>
              )}
              {secondaryAction && (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {secondaryAction.to.startsWith('http') ? (
                    <a href={secondaryAction.to} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto">
                      {secondaryAction.text}
                    </a>
                  ) : (
                    <Link to={secondaryAction.to} className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto">
                      {secondaryAction.text}
                    </Link>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}
        </div>

        {/* Right Side (Visual Content) */}
        {rightContent && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative hidden lg:block"
          >
            {rightContent}
          </motion.div>
        )}
      </div>
    </section>
  );
};
