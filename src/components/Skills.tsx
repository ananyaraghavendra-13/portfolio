import React from 'react';
import {
  Cpu,
  Layers,
  Boxes,
  Database,
  BrainCircuit,
  Workflow,
  Sparkles,
  BadgeCheck,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { skillsData, SkillCategory } from '../data/portfolioData';

const getIcon = (iconName: SkillCategory['iconName']) => {
  switch (iconName) {
    case 'cpu':
      return <Cpu className="size-[18px]" />;
    case 'layers':
      return <Layers className="size-[18px]" />;
    case 'boxes':
      return <Boxes className="size-[18px]" />;
    case 'database':
      return <Database className="size-[18px]" />;
    case 'brain-circuit':
      return <BrainCircuit className="size-[18px]" />;
    case 'workflow':
      return <Workflow className="size-[18px]" />;
    case 'sparkles':
      return <Sparkles className="size-[18px]" />;
    case 'badge-check':
      return <BadgeCheck className="size-[18px]" />;
    default:
      return <Cpu className="size-[18px]" />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-20 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I work with"
          sub="Technologies I use to build, analyse and automate."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="reveal glass glass-hover rounded-3xl p-6"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  {getIcon(category.iconName)}
                </span>
                <h3 className="truncate text-sm font-semibold">{category.title}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-secondary/40 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
