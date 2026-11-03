import React from "react";
import { Scale, Stethoscope, TrendingUp, Laptop, Building2 } from "lucide-react";

export function TrustBarSection() {
  const credentials = [
    { label: "AmLaw 200 & Boutique Legal", icon: Scale },
    { label: "Health Systems & Clinical Networks", icon: Stethoscope },
    { label: "PE-Backed Mid-Market Firms", icon: TrendingUp },
    { label: "Venture-Backed Cloud & SaaS", icon: Laptop },
    { label: "Commercial GCs & Real Estate", icon: Building2 },
  ];

  return (
    <section className="bg-[#021124] border-b border-[#E5D9C5]/15 text-white py-12 relative z-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        {/* Practice Network Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {credentials.map((cred, idx) => {
            const IconComponent = cred.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-[#E5D9C5]/20 hover:border-[#EAB308]/50 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="w-5 h-5 rounded-full bg-[#EAB308]/15 text-[#EAB308] flex items-center justify-center shrink-0">
                  <IconComponent className="w-3 h-3" />
                </div>
                <span className="text-xs font-medium text-white/90 tracking-wide">
                  {cred.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* 4 Big Luxury Editorial Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#E5D9C5]/15 text-center">
          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              $240M<span className="text-[#EAB308]">+</span>
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/60 font-medium">
              Compensation Placed
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#EAB308] tracking-tight">
              1,200<span className="text-white">+</span>
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/60 font-medium">
              Hires Completed
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              96<span className="text-[#EAB308]">%</span>
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/60 font-medium">
              12-Month Retention
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-emerald-400 tracking-tight">
              100<span className="text-white">%</span>
            </div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/60 font-medium">
              Contingency Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
