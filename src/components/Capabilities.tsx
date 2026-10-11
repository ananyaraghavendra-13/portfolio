import React from 'react';
import { Layers, Boxes, BrainCircuit, Database, Workflow } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { capabilitiesData, CapabilityItem } from '../data/portfolioData';

const getCapabilityIcon = (iconName: CapabilityItem['iconName']) => {
  switch (iconName) {
    case 'layers':
      return <Layers className="size-5" />;
    case 'boxes':
      return <Boxes className="size-5" />;
    case 'brain-circuit':
      return <BrainCircuit className="size-5" />;
    case 'database':
      return <Database className="size-5" />;
    case 'workflow':
      return <Workflow className="size-5" />;
    default:
      return <Layers className="size-5" />;
  }
};

export const Capabilities: React.FC = () => {
  return (
    <section id="services" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I Can Build"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilitiesData.map((item) => (
            <div
              key={item.title}
              className="reveal glass glass-hover rounded-3xl p-7"
            >
              <span className="grid size-11 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                {getCapabilityIcon(item.iconName)}
              </span>

              <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
