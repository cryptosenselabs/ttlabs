import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary-bg)] border-t border-[var(--color-border-main)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-medium tracking-tight text-[var(--color-primary-text)] flex items-center gap-2 mb-6">
              <img src="/logo.svg" alt="Third Leap Labs Logo" className="h-6 w-auto" />
              <span>Third Leap Labs</span>
            </Link>
            <p className="text-[var(--color-secondary-text)] text-sm mb-6 leading-relaxed pr-4">
              Building SaaS platforms, automation systems, blockchain-enabled tools, and scalable digital products.
            </p>
          </div>
          
          <div>
            <h3 className="text-[var(--color-primary-text)] font-semibold mb-4 tracking-wider text-xs uppercase">Products</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/products/whalescanner" className="text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] transition-colors">WhaleScanner</Link></li>
              <li><Link to="/products/gopaysol" className="text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] transition-colors">GoPaySol</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[var(--color-primary-text)] font-semibold mb-4 tracking-wider text-xs uppercase">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] transition-colors">Services</Link></li>
              <li><Link to="/labs" className="text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] transition-colors">Labs</Link></li>
              <li><Link to="/roadmap" className="text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] transition-colors">Roadmap</Link></li>
              <li><Link to="/contact" className="text-[var(--color-secondary-text)] hover:text-[var(--color-primary-text)] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[var(--color-primary-text)] font-semibold mb-4 tracking-wider text-xs uppercase">Contact Info</h3>
            <address className="not-italic text-sm text-[var(--color-secondary-text)] space-y-2">
              <p>Third Leap Labs LLC</p>
              <p>1209 Mountain Road PL NE STE N</p>
              <p>Albuquerque, NM 87110 USA</p>
              <p className="pt-2">
                <a href="mailto:info@thirdleaplabs.com" className="hover:text-[var(--color-primary-text)] transition-colors">info@thirdleaplabs.com</a>
              </p>
            </address>
          </div>
          
        </div>
        
        <div className="border-t border-[var(--color-border-main)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-muted-text)]">
          <p>&copy; 2026 Third Leap Labs LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/legal-disclaimer" className="hover:text-[var(--color-primary-text)] transition-colors">Legal Disclaimer</Link>
            <Link to="/privacy-policy" className="hover:text-[var(--color-primary-text)] transition-colors">Privacy Policy</Link>
            <Link to="/security-notice" className="hover:text-[var(--color-primary-text)] transition-colors">Security Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
