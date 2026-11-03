"use client";

import React, { useState } from "react";
import { industriesData } from "@/data/industriesData";
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
  Clock,
  Users,
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
    <section id="industries" className="scroll-mt-24 py-20 lg:py-28 bg-[#F5F2EB] border-b border-[#E5D9C5]/60">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        {/* Editorial Split Header (SwiftPainting Archetype) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-10 border-b border-[#E5D9C5] items-end mb-12">
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
              <span>Practice Groups</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#021124] tracking-tight leading-[1.1]">
              Specialized Sectors <br className="hidden sm:inline" />
              <span className="italic text-[#B8860B]">Where Precision Matters</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[#021124]/75 text-base sm:text-lg leading-relaxed font-normal">
              Hiring an IP litigator requires completely different industry fluency than placing a Cloud Architect. Our search partners operate exclusively within dedicated vertical practices.
            </p>
          </div>
        </div>

        {/* Practice Switcher Horizontal Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 no-scrollbar justify-start lg:justify-center mb-8">
          {industriesData.map((ind) => {
            const Icon = getIcon(ind.iconName);
            const isSelected = ind.id === selectedId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedId(ind.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-[#021124] text-white shadow-md"
                    : "bg-white text-[#021124]/70 hover:text-[#021124] hover:bg-[#FAF8F5] border border-[#E5D9C5]"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isSelected ? "text-[#EAB308]" : "text-[#021124]/40"
                  }`}
                />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Practice Showcase Card */}
        <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-sm border border-[#E5D9C5] animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Info: Overview & Roles */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B8860B]">
                    Sector Intelligence
                  </span>
                  <span className="text-xs font-medium px-3 py-0.5 rounded-full bg-[#FAF8F5] text-[#021124]/70 border border-[#E5D9C5] flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-[#B8860B]" />
                    {selectedIndustry.talentPool}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#021124] tracking-tight">
                  {selectedIndustry.name}
                </h3>
                <p className="text-sm font-medium text-[#021124]/60 mt-1">
                  {selectedIndustry.shortDesc}
                </p>
                <p className="text-sm sm:text-base text-[#021124]/75 mt-4 leading-relaxed font-normal">
                  {selectedIndustry.overview}
                </p>
              </div>

              {/* Benchmark Data Strip */}
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="p-4 rounded-[20px] bg-[#FAF8F5] border border-[#E5D9C5]">
                  <span className="text-[10px] text-[#021124]/50 font-semibold uppercase tracking-[0.15em] block">
                    Compensation Range
                  </span>
                  <span className="font-serif text-lg sm:text-xl text-[#021124] mt-0.5 block">
                    {selectedIndustry.salaryBand}
                  </span>
                </div>
                <div className="p-4 rounded-[20px] bg-[#FAF8F5] border border-[#E5D9C5]">
                  <span className="text-[10px] text-[#021124]/50 font-semibold uppercase tracking-[0.15em] block">
                    Turnaround to Shortlist
                  </span>
                  <span className="font-serif text-lg sm:text-xl text-emerald-800 mt-0.5 block flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    {selectedIndustry.avgTurnaround}
                  </span>
                </div>
              </div>

              {/* Roles Frequently Placed */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#021124]/70 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Key Positions Frequently Placed:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.roles.slice(0, 5).map((role, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#FAF8F5] text-[#021124] text-xs font-medium border border-[#E5D9C5]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Challenge vs Solution */}
            <div className="lg:col-span-5 bg-[#FAF8F5] rounded-[24px] p-7 sm:p-8 border border-[#E5D9C5] space-y-6">
              <div>
                <div className="flex items-center gap-2 text-amber-900 font-semibold text-xs uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>The Market Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-[#021124]/75 leading-relaxed font-normal">
                  {selectedIndustry.keyChallenge}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5D9C5]">
                <div className="flex items-center gap-2 text-emerald-950 font-semibold text-xs uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>The Orion Sourcing Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-[#021124]/75 leading-relaxed font-normal">
                  {selectedIndustry.solution}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#hero-talent-form"
                  className="w-full py-3.5 px-6 rounded-full text-xs font-semibold text-[#021124] bg-[#EAB308] hover:bg-[#CA8A04] shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <span>Request Shortlist for {selectedIndustry.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
