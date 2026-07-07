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
            
            <div className="relative group" onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
              <Link to="/solutions" className={`flex items-center gap-1 transition-colors text-sm font-medium ${location.pathname.startsWith('/solutions') ? 'text-[var(--color-primary-text)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)]'}`}>
                Solutions <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 rounded-xl shadow-xl py-3 bg-[var(--color-card-surface)] border border-[var(--color-border-main)] ring-1 ring-black ring-opacity-5"
                  >
                    <Link to="/solutions#blockchain" className="block px-5 py-3 text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)] transition-colors">
                      <div className="font-semibold text-[var(--color-primary-text)] mb-0.5">Blockchain Solutions</div>
                    </Link>
                    <Link to="/solutions#payments" className="block px-5 py-3 text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)] transition-colors">
                      <div className="font-semibold text-[var(--color-primary-text)] mb-0.5">Payment Systems</div>
                    </Link>
                    <Link to="/solutions#saas" className="block px-5 py-3 text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)] transition-colors">
                      <div className="font-semibold text-[var(--color-primary-text)] mb-0.5">SaaS & Automation</div>
                    </Link>
                    <Link to="/solutions#architecture" className="block px-5 py-3 text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)] transition-colors">
                      <div className="font-semibold text-[var(--color-primary-text)] mb-0.5">Technical Architecture</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative group">
              <Link to="/labs" className={`flex items-center gap-1 transition-colors text-sm font-medium ${location.pathname.startsWith('/labs') ? 'text-[var(--color-primary-text)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)]'}`}>
                Labs
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="rounded-xl shadow-xl py-3 bg-[var(--color-card-surface)] border border-[var(--color-border-main)] ring-1 ring-black ring-opacity-5">
                  <Link to="/labs/whalescanner" className="block px-5 py-2 text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)] transition-colors">WhaleScanner</Link>
                  <Link to="/labs/gopaysol" className="block px-5 py-2 text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)] transition-colors">GoPaySol</Link>
                </div>
              </div>
            </div>
            
            <Link to="/company" className={navLinkClass('/company')}>Company</Link>
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
              <Link to="/solutions" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/solutions') ? 'text-[var(--color-primary-text)] bg-[var(--color-section-surface)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)]'}`}>Solutions</Link>
              <div className="px-3 py-2 text-xs font-semibold text-[var(--color-muted-text)] uppercase tracking-wider">Labs</div>
              <div className="pl-4 border-l-2 border-[var(--color-border-main)] ml-3 space-y-1">
                <Link to="/labs/whalescanner" onClick={toggleMenu} className="block px-3 py-2 rounded-lg text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)] transition-colors">WhaleScanner</Link>
                <Link to="/labs/gopaysol" onClick={toggleMenu} className="block px-3 py-2 rounded-lg text-sm text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)] transition-colors">GoPaySol</Link>
              </div>
              <Link to="/company" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/company') ? 'text-[var(--color-primary-text)] bg-[var(--color-section-surface)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)]'}`}>Company</Link>
              <Link to="/roadmap" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/roadmap') ? 'text-[var(--color-primary-text)] bg-[var(--color-section-surface)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)]'}`}>Roadmap</Link>
              <Link to="/contact" onClick={toggleMenu} className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/contact') ? 'text-[var(--color-primary-text)] bg-[var(--color-section-surface)]' : 'text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] hover:bg-[var(--color-section-surface)]'}`}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
