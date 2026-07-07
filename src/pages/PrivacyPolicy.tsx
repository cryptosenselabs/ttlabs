import React from 'react';
import { ModernPageHeader } from '../components/ui/ModernPageHeader';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy | Third Leap Labs LLC" 
        description="Privacy policy outlining how Third Leap Labs LLC collects and uses information to operate the website."
      />
      
      <ModernPageHeader 
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Third Leap Labs LLC respects user privacy and aims to collect only the information necessary to operate the website and respond to inquiries."
        theme="light"
      />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 pt-[72px] pb-[72px]">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#E2E8F0] shadow-sm max-w-none space-y-12">
          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Information We May Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#475569] leading-relaxed">
              <li>Name and contact details when submitted through forms</li>
              <li>Email address when contacting us</li>
              <li>Basic website analytics information</li>
              <li>Technical information such as browser type, device type, and pages visited</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">How Information Is Used</h2>
            <ul className="list-disc pl-6 space-y-2 text-[16px] text-[#475569] leading-relaxed">
              <li>To respond to inquiries</li>
              <li>To improve website content</li>
              <li>To understand product interest</li>
              <li>To maintain security and reliability</li>
              <li>To communicate about Third Leap Labs products or services when appropriate</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">What We Do Not Request</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              Third Leap Labs does not request seed phrases, private keys, wallet recovery phrases, or sensitive wallet credentials.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Third-Party Services</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              The website may use hosting, analytics, form handling, or infrastructure services provided by third parties. 
              These services may process limited technical information according to their own policies.
            </p>
          </div>

          <div>
            <h2 className="text-[24px] font-bold text-[#0F172A] mb-4">Contact</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              For privacy-related questions, contact <a href="mailto:info@thirdleaplabs.com" className="text-blue-600 hover:underline">info@thirdleaplabs.com</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
