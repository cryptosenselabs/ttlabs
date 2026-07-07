import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy | Third Leap Labs LLC" 
        description="Privacy policy outlining how Third Leap Labs LLC collects and uses information to operate the website."
      />
      
      <HeroSection 
        title="Privacy Policy"
        subtitle="Third Leap Labs LLC respects user privacy and aims to collect only the information necessary to operate the website and respond to inquiries."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto prose prose-invert max-w-none text-lg text-[var(--color-muted-text)] leading-relaxed space-y-12">
        <div>
          <SectionHeading title="Information We May Collect" />
          <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-white)]">
            <li>Name and contact details when submitted through forms</li>
            <li>Email address when contacting us</li>
            <li>Basic website analytics information</li>
            <li>Technical information such as browser type, device type, and pages visited</li>
          </ul>
        </div>

        <div>
          <SectionHeading title="How Information Is Used" />
          <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-white)]">
            <li>To respond to inquiries</li>
            <li>To improve website content</li>
            <li>To understand product interest</li>
            <li>To maintain security and reliability</li>
            <li>To communicate about Third Leap Labs products or services when appropriate</li>
          </ul>
        </div>

        <div>
          <SectionHeading title="What We Do Not Request" />
          <p>
            Third Leap Labs does not request seed phrases, private keys, wallet recovery phrases, or sensitive wallet credentials.
          </p>
        </div>

        <div>
          <SectionHeading title="Third-Party Services" />
          <p>
            The website may use hosting, analytics, form handling, or infrastructure services provided by third parties. 
            These services may process limited technical information according to their own policies.
          </p>
        </div>

        <div>
          <SectionHeading title="Contact" />
          <p>
            For privacy-related questions, contact <a href="mailto:info@thirdleaplabs.com" className="text-[var(--color-accent-cyan)] hover:underline">info@thirdleaplabs.com</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
};
