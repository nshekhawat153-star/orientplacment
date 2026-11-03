"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Linkedin, Award, Quote, Calendar, ArrowRight, Sparkles } from "lucide-react";
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
    <section id="founders" className="scroll-mt-28 py-20 sm:py-32 bg-[#F5F2EB] border-b border-[#E5D9C5] relative overflow-hidden">
      {/* 1400px Container Matching SwiftPainting Alignment */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 relative z-10">
        
        {/* Editorial Split Section Header */}
        <div className="w-full mx-auto mb-12 sm:mb-16 border-b border-[#E5D9C5]/80 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column (5 Cols): Eyebrow + Large Serif Title */}
            <div className="lg:col-span-6 space-y-3 text-left">
              <div className="inline-flex items-center gap-2 bg-[#EAB308]/15 text-[#021124] border border-[#EAB308]/40 px-4 py-1.5 rounded-full text-xs font-sans font-extrabold uppercase tracking-widest shadow-sm">
                <Award className="w-4 h-4 text-[#EAB308]" />
                <span>LEADERSHIP &amp; ACCOUNTABILITY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#021124] leading-[1.08] tracking-tight font-normal">
                Built by Seasoned Recruiters. <br />
                <span className="italic font-normal text-[#EAB308]">Not Automated Algorithms.</span>
              </h2>
            </div>

            {/* Right Column (7 Cols): Descriptive Copy */}
            <div className="lg:col-span-6 text-left">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans font-normal">
                Most recruitment agencies hand off your search to junior recruiters using mass keyword scrapers. Orion Placement was founded on the opposite standard: hands-on domain expertise, direct founder accountability, and headhunting the passive top 5% who actually drive enterprise growth.
              </p>
            </div>
          </div>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Justin Sofman Card */}
          <div className="bg-[#FAF8F5] rounded-[32px] p-7 sm:p-10 shadow-sm border-2 border-[#E5D9C5] hover:border-[#EAB308] flex flex-col justify-between transition-all duration-300 relative group">
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-[#E5D9C5]/70">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-white shrink-0 shadow-md border-2 border-[#EAB308]/50 p-1">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={justin.image}
                      alt={justin.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1 flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-sans font-extrabold bg-[#EAB308]/15 text-[#854D0E] uppercase tracking-wider border border-[#EAB308]/40">
                    EXECUTIVE STRATEGY &amp; HEADHUNTING
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#021124] pt-0.5">{justin.name}</h3>
                  <p className="text-sm font-semibold text-slate-600">{justin.role}</p>
                  
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
                    <a
                      href={justin.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#021124] font-medium transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                      <span>LinkedIn</span>
                    </a>
                    <span className="text-slate-300">·</span>
                    <button
                      onClick={() =>
                        handleOpenBooking({
                          name: justin.name,
                          role: justin.role,
                          image: justin.image,
                          focus: "Enterprise IT, Legal & C-Suite Search"
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-xs text-[#021124] hover:text-[#EAB308] font-bold transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#EAB308]" />
                      <span>Book 15-Min Briefing</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6 space-y-4 font-sans">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {justin.bio}
                </p>

                <div className="bg-white/80 p-4.5 rounded-2xl border border-[#E5D9C5] relative">
                  <Quote className="w-6 h-6 text-[#EAB308]/50 absolute top-3 right-3" />
                  <p className="text-xs sm:text-sm italic text-slate-800 font-serif pr-6 leading-relaxed">
                    &ldquo;A great executive or technical hire accelerates a company for years; a mediocre hire drains momentum. We ensure you only interview the top 5%.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5D9C5]/70 flex items-center justify-between text-xs text-slate-600 font-sans">
              <span className="font-bold text-slate-800">Practice Focus:</span>
              <span className="font-semibold text-[#021124]">Enterprise IT, Legal &amp; C-Suite Search</span>
            </div>
          </div>

          {/* Jon Missirlian Card */}
          <div className="bg-[#FAF8F5] rounded-[32px] p-7 sm:p-10 shadow-sm border-2 border-[#E5D9C5] hover:border-[#EAB308] flex flex-col justify-between transition-all duration-300 relative group">
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-[#E5D9C5]/70">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-white shrink-0 shadow-md border-2 border-[#EAB308]/50 p-1">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={jon.image}
                      alt={jon.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1 flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-sans font-extrabold bg-[#EAB308]/15 text-[#854D0E] uppercase tracking-wider border border-[#EAB308]/40">
                    NATIONAL SOURCING &amp; OPERATIONS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#021124] pt-0.5">{jon.name}</h3>
                  <p className="text-sm font-semibold text-slate-600">{jon.role}</p>
                  
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
                    <a
                      href={jon.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#021124] font-medium transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                      <span>LinkedIn</span>
                    </a>
                    <span className="text-slate-300">·</span>
                    <button
                      onClick={() =>
                        handleOpenBooking({
                          name: jon.name,
                          role: jon.role,
                          image: jon.image,
                          focus: "Healthcare, Finance, Engineering & Construction"
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-xs text-[#021124] hover:text-[#EAB308] font-bold transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#EAB308]" />
                      <span>Book 15-Min Briefing</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6 space-y-4 font-sans">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {jon.bio}
                </p>

                <div className="bg-white/80 p-4.5 rounded-2xl border border-[#E5D9C5] relative">
                  <Quote className="w-6 h-6 text-[#EAB308]/50 absolute top-3 right-3" />
                  <p className="text-xs sm:text-sm italic text-slate-800 font-serif pr-6 leading-relaxed">
                    &ldquo;The best performers are rarely on job boards; they are already succeeding elsewhere. Our job is knowing who they are and bringing them directly to your table.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5D9C5]/70 flex items-center justify-between text-xs text-slate-600 font-sans">
              <span className="font-bold text-slate-800">Practice Focus:</span>
              <span className="font-semibold text-[#021124]">Healthcare, Finance, Engineering &amp; Construction</span>
            </div>
          </div>
        </div>

        {/* Commitment Banner Matching SwiftPainting Promise Section */}
        <div className="mt-12 bg-[#021124] rounded-[24px] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-serif font-normal flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-[#EAB308]" />
              <span>Direct Partner Oversight On Every Search</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-sans font-normal">
              Justin Sofman and Jon Missirlian actively oversee requisition scoping, passive headhunting, and finalist alignment on every single search engagement.
            </p>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#EAB308] text-slate-950 hover:bg-[#FACC15] font-sans font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            Speak With A Founder Directly
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
                  <h4 className="text-2xl font-serif text-[#021124]">Briefing Request Received</h4>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{clientName || "Partner"}</span>. {selectedFounder.name}&apos;s desk will confirm your calendar invitation within 2 business hours.
                  </p>
                </div>
                <button
                  onClick={handleCloseBooking}
                  className="px-6 py-2.5 rounded-xl bg-[#021124] text-white text-xs font-bold hover:bg-[#EAB308] hover:text-[#021124] transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4 font-sans">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
                  <div className="w-11 h-11 rounded-lg overflow-hidden relative shrink-0">
                    <Image
                      src={selectedFounder.image}
                      alt={selectedFounder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-[#021124]">{selectedFounder.name}</div>
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
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#021124] bg-white"
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
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#021124] bg-white"
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
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#021124] bg-white"
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
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#021124] bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Search Priority / Topic *</label>
                    <select
                      value={briefingTopic}
                      onChange={(e) => setBriefingTopic(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#021124] bg-white"
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
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#021124] bg-white"
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
                  className="w-full py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-[#EAB308] hover:bg-[#FACC15] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-3"
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
