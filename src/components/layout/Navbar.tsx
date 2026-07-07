import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;
  
  const navLinkClass = (path: string) => {
    const base = "transition-all duration-200 text-[14px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full";
    return isActive(path) 
      ? `${base} bg-slate-100 text-slate-900`
      : `${base} text-slate-500 hover:text-slate-900 hover:bg-slate-50`;
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-[20px] font-bold tracking-tight text-slate-900 flex items-center gap-2 group">
              <img src="/logo.svg" alt="Third Leap Labs Logo" className="h-7 w-auto transition-transform group-hover:scale-105 duration-300" />
              <span>Third Leap Labs</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/solutions" className={navLinkClass('/solutions')}>Solutions</Link>
            <Link to="/company" className={navLinkClass('/company')}>Company</Link>
            <Link to="/roadmap" className={navLinkClass('/roadmap')}>Roadmap</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900 focus:outline-none transition-colors p-2 bg-slate-50 rounded-lg">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            className="md:hidden overflow-hidden bg-white border-b border-slate-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
              <Link to="/" onClick={toggleMenu} className={`block px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors ${isActive('/') ? 'text-slate-900 bg-slate-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}>Home</Link>
              <Link to="/solutions" onClick={toggleMenu} className={`block px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors ${isActive('/solutions') ? 'text-slate-900 bg-slate-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}>Solutions</Link>
              <Link to="/company" onClick={toggleMenu} className={`block px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors ${isActive('/company') ? 'text-slate-900 bg-slate-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}>Company</Link>
              <Link to="/roadmap" onClick={toggleMenu} className={`block px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors ${isActive('/roadmap') ? 'text-slate-900 bg-slate-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}>Roadmap</Link>
              <Link to="/contact" onClick={toggleMenu} className={`block px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors ${isActive('/contact') ? 'text-slate-900 bg-slate-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
