"use client";

import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBarSection } from "@/components/sections/TrustBarSection";
import { LiveSearchesMarquee } from "@/components/sections/LiveSearchesMarquee";
import { FoundersStorySection } from "@/components/sections/FoundersStorySection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyOrionSection } from "@/components/sections/WhyOrionSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HiringPlaybookLeadMagnet } from "@/components/sections/HiringPlaybookLeadMagnet";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { LivePlacementToast } from "@/components/ui/LivePlacementToast";

export function HomeClient() {
  return (
    <div className="w-full max-w-full overflow-x-clip min-h-screen bg-[#FAFBFD] text-[#040D21]">
      {/* 1. Hero Section with Interactive Dual-Funnel Form */}
      <HeroSection />

      {/* 2. Trust Credentials & Placement Stats */}
      <TrustBarSection />

      {/* 2.5 Live Executive Search Requisitions Marquee */}
      <LiveSearchesMarquee />

      {/* 3. Founders Story: Justin Sofman & Jon Missirlian */}
      <FoundersStorySection />

      {/* 4. Core Services: Direct Hire, Executive Search, Contract, Contract-to-Hire */}
      <ServicesGridSection />

      {/* 5. Interactive Industry Specializations (7 Practice Groups + Intelligence) */}
      <IndustriesSection />

      {/* 6. Proven 4-Step Placement Process */}
      <ProcessSection />

      {/* 7. Why Orion: Comparison Table + Embedded Interactive ROI & Vacancy Calculator */}
      <WhyOrionSection />

      {/* 8. Testimonials: Client & Placed Candidate Reviews */}
      <TestimonialsSection />

      {/* 9. Lead Magnet: 2025 Executive Compensation Guide */}
      <HiringPlaybookLeadMagnet />

      {/* 10. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 11. Final High-Impact Urgent Search CTA */}
      <FinalCtaSection />

      {/* Floating Verified Placement Social Proof Toast */}
      <LivePlacementToast />
    </div>
  );
}

export default HomeClient;
