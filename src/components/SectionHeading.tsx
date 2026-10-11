import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  sub?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, sub }) => {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
};
