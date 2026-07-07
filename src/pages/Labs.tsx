import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductCard } from '../components/ui/ProductCard';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';
import { Database, Zap } from 'lucide-react';

export const Labs = () => {
  return (
    <Layout>
      <SEO 
        title="Labs | Third Leap Labs LLC" 
        description="Internal initiatives and experiments exploring blockchain intelligence, payments, automation, and Web3 safety."
      />
      
      <HeroSection 
        title="Labs"
        subtitle="Internal initiatives and experiments exploring blockchain intelligence, payments, automation, and Web3 safety."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center text-lg text-[var(--color-secondary-text)] leading-relaxed">
        <p>
          Labs is where Third Leap Labs develops focused initiatives that may become standalone products, components, or solution accelerators. We explore specific use cases in blockchain intelligence, payment workflows, and software automation to validate their utility.
        </p>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-secondary-bg)] border-y border-[var(--color-border-main)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading 
            title="Current Lab Initiatives" 
            centered
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
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
              accentColorClass="text-[var(--color-accent-cyan)]"
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
              accentColorClass="text-[var(--color-accent-magenta)]"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <SectionHeading title="How Ideas Move Through Labs" />
          <div className="space-y-6 mt-8">
            <div className="bg-[var(--color-card-surface)] p-6 rounded-lg shadow-sm border border-[var(--color-border-main)] border-l-4 border-l-[var(--color-accent-blue)]">
              <h3 className="font-bold mb-2 text-[var(--color-primary-text)]">Step 1: Observation</h3>
              <p className="text-[var(--color-secondary-text)]">We identify repeated problems, unclear workflows, or areas where users need better tools.</p>
            </div>
            <div className="bg-[var(--color-card-surface)] p-6 rounded-lg shadow-sm border border-[var(--color-border-main)] border-l-4 border-l-[var(--color-accent-blue)]">
              <h3 className="font-bold mb-2 text-[var(--color-primary-text)]">Step 2: Prototype</h3>
              <p className="text-[var(--color-secondary-text)]">We create a small working version or structured concept to test the idea.</p>
            </div>
            <div className="bg-[var(--color-card-surface)] p-6 rounded-lg shadow-sm border border-[var(--color-border-main)] border-l-4 border-l-[var(--color-accent-blue)]">
              <h3 className="font-bold mb-2 text-[var(--color-primary-text)]">Step 3: Validation</h3>
              <p className="text-[var(--color-secondary-text)]">We evaluate whether the idea solves a real problem and whether users understand it.</p>
            </div>
            <div className="bg-[var(--color-card-surface)] p-6 rounded-lg shadow-sm border border-[var(--color-border-main)] border-l-4 border-l-[var(--color-accent-blue)]">
              <h3 className="font-bold mb-2 text-[var(--color-primary-text)]">Step 4: Product Decision</h3>
              <p className="text-[var(--color-secondary-text)]">The concept may become a product, merge into an existing product, remain experimental, or be discontinued.</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading title="What We Avoid" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-[var(--color-card-surface)] border border-red-100 shadow-sm rounded-lg text-center text-sm font-medium text-[var(--color-primary-text)]">Empty hype</div>
            <div className="p-4 bg-[var(--color-card-surface)] border border-red-100 shadow-sm rounded-lg text-center text-sm font-medium text-[var(--color-primary-text)]">Overpromising</div>
            <div className="p-4 bg-[var(--color-card-surface)] border border-red-100 shadow-sm rounded-lg text-center text-sm font-medium text-[var(--color-primary-text)]">Misleading financial claims</div>
            <div className="p-4 bg-[var(--color-card-surface)] border border-red-100 shadow-sm rounded-lg text-center text-sm font-medium text-[var(--color-primary-text)]">Unsafe wallet behavior</div>
            <div className="p-4 bg-[var(--color-card-surface)] border border-red-100 shadow-sm rounded-lg text-center text-sm font-medium text-[var(--color-primary-text)]">Products without real users</div>
            <div className="p-4 bg-[var(--color-card-surface)] border border-red-100 shadow-sm rounded-lg text-center text-sm font-medium text-[var(--color-primary-text)]">Complexity for its own sake</div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Have an idea worth exploring?"
        description="Third Leap Labs is open to product conversations around SaaS, Web3 utilities, payments, automation, and community tools."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
