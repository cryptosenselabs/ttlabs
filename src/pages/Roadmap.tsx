import React from 'react';
import { ModernPageHeader } from '../components/ui/ModernPageHeader';
import { CTASection } from '../components/ui/CTASection';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { Info, CheckCircle2 } from 'lucide-react';

export const Roadmap = () => {
  const TimelineVisual = () => (
    <div className="flex items-center gap-2 w-full max-w-sm p-4">
      <div className="flex-1 h-1.5 bg-blue-600 rounded-full"></div>
      <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-200"></div>
      <div className="flex-1 h-1.5 bg-blue-200 rounded-full"></div>
      <div className="w-4 h-4 rounded-full bg-slate-200"></div>
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full"></div>
    </div>
  );

  return (
    <Layout>
      <SEO 
        title="Roadmap | Third Leap Labs Direction" 
        description="The current direction for Third Leap Labs, its solution areas, and internal lab initiatives."
      />
      
      <ModernPageHeader 
        eyebrow="Product Direction"
        title="Roadmap"
        subtitle="A transparent direction for Third Leap Labs, its solution areas, and internal lab initiatives."
        rightVisual={<TimelineVisual />}
        theme="light"
      />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
        
        {/* Direction Notice Card */}
        <section>
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-[18px] font-bold text-[#0F172A] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#475569]" />
              Direction, not promises
            </h2>
            <p className="text-[16px] text-[#475569] leading-relaxed mb-4">
              This roadmap explains the current direction of Third Leap Labs and its internal initiatives. It is a planning guide, not a guarantee. Priorities may change based on user feedback, technical learning, security considerations, and product maturity.
            </p>
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-[14px] text-[#475569]">
              Roadmap content is for communication and planning only. It does not represent investment advice, a product guarantee, or a commitment to financial results.
            </div>
          </div>
        </section>

        {/* Roadmap Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[32px] font-bold text-[#0F172A] mb-6">Roadmap Philosophy</h2>
            <p className="text-[16px] text-[#475569] leading-relaxed">
              A roadmap should help people understand direction without creating false promises. Third Leap Labs uses roadmap communication to explain what we are building, why it matters, and how the company's solution areas and lab initiatives may evolve.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="modern-card p-5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-[15px] font-medium text-[#0F172A]">Direction over hype</span>
            </div>
            <div className="modern-card p-5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-[15px] font-medium text-[#0F172A]">Learning over fixed promises</span>
            </div>
            <div className="modern-card p-5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-[15px] font-medium text-[#0F172A]">User feedback matters</span>
            </div>
            <div className="modern-card p-5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-[15px] font-medium text-[#0F172A]">Security shapes priorities</span>
            </div>
          </div>
        </section>

        {/* Phase Timeline Cards */}
        <section>
          <div className="relative">
            {/* Desktop timeline vertical line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-[#E2E8F0]"></div>

            <div className="space-y-12 md:space-y-24 relative z-10">
              {/* Phase 1 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="md:w-[45%] w-full mb-8 md:mb-0">
                  <div className="modern-card p-8 border-l-4 border-l-blue-600">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[12px] font-bold uppercase tracking-wider mb-4">
                      Phase 1
                    </div>
                    <h3 className="text-[22px] font-bold text-[#0F172A] mb-4">Foundation</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Corporate website
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Company positioning
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Solution areas definition
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Legal and safety pages
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:flex w-[10%] justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_0_4px_white,0_0_0_6px_#2563EB33]"></div>
                </div>
                <div className="md:w-[45%] w-full hidden md:block"></div>
              </div>

              {/* Phase 2 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="md:w-[45%] w-full hidden md:block"></div>
                <div className="hidden md:flex w-[10%] justify-center">
                  <div className="w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_0_4px_white,0_0_0_6px_#60A5FA33]"></div>
                </div>
                <div className="md:w-[45%] w-full">
                  <div className="modern-card p-8 border-l-4 border-l-blue-400">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[12px] font-bold uppercase tracking-wider mb-4">
                      Phase 2
                    </div>
                    <h3 className="text-[22px] font-bold text-[#0F172A] mb-4">Solution Readiness</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Blockchain solution templates
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Payment workflow concepts
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> SaaS and automation patterns
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Contact and partnership flows
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="md:w-[45%] w-full mb-8 md:mb-0">
                  <div className="modern-card p-8 border-l-4 border-l-cyan-500">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-[12px] font-bold uppercase tracking-wider mb-4">
                      Phase 3
                    </div>
                    <h3 className="text-[22px] font-bold text-[#0F172A] mb-4">Lab Initiative Expansion</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> WhaleScanner visibility workflows
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> GoPaySol payment link workflows
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Data and intelligence dashboards
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> AI-assisted summaries
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:flex w-[10%] justify-center">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_0_4px_white,0_0_0_6px_#22D3EE33]"></div>
                </div>
                <div className="md:w-[45%] w-full hidden md:block"></div>
              </div>

              {/* Phase 4 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="md:w-[45%] w-full hidden md:block"></div>
                <div className="hidden md:flex w-[10%] justify-center">
                  <div className="w-4 h-4 bg-slate-300 rounded-full shadow-[0_0_0_4px_white,0_0_0_6px_#CBD5E133]"></div>
                </div>
                <div className="md:w-[45%] w-full">
                  <div className="modern-card p-8 border-l-4 border-l-slate-300">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[12px] font-bold uppercase tracking-wider mb-4">
                      Phase 4
                    </div>
                    <h3 className="text-[22px] font-bold text-[#0F172A] mb-4">Mature Solution Ecosystem</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Connected solution components
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Developer-ready flows
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Internal dashboards
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> Better integrations and documentation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <CTASection 
        title="Ready to build?"
        description="Whether you need a blockchain integration, a payment workflow, or a custom SaaS platform, Third Leap Labs is ready to partner with you."
        buttonText="Contact Us"
        to="/contact"
      />
    </Layout>
  );
};
