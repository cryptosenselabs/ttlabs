import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface TrustNoticeProps {
  title?: string;
  children: React.ReactNode;
}

export const TrustNotice: React.FC<TrustNoticeProps> = ({ title = "Trust and Safety", children }) => {
  return (
    <div className="bg-[var(--color-secondary-dark)] border border-[var(--color-border)] rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
      <div className="w-12 h-12 rounded-full bg-[var(--color-primary-dark)] flex items-center justify-center flex-shrink-0 border border-[var(--color-border)]">
        <ShieldAlert className="w-6 h-6 text-[var(--color-muted-dark-text)]" />
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-3 text-[var(--color-text-white)]">{title}</h3>
        <div className="text-[var(--color-muted-text)] leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};
