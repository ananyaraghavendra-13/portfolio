import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified learning"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((item) => (
            <div
              key={item.title}
              className="reveal glass glass-hover rounded-3xl p-7"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <span className="grid size-11 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                  <BadgeCheck className="size-5" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.year}
                </span>
              </div>

              <h3 className="mt-5 text-base font-semibold leading-snug">{item.title}</h3>
              <p className="mt-1.5 text-sm font-medium text-primary">{item.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
