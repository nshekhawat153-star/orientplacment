"use client";

import React from "react";
import { Sparkles, MapPin, Building, ArrowUpRight } from "lucide-react";

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
      location: "New York, NY / Hybrid",
      comp: "$225K – $275K + Equity",
      status: "Shortlist Presented",
      urgent: false,
    },
    {
      role: "Clinical Operations Director",
      industry: "Healthcare",
      location: "Philadelphia, PA",
      comp: "$165K – $195K",
      status: "Active Search",
      urgent: true,
    },
    {
      role: "Chief Financial Officer (CFO)",
      industry: "Real Estate Dev.",
      location: "Austin, TX",
      comp: "$250K – $320K + Bonus",
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
    {
      role: "Practice Administrator (Surgical)",
      industry: "Healthcare",
      location: "Newark, NJ",
      comp: "$145K – $175K",
      status: "Recently Placed",
      urgent: false,
    },
  ];

  // Duplicate for smooth seamless infinite marquee
  const marqueeItems = [...activeSearches, ...activeSearches];

  return (
    <div className="w-full bg-[#000F2E] border-y border-slate-800/80 py-4 overflow-hidden relative">
      {/* Edge Fades for Luxury Depth */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#000F2E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#000F2E] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-4 mb-2 px-6">
        <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#D4AF37] shrink-0 bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Live Search Desk
        </span>
        <span className="text-xs text-slate-400 font-medium truncate">
          Active Executive Requisitions & Recent Candidate Placements Across 48 States
        </span>
      </div>

      <div className="flex gap-4 animate-marquee-left whitespace-nowrap py-1">
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all shrink-0 cursor-pointer group"
          >
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.role}
                </span>
                {item.urgent && (
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Urgent
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                <span className="text-slate-300 font-medium">{item.industry}</span>
                <span>•</span>
                <span>{item.location}</span>
                <span>•</span>
                <span className="font-semibold text-emerald-400">{item.comp}</span>
              </div>
            </div>

            <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-slate-300">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
