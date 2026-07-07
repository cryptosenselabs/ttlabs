import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  supportingLine?: string;
  primaryAction?: { text: string; to: string };
  secondaryAction?: { text: string; to: string };
  isMainPage?: boolean;
  rightContent?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  eyebrow,
  title, 
  subtitle, 
  supportingLine,
  primaryAction, 
  secondaryAction,
  isMainPage = false,
  rightContent
}) => {
  return (
    <section className={`relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0B1220] border-b border-white/5 ${
      isMainPage ? 'py-12 md:py-20' : 'py-20 md:py-28 min-h-[40vh]'
    }`}>
      {/* Base Dark Gradient & Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Very subtle blue radial glow behind right visual */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Animated subtle background glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-[var(--color-accent-blue)] blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-[var(--color-accent-cyan)] blur-[120px] rounded-full pointer-events-none"
      />

      {/* Floating Abstract Shapes in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-64 h-64 border border-white/5 rounded-full bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-[15%] w-48 h-48 border border-white/5 rounded-3xl rotate-12 bg-gradient-to-tr from-white/[0.02] to-transparent backdrop-blur-2xl"
        />
      </div>
      
      <div className={`relative z-10 w-full ${rightContent ? 'max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' : 'max-w-4xl mx-auto text-center'}`}>
        
        {/* Left Side (Text & Actions) */}
        <div className={`flex flex-col ${rightContent ? 'items-start text-left' : 'items-center text-center'}`}>
          
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 text-sm font-semibold tracking-wide text-blue-400 uppercase"
            >
              {eyebrow}
            </motion.div>
          )}

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`font-bold tracking-tight mb-6 text-white ${isMainPage ? 'text-4xl md:text-5xl lg:text-[56px] leading-tight' : 'text-4xl md:text-5xl'}`}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`text-[17px] text-slate-300 mb-6 leading-relaxed ${rightContent ? 'max-w-xl' : 'max-w-2xl mx-auto'}`}
          >
            {subtitle}
          </motion.p>

          {supportingLine && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`text-base text-slate-400 mb-8 leading-relaxed ${rightContent ? 'max-w-xl' : 'max-w-2xl mx-auto'}`}
            >
              {supportingLine}
            </motion.p>
          )}
          
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
                    <a href={primaryAction.to} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm w-full sm:w-auto">
                      {primaryAction.text}
                    </a>
                  ) : (
                    <Link to={primaryAction.to} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-sm w-full sm:w-auto">
                      {primaryAction.text}
                    </Link>
                  )}
                </motion.div>
              )}
              {secondaryAction && (
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {secondaryAction.to.startsWith('http') ? (
                    <a href={secondaryAction.to} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/30 transition-colors w-full sm:w-auto">
                      {secondaryAction.text}
                    </a>
                  ) : (
                    <Link to={secondaryAction.to} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/30 transition-colors w-full sm:w-auto">
                      {secondaryAction.text}
                    </Link>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}

          {isMainPage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 text-xs font-medium text-slate-500 flex gap-2"
            >
              <span>SaaS</span>&middot;
              <span>Blockchain</span>&middot;
              <span>Payments</span>&middot;
              <span>Automation</span>
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
