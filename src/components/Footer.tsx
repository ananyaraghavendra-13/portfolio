import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const footerLinks = [
    { href: personalInfo.github, icon: <Github className="size-[18px]" />, label: 'GitHub' },
    { href: personalInfo.linkedin, icon: <Linkedin className="size-[18px]" />, label: 'LinkedIn' },
    { href: `mailto:${personalInfo.email}`, icon: <Mail className="size-[18px]" />, label: 'Email' },
  ];

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="min-w-0">
          <p className="font-display text-lg font-bold">{personalInfo.name}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            Information Science & Engineering · Junior Developer
          </p>
        </div>

        <div className="flex gap-2">
          {footerLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 mt-8 border-t border-border pt-6">
        <p className="text-center font-mono text-xs text-muted-foreground">
          © 2026 {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
