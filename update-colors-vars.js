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
  { regex: /var\(--color-card-surface\)/g, replace: 'var(--color-card-surface)' }, // same
  { regex: /bg-slate-50\b/g, replace: 'bg-[var(--color-section-surface)]' },
  { regex: /bg-slate-100\b/g, replace: 'bg-[var(--color-section-surface)]' },
  { regex: /bg-slate-900\b/g, replace: 'bg-[var(--color-accent-blue)]' },
  { regex: /border-slate-200\b/g, replace: 'border-[var(--color-border-main)]' },
  { regex: /border-slate-100\b/g, replace: 'border-[var(--color-border-main)]' },
  { regex: /text-slate-900\b/g, replace: 'text-[var(--color-primary-text)]' },
  { regex: /text-slate-800\b/g, replace: 'text-[var(--color-primary-text)]' },
  { regex: /text-slate-700\b/g, replace: 'text-[var(--color-secondary-text)]' },
  { regex: /text-slate-600\b/g, replace: 'text-[var(--color-secondary-text)]' },
  { regex: /text-slate-500\b/g, replace: 'text-[var(--color-muted-text)]' },
  { regex: /bg-white\b(?!\/)/g, replace: 'bg-[var(--color-primary-bg)]' },
  { regex: /bg-white\/60\b/g, replace: 'bg-[var(--color-card-surface)]' },
  { regex: /border-white\/80\b/g, replace: 'border-[var(--color-border-main)]' },
  { regex: /border-white\/50\b/g, replace: 'border-[var(--color-border-main)]' },
  { regex: /hover:bg-slate-800\b/g, replace: 'hover:opacity-90' },
  { regex: /hover:bg-white\b/g, replace: 'hover:bg-[var(--color-section-surface)]' },
  { regex: /text-slate-400\b/g, replace: 'text-[var(--color-muted-text)]' },
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
