"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, ShieldCheck, Clock, TrendingUp, Sparkles, DollarSign } from "lucide-react";

export function HiringRoiCalculator() {
  const [salary, setSalary] = useState(165000);
  const [urgencyDays, setUrgencyDays] = useState(14); // Orion time to shortlist

  // SHRM / Harvard Business Review Cost of Vacancy benchmark:
  // An unfilled critical professional role costs roughly 1.5x base salary per year in lost productivity, burn-out & missed revenue.
  // Daily vacancy cost = (Salary * 1.5) / 250 working days.
  const dailyVacancyCost = Math.round((salary * 1.5) / 250);

  // Industry average time to fill = 62 days (SHRM benchmark)
  const industryDays = 62;
  const daysSaved = Math.max(0, industryDays - urgencyDays);
  const totalValueSaved = Math.round(daysSaved * dailyVacancyCost);

  return (
    <section id="roi-calculator" className="scroll-mt-28 py-20 md:py-24 bg-gradient-to-b from-[#000F2E] via-[#001749] to-[#000F2E] text-white border-y border-slate-800 relative overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#1E5CD9]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold uppercase tracking-wider border border-[#D4AF37]/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Executive Search Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Calculate the Real Cost of Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FDE047] to-[#EAB308]">
              Unfilled Positions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            Vacant leadership and technical seats quietly drain revenue, burn out existing teams, and stall momentum. See how quickly Orion’s 14-day turnaround protects your bottom line.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-8">
            {/* Slider 1: Salary */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Target Role Base Salary:
                </label>
                <span className="text-2xl font-black text-[#D4AF37]">
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
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                <span>$80K (Mid-Level)</span>
                <span>$200K (Director)</span>
                <span>$350K+ (C-Suite)</span>
              </div>
            </div>

            {/* Metric Comparison Pills */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-left">
                <span className="text-[11px] text-slate-400 block font-semibold">
                  Standard Agency Time-to-Fill:
                </span>
                <span className="text-2xl font-bold text-red-400 mt-0.5 block">
                  62 Days
                </span>
                <span className="text-[10px] text-slate-500">Industry avg. (SHRM data)</span>
              </div>

              <div className="bg-[#D4AF37]/10 p-4 rounded-2xl border border-[#D4AF37]/30 text-left">
                <span className="text-[11px] text-[#D4AF37] block font-semibold">
                  Orion Placement Shortlist:
                </span>
                <span className="text-2xl font-bold text-emerald-400 mt-0.5 block">
                  14 Days
                </span>
                <span className="text-[10px] text-slate-400">Vetted interview finalists</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 leading-relaxed font-normal border-l-2 border-[#D4AF37] pl-3 italic">
              Calculation standard: Critical professional vacancy cost is benchmarked at 1.5x base compensation in lost organizational velocity and team overtime.
            </div>
          </div>

          {/* Value Outcome Display Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#001749] to-[#0A2566] p-6 sm:p-8 rounded-2xl border-2 border-[#D4AF37]/40 shadow-xl space-y-6 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              Estimated Value Saved With Orion
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                ${totalValueSaved.toLocaleString()}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                In productivity, revenue protection, and overtime mitigation
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 text-left border-t border-white/10">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                  Daily Cost of Vacancy:
                </span>
                <span className="text-base font-bold text-[#D4AF37]">
                  ${dailyVacancyCost.toLocaleString()}/day
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                  Hiring Velocity Gain:
                </span>
                <span className="text-base font-bold text-emerald-400">
                  {daysSaved} Days Faster
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#hero-talent-form"
                className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Initiate A 14-Day Search For This Role</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                90-Day Warranty
              </span>
              <span>•</span>
              <span>Zero Upfront Retainer (Contingency)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
