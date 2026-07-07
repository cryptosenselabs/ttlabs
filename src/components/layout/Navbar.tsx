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
  const navLinkClass = (path: string) => `transition-colors text-sm font-medium ${isActive(path) ? 'text-[var(--color-primary-text)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)]'}`;

  return (
    <nav className="fixed w-full z-50 bg-[var(--color-primary-bg)]/80 backdrop-blur-md border-b border-[var(--color-border-main)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold tracking-tight text-[var(--color-primary-text)] flex items-center gap-2 group">
              <img src="/logo.svg" alt="Third Leap Labs Logo" className="h-6 w-auto" />
              <span>Third Leap Labs</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About</Link>
            
            <div className="relative group" onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
              <button className={`flex items-center gap-1 transition-colors text-sm font-medium ${location.pathname.startsWith('/products') ? 'text-[var(--color-primary-text)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)]'}`}>
                Products <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 rounded-xl shadow-xl py-3 bg-[var(--color-card-surface)] border border-[var(--color-border-main)] ring-1 ring-black ring-opacity-5"
                  >
                    <Link to="/products/whalescanner" className="block px-5 py-3 text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)] transition-colors">
                      <div className="font-semibold text-[var(--color-primary-text)] mb-0.5 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-accent-cyan)]"></div>
                        WhaleScanner
                      </div>
                      <div className="text-xs text-[var(--color-muted-text)]">Web3 Intelligence Platform</div>
                    </Link>
                    <Link to="/products/gopaysol" className="block px-5 py-3 text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)] transition-colors">
                      <div className="font-semibold text-[var(--color-primary-text)] mb-0.5 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-accent-magenta)]"></div>
                        GoPaySol
                      </div>
                      <div className="text-xs text-[var(--color-muted-text)]">Solana Payment Workflows</div>
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
            <button onClick={toggleMenu} className="text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] focus:outline-none transition-colors">
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
            className="md:hidden overflow-hidden bg-[var(--color-card-surface)] border-b border-[var(--color-border-main)]"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
              <Link to="/" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/') ? 'text-[var(--color-primary-text)] bg-[var(--color-section-surface)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)]'}`}>Home</Link>
              <Link to="/about" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/about') ? 'text-[var(--color-primary-text)] bg-[var(--color-section-surface)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)]'}`}>About</Link>
              <div className="px-3 py-2 text-xs font-semibold text-[var(--color-muted-text)] uppercase tracking-wider">Products</div>
              <div className="pl-4 border-l-2 border-[var(--color-border-main)] ml-3 space-y-1">
                <Link to="/products/whalescanner" onClick={toggleMenu} className="block px-3 py-2 rounded-lg text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)] transition-colors">WhaleScanner</Link>
                <Link to="/products/gopaysol" onClick={toggleMenu} className="block px-3 py-2 rounded-lg text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)] transition-colors">GoPaySol</Link>
              </div>
              <Link to="/services" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/services') ? 'text-[var(--color-primary-text)] bg-[var(--color-section-surface)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)]'}`}>Services</Link>
              <Link to="/labs" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/labs') ? 'text-[var(--color-primary-text)] bg-[var(--color-section-surface)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)]'}`}>Labs</Link>
              <Link to="/roadmap" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/roadmap') ? 'text-[var(--color-primary-text)] bg-[var(--color-section-surface)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)]'}`}>Roadmap</Link>
              <Link to="/contact" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/contact') ? 'text-[var(--color-primary-text)] bg-[var(--color-section-surface)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)]'}`}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
