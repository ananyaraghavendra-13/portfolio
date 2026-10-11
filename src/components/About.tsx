import React from 'react';
import { SectionHeading } from './SectionHeading';
import { aboutData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="About me"
          title="Curious by default, practical by habit"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal glass rounded-3xl p-8 lg:p-10">
            <p className="text-lg leading-relaxed">{aboutData.bio}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {aboutData.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <dl className="reveal grid gap-3">
            {aboutData.details.map((item) => (
              <div
                key={item.label}
                className="glass glass-hover grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-5 py-4"
              >
                <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  {item.label}
                </dt>
                <dd className="min-w-0 text-right text-sm font-medium">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
