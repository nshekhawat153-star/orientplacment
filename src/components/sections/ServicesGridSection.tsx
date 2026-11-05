"use client";

import React from "react";
import { servicesData } from "@/data/servicesData";
import { CheckCircle2, ShieldCheck, UserCheck, Clock, Briefcase, ArrowRight, Sparkles } from "lucide-react";

export function ServicesGridSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "UserCheck":
        return UserCheck;
      case "ShieldCheck":
        return ShieldCheck;
      case "Clock":
        return Clock;
      case "Briefcase":
        return Briefcase;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="services" className="scroll-mt-24 py-20 lg:py-28 bg-[#FAFBFD] border-b border-[#CBD5E1]/60">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        {/* Editorial Split Header (SwiftPainting Archetype) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-10 border-b border-[#CBD5E1] items-end mb-12">
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
              <span>Engagement Models</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#040D21] tracking-tight leading-[1.1]">
              Flexible Search Models <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#0284C7]">Engineered for Velocity</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Whether you need discreet C-suite headhunting, rapid contingency permanent hires, or agile contract surge staffing, our terms align directly to your timeline with zero financial risk.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const IconComponent = getIcon(service.iconName);
            const isFeatured = service.popular;

            return (
              <div
                key={service.id}
                className={`relative rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                  isFeatured
                    ? "bg-[#040D21] text-white border-2 border-[#00D2FF] shadow-lg shadow-[#00D2FF]/10"
                    : "bg-white text-[#040D21] border border-[#CBD5E1] hover:border-[#00D2FF]/50"
                }`}
              >
                {/* Popular Pill */}
                {isFeatured && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] text-[#040D21] font-bold text-[10px] uppercase tracking-[0.18em] shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Requested</span>
                  </div>
                )}

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isFeatured
                          ? "bg-[#00D2FF]/15 text-[#00D2FF]"
                          : "bg-[#040D21]/5 text-[#040D21]"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-[0.15em] px-3 py-1 rounded-full ${
                        isFeatured
                          ? "bg-white/10 text-white/90 border border-white/15"
                          : "bg-[#FAFBFD] text-slate-600 border border-slate-200"
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h3
                    className={`font-serif text-2xl tracking-tight mb-2 ${
                      isFeatured ? "text-white" : "text-[#040D21]"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mb-6 leading-relaxed ${
                      isFeatured ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {service.headline}
                  </p>

                  {/* Streamlined Features (Top 3 only to avoid walls of text) */}
                  <ul className="space-y-2.5 my-6 text-xs sm:text-sm">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isFeatured ? "text-[#00D2FF]" : "text-[#0284C7]"
                          }`}
                        />
                        <span className={isFeatured ? "text-white/90" : "text-slate-700"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-200/40 mt-4">
                  <div className="mb-4">
                    <span
                      className={`text-[10px] uppercase tracking-wider block font-medium ${
                        isFeatured ? "text-white/50" : "text-slate-400"
                      }`}
                    >
                      Warranty Protection:
                    </span>
                    <span
                      className={`text-xs font-semibold flex items-center gap-1.5 mt-0.5 ${
                        isFeatured ? "text-[#00D2FF]" : "text-[#040D21]"
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      {service.guarantee}
                    </span>
                  </div>

                  <a
                    href="#hero-talent-form"
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm ${
                      isFeatured
                        ? "bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] text-[#040D21] hover:brightness-105 font-bold"
                        : "bg-[#040D21] hover:bg-[#00D2FF] hover:text-[#040D21] text-white"
                    }`}
                  >
                    <span>Request Talent</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
