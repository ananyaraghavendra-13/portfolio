import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { SectionHeading } from './SectionHeading';
import { personalInfo } from '../data/portfolioData';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name').max(100),
  email: z.string().trim().email('Please enter a valid email').max(255),
  message: z.string().trim().min(1, 'Please write a short message').max(1000),
});

export const Contact: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

    const result = contactSchema.safeParse(formValues);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? 'Please check the form');
      return;
    }

    setSubmitting(true);
    const { name, email, message } = result.data;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${email}`);

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    toast.success('Opening your email client…');
    form.reset();
    setSubmitting(false);
  };

  const contactItems = [
    {
      icon: <Mail className="size-[18px]" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <MapPin className="size-[18px]" />,
      label: 'Location',
      value: personalInfo.location,
    },
    {
      icon: <Linkedin className="size-[18px]" />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin,
    },
    {
      icon: <Github className="size-[18px]" />,
      label: 'GitHub',
      value: 'See my code',
      href: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Build Something Together."
          sub="Have an opportunity, project or idea? I'd love to connect."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Details */}
          <div className="reveal grid content-start gap-3">
            {contactItems.map(({ icon, label, value, href }) => {
              const content = (
                <>
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    {icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {value}
                    </span>
                  </span>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="glass glass-hover flex items-center gap-4 rounded-2xl p-4"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={label}
                  className="glass flex items-center gap-4 rounded-2xl p-4"
                >
                  {content}
                </div>
              );
            })}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal glass rounded-3xl p-7 lg:p-9"
            noValidate
          >
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  Name
                </span>
                <input
                  name="name"
                  maxLength={100}
                  placeholder="Your name"
                  className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
              </label>

              <label className="grid gap-2">
                <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  maxLength={255}
                  placeholder="you@company.com"
                  className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
              </label>

              <label className="grid gap-2">
                <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="Tell me about the opportunity or idea…"
                  className="resize-none rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                <Send className="size-4" /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
