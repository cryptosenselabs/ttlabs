import React from 'react';
import { ModernPageHeader } from '../components/ui/ModernPageHeader';
import { ContactForm } from '../components/ui/ContactForm';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';
import { Mail, MapPin, Info, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <Layout>
      <SEO 
        title="Contact | Third Leap Labs LLC" 
        description="Reach out for product discussions, software development inquiries, technical consulting, partnerships, or general questions."
      />
      
      <ModernPageHeader 
        eyebrow="Get in touch"
        title="Contact Third Leap Labs"
        subtitle="Reach out for product discussions, software development inquiries, technical consulting, partnerships, or general questions."
        theme="light"
      />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="w-full lg:w-5/12 space-y-12">
            
            {/* Contact Details */}
            <section>
              <h2 className="text-[24px] font-bold text-[#0F172A] mb-6">Contact Details</h2>
              <div className="modern-card p-8 space-y-8">
                <div>
                  <h3 className="text-[18px] font-bold text-[#0F172A] mb-3">Third Leap Labs LLC</h3>
                  <div className="flex items-start gap-3 text-[#475569]">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" />
                    <p className="leading-relaxed text-[15px]">1209 Mountain Road PL NE STE N<br />Albuquerque, NM 87110 USA</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-[#E2E8F0]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0 text-blue-500" />
                    <a href="mailto:info@thirdleaplabs.com" className="text-[16px] font-semibold text-[#0F172A] hover:text-blue-600 transition-colors">info@thirdleaplabs.com</a>
                  </div>
                </div>
              </div>
            </section>

            {/* What To Contact Us About */}
            <section>
              <h2 className="text-[24px] font-bold text-[#0F172A] mb-6">What to contact us about</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  "Blockchain solutions",
                  "Payment systems",
                  "SaaS platforms",
                  "Automation tools",
                  "Technical architecture",
                  "Partnerships"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 border-b border-[#E2E8F0] pb-3 last:border-0 last:pb-0">
                    <ArrowRight className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="text-[15px] font-medium text-[#0F172A]">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="w-full lg:w-7/12 lg:sticky lg:top-24">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E2E8F0] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
              <h2 className="text-[24px] font-bold text-[#0F172A] mb-8">Send a Message</h2>
              <ContactForm />
            </div>
            
            <div className="mt-8 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#0F172A] text-[15px] mb-1">Safety Notice</h3>
                  <p className="text-[14px] text-[#475569] leading-relaxed">
                    Third Leap Labs will never ask for seed phrases, private keys, wallet recovery phrases, or access to personal wallets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
};
