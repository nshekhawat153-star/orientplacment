# Implementation Plan: Orion Placement Homepage Re-Map & Modern Web Experience

## Overview
Decompose the building of the Next.js homepage for Orion Placement into verifiable, incremental tasks following `incremental-implementation` and `planning-and-task-breakdown`.

## Architecture Decisions
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript.
- **Styling**: Tailwind CSS v4 with custom design tokens matching Orion Placement's brand navy (`#001749`) and luxury champagne gold (`#EAB308` / `#D4AF37`) accents.
- **Icons & Motion**: Lucide React + Framer Motion.
- **Component Organization**:
  - `src/components/layout/`: Navbar, Footer, MobileNav.
  - `src/components/sections/`: HeroSection, HeroTalentForm, TrustBarSection, FoundersStorySection, ServicesGridSection, IndustriesSection, ProcessSection, WhyOrionSection, FeaturedRolesSection, TestimonialsSection, HiringPlaybookLeadMagnet, FaqSection, FinalCtaSection.
  - `src/components/ui/`: ScrollReveal, Modal, Badge, Button.
  - `src/data/`: Data structures for industries, services, testimonials, FAQs, and stats.
  - `src/config/site.ts`: Centralized site configuration, metadata, telephone, links.

---

## Task Breakdown

### Phase 1: Foundation & Asset Pipeline
- [ ] **Task 1: Next.js Project Initialization & Dependencies**
  - **Description**: Scaffold Next.js 16 App Router application in `orionplacment/` with Tailwind CSS v4, Lucide React, and Framer Motion.
  - **Acceptance Criteria**:
    - `package.json` contains Next.js, React 19, TypeScript, Tailwind CSS v4, Lucide React, Framer Motion.
    - `next.config.ts`, `postcss.config.mjs`, and `tsconfig.json` correctly configured.
    - `npm run build` succeeds cleanly.
  - **Verification**: `npm run build` exits with code 0.
  - **Files**: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `src/app/globals.css`.

- [ ] **Task 2: Asset Fetching & Brand Token Setup**
  - **Description**: Download official Orion Placement logo and founder images (Justin Sofman & Jon Missirlian) into `public/images/`. Configure site config and color variables.
  - **Acceptance Criteria**:
    - `public/images/orion-logo.png`, `public/images/founders/justin.png`, `public/images/founders/jon.jpg` exist.
    - `src/config/site.ts` defines site metadata, contact phone `(201) 572-9538`, address, and navigation structure.
  - **Verification**: Files exist and can be loaded.
  - **Files**: `public/images/*`, `src/config/site.ts`.

### Phase 2: Design System & Core Layout Components
- [ ] **Task 3: Global Layout, Navbar & Announcement Bar**
  - **Description**: Build responsive Navbar with sticky blur backdrop, desktop dropdowns, phone click-to-call `(201) 572-9538`, and mobile slide-out drawer.
  - **Acceptance Criteria**:
    - Navbar displays Orion logo, navigation links, direct phone with calling badge, and "Request Talent" button.
    - Mobile menu toggles smoothly on screens < 768px.
  - **Verification**: Visual check and TypeScript check.
  - **Files**: `src/components/layout/Navbar.tsx`, `src/app/layout.tsx`.

- [ ] **Task 4: High-Converting Hero Section with Dual-Mode Lead Form**
  - **Description**: Build Hero Section with bold typography, trust badges, animated stats, and interactive dual-tab conversion form (Employers: "Find Talent" vs Candidates: "Submit Resume").
  - **Acceptance Criteria**:
    - Dual tabs switch between Employer and Candidate flows.
    - Form includes interactive input validation and success confirmation state.
    - Zero layout shift and pristine responsive design.
  - **Verification**: Interactive form test, build test.
  - **Files**: `src/components/sections/HeroSection.tsx`, `src/components/sections/HeroTalentForm.tsx`.

