import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Star, ShieldCheck, Phone, Sparkles, TrendingUp, Users } from "lucide-react";
import { HeroTalentForm } from "./HeroTalentForm";

export function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 md:pb-28 text-white overflow-hidden bg-[#001749] border-b border-slate-800">
      {/* Background Image Scrim Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle executive corporate backdrop image */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('/images/about-team.jpg')" }}
        />
        {/* Ambient Luxury Gradients */}
        <div className="absolute -top-40 -left-40 w-[550px] h-[550px] bg-[#1E5CD9]/25 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#D4AF37]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Social Proof */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Recruiter Active Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#D4AF37] backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="tracking-wide uppercase text-[11px] font-bold">
                Executive Desk Active • 48 States Covered
              </span>
            </div>

            {/* H1 Headline with Editorial Styling */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Connecting High-Caliber Talent With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FDE047] to-[#EAB308]">
                Industry Leaders
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              From critical C-suite officers and legal counsel to specialized clinical leaders and high-impact engineering teams. Orion Placement delivers vetted, interview-ready professionals in days—not months.
            </p>

            {/* Social Proof Stars & Verified Metric */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl backdrop-blur-sm shadow-sm">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white text-sm ml-1">4.9 / 5.0</span>
                <span className="text-slate-400 ml-1">(350+ Placements)</span>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Guaranteed 90-Day Replacement</span>
              </div>
            </div>

            {/* Quick Feature Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left backdrop-blur-sm hover:border-[#D4AF37]/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-white">14 Days</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Avg. First Shortlist</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left backdrop-blur-sm hover:border-[#D4AF37]/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-[#D4AF37]">96%</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">12-Month Retention</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left backdrop-blur-sm hover:border-[#D4AF37]/40 transition-colors col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-white">50,000+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Vetted Talent Network</div>
              </div>
            </div>

            {/* Direct Contact Phone Line */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all backdrop-blur-md shadow-md"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Direct Search Desk: {siteConfig.phone}</span>
              </a>

              <a
                href="#industries"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>View Practice Areas ↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Conversion Card */}
          <div className="lg:col-span-5 w-full">
            <HeroTalentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
