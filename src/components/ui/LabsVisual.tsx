import React from 'react';
import { Database, Zap } from 'lucide-react';

export const LabsVisual = () => {
  return (
    <div className="relative w-full max-w-[320px] h-[240px]">
      
      {/* Background overlapping card */}
      <div className="absolute top-0 right-0 w-[85%] h-[140px] bg-white border border-[#E2E8F0] rounded-2xl shadow-sm p-5 opacity-80 transform rotate-3 origin-bottom-right transition-transform duration-500 hover:rotate-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center">
            <Zap className="w-4 h-4 text-cyan-600" />
          </div>
          <div className="text-[14px] font-bold text-[#0F172A]">GoPaySol</div>
        </div>
        <div className="w-3/4 h-2 bg-slate-100 rounded-full mb-2"></div>
        <div className="w-1/2 h-2 bg-slate-100 rounded-full"></div>
      </div>

      {/* Foreground overlapping card */}
      <div className="absolute bottom-0 left-0 w-[90%] h-[160px] bg-white border border-[#E2E8F0] rounded-2xl shadow-md p-6 transform -rotate-2 origin-bottom-left transition-transform duration-500 hover:-rotate-3 z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <Database className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-[16px] font-bold text-[#0F172A]">WhaleScanner</div>
            <div className="text-[12px] text-blue-600 font-medium">Wallet Intelligence</div>
          </div>
        </div>
        <div className="space-y-2 mt-4">
          <div className="w-full h-2.5 bg-slate-100 rounded-full"></div>
          <div className="w-5/6 h-2.5 bg-slate-100 rounded-full"></div>
          <div className="w-4/6 h-2.5 bg-slate-100 rounded-full"></div>
        </div>
      </div>
      
    </div>
  );
};
