import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FeatureCard } from '../components/ui/FeatureCard';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';

export const About = () => {
  return (
    <Layout>
      <SEO 
        title="About Third Leap Labs LLC | Software Product Company" 
        description="Third Leap Labs LLC is a software product and technology company focused on building practical digital products with strong architecture."
      />
      
      <HeroSection 
        title="About Third Leap Labs"
        subtitle="Third Leap Labs LLC is a software product and technology company focused on building practical digital products with strong architecture, clear purpose, and long-term maintainability."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <SectionHeading title="Company Story" />
        <div className="prose prose-slate max-w-none text-lg text-slate-600 leading-relaxed">
          <p>
            Third Leap Labs was created with a simple belief: meaningful software products are built through disciplined leaps. 
            The first leap is the idea. The second leap is the build. The third leap is scale, trust, and real-world usefulness.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What We Believe" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard title="Software should solve a real problem" description="We don't build tools looking for a use case. The problem must come first." />
            <FeatureCard title="Architecture matters from the beginning" description="A poor foundation costs more to fix later than to build right initially." />
            <FeatureCard title="Security and clarity should not be added late" description="Safety must be a core feature, especially in financial and Web3 tools." />
            <FeatureCard title="Products should be understandable to users" description="If it requires an instruction manual for basic usage, the design has failed." />
            <FeatureCard title="Web3 tools must avoid misleading claims" description="No hype. No guarantees. Just clear, verifiable on-chain utility." />
            <FeatureCard title="Good engineering should reduce complexity" description="The best systems hide complexity from the user while remaining maintainable." />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading title="How We Work" />
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
            <p>
              We approach product development through a combination of product discovery, architecture, implementation, validation, and iteration. 
              The goal is not to create flashy prototypes that fail under real use. The goal is to build software that can mature.
            </p>
          </div>
        </div>
        
        <div>
          <SectionHeading title="Focus Areas" />
          <ul className="space-y-4 text-lg text-slate-700">
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-slate-400"></div> SaaS product development</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-slate-400"></div> Web3 utilities</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-slate-400"></div> Payment workflows</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-slate-400"></div> Automation systems</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-slate-400"></div> Community tools</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-slate-400"></div> Data and intelligence products</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-slate-400"></div> Technical consulting</li>
          </ul>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Our Location" centered />
          <div className="max-w-4xl mx-auto text-center mb-8 text-slate-600 text-lg">
            <p>1209 Mountain Road PL NE STE N, Albuquerque, NM 87110 USA</p>
          </div>
          <div className="max-w-5xl mx-auto w-full h-[400px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
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
        </div>
      </section>

      <CTASection 
        title="Build the next leap with clarity."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
