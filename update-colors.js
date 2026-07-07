import fs from 'fs';
import path from 'path';

const srcDir = 'src';

const replacements = [
  { regex: /var\(--color-secondary-dark\)/g, replace: 'var(--color-section-surface)' },
  { regex: /var\(--color-primary-dark\)/g, replace: 'var(--color-primary-bg)' },
  { regex: /var\(--color-border\)/g, replace: 'var(--color-border-main)' },
  { regex: /var\(--color-text-white\)/g, replace: 'var(--color-primary-text)' },
  { regex: /var\(--color-main-dark-text\)/g, replace: 'var(--color-primary-text)' },
  { regex: /var\(--color-muted-dark-text\)/g, replace: 'var(--color-secondary-text)' },
  { regex: /bg-slate-50(?!\d)/g, replace: 'bg-[var(--color-section-surface)]' },
  { regex: /bg-slate-100(?!\d)/g, replace: 'bg-[var(--color-section-surface)]' },
  { regex: /bg-slate-900(?!\d)/g, replace: 'bg-[var(--color-accent-blue)]' },
  { regex: /border-slate-200(?!\d)/g, replace: 'border-[var(--color-border-main)]' },
  { regex: /border-slate-100(?!\d)/g, replace: 'border-[var(--color-border-main)]' },
  { regex: /text-slate-900(?!\d)/g, replace: 'text-[var(--color-primary-text)]' },
  { regex: /text-slate-800(?!\d)/g, replace: 'text-[var(--color-primary-text)]' },
  { regex: /text-slate-700(?!\d)/g, replace: 'text-[var(--color-secondary-text)]' },
  { regex: /text-slate-600(?!\d)/g, replace: 'text-[var(--color-secondary-text)]' },
  { regex: /text-slate-500(?!\d)/g, replace: 'text-[var(--color-muted-text)]' },
  { regex: /text-slate-400(?!\d)/g, replace: 'text-[var(--color-muted-text)]' },
  { regex: /bg-white(?!\/)/g, replace: 'bg-[var(--color-primary-bg)]' },
  { regex: /bg-white\/60/g, replace: 'bg-[var(--color-card-surface)]' },
  { regex: /bg-white\/80/g, replace: 'bg-[var(--color-primary-bg)]' },
  { regex: /border-white\/80/g, replace: 'border-[var(--color-border-main)]' },
  { regex: /border-white\/50/g, replace: 'border-[var(--color-border-main)]' },
  { regex: /hover:bg-slate-800/g, replace: 'hover:opacity-90' },
  { regex: /hover:bg-white/g, replace: 'hover:bg-[var(--color-section-surface)]' },
];

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let newContent = content;
      
      for (const { regex, replace } of replacements) {
        newContent = newContent.replace(regex, replace);
      }

      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Updated ${filePath}`);
      }
    }
  }
}

walk(srcDir);
console.log('Done.');
