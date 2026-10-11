import React from 'react';
import { ArrowUpRight, Download, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImage from '../assets/profile.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
      {/* Background visual elements */}
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="float-slow pointer-events-none absolute -top-32 -left-24 size-[34rem] rounded-full opacity-40 blur-[2px] [background:var(--gradient-glow)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-24 right-[-10rem] size-[30rem] rounded-full opacity-25 [background:radial-gradient(circle,var(--violet),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8">
        <div>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-wide text-muted-foreground uppercase">
            <span className="size-1.5 rounded-full bg-primary" />
            Open to software developer opportunities
          </span>

          <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Ananya R</span>
          </h1>

          <p className="mt-5 font-mono text-sm text-primary sm:text-base">
            {personalInfo.role}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build practical web applications and machine learning solutions that turn
            real-world problems into useful digital solutions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              View Projects <ArrowUpRight className="size-4" />
            </a>

            {personalInfo.resumeUrl ? (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:bg-secondary/60"
              >
                <Download className="size-4" /> Download Resume
              </a>
            ) : (
              <span
                title="Resume link coming soon"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-border px-6 py-3 text-sm font-semibold text-muted-foreground"
              >
                <Download className="size-4" /> Download Resume
                <span className="font-mono text-[10px] tracking-wide uppercase">soon</span>
              </span>
            )}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:bg-secondary/60"
            >
              <Mail className="size-4" /> Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-primary" /> {personalInfo.location}
            </span>
            <span>CGPA {personalInfo.cgpa}</span>
            <span>{personalInfo.degreeTimeline}</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute inset-0 -m-6 rounded-full opacity-60 blur-2xl [background:var(--gradient-glow)]"
            aria-hidden="true"
          />
          <div className="relative rounded-[2rem] p-[1.5px] [background:var(--gradient-accent)]">
            <img
              src={profileImage}
              alt="Portrait of Ananya R"
              width={912}
              height={912}
              className="aspect-square w-full rounded-[calc(2rem-1.5px)] object-cover"
            />
          </div>

          <div className="glass absolute -bottom-5 -left-4 rounded-2xl px-4 py-3">
            <p className="font-display text-lg font-bold">2+</p>
            <p className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
              Technical projects
            </p>
          </div>

          <div className="glass absolute -top-5 -right-3 rounded-2xl px-4 py-3">
            <p className="font-display text-lg font-bold">98%</p>
            <p className="font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
              ML accuracy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
