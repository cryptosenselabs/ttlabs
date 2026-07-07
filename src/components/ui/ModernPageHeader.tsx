import React, { ReactNode } from 'react';

interface ModernPageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  rightVisual?: ReactNode;
  theme?: 'light' | 'navy';
}

export const ModernPageHeader: React.FC<ModernPageHeaderProps> = ({ 
  eyebrow, 
  title, 
  subtitle, 
  rightVisual,
  theme = 'light' 
}) => {
  const isNavy = theme === 'navy';
  const bgClass = isNavy ? 'bg-[#0B1220] text-white' : 'bg-[#F8FAFC] text-[#0F172A] border-b border-[#E2E8F0]';
  const eyebrowClass = isNavy ? 'text-blue-400' : 'text-blue-600';
  const titleClass = isNavy ? 'text-white' : 'text-[#0F172A]';
  const subtitleClass = isNavy ? 'text-slate-400' : 'text-[#475569]';

  return (
    <div className={`pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden relative ${bgClass}`}>
      {/* Decorative background element for light mode */}
      {!isNavy && (
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[140%] bg-blue-600 blur-[120px] rounded-full" />
        </div>
      )}
      
      {/* Decorative background element for navy mode */}
      {isNavy && (
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[140%] bg-blue-600 blur-[100px] rounded-full" />
        </div>
      )}

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${rightVisual ? 'justify-between' : 'justify-start'}`}>
          <div className={`flex-1 ${rightVisual ? 'max-w-2xl' : 'max-w-3xl'}`}>
            {eyebrow && (
              <p className={`text-[14px] font-bold uppercase tracking-wider mb-4 ${eyebrowClass}`}>
                {eyebrow}
              </p>
            )}
            <h1 className={`inner-page-title font-bold mb-6 ${titleClass}`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`text-[18px] leading-relaxed max-w-xl ${subtitleClass}`}>
                {subtitle}
              </p>
            )}
          </div>
          
          {rightVisual && (
            <div className="flex-shrink-0 w-full md:w-auto mt-8 md:mt-0 flex justify-center md:justify-end">
              {rightVisual}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
