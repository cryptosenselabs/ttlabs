import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="modern-card p-6 border-t-4 border-t-transparent hover:border-t-blue-500 transition-colors h-full">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-[18px] font-bold mb-2 text-[#0F172A]">{title}</h3>
      <div className="w-8 h-0.5 bg-blue-100 mb-3"></div>
      <p className="text-[#475569] leading-relaxed text-[15px]">
        {description}
      </p>
    </div>
  );
};
