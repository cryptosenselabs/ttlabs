import React from 'react';
import { ModernPageHeader } from '../components/ui/ModernPageHeader';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const SecurityNotice = () => {
  return (
    <Layout>
      <SEO 
        title="Security Notice | Third Leap Labs LLC" 
        description="Security is a core part of how Third Leap Labs thinks about software products."
      />
      
      <ModernPageHeader 
        eyebrow="Legal"
        title="Security Notice"
        subtitle="Security is a core part of how Third Leap Labs thinks about software products."
        theme="light"
      />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#E2E8F0] shadow-sm max-w-none space-y-12">
          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Important Security Rules</h2>
            <ul className="list-disc pl-6 space-y-3 text-[16px] font-medium text-[#475569]">
              <li className="text-red-500">Third Leap Labs will never ask for your seed phrase.</li>
              <li className="text-red-500">Third Leap Labs will never ask for your private key.</li>
              <li className="text-red-500">Third Leap Labs will never ask for your wallet recovery phrase.</li>
              <li>Third Leap Labs will never ask you to transfer funds to verify your identity.</li>
              <li>Third Leap Labs will never guarantee financial returns.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Web3 Safety</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              Always verify URLs, wallet prompts, payment requests, and official communication channels. Be cautious with unknown links, 
              impersonators, fake support accounts, and unexpected wallet connection requests.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Product Boundaries</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              WhaleScanner is informational and does not provide trading advice. GoPaySol is designed for non-custodial payment workflows 
              and does not hold user funds.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Reporting</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              If you believe someone is impersonating Third Leap Labs or misusing the brand, contact <a href="mailto:info@thirdleaplabs.com" className="text-blue-600 hover:underline">info@thirdleaplabs.com</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
