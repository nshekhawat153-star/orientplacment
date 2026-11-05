"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, ShieldCheck } from "lucide-react";

export function HiringRoiCalculator() {
  const [salary, setSalary] = useState(165000);
  const urgencyDays = 14;

  // SHRM / Harvard Business Review Cost of Vacancy benchmark:
  // An unfilled critical professional role costs roughly 1.5x base salary per year.
  // Daily vacancy cost = (Salary * 1.5) / 250 working days.
  const dailyVacancyCost = Math.round((salary * 1.5) / 250);

  // Industry average time to fill = 62 days (SHRM benchmark)
  const industryDays = 62;
  const daysSaved = Math.max(0, industryDays - urgencyDays);
  const totalValueSaved = Math.round(daysSaved * dailyVacancyCost);

  return (
    <div id="roi-calculator" className="py-16 sm:py-20 bg-[#040D21] text-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/10 text-[#00D2FF] text-xs font-semibold uppercase tracking-[0.2em] border border-[#00D2FF]/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Vacancy Intelligence</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Calculate the Cost of Your <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#00D2FF]">Unfilled Positions</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-normal">
            Vacant leadership seats quietly drain revenue and burn out teams. See how quickly Orion’s 14-day turnaround protects your bottom line.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6 sm:p-10 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                  Target Role Base Salary:
                </label>
                <span className="font-serif text-2xl sm:text-3xl text-[#00D2FF]">
                  ${salary.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="80000"
                max="350000"
                step="5000"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#00D2FF]"
              />
              <div className="flex justify-between text-[11px] text-white/40 mt-2 font-medium">
                <span>$80K (Mid-Level)</span>
                <span>$200K (Director)</span>
                <span>$350K+ (C-Suite)</span>
              </div>
            </div>

            {/* Metric Comparison Pills */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-4 rounded-[20px] border border-white/10 text-left">
                <span className="text-[10px] text-white/50 block uppercase tracking-wider font-semibold">
                  Standard Agency Fill:
                </span>
                <span className="font-serif text-2xl text-rose-400 mt-0.5 block">
                  62 Days
                </span>
                <span className="text-[10px] text-white/40">Industry avg. (SHRM data)</span>
              </div>

              <div className="bg-[#00D2FF]/10 p-4 rounded-[20px] border border-[#00D2FF]/30 text-left">
                <span className="text-[10px] text-[#00D2FF] block uppercase tracking-wider font-semibold">
                  Orion Shortlist:
                </span>
                <span className="font-serif text-2xl text-emerald-400 mt-0.5 block">
                  14 Days
                </span>
                <span className="text-[10px] text-white/60">Vetted interview finalists</span>
              </div>
            </div>

            <div className="text-xs text-white/50 leading-relaxed font-normal border-l-2 border-[#00D2FF] pl-3 italic">
              SHRM Standard: Critical vacancy cost is benchmarked at 1.5x base compensation in lost organizational velocity.
            </div>
          </div>

          {/* Value Outcome Display Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#071630] to-[#040D21] p-7 sm:p-8 rounded-[24px] border border-white/10 space-y-6 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] font-semibold uppercase tracking-[0.2em] border border-emerald-500/25">
              Estimated Value Saved With Orion
            </div>

            <div>
              <div className="font-serif text-4xl sm:text-5xl text-white tracking-tight">
                ${totalValueSaved.toLocaleString()}
              </div>
              <p className="text-xs text-white/65 mt-1 font-medium">
                In productivity, revenue protection, and overtime mitigation
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 text-left border-t border-white/10">
              <div>
                <span className="text-[10px] text-white/40 uppercase font-semibold block">
                  Daily Cost of Vacancy:
                </span>
                <span className="text-sm font-semibold text-[#00D2FF]">
                  ${dailyVacancyCost.toLocaleString()}/day
                </span>
              </div>
              <div>
                <span className="text-[10px] text-white/40 uppercase font-semibold block">
                  Hiring Velocity Gain:
                </span>
                <span className="text-sm font-semibold text-emerald-400">
                  {daysSaved} Days Faster
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#hero-talent-form"
                className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-[#040D21] bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 duration-200"
              >
                <span>Initiate A 14-Day Search For This Role</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-[11px] text-white/50">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                90-Day Warranty
              </span>
              <span>•</span>
              <span>Contingency Model (Zero Upfront)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
