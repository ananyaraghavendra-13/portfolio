import React from 'react';
import { Briefcase } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I have been building"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <span
            className="absolute top-2 bottom-2 left-[15px] w-px bg-border sm:left-[19px]"
            aria-hidden="true"
          />

          <div className="grid gap-6">
            {experienceData.map((item) => (
              <div key={item.role} className="reveal relative pl-12 sm:pl-16">
                <span className="absolute top-6 left-0 grid size-8 place-items-center rounded-full border border-primary/30 bg-background text-primary sm:size-10">
                  <Briefcase className="size-4" />
                </span>

                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <h3 className="truncate text-lg font-semibold">{item.role}</h3>
                    {item.current && (
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] tracking-wide text-primary uppercase">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm text-primary">{item.org}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {item.meta}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
