import React from 'react';
import { GraduationCap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <span
            className="absolute top-2 bottom-2 left-[15px] w-px bg-border sm:left-[19px]"
            aria-hidden="true"
          />

          <div className="grid gap-6">
            {educationData.map((item) => (
              <div key={item.title} className="reveal relative pl-12 sm:pl-16">
                <span className="absolute top-6 left-0 grid size-8 place-items-center rounded-full border border-primary/30 bg-background text-primary sm:size-10">
                  <GraduationCap className="size-4" />
                </span>

                <div className="glass glass-hover rounded-2xl p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-primary">{item.org}</p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-muted-foreground">
                    <span>{item.period}</span>
                    <span>{item.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
