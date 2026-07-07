import React from 'react';

export const ArchitectureStackVisual = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-sm">
      <div className="flex flex-col gap-3">
        {/* User Interfaces */}
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-4 p-4 border border-[#E2E8F0] bg-white rounded-lg z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-blue-200">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <div className="w-3 h-3 border-2 border-blue-500 rounded-sm"></div>
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#0F172A]">User Interfaces</div>
              <div className="text-[12px] text-[#475569]">Web, Dashboards, Portals</div>
            </div>
          </div>
        </div>

        {/* Application Logic */}
        <div className="relative group">
          <div className="absolute inset-0 bg-indigo-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-4 p-4 border border-[#E2E8F0] bg-white rounded-lg z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-indigo-200">
            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-500">
                <path d="M18 8L22 12L18 16M6 8L2 12L6 16M2 12H22" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#0F172A]">Application Logic</div>
              <div className="text-[12px] text-[#475569]">Services, Workflows, APIs</div>
            </div>
          </div>
        </div>

        {/* Blockchain & Payments */}
        <div className="relative group">
          <div className="absolute inset-0 bg-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-4 p-4 border border-[#E2E8F0] bg-white rounded-lg z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-cyan-200">
            <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-500">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12M12 8H12.01" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#0F172A]">Blockchain & Payments</div>
              <div className="text-[12px] text-[#475569]">Smart Contracts, Wallet Auth</div>
            </div>
          </div>
        </div>

        {/* Data & Intelligence */}
        <div className="relative group">
          <div className="absolute inset-0 bg-slate-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-4 p-4 border border-[#E2E8F0] bg-slate-50 rounded-lg z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-slate-300">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#E2E8F0]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-600">
                <path d="M4 4V20H20M4 16L10 10L14 14L20 8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#0F172A]">Data & Intelligence</div>
              <div className="text-[12px] text-[#475569]">Indexing, Logs, AI Models</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
