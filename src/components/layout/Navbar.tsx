import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;
  const navLinkClass = (path: string) => `transition-colors hover:text-brand-accent ${isActive(path) ? 'text-brand-accent font-medium' : 'text-brand-100'}`;

  return (
    <nav className="fixed w-full z-50 bg-[var(--color-primary-dark)]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold tracking-tight text-[var(--color-text-white)] flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-indigo)] p-[1px] group-hover:shadow-[0_0_15px_rgba(0,213,255,0.5)] transition-shadow">
                <div className="w-full h-full bg-[var(--color-primary-dark)] rounded-[7px] flex items-center justify-center">
                   <img src="/logo.svg" alt="Third Leap Labs Logo" className="h-5 w-auto" />
                </div>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:to-white transition-all">Third Leap Labs</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About</Link>
            
            <div className="relative group" onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
              <button className={`flex items-center gap-1 transition-colors ${location.pathname.startsWith('/products') ? 'text-[var(--color-accent-cyan)] font-medium' : 'text-[var(--color-muted-text)] hover:text-[var(--color-text-white)]'}`}>
                Products <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-56 rounded-xl shadow-2xl py-2 bg-[var(--color-secondary-dark)] border border-white/10 ring-1 ring-black ring-opacity-5"
                  >
                    <Link to="/products/whalescanner" className="block px-5 py-3 text-sm text-[var(--color-muted-dark-text)] hover:text-[var(--color-text-white)] hover:bg-white/5 transition-colors">
                      <div className="font-medium mb-0.5 text-[var(--color-accent-cyan)]">WhaleScanner</div>
                      <div className="text-xs opacity-70">Web3 Intelligence</div>
                    </Link>
                    <Link to="/products/gopaysol" className="block px-5 py-3 text-sm text-[var(--color-muted-dark-text)] hover:text-[var(--color-text-white)] hover:bg-white/5 transition-colors">
                      <div className="font-medium mb-0.5 text-[var(--color-accent-magenta)]">GoPaySol</div>
                      <div className="text-xs opacity-70">Payment Workflows</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link to="/services" className={navLinkClass('/services')}>Services</Link>
            <Link to="/labs" className={navLinkClass('/labs')}>Labs</Link>
            <Link to="/roadmap" className={navLinkClass('/roadmap')}>Roadmap</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[var(--color-muted-text)] hover:text-[var(--color-text-white)] focus:outline-none transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[var(--color-secondary-dark)] border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
              <Link to="/" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive('/') ? 'text-[var(--color-accent-cyan)] bg-white/5' : 'text-[var(--color-muted-dark-text)] hover:text-[var(--color-text-white)] hover:bg-white/5'}`}>Home</Link>
              <Link to="/about" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive('/about') ? 'text-[var(--color-accent-cyan)] bg-white/5' : 'text-[var(--color-muted-dark-text)] hover:text-[var(--color-text-white)] hover:bg-white/5'}`}>About</Link>
              <div className="px-3 py-2 text-sm font-semibold text-[var(--color-muted-text)] uppercase tracking-wider">Products</div>
              <div className="pl-4 border-l-2 border-white/5 ml-3 space-y-1">
                <Link to="/products/whalescanner" onClick={toggleMenu} className="block px-3 py-2 rounded-lg text-sm text-[var(--color-muted-dark-text)] hover:text-[var(--color-accent-cyan)] hover:bg-white/5 transition-colors">WhaleScanner</Link>
                <Link to="/products/gopaysol" onClick={toggleMenu} className="block px-3 py-2 rounded-lg text-sm text-[var(--color-muted-dark-text)] hover:text-[var(--color-accent-magenta)] hover:bg-white/5 transition-colors">GoPaySol</Link>
              </div>
              <Link to="/services" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive('/services') ? 'text-[var(--color-accent-cyan)] bg-white/5' : 'text-[var(--color-muted-dark-text)] hover:text-[var(--color-text-white)] hover:bg-white/5'}`}>Services</Link>
              <Link to="/labs" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive('/labs') ? 'text-[var(--color-accent-cyan)] bg-white/5' : 'text-[var(--color-muted-dark-text)] hover:text-[var(--color-text-white)] hover:bg-white/5'}`}>Labs</Link>
              <Link to="/roadmap" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive('/roadmap') ? 'text-[var(--color-accent-cyan)] bg-white/5' : 'text-[var(--color-muted-dark-text)] hover:text-[var(--color-text-white)] hover:bg-white/5'}`}>Roadmap</Link>
              <Link to="/contact" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive('/contact') ? 'text-[var(--color-accent-cyan)] bg-white/5' : 'text-[var(--color-muted-dark-text)] hover:text-[var(--color-text-white)] hover:bg-white/5'}`}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
