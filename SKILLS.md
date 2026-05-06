# SKILLS.md

## Overview

This personal portfolio is a fully custom-built, modern web application that showcases my professional journey, technical expertise, and creative work. The site features:

- **Hero / Description section** (already implemented)
- **Experience timeline** (already implemented)
- **Personal projects** (already implemented, with ongoing updates)
- **Blogging section** (already implemented)
- **Contact section** (already implemented)
- **Interactive Skill Tree** _(new — in progress: the "wow" centerpiece for showcasing skills gained across my entire career)_

We are currently updating the **projects section**, **overall layout**, **and adding the new Interactive Skill Tree** to deliver an even more polished, engaging, and memorable experience with refined navigation, smoother micro-interactions, and a visually stunning skills showcase.

**Core principle of the UI:**  
We are using **shadcn/ui** components as much as possible. shadcn/ui gives us production-ready, accessible, fully customizable components built on Radix UI primitives and Tailwind CSS. This approach provides:

- Complete code ownership
- Seamless theming (light/dark mode)
- Consistent design language
- Best-in-class accessibility

Whenever shadcn/ui does not include a required component (e.g., a dedicated Timeline or the complex Skill Tree), we customize our own using the same primitives, Tailwind utilities, SVG, and Framer Motion so everything feels native to the design system.

## Tech Stack

| Category           | Technologies                                                    |
| ------------------ | --------------------------------------------------------------- |
| Framework          | React 19 + Vite                                                 |
| Language           | TypeScript                                                      |
| Styling            | Tailwind CSS                                                    |
| UI Library         | shadcn/ui (primary) + custom Radix-based components when needed |
| Forms & Validation | React Hook Form + Zod                                           |
| Animations         | Framer Motion + Tailwind transitions                            |
| Content            | MDX for blog posts                                              |
| Icons              | Lucide React                                                    |
| Data Visualization | Custom SVG-based Skill Tree (PoE-inspired)                      |
| Deployment         | Vercel (static hosting)                                         |

## UI Component Strategy (shadcn/ui Heavy)

We prioritize shadcn/ui components wherever possible:

### Heavily Used shadcn/ui Components

- `Button`, `Card`, `Badge`, `Avatar` → Projects, hero, contact, skill nodes
- `NavigationMenu`, `Sheet`, `Drawer` → Layout & mobile navigation
- `Separator`, `ScrollArea` → Clean section dividers and scrollable areas
- `HoverCard`, `Tooltip` → Interactive hover states on projects, skills, and tree nodes
- `Tabs` → Project filtering / blog category navigation
- `Form`, `Input`, `Textarea`, `Label` → Contact form (with Zod validation)
- `Skeleton` → Loading states for blog and projects
- `Carousel` → Project showcase (image galleries)
- `Toast` → Success/error feedback on contact form

### Customized Components (when shadcn/ui does not provide exact match)

- **Timeline** (experience section) → Built from `Card` + `Separator` + `Badge` + custom CSS for the connecting line
- **Skill Grid / Proficiency Rings** → Custom component using `Progress` + SVG circles + Tailwind
- **Project Card with hover lift** → Extended `Card` with Framer Motion
- **Responsive Layout System** → Custom wrapper components around `Container` patterns from shadcn
- **Interactive Skill Tree** _(new flagship component)_ → Fully custom-built using SVG for dynamic connecting lines/paths, shadcn `Card`/`Badge`/`Button` as skill nodes, Framer Motion for node pulsing, path-drawing animations, hover glows, zoom & pan, and click-to-expand tooltips with mastery details. Nodes are color-coded by category (Frontend, Backend, Cloud, etc.), sized by proficiency, and connected in a branching, PoE-style web that visually represents career progression.

All custom components follow the exact same Tailwind class conventions and theme variables as shadcn/ui so they integrate perfectly and maintain perfect dark/light mode consistency.

## Skills Demonstrated in This Portfolio

### 1. Modern Frontend Architecture

- Vite-powered React 19 application with full TypeScript support
- Component-driven development with reusable, accessible primitives
- Clean client-side architecture optimized for performance and maintainability

### 2. Layout & Responsive Design

- Fully responsive layout (mobile-first)
- Dark/light mode with system preference detection
- Fluid typography and spacing using Tailwind
- Sticky navigation with smooth scroll behavior
- **Current updates**: Improved layout system with better breakpoint handling and container queries

### 3. Advanced Interactive Visualizations (The "Wow" Factor)

- Designed and built a breathtaking **Path of Exile-inspired Skill Tree** as the centerpiece of the new Skills section.
- Nodes represent real skills and technologies mastered throughout my career.
- Visual progression paths show how skills interconnect and build upon each other.
- Features include:
  - Animated SVG connection lines that draw on scroll
  - Hover effects with glowing nodes and detailed popovers (using shadcn `HoverCard`)
  - Clickable nodes revealing proficiency level, years of experience, and real-world project examples
  - Category-based coloring and clustering (Frontend Mastery, Backend Expertise, DevOps & Cloud, Leadership & Soft Skills, etc.)
  - Smooth Framer Motion animations, mobile-friendly touch controls, and keyboard navigation
- This section transforms a typical "list of skills" into an immersive, game-like experience that instantly communicates depth, breadth, and growth.

### 4. Accessibility & Performance

- Full ARIA compliance via Radix primitives (even for the complex Skill Tree)
- Lighthouse scores targeted at 95+ across all metrics
- Optimized images and bundle splitting
- Semantic HTML and proper heading hierarchy

## SEO Considerations (React + Vite SPA)

The portfolio is built as a client-side rendered (CSR) Single Page Application with React + Vite and deployed statically on Vercel. While this setup is **not bad for SEO** and works well for a personal branding site, it is **suboptimal** compared to server-rendered frameworks like Next.js:

- Search engines receive an initial empty HTML shell; content is hydrated via JavaScript.
- Googlebot can render JS, but indexing is slower and less reliable than true SSR/SSG.
- Social media crawlers and other bots may see incomplete metadata.

**Mitigations implemented:**

- Comprehensive meta tag management and Open Graph tags
- Structured data (JSON-LD) for projects, experience, blog posts, _and the new Skill Tree_
- Static sitemap and optimized robots.txt
- Fast TTFB and strong Core Web Vitals through Vite’s build optimizations

For the blogging section and Skill Tree in particular, a future migration to Next.js (App Router with SSG/ISR) is under consideration to achieve superior crawlability and faster indexing without sacrificing the current shadcn/ui + Tailwind experience.

## Current Focus Areas (Q2 2026 Updates)

- **Projects section refresh** — richer cards, live demo links, tech stack filtering using shadcn `Tabs` + `Badge`
- **Layout overhaul** — more generous whitespace, improved typography scale, refined grid system
- **Interactive Skill Tree launch** — the flagship "wow" section: fully animated PoE-style visualization of my complete skill progression

This portfolio itself serves as a living demonstration of my current skill level in modern React development, with a strong emphasis on beautiful, accessible, and maintainable UI using the shadcn/ui ecosystem — now taken to the next level with an unforgettable interactive skill visualization.

---

**Last updated:** May 2026  
**Built with ❤️ and shadcn/ui**
