# Spec: Orion Placement Homepage Re-Map & Modern Web Experience

## Objective
Build a world-class, ultra-premium, high-converting Next.js homepage for **Orion Placement** (https://orionplacement.com/), a premier nationwide recruitment, executive search, and staffing firm founded by Justin Sofman and Jon Missirlian.

The current website is a generic, low-converting Elementor WordPress site with poor visual hierarchy, slow load speed, lack of interactive conversion mechanisms, and uninspired layout. The client needs a state-of-the-art interactive mock demo that wows both **Employers** (hiring managers seeking top talent) and **Job Seekers** (candidates seeking career opportunities), driving inbound consultations and qualified talent submissions.

The architecture will leverage the proven, high-performance design foundation of SwiftPainting (Next.js 15/16 App Router, Tailwind CSS v4, Lucide React, Framer Motion) adapted into a prestigious, modern corporate staffing aesthetic.

## Assumptions
1. **Target Audience**: Dual-funnel:
   - **Primary**: Enterprise & Mid-market Employers (Founders, CHROs, VP of Talent, Hiring Managers) needing urgent or specialized placements across Legal, Healthcare, Tech, Finance, Construction, Real Estate, and Executive roles.
   - **Secondary**: High-caliber candidates seeking confidential career placement.
2. **Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide React, Framer Motion.
3. **Scope for Demo**: A complete, polished, fully responsive Homepage with interactive lead magnets (Dual-Mode Consultation/Candidate Form, Interactive Industry Selector, Placement Salary & Hiring Calculator, FAQ Accordion, Testimonials Carousel/Grid, Founders Section, Process Flow, Trust Badges, and Full Header/Footer).
4. **Assets**: Real assets fetched from Orion Placement (original logo, real founder photos of Justin Sofman and Jon Missirlian, real phone 201-572-9538, real social links, real industry specializations).
5. **Copywriting**: 100% human-crafted US English, authoritative yet consultative, without generic AI clichés.

## Commands
```bash
# Development server
npm run dev

# Production build & validation
npm run build

# Start production server
npm start

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

## Project Structure
```
orionplacment/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── founders/
│   │   │   ├── justin-sofman.png
│   │   │   └── jon-missirlian.jpg
│   │   └── hero/
│   │       └── corporate-boardroom.webp
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── HomeClient.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroTalentForm.tsx
│   │   │   ├── TrustBarSection.tsx
│   │   │   ├── FoundersStorySection.tsx
│   │   │   ├── ServicesGridSection.tsx
│   │   │   ├── IndustriesSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── WhyOrionSection.tsx
│   │   │   ├── FeaturedRolesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── HiringPlaybookLeadMagnet.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   └── FinalCtaSection.tsx
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Modal.tsx
│   │       └── ScrollReveal.tsx
│   ├── config/
│   │   └── site.ts
│   ├── data/
│   │   ├── industriesData.ts
│   │   ├── servicesData.ts
│   │   ├── faqsData.ts
│   │   └── testimonialsData.ts
│   └── lib/
│       └── utils.ts
├── HOMEPAGE_CONTENT_SPEC.md
├── SPEC.md
├── IMPLEMENTATION_PLAN.md
├── package.json
├── tsconfig.json
└── postcss.config.mjs
```

## Code Style & Design Tokens
- **Primary Deep Navy**: `#001749` (dominant corporate foundation, derived from Orion's official brand logo)
- **Secondary Midnight Indigo**: `#091E42` / `#0F275A`
- **Accent Sapphire Blue**: `#1D64EC` / `#2563EB` (vibrant interactive buttons, hover states)
- **Luxury Gold / Champagne Accent**: `#D4AF37` / `#EAB308` / `#F59E0B` (badges, rating stars, premium highlights)
- **Canvas / Background**: Crisp `#F8FAFC` slate canvas with pure white `#FFFFFF` elevation cards, subtle borders `border-slate-200/80`, and soft shadows.
- **Typography**: Inter / Plus Jakarta Sans system stack for crisp corporate authority.

## Testing Strategy
- Pre-build TypeScript typechecking (`npx tsc --noEmit`).
- Clean production build (`npm run build`) with zero lint or hydration warnings.
- Layout verification in browser subagent / Playwright headless test to guarantee mobile and desktop pixel perfection.

## Boundaries
- **Always do**: Use authentic company data (Founders Justin & Jon, Phone 201-572-9538, real industries and services), test builds before declaring completion, provide responsive mobile nav & desktop navigation.
- **Ask first**: If the user desires multi-page routing beyond the homepage demo (jobs board database, backend candidate portal).
- **Never do**: Use generic placeholder lorem ipsum; write AI-sounding marketing fluff; hardcode broken dead ends.

## Success Criteria
1. Fully working Next.js App Router application in `orionplacment/` building cleanly (`npm run build`).
2. Homepage covers all 12 key sections: Navbar, Hero + Interactive Dual-Funnel Form, Trust Bar, Founders Section, Services Grid, Interactive Industry Showcase (13+ industries), 4-Step Precision Placement Process, Value Proposition / Why Choose Orion, Featured Open Roles Teaser, Client & Candidate Testimonials, Downloadable Hiring Guide Lead Magnet, FAQ Accordion, Final CTA, and Complete Footer.
3. Interactive features work seamlessly:
   - Dual-mode Hero Form ("Find Talent" vs "Submit Resume" with dynamic fields).
   - Interactive Industry filter / role explorer.
   - Lead magnet modal with instant simulated download / submission confirmation.
   - Mobile responsive drawer navigation with instant tap targets.
4. Visual design feels world-class, premium, sleek, and superior to the existing WordPress site.