### Phase 3: Brand Authority & Service Matrix
- [ ] **Task 5: Trust Bar & Founders' Story Section**
  - **Description**: Implement Trust Bar with enterprise credentials and Founders' Section spotlighting Justin Sofman and Jon Missirlian with their genuine photos and consultative ethos.
  - **Acceptance Criteria**:
    - Trust bar displays placement metrics ($240M+ compensation, 96% retention).
    - Founders section highlights both partners with authentic bios and executive quote cards.
  - **Verification**: Build test and component check.
  - **Files**: `src/components/sections/TrustBarSection.tsx`, `src/components/sections/FoundersStorySection.tsx`.

- [ ] **Task 6: Core Services Grid & Interactive Industry Explorer**
  - **Description**: Build Core Services (Direct Hire, Executive Search, Contract Staffing, Contract-to-Hire) and an interactive 13-industry switcher (Legal, Healthcare, Tech, Finance, Construction, Real Estate, etc.) detailing roles placed.
  - **Acceptance Criteria**:
    - 4 core service cards with feature checklists and warranty badges.
    - Industry selector tab/card interface allowing visitors to explore specific roles placed.
  - **Verification**: Build test and interactive tab state check.
  - **Files**: `src/components/sections/ServicesGridSection.tsx`, `src/components/sections/IndustriesSection.tsx`, `src/data/industriesData.ts`.

### Phase 4: Conversion Accelerators & Methodology
- [ ] **Task 7: 4-Step Placement Process & Value Comparison Section**
  - **Description**: Build the 4-step Orion precision placement methodology and the head-to-head comparison table ("Traditional Agencies vs Orion Placement").
  - **Acceptance Criteria**:
    - Numbered interactive step cards (Intake, Proactive Sourcing, 360 Screening, Offer Close).
    - Clear visual comparison table emphasizing Orion's 90-180 day warranty and passive candidate reach.
  - **Verification**: Build test and responsive table verification.
  - **Files**: `src/components/sections/ProcessSection.tsx`, `src/components/sections/WhyOrionSection.tsx`.

- [ ] **Task 8: Social Proof, Lead Magnet & FAQ Accordion**
  - **Description**: Add real client/candidate testimonials, the downloadable 2025 Executive Compensation Guide lead magnet with modal capture, and 6-item interactive FAQ accordion.
  - **Acceptance Criteria**:
    - Testimonials with verified role, company type, and rating stars.
    - Lead magnet modal with instant download simulated confirmation.
    - Smooth FAQ accordion with accessible open/close states.
  - **Verification**: Modal open/close test, accordion test.
  - **Files**: `src/components/sections/TestimonialsSection.tsx`, `src/components/sections/HiringPlaybookLeadMagnet.tsx`, `src/components/sections/FaqSection.tsx`.

### Phase 5: Assembly, Footer, Build & Verification
- [ ] **Task 9: Final CTA Section & Enterprise Footer**
  - **Description**: Build the urgent hiring final CTA banner with direct phone `(201) 572-9538` and a comprehensive 4-column footer with social links, practice areas, and legal disclaimers.
  - **Acceptance Criteria**:
    - Phone number and booking links clearly visible.
    - Full footer navigation mirroring all site sections.
  - **Verification**: Build test.
  - **Files**: `src/components/sections/FinalCtaSection.tsx`, `src/components/layout/Footer.tsx`.

- [ ] **Task 10: Complete Assembly, Build Verification & Quality Review**
  - **Description**: Assemble `src/app/page.tsx` and `src/app/HomeClient.tsx`, execute production build, verify with browser subagent or automated checks, and document the solution.
  - **Acceptance Criteria**:
    - `npm run build` completes with zero errors.
    - Homepage renders cleanly on desktop and mobile.
    - All interactive forms, accordions, and buttons function flawlessly.
  - **Verification**: `npm run build` succeeds and browser snapshot confirms visual excellence.
