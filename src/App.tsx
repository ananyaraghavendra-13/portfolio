import React, { useEffect } from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Capabilities } from './components/Capabilities';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.setAttribute('data-visible', 'true'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12,
      }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Capabilities />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default App;
