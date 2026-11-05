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
    <section id="industries" className="scroll-mt-24 py-20 lg:py-28 bg-[#FAFBFD] border-b border-[#CBD5E1]/60">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        {/* Editorial Split Header (SwiftPainting Archetype) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-10 border-b border-[#CBD5E1] items-end mb-12">
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
              <span>Practice Groups</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#040D21] tracking-tight leading-[1.1]">
              Specialized Sectors <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#0284C7]">Where Precision Matters</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
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
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-[#040D21] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:text-[#040D21] hover:bg-slate-50 border border-[#CBD5E1]"
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isSelected ? "text-[#00D2FF]" : "text-slate-400"
                  }`}
                />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Practice Showcase Card */}
        <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-sm border border-[#CBD5E1] animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Info: Overview & Roles */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
                    Sector Intelligence
                  </span>
                  <span className="text-xs font-medium px-3 py-0.5 rounded-full bg-[#FAFBFD] text-slate-700 border border-slate-200 flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-[#0284C7]" />
                    {selectedIndustry.talentPool}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#040D21] tracking-tight">
                  {selectedIndustry.name}
                </h3>
                <p className="text-sm font-medium text-slate-500 mt-1">
                  {selectedIndustry.shortDesc}
                </p>
                <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
                  {selectedIndustry.overview}
                </p>
              </div>

              {/* Benchmark Data Strip */}
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="p-4 rounded-[20px] bg-[#FAFBFD] border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-[0.15em] block">
                    Compensation Range
                  </span>
                  <span className="font-serif text-lg sm:text-xl text-[#040D21] mt-0.5 block">
                    {selectedIndustry.salaryBand}
                  </span>
                </div>
                <div className="p-4 rounded-[20px] bg-[#FAFBFD] border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-[0.15em] block">
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
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#040D21] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  <span>Key Positions Frequently Placed:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.roles.slice(0, 5).map((role, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#FAFBFD] text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Challenge vs Solution */}
            <div className="lg:col-span-5 bg-[#FAFBFD] rounded-[24px] p-7 sm:p-8 border border-slate-200 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-sky-950 font-semibold text-xs uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4 text-[#0284C7]" />
                  <span>The Market Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {selectedIndustry.keyChallenge}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-emerald-950 font-semibold text-xs uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>The Orion Sourcing Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {selectedIndustry.solution}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#hero-talent-form"
                  className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-[#040D21] bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] hover:brightness-105 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
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
