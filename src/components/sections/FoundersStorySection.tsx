"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Linkedin, Calendar, ArrowRight, Quote, CheckCircle2, PhoneCall } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

interface FounderInfo {
  name: string;
  role: string;
  image: string;
  focus: string;
}

export function FoundersStorySection() {
  const justin = siteConfig.founders[0];
  const jon = siteConfig.founders[1];

  const [selectedFounder, setSelectedFounder] = useState<FounderInfo | null>(null);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [timePreference, setTimePreference] = useState("Morning (9 AM - 12 PM EST)");
  const [briefingTopic, setBriefingTopic] = useState("Direct Hire / Executive Search Priority");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleOpenBooking = (founder: FounderInfo) => {
    setSelectedFounder(founder);
    setIsBooked(false);
  };

  const handleCloseBooking = () => {
    setSelectedFounder(null);
    setIsBooked(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
    }, 1000);
  };

  return (
    <section id="founders" className="scroll-mt-24 py-20 lg:py-32 bg-[#FAFBFD] border-b border-[#CBD5E1]/60 relative overflow-hidden">
      {/* 1400px Container */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 relative z-10">
        
        {/* Editorial Split Section Header (SwiftPainting Archetype) */}
        <div className="w-full mx-auto mb-14 lg:mb-18 border-b border-[#CBD5E1]/70 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
            
            {/* Left Column (6 Cols): Eyebrow + Large Serif Title */}
            <div className="lg:col-span-6 space-y-3.5 text-left">
              <div className="inline-flex items-center gap-2 bg-[#00D2FF]/10 text-[#0284C7] border border-[#00D2FF]/30 px-3.5 py-1 rounded-full text-[11px] font-sans font-bold uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                <span>PARTNER-LED SEARCH MANDATES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#040D21] leading-[1.08] tracking-tight font-normal">
                Search Leadership by Partners. <br />
                <span className="italic font-normal text-[#0284C7]">Never Delegated.</span>
              </h2>
            </div>

            {/* Right Column (6 Cols): Descriptive Copy */}
            <div className="lg:col-span-6 text-left">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans font-normal">
                Most recruitment agencies hand off your search to junior recruiters using mass keyword scrapers. Orion Placement was founded on the opposite standard: hands-on domain expertise, direct founder accountability, and headhunting the passive top 5% who actually drive enterprise growth.
              </p>
            </div>
          </div>
        </div>

        {/* Dual Founders Luxury Executive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-14">
          
          {/* 1. Justin Sofman Card */}
          <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#CBD5E1] shadow-sm hover:shadow-xl hover:border-[#00D2FF]/60 flex flex-col justify-between transition-all duration-300 relative group">
            <div>
              {/* Header: Portrait + Badges */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-slate-100">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 shadow-lg bg-[#040D21] p-1 border-2 border-[#00D2FF]/40 group-hover:border-[#00D2FF] transition-colors">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={justin.image}
                      alt={justin.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1.5 flex-1">
                  <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-sans font-bold bg-[#00D2FF]/10 text-[#0284C7] uppercase tracking-[0.18em] border border-[#00D2FF]/25">
                    EXECUTIVE STRATEGY &amp; HEADHUNTING
                  </span>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#040D21] font-normal">{justin.name}</h3>
                    <CheckCircle2 className="w-5 h-5 text-[#00D2FF] shrink-0" />
                  </div>
                  <p className="text-sm font-semibold text-slate-600">{justin.role}</p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
                    <a
                      href={justin.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0284C7] font-medium transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Verified LinkedIn</span>
                    </a>
                    <span className="text-slate-300">·</span>
                    <button
                      onClick={() =>
                        handleOpenBooking({
                          name: justin.name,
                          role: justin.role,
                          image: justin.image,
                          focus: "Enterprise IT, Legal & C-Suite Search",
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-xs text-[#040D21] hover:text-[#0284C7] font-bold transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Schedule 15-Min Briefing</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bio & Signature Quote */}
              <div className="pt-6 space-y-5">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans font-normal">
                  {justin.bio}
                </p>

                <div className="bg-[#FAFBFD] p-5 sm:p-6 rounded-[24px] border border-[#E2E8F0] relative">
                  <Quote className="w-6 h-6 text-[#00D2FF]/30 absolute top-4 right-4" />
                  <p className="font-serif text-base sm:text-lg italic text-[#040D21] pr-6 leading-relaxed">
                    &ldquo;A great executive or technical hire accelerates a company for years; a mediocre hire drains momentum. We ensure you only interview the top 5%.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Practice Domain Pills */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">Practice Domains:</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-full bg-[#FAFBFD] border border-slate-200 text-slate-700 text-[11px] font-medium">AmLaw 200 Legal</span>
                <span className="px-2.5 py-1 rounded-full bg-[#FAFBFD] border border-slate-200 text-slate-700 text-[11px] font-medium">C-Suite &amp; Board</span>
                <span className="px-2.5 py-1 rounded-full bg-[#FAFBFD] border border-slate-200 text-slate-700 text-[11px] font-medium">Cloud &amp; DevOps</span>
              </div>
            </div>
          </div>

          {/* 2. Jon Missirlian Card */}
          <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#CBD5E1] shadow-sm hover:shadow-xl hover:border-[#00D2FF]/60 flex flex-col justify-between transition-all duration-300 relative group">
            <div>
              {/* Header: Portrait + Badges */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-slate-100">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 shadow-lg bg-[#040D21] p-1 border-2 border-[#00D2FF]/40 group-hover:border-[#00D2FF] transition-colors">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={jon.image}
                      alt={jon.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1.5 flex-1">
                  <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-sans font-bold bg-[#00D2FF]/10 text-[#0284C7] uppercase tracking-[0.18em] border border-[#00D2FF]/25">
                    NATIONAL SOURCING &amp; OPERATIONS
                  </span>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#040D21] font-normal">{jon.name}</h3>
                    <CheckCircle2 className="w-5 h-5 text-[#00D2FF] shrink-0" />
                  </div>
                  <p className="text-sm font-semibold text-slate-600">{jon.role}</p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
                    <a
                      href={jon.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0284C7] font-medium transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Verified LinkedIn</span>
                    </a>
                    <span className="text-slate-300">·</span>
                    <button
                      onClick={() =>
                        handleOpenBooking({
                          name: jon.name,
                          role: jon.role,
                          image: jon.image,
                          focus: "Healthcare, Finance, Engineering & Construction",
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-xs text-[#040D21] hover:text-[#0284C7] font-bold transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Schedule 15-Min Briefing</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Bio & Signature Quote */}
              <div className="pt-6 space-y-5">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans font-normal">
                  {jon.bio}
                </p>

                <div className="bg-[#FAFBFD] p-5 sm:p-6 rounded-[24px] border border-[#E2E8F0] relative">
                  <Quote className="w-6 h-6 text-[#00D2FF]/30 absolute top-4 right-4" />
                  <p className="font-serif text-base sm:text-lg italic text-[#040D21] pr-6 leading-relaxed">
                    &ldquo;The best performers are rarely on job boards; they are already succeeding elsewhere. Our job is knowing who they are and bringing them directly to your table.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Practice Domain Pills */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">Practice Domains:</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-full bg-[#FAFBFD] border border-slate-200 text-slate-700 text-[11px] font-medium">Health Systems &amp; CMOs</span>
                <span className="px-2.5 py-1 rounded-full bg-[#FAFBFD] border border-slate-200 text-slate-700 text-[11px] font-medium">PE-Backed Finance</span>
                <span className="px-2.5 py-1 rounded-full bg-[#FAFBFD] border border-slate-200 text-slate-700 text-[11px] font-medium">Commercial GC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Banner Matching SwiftPainting Promise Section */}
        <div className="bg-[#040D21] rounded-[28px] p-7 sm:p-9 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#00D2FF]/20">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-serif font-normal flex items-center justify-center md:justify-start gap-2 text-white">
              <ShieldCheck className="w-5 h-5 text-[#00D2FF]" />
              <span>Direct Partner Oversight On Every Search</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-sans font-normal">
              Justin Sofman and Jon Missirlian personally lead requisition scoping, passive headhunting outreach, and finalist calibration on every search.
            </p>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] text-[#040D21] hover:brightness-105 font-sans font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#040D21]" />
            <span>Speak With A Founder Directly</span>
          </a>
        </div>
      </div>

      {/* Founder Scheduling Modal */}
      <Modal
        isOpen={selectedFounder !== null}
        onClose={handleCloseBooking}
        title={selectedFounder ? `Schedule 15-Min Briefing with ${selectedFounder.name}` : ""}
      >
        {selectedFounder && (
          <div>
            {isBooked ? (
              <div className="text-center py-6 space-y-4 font-sans">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-500/30">
                  <ShieldCheck className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-serif text-[#040D21]">Briefing Request Received</h4>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{clientName || "Partner"}</span>. {selectedFounder.name}&apos;s desk will confirm your calendar invitation within 2 business hours.
                  </p>
                </div>
                <button
                  onClick={handleCloseBooking}
                  className="px-6 py-2.5 rounded-full bg-[#040D21] text-white text-xs font-semibold hover:bg-[#00D2FF] hover:text-[#040D21] transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4 font-sans">
                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0 border border-[#00D2FF]/40">
                    <Image
                      src={selectedFounder.image}
                      alt={selectedFounder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-[#040D21] text-sm">{selectedFounder.name}</div>
                    <div className="text-slate-500">{selectedFounder.role} · {selectedFounder.focus}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Sarah Jenkins"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#00D2FF] bg-[#FAFBFD]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="Apex Partners / Health Network"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#00D2FF] bg-[#FAFBFD]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="s.jenkins@company.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#00D2FF] bg-[#FAFBFD]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Direct Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(201) 000-0000"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#00D2FF] bg-[#FAFBFD]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Search Priority / Topic *</label>
                    <select
                      value={briefingTopic}
                      onChange={(e) => setBriefingTopic(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#00D2FF] bg-[#FAFBFD]"
                    >
                      <option value="Direct Hire / Executive Search Priority">Direct Hire Executive Search</option>
                      <option value="Urgent Clinical / Medical Leadership Vacancy">Clinical Leadership Vacancy</option>
                      <option value="Lateral Law Firm Partner Acquisition">Law Firm Partner Acquisition</option>
                      <option value="Specialized Contract Staffing Team">Contract Staffing Team</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time Window *</label>
                    <select
                      value={timePreference}
                      onChange={(e) => setTimePreference(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#00D2FF] bg-[#FAFBFD]"
                    >
                      <option value="Morning (9 AM - 12 PM EST)">Morning (9 AM - 12 PM EST)</option>
                      <option value="Early Afternoon (12 PM - 3 PM EST)">Early Afternoon (12 PM - 3 PM EST)</option>
                      <option value="Late Afternoon (3 PM - 6 PM EST)">Late Afternoon (3 PM - 6 PM EST)</option>
                      <option value="Urgent (Today - Founder Direct Call)">Urgent (Today - Direct Call)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-[#040D21] bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] hover:brightness-105 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-3"
                >
                  {isSubmitting ? (
                    <span>Securing Founder Availability...</span>
                  ) : (
                    <>
                      <span>Confirm 15-Minute Briefing Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 Strictly confidential · Direct conversation with {selectedFounder.name}
                </p>
              </form>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
