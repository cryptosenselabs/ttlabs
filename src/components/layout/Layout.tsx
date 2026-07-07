import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-[72px] premium-gradient-bg">
        {children}
      </main>
      <Footer />
    </div>
  );
};
