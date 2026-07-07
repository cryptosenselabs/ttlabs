import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ContactForm } from '../components/ui/ContactForm';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';
import { Mail, MapPin, Info, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  return (
    <Layout>
      <SEO 
        title="Contact | Third Leap Labs LLC" 
        description="Reach out for product discussions, software development inquiries, technical consulting, partnerships, or general questions."
      />
      
      <PageHero 
        eyebrow="Get in touch"
        title="Contact Third Leap Labs"
        subtitle="Reach out for product discussions, software development inquiries, technical consulting, partnerships, or general questions."
      />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-16">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="w-full lg:w-1/2 space-y-12">
            
            {/* Contact Details */}
            <section>
              <h2 className="text-[28px] font-bold text-[#0F172A] mb-6">Contact Details</h2>
              <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-8">
                <div>
                  <h3 className="text-[20px] font-bold text-[#0F172A] mb-3">Third Leap Labs LLC</h3>
                  <div className="flex items-start gap-3 text-[#475569]">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" />
                    <p className="leading-relaxed">1209 Mountain Road PL NE STE N<br />Albuquerque, NM 87110 USA</p>
                  </div>
                </div>
                
                <div className="w-full h-48 rounded-xl overflow-hidden border border-[#E2E8F0]">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?q=1209%20Mountain%20Road%20PL%20NE%2C%20Albuquerque%2C%20NM%2087110&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    title="Third Leap Labs Location"
                  ></iframe>
                </div>
                
                <div className="pt-6 border-t border-[#E2E8F0]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0 text-blue-500" />
                    <a href="mailto:info@thirdleaplabs.com" className="text-[16px] font-medium text-[#0F172A] hover:text-blue-600 transition-colors">info@thirdleaplabs.com</a>
                  </div>
                </div>
              </div>
            </section>

            {/* What To Contact Us About */}
            <section>
              <h2 className="text-[28px] font-bold text-[#0F172A] mb-6">What To Contact Us About</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-[#E2E8F0] p-4 rounded-xl shadow-sm flex flex-col gap-1">
                  <span className="text-[15px] font-bold text-[#0F172A]">Product development</span>
                  <span className="text-[14px] text-[#475569]">Building your idea</span>
                </div>
                <div className="bg-white border border-[#E2E8F0] p-4 rounded-xl shadow-sm flex flex-col gap-1">
                  <span className="text-[15px] font-bold text-[#0F172A]">SaaS platforms</span>
                  <span className="text-[14px] text-[#475569]">Scalable web apps</span>
                </div>
                <div className="bg-white border border-[#E2E8F0] p-4 rounded-xl shadow-sm flex flex-col gap-1">
                  <span className="text-[15px] font-bold text-[#0F172A]">Web3 utilities</span>
                  <span className="text-[14px] text-[#475569]">Blockchain tools</span>
                </div>
                <div className="bg-white border border-[#E2E8F0] p-4 rounded-xl shadow-sm flex flex-col gap-1">
                  <span className="text-[15px] font-bold text-[#0F172A]">Payment software</span>
                  <span className="text-[14px] text-[#475569]">Custom flows</span>
                </div>
                <div className="bg-white border border-[#E2E8F0] p-4 rounded-xl shadow-sm flex flex-col gap-1">
                  <span className="text-[15px] font-bold text-[#0F172A]">Automation systems</span>
                  <span className="text-[14px] text-[#475569]">Internal tooling</span>
                </div>
                <div className="bg-white border border-[#E2E8F0] p-4 rounded-xl shadow-sm flex flex-col gap-1">
                  <span className="text-[15px] font-bold text-[#0F172A]">Technical consulting</span>
                  <span className="text-[14px] text-[#475569]">Architecture planning</span>
                </div>
              </div>
            </section>
          </div>

          <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
            <h2 className="text-[28px] font-bold text-[#0F172A] mb-6">Send a Message</h2>
            <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <ContactForm />
            </div>
            
            <div className="mt-8 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#475569] shrink-0 mt-0.5" />
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
