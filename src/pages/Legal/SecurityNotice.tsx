import React from 'react';
import { PageHero } from '../../components/ui/PageHero';
import { SEO } from '../../components/layout/SEO';
import { Layout } from '../../components/layout/Layout';

export const SecurityNotice = () => {
  return (
    <Layout>
      <SEO 
        title="Security Notice | Third Leap Labs LLC" 
        description="Our commitment to security and responsible vulnerability disclosure."
      />
      
      <PageHero 
        eyebrow="Legal"
        title="Security Notice"
        subtitle="Our commitment to security and responsible vulnerability disclosure."
      />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#E2E8F0] shadow-sm max-w-none space-y-12">
          
          <div>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              Security is a fundamental engineering priority at Third Leap Labs LLC.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Our Commitment</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              We employ industry-standard security practices in the development and deployment of our software. Our infrastructure is designed to be resilient, and our non-custodial architecture naturally limits exposure to certain classes of vulnerabilities by keeping control in the hands of the user.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Vulnerability Reporting</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed mb-4">
              If you are a security researcher and have discovered a potential security vulnerability in our systems, we encourage you to disclose it to us in a responsible manner.
            </p>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              Please report any security concerns to: <strong className="text-[#0F172A]">security@thirdleaplabs.com</strong>
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Best Practices for Users</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed mb-4">
              While we secure our infrastructure, users must also adhere to best practices:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[16px] text-[#475569]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                Verify all domains and URLs before connecting any Web3 wallet or authorizing transactions.
              </li>
              <li className="flex items-start gap-3 text-[16px] text-[#475569]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                Never share your private keys or seed phrases with anyone, including Third Leap Labs staff. We will never ask for them.
              </li>
              <li className="flex items-start gap-3 text-[16px] text-[#475569]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0F172A] mt-2.5 shrink-0" />
                Keep your local operating systems and browsers updated.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </Layout>
  );
};
