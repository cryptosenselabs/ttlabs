import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { CTASection } from '../components/ui/CTASection';
import { SEO } from '../components/layout/SEO';
import { Layout } from '../components/layout/Layout';
import { Database, Zap, Layers, Cpu, Link as LinkIcon, BarChart3, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Solutions = () => {
  return (
    <Layout>
      <SEO 
        title="Software Solutions | Third Leap Labs LLC" 
        description="We build practical software systems around blockchain, payments, automation, SaaS, and digital operations."
      />
      
      <PageHero 
        eyebrow="Our Work"
        title="Software Solutions"
        subtitle="We build practical software systems around blockchain, payments, automation, SaaS, and digital operations."
      />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-24">
        
        {/* Solutions Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-[#0F172A]">Core Areas</h2>
            <p className="text-[#475569] mt-4 max-w-2xl mx-auto">The primary areas where we design and build production-ready systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-fit mb-6">
                <LinkIcon className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-3">Blockchain Solutions</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">
                Third Leap Labs builds blockchain-enabled software for real-world workflows. This may include wallet-aware applications, transaction visibility, token activity tools, verification layers, and Web3 user interfaces.
              </p>
            </div>
            
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-fit mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-3">Payment Workflow Systems</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">
                We build payment software around payment links, QR payment requests, receipt records, transaction status tracking, and non-custodial payment flows.
              </p>
            </div>
            
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-fit mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-3">SaaS and Web Platforms</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">
                We design and build modern SaaS platforms, dashboards, portals, admin tools, workflow systems, and customer-facing web applications.
              </p>
            </div>
            
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-fit mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-3">Automation and Internal Tools</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">
                We help businesses reduce repetitive manual work by building automation systems, internal tools, and integrations.
              </p>
            </div>
            
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-fit mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-3">Web3 Intelligence Utilities</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed">
                We build tools that help users and teams understand on-chain activity with more context while maintaining responsible boundaries.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-[#E2E8F0] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center text-center">
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-3">Technical Architecture</h3>
              <p className="text-[15px] text-[#475569] leading-relaxed mb-6">
                We help shape software from idea to architecture to first serious version.
              </p>
              <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-700 flex items-center justify-center gap-1">
                Partner with us <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Labs and Initiatives */}
        <section className="bg-slate-50 border border-[#E2E8F0] rounded-3xl p-8 md:p-12">
          <div className="mb-12">
            <h2 className="text-[32px] font-bold text-[#0F172A] mb-4">Internal Labs and Initiatives</h2>
            <p className="text-[16px] md:text-[18px] text-[#475569] leading-relaxed max-w-3xl">
              We develop internal initiatives that explore specific use cases in blockchain intelligence, payment workflows, and software automation to test new product architectures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Database className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-[22px] font-bold text-[#0F172A]">WhaleScanner</h3>
                  <div className="text-sm font-medium text-blue-600">Web3 wallet intelligence</div>
                </div>
              </div>
              <p className="text-[#475569] leading-relaxed mb-8">
                WhaleScanner is an internal Web3 intelligence initiative focused on wallet activity visibility, whale movement monitoring, suspicious pattern awareness, and AI-assisted wallet behavior summaries.
              </p>
              <Link to="/labs/whalescanner" className="inline-flex items-center gap-2 text-white bg-[#0F172A] hover:bg-blue-600 transition-colors px-6 py-3 rounded-lg font-medium">
                View WhaleScanner <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-50 rounded-xl">
                  <Zap className="w-8 h-8 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-[22px] font-bold text-[#0F172A]">GoPaySol</h3>
                  <div className="text-sm font-medium text-cyan-600">Solana payment links</div>
                </div>
              </div>
              <p className="text-[#475569] leading-relaxed mb-8">
                GoPaySol is an internal payment workflow initiative focused on Solana payment links, QR payment requests, receipt records, and non-custodial payment verification flows.
              </p>
              <Link to="/labs/gopaysol" className="inline-flex items-center gap-2 text-white bg-[#0F172A] hover:bg-cyan-600 transition-colors px-6 py-3 rounded-lg font-medium">
                View GoPaySol <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <CTASection 
        title="Looking for a technical partner?"
        description="Third Leap Labs can help move an idea from early concept to structured architecture and production-ready software."
        buttonText="Contact Third Leap Labs"
        to="/contact"
      />
    </Layout>
  );
};
