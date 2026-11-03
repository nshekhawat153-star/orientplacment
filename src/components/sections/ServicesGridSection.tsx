"use client";

import React from "react";
import { servicesData, ServiceItem } from "@/data/servicesData";
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
    <section id="services" className="scroll-mt-28 py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E5CD9]/10 text-[#1E5CD9] text-xs font-bold tracking-wide uppercase">
            <span>Flexible Engagement Models</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001749] tracking-tight">
            Tailored Search Models <br className="hidden sm:block" />
            <span className="text-[#1E5CD9]">Engineered For Your Growth Stage</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Whether you need a confidential C-suite executive search, rapid contract surge staffing, or contingency permanent hiring, we tailor our engagement terms to your budget and timeline.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 ${
                  service.popular
                    ? "bg-[#001749] text-white shadow-xl shadow-[#001749]/15 border-2 border-[#D4AF37]"
                    : "bg-slate-50/70 text-slate-800 border border-slate-200/80 hover:bg-white hover:border-[#D4AF37]/50"
                }`}
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Requested</span>
                  </div>
                )}

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        service.popular
                          ? "bg-white/10 text-[#D4AF37]"
                          : "bg-[#001749]/10 text-[#001749]"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        service.popular
                          ? "bg-white/15 text-slate-200"
                          : "bg-slate-200/70 text-slate-700"
                      }`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h3
                    className={`text-xl font-bold tracking-tight mb-2 ${
                      service.popular ? "text-white" : "text-[#001749]"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm font-medium mb-4 leading-relaxed ${
                      service.popular ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {service.headline}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 my-6 text-xs sm:text-sm">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            service.popular ? "text-[#D4AF37]" : "text-emerald-600"
                          }`}
                        />
                        <span className={service.popular ? "text-slate-200" : "text-slate-700"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-200/40">
                  <div className="mb-4">
                    <span
                      className={`text-[11px] font-semibold block ${
                        service.popular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Warranty Protection:
                    </span>
                    <span
                      className={`text-xs font-bold flex items-center gap-1 ${
                        service.popular ? "text-[#D4AF37]" : "text-[#001749]"
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      {service.guarantee}
                    </span>
                  </div>

                  <a
                    href="#hero-talent-form"
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                      service.popular
                        ? "bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-slate-950 hover:shadow-lg hover:shadow-[#D4AF37]/30"
                        : "bg-[#001749] text-white hover:bg-[#0A2566]"
                    }`}
                  >
                    <span>Request Talent</span>
                    <ArrowRight className="w-4 h-4" />
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
