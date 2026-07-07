import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ProductCard } from '../components/ui/ProductCard';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';
import { Database, Zap } from 'lucide-react';

export const Labs = () => {
  return (
    <Layout>
      <SEO 
        title="Labs | Internal Blockchain and Software Initiatives" 
        description="Internal labs and initiatives at Third Leap Labs LLC."
      />
      
      <PageHero 
        eyebrow="Labs"
        title="Internal Initiatives"
        subtitle="Exploring specific use cases in blockchain intelligence, payment workflows, and software automation to test new product architectures."
      />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-24">
        
        {/* Internal Labs and Initiatives */}
        <section>
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
              buttonText="View WhaleScanner Initiative"
              accentColorClass="text-[var(--color-accent-cyan)]"
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
              buttonText="View GoPaySol Initiative"
              accentColorClass="text-[var(--color-accent-magenta)]"
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
