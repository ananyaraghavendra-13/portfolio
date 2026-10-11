# Ananya R — Portfolio Website

A personal portfolio web application built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, based on [ananyar-portfolio.lovable.app](https://ananyar-portfolio.lovable.app/).

## 🚀 Live on Localhost

The development server runs by default at:
```
http://localhost:3000/
```

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Styling**: Tailwind CSS with custom glassmorphism, OKLCH theme variables, radial glow gradients, and keyframe animations
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Validation**: [Zod](https://zod.dev/)
- **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Typography**: Space Grotesk, DM Sans, JetBrains Mono

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── profile.jpg
├── src/
│   ├── assets/
│   │   └── profile.jpg
│   ├── components/
│   │   ├── SectionHeading.tsx  # Reusable section eyebrow & title
│   │   ├── Navbar.tsx          # Fixed glass header with mobile menu
│   │   ├── Hero.tsx            # Hero with glow effects, bio, CTAs & profile
│   │   ├── About.tsx           # Bio card and academic details
│   │   ├── Skills.tsx          # 8 categorized skill sections with icons
│   │   ├── Projects.tsx        # Featured + grid project showcase
│   │   ├── Experience.tsx      # Timeline of internship and hackathon
│   │   ├── Capabilities.tsx    # 5 full-stack capabilities
│   │   ├── Certifications.tsx  # IBM & Automation Anywhere credentials
│   │   ├── Education.tsx       # Education history timeline
│   │   ├── Achievements.tsx    # Hackathon, ML accuracy & project highlights
│   │   ├── Contact.tsx         # Contact cards & validated message form
│   │   └── Footer.tsx          # Footer with social links & copyright
│   ├── data/
│   │   └── portfolioData.ts    # Centralized data content
│   ├── App.tsx                 # Main layout & scroll reveal observer
│   ├── index.css               # Exact design tokens, utilities & animations
│   ├── main.tsx                # React entrypoint
│   └── vite-env.d.ts           # Vite client type definitions
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 💻 Available Scripts

### Run Development Server
```bash
npm run dev
```
Starts Vite on `http://localhost:5180`.

### Build for Production
```bash
npm run build
```
Type-checks with `tsc` and compiles optimized production assets to `/dist`.

### Preview Production Build
```bash
npm run preview
```
Previews the generated production bundle locally.
