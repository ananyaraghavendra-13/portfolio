import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-x-0 border-t-0 shadow-none'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-accent)] font-display text-sm font-bold text-primary-foreground">
            A
          </span>
          <span className="truncate font-display text-base font-semibold tracking-tight">
            {personalInfo.name}
          </span>
        </a>

        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <span className="mx-2 hidden h-5 w-px bg-border xl:block" />

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-primary"
          >
            <Github className="size-[18px]" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-primary"
          >
            <Linkedin className="size-[18px]" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            className="ml-1 grid size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary/70 xl:hidden"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="glass mx-4 mb-4 grid gap-1 rounded-2xl p-3 xl:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
