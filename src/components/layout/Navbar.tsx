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
    <nav className="fixed w-full z-50 bg-brand-900/80 backdrop-blur-md border-b border-brand-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-medium tracking-tight text-[var(--color-text-white)] flex items-center gap-3">
              <img src="/logo.svg" alt="Third Leap Labs Logo" className="h-7 w-auto" />
              <span>Third Leap Labs</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About</Link>
            
            <div className="relative group" onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
              <button className={`flex items-center gap-1 ${location.pathname.startsWith('/products') ? 'text-brand-accent font-medium' : 'text-brand-100 hover:text-brand-accent'}`}>
                Products <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-brand-800 border border-brand-700 ring-1 ring-black ring-opacity-5"
                  >
                    <Link to="/products/whalescanner" className="block px-4 py-2 text-sm text-brand-100 hover:bg-brand-700">WhaleScanner</Link>
                    <Link to="/products/gopaysol" className="block px-4 py-2 text-sm text-brand-100 hover:bg-brand-700">GoPaySol</Link>
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
            <button onClick={toggleMenu} className="text-brand-100 hover:text-brand-accent focus:outline-none">
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
            className="md:hidden overflow-hidden bg-brand-800 border-b border-brand-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={toggleMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-brand-accent bg-brand-900' : 'text-brand-100 hover:text-brand-accent hover:bg-brand-700'}`}>Home</Link>
              <Link to="/about" onClick={toggleMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-brand-accent bg-brand-900' : 'text-brand-100 hover:text-brand-accent hover:bg-brand-700'}`}>About</Link>
              <div className="px-3 py-2 text-base font-medium text-brand-100">Products</div>
              <div className="pl-6 space-y-1">
                <Link to="/products/whalescanner" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-sm text-brand-100 hover:bg-brand-700 hover:text-brand-accent">WhaleScanner</Link>
                <Link to="/products/gopaysol" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-sm text-brand-100 hover:bg-brand-700 hover:text-brand-accent">GoPaySol</Link>
              </div>
              <Link to="/services" onClick={toggleMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services') ? 'text-brand-accent bg-brand-900' : 'text-brand-100 hover:text-brand-accent hover:bg-brand-700'}`}>Services</Link>
              <Link to="/labs" onClick={toggleMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/labs') ? 'text-brand-accent bg-brand-900' : 'text-brand-100 hover:text-brand-accent hover:bg-brand-700'}`}>Labs</Link>
              <Link to="/roadmap" onClick={toggleMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/roadmap') ? 'text-brand-accent bg-brand-900' : 'text-brand-100 hover:text-brand-accent hover:bg-brand-700'}`}>Roadmap</Link>
              <Link to="/contact" onClick={toggleMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-brand-accent bg-brand-900' : 'text-brand-100 hover:text-brand-accent hover:bg-brand-700'}`}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
