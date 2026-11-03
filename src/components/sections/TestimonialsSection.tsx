import React from "react";
import { testimonialsData } from "@/data/testimonialsData";
import { Star, CheckCircle2, Building2, ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-[#E5D9C5]/50">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        {/* Editorial Split Header (SwiftPainting Archetype) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-10 border-b border-[#E5D9C5] items-end mb-12">
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
              <span>Client & Candidate Proof</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#021124] tracking-tight leading-[1.1]">
              Verified Outcomes <br className="hidden sm:inline" />
              <span className="italic text-[#B8860B]">From Industry Leaders</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[#021124]/75 text-base sm:text-lg leading-relaxed font-normal">
              Read candid testimonials from managing partners, chief medical officers, and placed executives who have built enduring leadership teams with Orion Placement.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-[#FAF8F5] rounded-[28px] p-8 sm:p-10 border border-[#E5D9C5] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Industry */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-[#EAB308] gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#021124]/60 bg-white px-3 py-1 rounded-full border border-[#E5D9C5]">
                    {test.industry}
                  </span>
                </div>

                {/* Quote */}
                <p className="font-serif text-lg sm:text-xl text-[#021124] leading-relaxed italic mb-8">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-[#E5D9C5]/50 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#021124] flex items-center gap-1.5">
                    <span>{test.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                  </h4>
                  <p className="text-xs text-[#B8860B] font-medium mt-0.5">{test.role}</p>
                  <p className="text-[11px] text-[#021124]/50 font-normal mt-0.5">
                    {test.companyType} • {test.location}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-white border border-[#E5D9C5] flex items-center justify-center text-[#021124]/40 shrink-0">
                  <Building2 className="w-4 h-4 text-[#021124]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
