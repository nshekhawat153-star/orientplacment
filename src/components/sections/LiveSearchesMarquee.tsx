"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function LiveSearchesMarquee() {
  const activeSearches = [
    {
      role: "Commercial Litigation Partner",
      industry: "Legal",
      location: "Florham Park, NJ",
      comp: "$280K – $420K",
      status: "Final Interviews",
      urgent: true,
    },
    {
      role: "VP of Cloud & DevOps Architecture",
      industry: "Technology",
      location: "New York, NY",
      comp: "$225K – $275K",
      status: "Shortlist Presented",
      urgent: false,
    },
    {
      role: "Clinical Operations Director",
      industry: "Healthcare",
      location: "Philadelphia, PA",
      comp: "$165K – $195K",
      status: "Active Sourcing",
      urgent: true,
    },
    {
      role: "Chief Financial Officer (CFO)",
      industry: "Real Estate Dev.",
      location: "Austin, TX",
      comp: "$250K – $320K",
      status: "Offer Extended",
      urgent: false,
    },
    {
      role: "Chief Estimator (Commercial GC)",
      industry: "Construction",
      location: "Tampa, FL",
      comp: "$170K – $210K",
      status: "Candidate Review",
      urgent: true,
    },
    {
      role: "Senior Corporate Counsel (M&A)",
      industry: "Legal",
      location: "Boston, MA",
      comp: "$210K – $260K",
      status: "Confidential Sourcing",
      urgent: false,
    },
  ];

  const marqueeItems = [...activeSearches, ...activeSearches];

  return (
    <div className="w-full bg-[#030917] border-y border-white/10 py-3.5 overflow-hidden relative z-10">
      {/* Edge Fades for Depth */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030917] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030917] to-transparent z-10 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 flex items-center gap-4 mb-2">
        <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00D2FF] shrink-0 bg-[#00D2FF]/10 px-2.5 py-1 rounded-full border border-[#00D2FF]/25">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live Search Desk
        </span>
        <span className="text-xs text-slate-400 font-normal truncate">
          Active Executive Requisitions Across 48 States • Confidential Representation
        </span>
      </div>

      <div className="flex gap-3 animate-marquee-left whitespace-nowrap py-1">
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-[#00D2FF]/50 hover:bg-white/[0.06] transition-all shrink-0 cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-white/95 group-hover:text-[#00D2FF] transition-colors">
                {item.role}
              </span>
              {item.urgent && (
                <span className="px-1.5 py-0.2 rounded-full text-[9px] font-semibold bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/30">
                  Urgent
                </span>
              )}
            </div>

            <span className="text-[11px] text-white/40">•</span>

            <span className="text-[11px] text-white/60">
              {item.location}
            </span>

            <span className="text-[11px] text-white/40">•</span>

            <span className="text-[11px] font-medium text-emerald-400">
              {item.comp}
            </span>

            <span className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-white/10 text-white/70">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
