import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { FeatureCard } from '../components/ui/FeatureCard';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';
import { Code2, Compass, Layers, CheckCircle2 } from 'lucide-react';

export const Company = () => {
  return (
    <Layout>
      <SEO 
        title="Company | Third Leap Labs LLC" 
        description="Third Leap Labs LLC is a software solutions company focused on blockchain-enabled systems, SaaS platforms, payment workflows, and automation tools."
      />
      
      <PageHero 
        eyebrow="About Us"
        title="Company"
        subtitle="Third Leap Labs LLC is a software solutions company focused on blockchain-enabled systems, SaaS platforms, payment workflows, and automation tools."
      />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-24">
        
        {/* Our Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#0F172A] mb-6">The Next Digital Leap</h2>
            <p className="text-[16px] md:text-[18px] text-[#475569] leading-relaxed mb-6">
              Third Leap Labs was created to build practical software. The company combines software architecture, product thinking, and modern engineering to create systems that can move from concept to real-world use.
            </p>
            <p className="text-[16px] md:text-[18px] text-[#475569] leading-relaxed">
              The “third leap” represents the step beyond idea and prototype: the moment where software becomes reliable, useful, understandable, and ready to grow.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl shadow-sm flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Compass className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] mb-1">Product Thinking</h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">We understand the real-world workflow before writing any code.</p>
              </div>
            </div>
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl shadow-sm flex items-start gap-4">
              <div className="p-3 bg-cyan-50 rounded-lg">
                <Layers className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] mb-1">Structured Architecture</h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">We design logical data models and maintainable tech stacks.</p>
              </div>
            </div>
            <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl shadow-sm flex items-start gap-4">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <Code2 className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] mb-1">Production Readiness</h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">We focus on shipping reliable, working software over endless prototyping.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-[#0F172A]">How We Work</h2>
            <p className="text-[#475569] mt-4 max-w-2xl mx-auto">A structured process for delivering software.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-4">1</div>
              <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">Understand the problem</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">Every solution begins with a clear understanding of the real-world workflow.</p>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-4">2</div>
              <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">Shape the solution</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">We design practical interfaces and logical data models before writing code.</p>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-4">3</div>
              <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">Define the architecture</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">We choose maintainable, modern tech stacks tailored to the project's scale.</p>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-4">4</div>
              <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">Build the first serious version</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">We focus on shipping reliable, working software over endless prototyping.</p>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-4">5</div>
              <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">Validate the workflow</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">We ensure the system actually solves the problem in production environments.</p>
            </div>
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-4">6</div>
              <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">Improve and scale</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">Software is iteratively refined and strengthened as usage grows.</p>
            </div>
          </div>
        </section>

      </div>

      <CTASection 
        title="Looking for a technical partner?"
        description="Third Leap Labs can help move an idea from early concept to structured product direction and production-ready software."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
