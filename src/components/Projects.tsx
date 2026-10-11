import React from 'react';
import { Github, Trophy } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { projectsData, personalInfo } from '../data/portfolioData';

const ProjectLinks: React.FC = () => (
  <div className="mt-7 flex flex-wrap gap-3">
    <a
      href={personalInfo.github}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-primary/50 hover:bg-secondary/60"
    >
      <Github className="size-4" /> GitHub
    </a>
    <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 font-mono text-xs text-muted-foreground">
      Demo · coming soon
    </span>
  </div>
);

export const Projects: React.FC = () => {
  const featured = projectsData[0];
  const otherProjects = projectsData.slice(1);

  return (
    <section id="projects" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I have built"
          sub="Full-stack products, machine learning systems and automation prototypes."
        />

        {/* Featured Project */}
        {featured && (
          <div className="reveal glass glass-hover mt-14 overflow-hidden rounded-[2rem]">
            <div className="grid gap-10 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[image:var(--gradient-accent)] px-3 py-1 font-mono text-[10px] font-bold tracking-[0.15em] text-primary-foreground uppercase">
                    Featured
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {featured.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
                  {featured.title}
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ProjectLinks />
              </div>

              <ul className="grid content-start gap-2.5 rounded-2xl border border-border bg-secondary/30 p-6">
                {featured.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {otherProjects.map((proj) => (
            <article
              key={proj.title}
              className="reveal glass glass-hover rounded-[2rem] p-8"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {proj.tag}
                </span>
                <span className="font-display text-sm font-bold text-primary/60">
                  {proj.index}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold">{proj.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {proj.description}
              </p>

              {proj.achievement && (
                <p className="mt-5 inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-3.5 py-2 text-xs font-semibold text-primary">
                  <Trophy className="size-3.5" /> {proj.achievement}
                </p>
              )}

              <ul className="mt-5 grid gap-2">
                {proj.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-secondary/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ProjectLinks />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
