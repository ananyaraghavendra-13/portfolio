import React from 'react';
import { Trophy, Award, Sparkles } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { achievementsData, AchievementItem } from '../data/portfolioData';

const getAchievementIcon = (iconName: AchievementItem['iconName']) => {
  switch (iconName) {
    case 'trophy':
      return <Trophy className="size-5" />;
    case 'award':
      return <Award className="size-5" />;
    case 'sparkles':
      return <Sparkles className="size-5" />;
    default:
      return <Trophy className="size-5" />;
  }
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Highlights so far"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {achievementsData.map((item) => (
            <div
              key={item.text}
              className="reveal glass glass-hover relative overflow-hidden rounded-3xl p-7"
            >
              <div
                className="pointer-events-none absolute -top-16 -right-16 size-40 opacity-30 [background:var(--gradient-glow)]"
                aria-hidden="true"
              />

              <span className="grid size-11 place-items-center rounded-2xl bg-[image:var(--gradient-accent)] text-primary-foreground">
                {getAchievementIcon(item.iconName)}
              </span>

              <p className="mt-5 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
