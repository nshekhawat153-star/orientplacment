import React from "react";
import { testimonialsData } from "@/data/testimonialsData";
import { Star, CheckCircle2, Building, ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-28 py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wide uppercase border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Hiring Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001749] tracking-tight">
            Trusted by Managing Partners, <br className="hidden sm:block" />
            <span className="italic font-normal text-[#1E5CD9]">Chief Medical Officers & Tech Founders</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Read candid feedback from organizational leaders who have built high-impact teams with Orion Placement.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-slate-50/70 rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#D4AF37]/50"
            >
              <div>
                {/* Header: Stars & Industry */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    {test.industry}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed italic mb-6">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#001749] flex items-center gap-1.5">
                    <span>{test.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />
                  </h4>
                  <p className="text-xs text-[#1E5CD9] font-medium">{test.role}</p>
                  <p className="text-[11px] text-slate-400 font-normal">{test.companyType} • {test.location}</p>
                </div>

                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                  <Building className="w-5 h-5 text-[#001749]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
