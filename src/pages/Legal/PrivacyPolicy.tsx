import React from 'react';
import { PageHero } from '../../components/ui/PageHero';
import { SEO } from '../../components/layout/SEO';
import { Layout } from '../../components/layout/Layout';

export const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy | Third Leap Labs LLC" 
        description="Our commitment to protecting your privacy and ensuring a positive experience on our website."
      />
      
      <PageHero 
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Our commitment to protecting your privacy and ensuring a positive experience."
      />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#E2E8F0] shadow-sm max-w-none space-y-12">
          
          <div>
            <p className="text-[14px] text-[#94A3B8] font-medium uppercase tracking-wider mb-6">Last updated: July 2026</p>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              Third Leap Labs LLC is committed to protecting your privacy and ensuring you have a positive experience on our website and in using our software products.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Data Collection</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              We collect minimal personal data necessary to provide our services. This may include contact information (such as email addresses) when you explicitly provide it via our contact forms. As our software is largely non-custodial and informational, we do not require or collect sensitive financial data from our users.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Usage Data</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              We may collect diagnostic and usage data to improve our software performance and user experience. This data is anonymized where possible and used strictly for engineering and operational improvements.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Data Sharing</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              Third Leap Labs LLC does not sell, rent, or lease your personal information to third parties. We may share data with trusted partners strictly to help perform statistical analysis or provide customer support, under strict confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Contact Information</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              Third Leap Labs LLC welcomes your questions or comments regarding this Statement of Privacy. If you believe that we have not adhered to this Statement, please contact us at info@thirdleaplabs.com.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
};
