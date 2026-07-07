import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FeatureCard } from '../components/ui/FeatureCard';
import { TrustNotice } from '../components/ui/TrustNotice';
import { ContactForm } from '../components/ui/ContactForm';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';
import { Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <Layout>
      <SEO 
        title="Contact | Third Leap Labs LLC" 
        description="Reach out for product discussions, software development inquiries, technical consulting, partnerships, or general questions."
      />
      
      <HeroSection 
        title="Contact Third Leap Labs"
        subtitle="Reach out for product discussions, software development inquiries, technical consulting, partnerships, or general questions."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading title="Contact Details" />
          <div className="bg-[var(--color-secondary-dark)] p-8 rounded-xl border border-[var(--color-border)] space-y-6">
            <div>
              <h3 className="font-bold text-xl mb-2">Third Leap Labs LLC</h3>
              <div className="flex items-start gap-3 text-[var(--color-muted-text)] mt-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <p>1209 Mountain Road PL NE STE N<br />Albuquerque, NM 87110 USA</p>
              </div>
            </div>
            <div className="w-full h-48 rounded-lg overflow-hidden border border-[var(--color-border)] mt-4">
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
            <div className="pt-6 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-3 text-[var(--color-text-white)]">
                <Mail className="w-5 h-5 flex-shrink-0 text-[var(--color-accent-cyan)]" />
                <a href="mailto:info@thirdleaplabs.com" className="hover:text-[var(--color-accent-cyan)] transition-colors text-lg">info@thirdleaplabs.com</a>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading title="What To Contact Us About" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureCard title="Product development" description="Building your idea." />
              <FeatureCard title="SaaS platforms" description="Scalable web apps." />
              <FeatureCard title="Web3 utilities" description="Blockchain tools." />
              <FeatureCard title="Payment software" description="Custom flows." />
              <FeatureCard title="Automation systems" description="Internal tooling." />
              <FeatureCard title="Technical consulting" description="Architecture planning." />
              <FeatureCard title="Partnerships" description="Working together." />
              <FeatureCard title="General inquiries" description="Anything else." />
            </div>
          </div>
        </div>

        <div>
          <SectionHeading title="Send a Message" />
          <div className="bg-[var(--color-secondary-dark)] p-8 rounded-xl border border-[var(--color-border)] shadow-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <TrustNotice title="Safety Notice">
          <p>Third Leap Labs will never ask for seed phrases, private keys, wallet recovery phrases, or access to personal wallets.</p>
        </TrustNotice>
      </section>
    </Layout>
  );
};
