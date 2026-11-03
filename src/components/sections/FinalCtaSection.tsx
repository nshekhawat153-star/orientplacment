import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, ArrowRight, ShieldCheck, Clock, CheckCircle2, Sparkles } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="scroll-mt-24 py-20 lg:py-28 bg-[#021124] text-white relative overflow-hidden border-b border-[#E5D9C5]/15">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#EAB308] tracking-[0.2em] uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Confidential Search Mandate</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
          Ready to Solve Your Hiring Bottleneck or <br className="hidden sm:inline" />
          <span className="italic text-[#EAB308]">
            Elevate Your Leadership Team?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Connect directly with our managing partners for a confidential, no-obligation talent consultation. Discover how quickly verified finalists transform your organization.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#hero-talent-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold text-[#021124] bg-[#EAB308] hover:bg-[#CA8A04] shadow-md transition-all cursor-pointer"
          >
            <span>Request Shortlist Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Call {siteConfig.phone}</span>
          </a>
        </div>

        {/* Hours & Trust Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Executive Desk: {siteConfig.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Upfront Search Retainers (Contingency)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>100% Guaranteed 90-Day Replacement</span>
          </div>
        </div>
      </div>
    </section>
  );
}
