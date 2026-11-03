import React from "react";
import { Search, Users, CheckCircle, ShieldCheck, ArrowRight, Clock } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Intake Session",
      duration: "Days 1 - 2",
      description:
        "We conduct a 45-minute discovery consultation with key hiring managers to dissect hard competencies, leadership dynamics, team culture, compensation bands, and 12-month success KPIs.",
      points: [
        "Creation of targeted candidate scorecard",
        "Compensation benchmarking vs current market",
        "Defining non-negotiable culture & skill criteria",
      ],
      icon: Search,
    },
    {
      num: "02",
      title: "Proactive Passive Headhunting",
      duration: "Days 3 - 7",
      description:
        "We tap into our proprietary nationwide talent database of 50,000+ vetted professionals and launch direct outbound approaches to top 5% performers currently employed and thriving elsewhere.",
      points: [
        "Confidential approaches without employer exposure",
        "Exhaustive industry competitor mapping",
        "Engaging passive stars not found on job boards",
      ],
      icon: Users,
    },
    {
      num: "03",
      title: "360° Vetting & Shortlist Dossier",
      duration: "Days 8 - 12",
      description:
        "Every candidate undergoes thorough behavioral interviews, work history verification, and background checks. We deliver an interview-ready shortlist of 3 to 5 premier contenders.",
      points: [
        "Comprehensive candidate executive profiles",
        "Salary expectation & motivation confirmation",
        "Pre-verified references & credentials",
      ],
      icon: CheckCircle,
    },
    {
      num: "04",
      title: "Offer Closing & 90-Day Integration",
      duration: "Days 14 - 21",
      description:
        "We orchestrate interview schedules, debrief candidates, negotiate offers, successfully navigate counteroffers, and maintain structured 30/60/90-day integration touchpoints.",
      points: [
        "90 to 180-day direct replacement warranty",
        "Delicate compensation & equity alignment",
        "Seamless onboarding and start date assurance",
      ],
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="process" className="scroll-mt-28 py-20 md:py-28 bg-[#001749] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E5CD9]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold tracking-wide uppercase border border-white/15">
            <span>The Orion Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Recruitment Process: <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FDE047]">
              Built for Precision and Efficiency
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Eliminate weeks of resume screening and awkward interviews. Our four-step search methodology delivers verified finalists with zero wasted time.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:bg-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity">
                      {step.num}
                    </span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[11px] font-semibold text-slate-300">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 text-xs text-slate-300 pt-4 border-t border-white/10">
                    {step.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Step {idx + 1} of 4</span>
                  <span className="text-[#D4AF37] font-semibold">100% Confidential</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-14 text-center">
          <a
            href="#hero-talent-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Initiate A Confidential Search Request</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
