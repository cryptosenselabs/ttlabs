import React from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FeatureCard } from '../components/ui/FeatureCard';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';
import { CheckCircle2 } from 'lucide-react';

export const Company = () => {
  return (
    <Layout>
      <SEO 
        title="Company | Third Leap Labs LLC" 
        description="Third Leap Labs LLC is a software solutions company focused on blockchain-enabled systems, SaaS platforms, payment workflows, and automation tools."
      />
      
      <HeroSection 
        title="Company"
        subtitle="Third Leap Labs LLC is a software solutions company focused on blockchain-enabled systems, SaaS platforms, payment workflows, and automation tools."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <SectionHeading title="Our Story" />
        <div className="mt-8 text-lg text-[var(--color-secondary-text)] leading-relaxed space-y-6">
          <p>
            Third Leap Labs was created to build practical software for the next digital leap. The company combines software architecture, product thinking, and modern engineering to create systems that can move from concept to real-world use.
          </p>
          <p>
            The “third leap” represents the step beyond idea and prototype: the moment where software becomes reliable, useful, understandable, and ready to grow.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-secondary-bg)] border-y border-[var(--color-border-main)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="How We Work" centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <FeatureCard 
              title="1. Understand the problem" 
              description="Every solution begins with a clear understanding of the real-world workflow." 
            />
            <FeatureCard 
              title="2. Shape the solution" 
              description="We design practical interfaces and logical data models before writing code." 
            />
            <FeatureCard 
              title="3. Define the architecture" 
              description="We choose maintainable, modern tech stacks tailored to the project's scale." 
            />
            <FeatureCard 
              title="4. Build the first serious version" 
              description="We focus on shipping reliable, working software over endless prototyping." 
            />
            <FeatureCard 
              title="5. Validate the workflow" 
              description="We ensure the system actually solves the problem in production environments." 
            />
            <FeatureCard 
              title="6. Improve and scale" 
              description="Software is iteratively refined and strengthened as usage grows." 
            />
          </div>
        </div>
      </section>

      <CTASection 
        title="Looking for a technical partner?"
        description="Third Leap Labs can help move an idea from early concept to structured product direction and production-ready software."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
