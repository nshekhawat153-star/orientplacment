import React from "react";
import { testimonialsData } from "@/data/testimonialsData";
import { Star, CheckCircle2, Building2, ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-[#CBD5E1]/60">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        {/* Editorial Split Header (SwiftPainting Archetype) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-10 border-b border-[#CBD5E1] items-end mb-12">
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
              <span>Client & Candidate Proof</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#040D21] tracking-tight leading-[1.1]">
              Verified Outcomes <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#0284C7]">From Industry Leaders</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Read candid testimonials from managing partners, chief medical officers, and placed executives who have built enduring leadership teams with Orion Placement.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-[#FAFBFD] rounded-[28px] p-8 sm:p-10 border border-[#CBD5E1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Industry */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-[#00D2FF] gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#00D2FF] text-[#00D2FF]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200">
                    {test.industry}
                  </span>
                </div>

                {/* Quote */}
                <p className="font-serif text-lg sm:text-xl text-[#040D21] leading-relaxed italic mb-8">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#040D21] flex items-center gap-1.5">
                    <span>{test.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                  </h4>
                  <p className="text-xs text-[#0284C7] font-semibold mt-0.5">{test.role}</p>
                  <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                    {test.companyType} • {test.location}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                  <Building2 className="w-4 h-4 text-[#040D21]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
