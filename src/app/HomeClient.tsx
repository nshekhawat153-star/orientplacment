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

function SectionDivider() {
  return (
    <div className="w-full relative flex items-center justify-center py-0 pointer-events-none z-20 overflow-hidden bg-transparent">
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-12 relative flex items-center justify-center">
        {/* Faded Gold Accent Line */}
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent shadow-sm" />
        {/* Subtle Diamond Anchor */}
        <div className="absolute w-2.5 h-2.5 rotate-45 bg-[#D4AF37] border-2 border-white shadow-sm" />
      </div>
    </div>
  );
}

export function HomeClient() {
  return (
    <div className="w-full max-w-full overflow-x-clip min-h-screen bg-[#F8FAFC]">
      {/* 1. Hero Section with Interactive Dual-Funnel Form */}
      <HeroSection />

      {/* 2. Trust Credentials & Placement Stats */}
      <TrustBarSection />

      {/* 2.5 Live Executive Search Requisitions Marquee */}
      <LiveSearchesMarquee />

      {/* 3. Founders Story: Justin Sofman & Jon Missirlian */}
      <FoundersStorySection />

      <SectionDivider />

      {/* 4. Core Services: Direct Hire, Executive Search, Contract, Contract-to-Hire */}
      <ServicesGridSection />

      <SectionDivider />

      {/* 5. Interactive Industry Specializations (7 Verticals + Intelligence) */}
      <IndustriesSection />

      <SectionDivider />

      {/* 6. Proven 4-Step Placement Process */}
      <ProcessSection />

      <SectionDivider />

      {/* 7. Why Orion: Comparison Table + Embedded Interactive ROI & Vacancy Calculator */}
      <WhyOrionSection />

      <SectionDivider />

      {/* 8. Testimonials: Client & Placed Candidate Reviews */}
      <TestimonialsSection />

      <SectionDivider />

      {/* 9. Lead Magnet: 2025 Executive Compensation Guide */}
      <HiringPlaybookLeadMagnet />

      <SectionDivider />

      {/* 10. Frequently Asked Questions Accordion */}
      <FaqSection />

      <SectionDivider />

      {/* 11. Final High-Impact Urgent Search CTA */}
      <FinalCtaSection />

      {/* Floating Verified Placement Social Proof Toast */}
      <LivePlacementToast />
    </div>
  );
}

export default HomeClient;
