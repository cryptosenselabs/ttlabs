import React, { ReactNode } from 'react';

interface ModernPageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  rightVisual?: ReactNode;
  theme?: 'light' | 'navy'; // keeping theme prop so it doesn't break existing references
}

export const ModernPageHeader: React.FC<ModernPageHeaderProps> = ({ 
  eyebrow, 
  title, 
  subtitle, 
  rightVisual,
}) => {
  return (
    <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] pt-[56px] pb-[48px]">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className={`grid items-center gap-10 ${rightVisual ? 'lg:grid-cols-[1fr_420px]' : 'grid-cols-1'}`}>
          <div>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h1 className="inner-page-title text-[#0F172A] mb-6">{title}</h1>
            {subtitle && <p className="text-[18px] text-[#475569] leading-relaxed max-w-xl">{subtitle}</p>}
          </div>
          {rightVisual && (
            <div className="hidden lg:flex justify-end">
              {rightVisual}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
