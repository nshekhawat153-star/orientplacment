"use client";

import React from "react";
import { Check, X, ShieldCheck, Zap, Users, Award } from "lucide-react";
import { HiringRoiCalculator } from "./HiringRoiCalculator";

export function WhyOrionSection() {
  const comparisons = [
    {
      factor: "Sourcing Strategy",
      traditional: "Recycled job board applicants & passive resume portals",
      orion: "Proactive direct headhunting of currently employed top 5% performers",
    },
    {
      factor: "Search Leadership",
      traditional: "Delegated to junior sourcers with high annual agency turnover",
      orion: "Direct partner leadership (Justin Sofman & Jon Missirlian) on every mandate",
    },
    {
      factor: "Candidate Vetting",
      traditional: "Automated keyword screening & brief 10-minute check-ins",
      orion: "Multi-stage technical evaluation, reference audits & cultural alignment",
    },
    {
      factor: "Submission Volume",
      traditional: "High volume resume dumps into your hiring manager inbox",
      orion: "Curated shortlist of 3 to 5 interview-ready finalists with complete dossiers",
    },
    {
      factor: "Replacement Warranty",
      traditional: "Standard 30-day window or future search credit",
      orion: "Comprehensive 90 to 180-day direct replacement guarantee",
    },
    {
      factor: "Financial Risk",
      traditional: "Hefty upfront retainers or non-refundable fees",
      orion: "Contingency search: Zero upfront cost. You only pay upon successful hire",
    },
  ];

  return (
    <section id="why-orion" className="scroll-mt-24 py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E5D9C5]/50">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        {/* Editorial Split Header (SwiftPainting Archetype) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-10 border-b border-[#E5D9C5] items-end mb-12">
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
              <span>The Orion Standard</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#021124] tracking-tight leading-[1.1]">
              Why Leading Companies Choose Orion <br className="hidden sm:inline" />
              <span className="italic text-[#B8860B]">Over Traditional Agencies</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[#021124]/75 text-base sm:text-lg leading-relaxed font-normal">
              Hiring mistakes cost companies up to 30% of first-year compensation in lost momentum. Here is how our partner-led contingency model protects your time and bottom line.
            </p>
          </div>
        </div>

        {/* Comparison Table Card */}
        <div className="bg-white rounded-[28px] border border-[#E5D9C5] shadow-sm overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#E5D9C5] bg-[#021124] text-white">
                  <th className="py-4.5 px-6 text-xs font-semibold uppercase tracking-[0.15em] w-1/4">
                    Hiring Factor
                  </th>
                  <th className="py-4.5 px-6 text-xs font-semibold text-white/60 uppercase tracking-[0.15em] w-3/8">
                    Traditional Agencies
                  </th>
                  <th className="py-4.5 px-6 text-xs font-semibold text-[#EAB308] uppercase tracking-[0.15em] w-3/8">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-[#EAB308]" />
                      <span>Orion Placement</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5D9C5]/40 text-xs sm:text-sm">
                {comparisons.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F5]/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#021124]">
                      {item.factor}
                    </td>
                    <td className="py-4 px-6 text-[#021124]/60">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-medium text-[#021124] bg-[#EAB308]/[0.03]">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item.orion}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-[24px] p-7 border border-[#E5D9C5] shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/60">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#021124] mb-1">96% 12-Month Retention</h4>
              <p className="text-xs sm:text-sm text-[#021124]/70 leading-relaxed font-normal">
                Our placements stay and thrive. Nearly every candidate placed celebrates their one-year anniversary with our clients.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-7 border border-[#E5D9C5] shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#021124]/5 text-[#021124] flex items-center justify-center shrink-0 border border-[#E5D9C5]">
              <Zap className="w-6 h-6 text-[#B8860B]" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#021124] mb-1">14-Day Average Shortlist</h4>
              <p className="text-xs sm:text-sm text-[#021124]/70 leading-relaxed font-normal">
                Accelerate hiring velocity without compromising quality. Receive 3 to 5 verified finalists ready for executive interviews.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-7 border border-[#E5D9C5] shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAB308]/15 text-[#021124] flex items-center justify-center shrink-0 border border-[#EAB308]/30">
              <Users className="w-6 h-6 text-[#B8860B]" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#021124] mb-1">Direct Partner Accountability</h4>
              <p className="text-xs sm:text-sm text-[#021124]/70 leading-relaxed font-normal">
                No junior handoffs. You communicate directly with Justin Sofman and Jon Missirlian throughout every stage of your search.
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Hiring Calculator */}
        <div className="rounded-[32px] overflow-hidden shadow-lg border border-[#E5D9C5]/30">
          <HiringRoiCalculator />
        </div>
      </div>
    </section>
  );
}
