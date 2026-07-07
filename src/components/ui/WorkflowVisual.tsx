import React from 'react';

export const WorkflowVisual = () => {
  const steps = [
    { label: "Idea", desc: "Define real-world problem", icon: "bulb" },
    { label: "Architecture", desc: "Design logical system", icon: "layout" },
    { label: "Build", desc: "Ship production version", icon: "code" },
    { label: "Scale", desc: "Iterate and grow", icon: "up" },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-stretch gap-4 group">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white border-2 border-[#E2E8F0] flex items-center justify-center text-blue-600 group-hover:border-blue-500 group-hover:bg-blue-50 transition-colors shadow-sm z-10 relative">
              <span className="text-sm font-bold">{index + 1}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-full bg-[#E2E8F0] group-hover:bg-blue-200 transition-colors my-1"></div>
            )}
          </div>
          <div className="flex-1 pb-6 pt-1">
            <h4 className="text-[16px] font-bold text-[#0F172A]">{step.label}</h4>
            <p className="text-[14px] text-[#475569] mt-1">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
