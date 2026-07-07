import React from 'react';
import { ModernPageHeader } from '../components/ui/ModernPageHeader';
import { WorkflowVisual } from '../components/ui/WorkflowVisual';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/ui/CTASection';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { CheckCircle2, ShieldCheck, Database, Network } from 'lucide-react';

export const Company = () => {
  return (
    <Layout>
      <SEO 
        title="Company | Third Leap Labs LLC" 
        description="Third Leap Labs LLC is a software company building solutions for blockchain, payments, SaaS, and automation."
      />
      
      <ModernPageHeader 
        eyebrow="Company"
        title="Third Leap Labs"
        subtitle="A software engineering company focused on modern digital infrastructure."
        theme="light"
      />

      {/* The Next Digital Leap (Split Section) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1120px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-[36px] font-bold text-[#0F172A] mb-6">The Next Digital Leap</h2>
            <div className="prose max-w-none text-[16px] text-[#475569] leading-relaxed space-y-4">
              <p>
                We believe the next phase of software involves pragmatic, well-architected systems that connect traditional web infrastructure with blockchain verification, non-custodial workflows, and intelligent automation.
              </p>
              <p>
                Third Leap Labs LLC was formed to design and build these systems. We partner with businesses, product teams, and communities to move their ideas from concept to a working first version, focusing on maintainability over hype.
              </p>
              <p>
                We avoid unnecessary complexity. If a problem needs a standard PostgreSQL database and a clean React frontend, that is what we build. If a problem requires a Solana smart contract and a non-custodial payment flow, we engineer that securely.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-2xl shadow-sm">
            <h3 className="text-[18px] font-bold text-[#0F172A] mb-8">Our Delivery Process</h3>
            <WorkflowVisual />
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1F5F9] border-y border-[#E2E8F0]">
        <div className="max-w-[1120px] mx-auto">
          <SectionHeading 
            title="What We Believe" 
            subtitle="The engineering principles that guide our work."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="modern-card p-8">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <Database className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0F172A] mb-3">Blockchain should be practical</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">
                Web3 technology is useful for verification, self-custody, and open data, but it is not a solution for everything. We integrate blockchain where it adds real architectural value.
              </p>
            </div>
            <div className="modern-card p-8">
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0F172A] mb-3">Working software beats endless planning</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">
                We focus on getting to a reliable first version. Architecture is important, but software must ultimately ship and be tested in the real world to prove its value.
              </p>
            </div>
            <div className="modern-card p-8">
              <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center mb-4">
                <Network className="w-5 h-5 text-cyan-600" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0F172A] mb-3">Keep the stack maintainable</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">
                We prefer boring, proven technology (like React, standard databases, and reliable server architectures) for the core infrastructure so that the system remains easy to operate.
              </p>
            </div>
            <div className="modern-card p-8">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-slate-600" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0F172A] mb-3">Security and safety first</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">
                We do not collect seed phrases. We do not provide financial advice. We build non-custodial boundaries and design with a defensive engineering mindset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1120px] mx-auto">
        <SectionHeading 
          title="Focus Areas" 
          subtitle="Where we apply our engineering efforts."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border border-[#E2E8F0] rounded-xl hover:border-blue-200 transition-colors">
            <h4 className="text-[16px] font-bold text-[#0F172A] mb-2">Partner Solutions</h4>
            <p className="text-[14px] text-[#475569]">Building custom platforms, payment flows, and SaaS systems for clients and product teams.</p>
          </div>
          <div className="p-6 border border-[#E2E8F0] rounded-xl hover:border-blue-200 transition-colors">
            <h4 className="text-[16px] font-bold text-[#0F172A] mb-2">Technical Architecture</h4>
            <p className="text-[14px] text-[#475569]">Helping teams design their system data models, API connections, and Web3 integration boundaries.</p>
          </div>
          <div className="p-6 border border-[#E2E8F0] rounded-xl hover:border-blue-200 transition-colors">
            <h4 className="text-[16px] font-bold text-[#0F172A] mb-2">Lab Initiatives</h4>
            <p className="text-[14px] text-[#475569]">Developing internal experiments and utility software like WhaleScanner and GoPaySol.</p>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to build together?"
        description="Reach out to discuss your software project, architecture needs, or Web3 integration."
        buttonText="Contact Us"
        to="/contact"
      />
    </Layout>
  );
};
