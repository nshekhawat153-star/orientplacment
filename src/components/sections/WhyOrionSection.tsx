import React from "react";
import { Check, X, ShieldCheck, Zap, Award, Users, CheckCircle2 } from "lucide-react";

export function WhyOrionSection() {
  const comparisons = [
    {
      factor: "Sourcing Strategy",
      traditional: "Repurposing job board applicants & passive resume databases",
      orion: "Proactive direct headhunting of currently employed top 5% performers",
    },
    {
      factor: "Recruiter Experience",
      traditional: "Delegated to junior recruiters with high annual agency turnover",
      orion: "Direct partner leadership (Justin Sofman & Jon Missirlian) on every mandate",
    },
    {
      factor: "Candidate Vetting",
      traditional: "Basic keyword parsing and 10-minute automated screening calls",
      orion: "Multi-stage behavioral evaluation, verified track record & cultural alignment",
    },
    {
      factor: "Submission Volume",
      traditional: "High volume resume dumps (hoping something sticks in your inbox)",
      orion: "Curated shortlist of 3 to 5 interview-ready finalists with complete dossiers",
    },
    {
      factor: "Replacement Warranty",
      traditional: "Limited 30-day window or future search credit",
      orion: "Comprehensive 90 to 180-day direct replacement guarantee",
    },
    {
      factor: "Billing & Financial Risk",
      traditional: "Hefty upfront retainers or non-refundable onboarding fees",
      orion: "Contingency search: Zero upfront cost. You only pay when you successfully hire",
    },
  ];

  return (
    <section id="why-orion" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#001749]/10 text-[#001749] text-xs font-bold tracking-wide uppercase">
            <span>The Orion Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001749] tracking-tight">
            Why High-Growth Companies Choose Orion <br className="hidden sm:block" />
            <span className="italic font-normal text-[#1E5CD9]">Over Traditional Staffing Agencies</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Hiring mistakes cost companies up to 30% of a candidate’s first-year earnings in lost velocity and rehiring overhead. Here is how our model protects your time and bottom line.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="py-5 px-6 text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider w-1/4">
                    Hiring Factor
                  </th>
                  <th className="py-5 px-6 text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider w-3/8">
                    Traditional Agencies
                  </th>
                  <th className="py-5 px-6 text-xs sm:text-sm font-bold text-[#001749] bg-[#D4AF37]/10 uppercase tracking-wider w-3/8">
                    <span className="flex items-center gap-1.5 text-[#001749]">
                      <Award className="w-4 h-4 text-[#D4AF37]" />
                      <span>Orion Placement</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisons.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4.5 px-6 font-bold text-[#001749]">
                      {item.factor}
                    </td>
                    <td className="py-4.5 px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4.5 px-6 font-semibold text-slate-900 bg-[#D4AF37]/5">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[#001749] text-base mb-1">96% 12-Month Retention</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our placements stay and thrive. Nearly all candidates placed by Orion celebrate their one-year anniversary with our clients.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#001749]/10 text-[#001749] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-[#1E5CD9]" />
            </div>
            <div>
              <h4 className="font-bold text-[#001749] text-base mb-1">14-Day Average Shortlist</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accelerate hiring velocity without compromising standards. Receive 3-5 verified finalists ready for second-round stakeholder interviews.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 text-[#B89628] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[#001749] text-base mb-1">Partner Accountability</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No junior account managers. You communicate directly with Justin Sofman and Jon Missirlian throughout the lifecycle of your search.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
