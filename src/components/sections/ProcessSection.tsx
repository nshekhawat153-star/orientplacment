import React from "react";
import { Search, Users, CheckCircle, ShieldCheck, ArrowRight, Clock } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Intake & Role Calibration",
      duration: "Days 1 – 2",
      description:
        "A rigorous 45-minute discovery consultation dissecting non-negotiable competencies, team chemistry, compensation bands, and 12-month deliverables.",
      points: [
        "Candidate scorecard & benchmark calibration",
        "Competency & culture non-negotiables",
        "Direct consultation with hiring stakeholders",
      ],
      icon: Search,
    },
    {
      num: "02",
      title: "Passive Headhunting",
      duration: "Days 3 – 7",
      description:
        "Direct outreach to currently employed top 5% performers in our proprietary nationwide network of 50,000+ vetted industry professionals.",
      points: [
        "Confidential direct outreach to passive talent",
        "Competitor organizational mapping",
        "Strictly verified career achievements",
      ],
      icon: Users,
    },
    {
      num: "03",
      title: "Dossier & Finalist Shortlist",
      duration: "Days 8 – 12",
      description:
        "Every candidate undergoes multi-stage technical and behavioral evaluation. We present a curated dossier of 3 to 5 interview-ready finalists.",
      points: [
        "Executive profiles with reference audits",
        "Pre-confirmed compensation expectations",
        "Zero resume dumping — only top contenders",
      ],
      icon: CheckCircle,
    },
    {
      num: "04",
      title: "Closing & 90-Day Warranty",
      duration: "Days 14 – 21",
      description:
        "We coordinate interviews, structure competitive offers, neutralize counteroffers, and maintain 30/60/90-day integration touchpoints.",
      points: [
        "Up to 180-day direct replacement warranty",
        "Offer acceptance & counteroffer mitigation",
        "Zero upfront cost on contingency searches",
      ],
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="process" className="scroll-mt-24 py-20 lg:py-28 bg-[#021124] text-white border-b border-[#E5D9C5]/15 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 relative z-10">
        {/* Editorial Split Header (SwiftPainting Archetype) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-10 border-b border-white/10 items-end mb-12">
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#EAB308]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
              <span>Search Methodology</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
              A Proven Search Process <br className="hidden sm:inline" />
              <span className="italic text-[#EAB308]">Engineered for Certainty</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-white/75 text-base sm:text-lg leading-relaxed font-normal">
              Eliminate weeks of resume screening and awkward interviews. Our four-step methodology delivers interview-ready finalists with zero wasted time.
            </p>
          </div>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white/[0.03] border border-[#E5D9C5]/15 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between hover:bg-white/[0.06] hover:border-[#EAB308]/40 transition-all duration-300 group"
            >
              <div>
                {/* Step Num & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-4xl text-[#EAB308]">
                    {step.num}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] font-medium text-white/80">
                    <Clock className="w-3 h-3 text-[#EAB308]" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-[#EAB308] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/65 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 text-xs text-white/75 pt-4 border-t border-white/10">
                  {step.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                <span>Phase {idx + 1} of 4</span>
                <span className="text-[#EAB308] font-medium">100% Confidential</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#hero-talent-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold text-[#021124] bg-[#EAB308] hover:bg-[#CA8A04] shadow-md transition-all cursor-pointer"
          >
            <span>Initiate A Confidential Search Mandate</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
