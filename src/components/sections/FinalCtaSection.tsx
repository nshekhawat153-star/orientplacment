import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, ArrowRight, ShieldCheck, Clock, CheckCircle2, Sparkles } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="scroll-mt-24 py-20 lg:py-28 bg-[#040D21] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-xs font-semibold text-[#00D2FF] tracking-[0.2em] uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Confidential Search Mandate</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
          Ready to Solve Your Hiring Bottleneck or <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#00D2FF]">
            Elevate Your Leadership Team?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Connect directly with our managing partners for a confidential, no-obligation talent consultation. Discover how quickly verified finalists transform your organization.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#hero-talent-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-bold text-[#040D21] bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] hover:brightness-105 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <span>Request Shortlist Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#00D2FF] transition-all duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Call {siteConfig.phone}</span>
          </a>
        </div>

        {/* Hours & Trust Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Executive Desk: {siteConfig.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Upfront Search Retainers (Contingency)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>100% Guaranteed 90-Day Replacement</span>
          </div>
        </div>
      </div>
    </section>
  );
}
