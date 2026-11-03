"use client";

import React, { useState } from "react";
import { industriesData, IndustryItem } from "@/data/industriesData";
import {
  Scale,
  Activity,
  Cpu,
  TrendingUp,
  Building2,
  Award,
  Target,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function IndustriesSection() {
  const [selectedId, setSelectedId] = useState(industriesData[0].id);

  const selectedIndustry =
    industriesData.find((item) => item.id === selectedId) || industriesData[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Scale":
        return Scale;
      case "Activity":
        return Activity;
      case "Cpu":
        return Cpu;
      case "TrendingUp":
        return TrendingUp;
      case "Building2":
        return Building2;
      case "Award":
        return Award;
      case "Target":
        return Target;
      default:
        return Building2;
    }
  };

  return (
    <section id="industries" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#001749]/10 text-[#001749] text-xs font-bold tracking-wide uppercase">
            <span>Specialized Practice Groups</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001749] tracking-tight">
            We Don&apos;t Dabble. <br className="hidden sm:block" />
            <span className="text-[#1E5CD9]">We Specialize Where Technical Precision Matters.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Hiring an intellectual property litigator is nothing like hiring a DevOps engineer. Our recruiters possess deep vertical fluency in their respective sectors.
          </p>
        </div>

        {/* Industry Switcher Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar justify-start lg:justify-center">
          {industriesData.map((ind) => {
            const Icon = getIcon(ind.iconName);
            const isSelected = ind.id === selectedId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedId(ind.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-[#001749] text-white shadow-lg shadow-[#001749]/20 scale-[1.02]"
                    : "bg-white text-slate-700 hover:text-[#001749] hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? "text-[#D4AF37]" : "text-slate-400"
                  }`}
                />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-200/80 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Info: Overview & Roles */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E5CD9] block mb-1">
                  Practice Overview
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#001749]">
                  {selectedIndustry.name}
                </h3>
                <p className="text-sm font-semibold text-slate-500 mt-1">
                  {selectedIndustry.shortDesc}
                </p>
                <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
                  {selectedIndustry.overview}
                </p>
              </div>

              {/* Roles We Place Chips */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Key Positions Frequently Placed:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.roles.map((role, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 hover:bg-[#001749] hover:text-white transition-colors"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Challenge vs Solution */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/70 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wide mb-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>The Industry Hiring Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedIndustry.keyChallenge}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wide mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>The Orion Sourcing Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedIndustry.solution}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#hero-talent-form"
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] shadow-md flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  <span>Hire for {selectedIndustry.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
