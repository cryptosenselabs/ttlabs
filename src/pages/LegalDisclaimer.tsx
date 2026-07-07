import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const LegalDisclaimer = () => {
  return (
    <Layout>
      <SEO 
        title="Legal Disclaimer | Third Leap Labs LLC" 
        description="Important legal information regarding Third Leap Labs LLC."
      />
      
      <PageHero 
        eyebrow="Legal"
        title="Disclaimer"
        subtitle="Important legal information regarding Third Leap Labs LLC."
      />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#E2E8F0] shadow-sm max-w-none space-y-12">
          
          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">No Financial Advice</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              Nothing on this website should be interpreted as financial advice, investment advice, trading advice, legal advice, 
              tax advice, or any recommendation to buy, sell, hold, or trade any asset.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Web3 Tools</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              Web3-related products, including WhaleScanner and GoPaySol, are provided as software tools. WhaleScanner is intended 
              for informational wallet and on-chain activity visibility. It does not provide trading signals, price predictions, 
              investment recommendations, or guarantees.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Non-Custodial Position</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              GoPaySol is intended to support payment workflows and verification. It is designed as a non-custodial tool and does not 
              hold user funds or request private keys, seed phrases, or wallet recovery information.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">User Responsibility</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              Users are responsible for their own decisions, wallet security, compliance obligations, and independent research.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">No Guarantees</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              Third Leap Labs LLC does not guarantee uninterrupted service, error-free data, financial outcomes, business outcomes, 
              or specific product availability.
            </p>
          </div>
          
        </div>
      </div>
    </Layout>
  );
};
