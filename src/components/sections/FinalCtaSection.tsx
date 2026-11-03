import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, ArrowRight, ShieldCheck, Clock, CheckCircle2, Sparkles } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="scroll-mt-28 py-20 md:py-28 bg-[#001749] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Accent Gradients */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#1E5CD9]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[#D4AF37] mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>IMMEDIATE TALENT ACQUISITION</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Ready to Solve Your Hiring Bottleneck or <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FDE047] to-[#EAB308]">
            Find Your Next Career Pinnacle?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Connect directly with our managing partners for a confidential, no-obligation talent consultation. Discover how quickly the right candidate transforms your team’s velocity.
        </p>

        {/* Dual CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#hero-talent-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>Request Candidates Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call {siteConfig.phone}</span>
          </a>
        </div>

        {/* Hours & Trust Strip */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <span>Executive Desk: {siteConfig.hours}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Upfront Search Retainers (Contingency)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            <span>100% Guaranteed 90-Day Replacement</span>
          </div>
        </div>
      </div>
    </section>
  );
}
