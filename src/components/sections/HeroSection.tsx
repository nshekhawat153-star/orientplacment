"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Star, CheckCircle2, ShieldCheck, Award, ArrowRight, Phone } from "lucide-react";
import { HeroTalentForm } from "./HeroTalentForm";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 lg:pt-44 pb-16 md:pb-28 text-white overflow-hidden border-b border-slate-800 bg-[#021124] w-full max-w-full"
    >
      {/* Background Image Layer with Dark Luxury Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/about-team.jpg"
          alt="Orion Placement Executive Headquarters"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021124] via-[#021124]/90 to-[#021124]/60" />
      </div>

      {/* 1400px Container Matching SwiftPainting Alignment */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-7 text-left">
            
            {/* Kicker Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-sans font-extrabold uppercase tracking-widest text-[#EAB308] backdrop-blur-md max-w-full">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#EAB308] text-[#EAB308] shrink-0" />
              <span className="truncate">EXECUTIVE SEARCH &amp; SPECIALIZED STAFFING</span>
            </div>

            {/* H1 Title with Luxury Editorial Instrument Serif */}
            <h1 className="text-[40px] sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-[1.06] sm:leading-[1.08] tracking-tight font-normal">
              Connecting High-Caliber Talent With{" "}
              <span className="italic font-normal text-[#EAB308]">
                Industry Leaders
              </span>
            </h1>

            {/* Rating Social Proof Line */}
            <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-sans font-semibold text-slate-200">
              <div className="flex text-[#EAB308] shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-[#EAB308] text-[#EAB308]" />
                ))}
              </div>
              <span className="truncate">
                <strong className="text-white">4.9★ Rating</strong> (350+ Executive Placements) Nationwide
              </span>
            </div>

            {/* Crisp Human Copy (Reduced density) */}
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-sans max-w-2xl font-normal">
              From critical C-suite officers and legal counsel to specialized clinical leaders and high-impact engineering teams. Orion Placement delivers interview-ready finalists in days—not months.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#hero-form-card"
                className="bg-[#EAB308] text-slate-950 hover:bg-[#FACC15] font-sans font-extrabold text-sm sm:text-base uppercase tracking-wider py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center group cursor-pointer"
              >
                <span>Request Candidate Shortlist</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="border-2 border-white/20 hover:border-[#EAB308] bg-white/5 hover:bg-white/10 text-white font-sans font-bold text-sm sm:text-base py-3.5 sm:py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#EAB308]" />
                <span>Call (201) 572-9538</span>
              </a>
            </div>

            {/* 3 Glassmorphism Trust Badges Bar */}
            <div className="pt-5 sm:pt-7 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 text-xs sm:text-sm font-sans font-bold text-white">
              <div className="bg-white/10 backdrop-blur-md border border-[#EAB308]/40 hover:border-[#EAB308] p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2.5 sm:gap-3 transition-all group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EAB308]/20 border border-[#EAB308]/40 flex items-center justify-center text-[#EAB308] shrink-0 group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#EAB308]" />
                </div>
                <span className="font-sans font-bold text-xs sm:text-sm text-white leading-tight">
                  100% Contingency (Zero Upfront)
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-[#EAB308]/40 hover:border-[#EAB308] p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2.5 sm:gap-3 transition-all group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EAB308]/20 border border-[#EAB308]/40 flex items-center justify-center text-[#EAB308] shrink-0 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#EAB308]" />
                </div>
                <span className="font-sans font-bold text-xs sm:text-sm text-white leading-tight">
                  90-Day Placement Warranty
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-[#EAB308]/40 hover:border-[#EAB308] p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2.5 sm:gap-3 transition-all group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EAB308]/20 border border-[#EAB308]/40 flex items-center justify-center text-[#EAB308] shrink-0 group-hover:scale-105 transition-transform">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#EAB308]" />
                </div>
                <span className="font-sans font-bold text-xs sm:text-sm text-white leading-tight">
                  Top 5% Passive Performers
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating 2-Step Form Card */}
          <HeroTalentForm />

        </div>
      </div>
    </section>
  );
}
