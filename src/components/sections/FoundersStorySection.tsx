import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { CheckCircle2, ShieldCheck, Linkedin, Award, Quote, Sparkles } from "lucide-react";

export function FoundersStorySection() {
  const justin = siteConfig.founders[0];
  const jon = siteConfig.founders[1];

  return (
    <section id="founders" className="scroll-mt-28 py-20 md:py-28 bg-[#FAF8F5] border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Luxury Pattern */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#001749]/10 text-[#001749] text-xs font-bold tracking-wide uppercase border border-[#001749]/15">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Leadership & Consultative Precision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001749] tracking-tight">
            Built by Seasoned Recruiters. <br className="hidden sm:block" />
            <span className="italic font-normal text-[#1E5CD9]">Not Automated Algorithms.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Most recruitment agencies rely on keyword scrapers and mass cold-emails. We founded Orion Placement on the opposite philosophy: high-touch domain expertise, senior-level accountability, and headhunting the passive talent who actually drive business results.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Justin Sofman Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl shadow-slate-200/50 border border-slate-200/80 flex flex-col justify-between hover:shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-300 relative group">
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-slate-100 shrink-0 shadow-lg border-2 border-[#D4AF37]/40 p-1 bg-white">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={justin.image}
                      alt={justin.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#D4AF37]/15 text-[#92700E] uppercase tracking-wide border border-[#D4AF37]/30">
                    Executive Strategy & Headhunting
                  </span>
                  <h3 className="text-2xl font-black text-[#001749]">{justin.name}</h3>
                  <p className="text-sm font-semibold text-[#1E5CD9]">{justin.role}</p>
                  <a
                    href={justin.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#001749] font-medium pt-1 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {justin.bio}
                </p>

                <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/60 relative">
                  <Quote className="w-6 h-6 text-[#D4AF37]/40 absolute top-3 right-3" />
                  <p className="text-xs sm:text-sm italic text-slate-700 font-medium pr-6 leading-relaxed">
                    &ldquo;A great executive or technical hire accelerates a company for years; a mediocre hire drains momentum. We ensure you only interview the top 5%.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Practice Focus:</span>
              <span className="font-medium text-[#001749]">Enterprise IT, Legal & C-Suite Search</span>
            </div>
          </div>

          {/* Jon Missirlian Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl shadow-slate-200/50 border border-slate-200/80 flex flex-col justify-between hover:shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-300 relative group">
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-slate-100 shrink-0 shadow-lg border-2 border-[#D4AF37]/40 p-1 bg-white">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={jon.image}
                      alt={jon.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#D4AF37]/15 text-[#92700E] uppercase tracking-wide border border-[#D4AF37]/30">
                    National Sourcing & Operations
                  </span>
                  <h3 className="text-2xl font-black text-[#001749]">{jon.name}</h3>
                  <p className="text-sm font-semibold text-[#1E5CD9]">{jon.role}</p>
                  <a
                    href={jon.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#001749] font-medium pt-1 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {jon.bio}
                </p>

                <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/60 relative">
                  <Quote className="w-6 h-6 text-[#D4AF37]/40 absolute top-3 right-3" />
                  <p className="text-xs sm:text-sm italic text-slate-700 font-medium pr-6 leading-relaxed">
                    &ldquo;The best performers are rarely on job boards; they are already succeeding elsewhere. Our job is knowing who they are and bringing them directly to your table.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Practice Focus:</span>
              <span className="font-medium text-[#001749]">Healthcare, Finance, Engineering & Construction</span>
            </div>
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#000F2E] via-[#001749] to-[#0A2566] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              <span>Direct Partner Oversight On Every Search</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Unlike large corporate agencies where your requisition is passed down to entry-level trainees, Justin Sofman and Jon Missirlian actively direct candidate sourcing and stakeholder alignment on every single search.
            </p>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-slate-950 font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            Speak With A Founder Directly
          </a>
        </div>
      </div>
    </section>
  );
}
