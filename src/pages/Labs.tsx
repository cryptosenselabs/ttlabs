import React from 'react';
import { ModernPageHeader } from '../components/ui/ModernPageHeader';
import { LabsVisual } from '../components/ui/LabsVisual';
import { ProductCard } from '../components/ui/ProductCard';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';
import { Database, Zap, Sparkles } from 'lucide-react';

export const Labs = () => {
  return (
    <Layout>
      <SEO 
        title="Labs | Internal Blockchain and Software Initiatives" 
        description="Internal labs and initiatives at Third Leap Labs LLC."
      />
      
      <ModernPageHeader 
        eyebrow="Labs"
        title="Internal Initiatives"
        subtitle="Exploring specific use cases in blockchain intelligence, payment workflows, and software automation to test new product architectures."
        rightVisual={<LabsVisual />}
        theme="light"
      />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
        
        {/* Intro Section */}
        <section className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <h2 className="text-[28px] font-bold text-[#0F172A]">Why we build internally</h2>
          </div>
          <p className="text-[16px] text-[#475569] leading-relaxed mb-6">
            Third Leap Labs explores architecture patterns and Web3 boundaries through internal initiatives. This allows us to test assumptions, build robust templates, and understand the real friction points in blockchain integrations and payment workflows.
          </p>
          <p className="text-[16px] text-[#475569] leading-relaxed">
            WhaleScanner and GoPaySol act as proving grounds for our engineering standards, ensuring that when we partner with clients, we are building on battle-tested concepts.
          </p>
        </section>

        {/* Internal Labs and Initiatives */}
        <section>
          <h2 className="text-[28px] font-bold text-[#0F172A] mb-8">Active Initiatives</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProductCard 
              title="WhaleScanner"
              subtitle="Web3 wallet intelligence and visibility"
              description="WhaleScanner is an internal Web3 intelligence initiative focused on wallet activity visibility, whale movement monitoring, suspicious pattern awareness, and AI-assisted wallet behavior summaries."
              features={[
                "Wallet activity visibility",
                "Suspicious pattern awareness",
                "Whale movement monitoring",
                "AI-assisted summaries"
              ]}
              icon={Database}
              to="/labs/whalescanner"
              buttonText="View WhaleScanner"
              accentColorClass="text-cyan-600"
              isFeatured={true}
            />
            <ProductCard 
              title="GoPaySol"
              subtitle="Solana payment links and QR workflows"
              description="GoPaySol is an internal payment workflow initiative focused on Solana payment links, QR payment requests, receipt records, and non-custodial payment verification flows."
              features={[
                "Solana payment links",
                "QR code payment requests",
                "Payment verification flows",
                "Non-custodial workflows"
              ]}
              icon={Zap}
              to="/labs/gopaysol"
              buttonText="View GoPaySol"
              accentColorClass="text-indigo-600"
              isFeatured={true}
            />
          </div>
        </section>

      </div>

      <CTASection 
        title="Looking for a technical partner?"
        description="Third Leap Labs can help move an idea from early concept to structured product direction and production-ready software."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
