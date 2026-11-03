import React from "react";
import { ShieldCheck, Award, Briefcase, TrendingUp, CheckCircle, Scale, Building2, Stethoscope, Laptop } from "lucide-react";

export function TrustBarSection() {
  const credentials = [
    { label: "AmLaw 200 & Boutique Legal Firms", icon: Scale },
    { label: "Multi-Hospital & Clinical Networks", icon: Stethoscope },
    { label: "PE-Backed Mid-Market Enterprises", icon: TrendingUp },
    { label: "Venture-Backed Cloud & SaaS Teams", icon: Laptop },
    { label: "Commercial GCs & Real Estate Groups", icon: Building2 },
  ];

  return (
    <section className="bg-slate-900 border-b border-slate-800 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            PROVEN TRACK RECORD NATIONWIDE
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Trusted by Fast-Growing Companies and Industry Leaders Across 48 States
          </h3>
        </div>

        {/* Credentials Pills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {credentials.map((cred, idx) => {
            const IconComponent = cred.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-200 leading-tight">
                  {cred.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Big Highlights Row */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">$240M+</div>
            <div className="text-xs text-slate-400 mt-0.5">Total Compensation Placed</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#D4AF37]">1,200+</div>
            <div className="text-xs text-slate-400 mt-0.5">Verified Hires Completed</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white">96%</div>
            <div className="text-xs text-slate-400 mt-0.5">12-Month Retention Rate</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 mt-0.5">Direct Hire Replacement Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}
