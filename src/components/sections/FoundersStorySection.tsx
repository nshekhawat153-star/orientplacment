"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { CheckCircle2, ShieldCheck, Linkedin, Award, Quote, Calendar, ArrowRight, Clock, Sparkles } from "lucide-react";
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
    }, 1200);
  };

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
                  
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
                    <a
                      href={justin.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#001749] font-medium transition-colors"
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
                      className="inline-flex items-center gap-1.5 text-xs text-[#001749] hover:text-[#1E5CD9] font-bold transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Book 15-Min Briefing</span>
                    </button>
                  </div>
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
                  
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
                    <a
                      href={jon.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#001749] font-medium transition-colors"
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
                      className="inline-flex items-center gap-1.5 text-xs text-[#001749] hover:text-[#1E5CD9] font-bold transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Book 15-Min Briefing</span>
                    </button>
                  </div>
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

      {/* Founder Scheduling Modal */}
      <Modal
        isOpen={selectedFounder !== null}
        onClose={handleCloseBooking}
        title={selectedFounder ? `Schedule 15-Min Briefing with ${selectedFounder.name}` : ""}
      >
        {selectedFounder && (
          <div>
            {isBooked ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#001749]">Briefing Request Received</h4>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-slate-900">{clientName || "Partner"}</span>. {selectedFounder.name}&apos;s executive desk will review your requisition details and confirm your calendar invite within 2 business hours.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto space-y-1">
                  <div className="font-semibold text-[#001749]">Selected Window: {timePreference}</div>
                  <div>Direct Desk Phone: (201) 572-9538</div>
                </div>
                <button
                  onClick={handleCloseBooking}
                  className="px-6 py-2.5 rounded-xl bg-[#001749] text-white text-xs font-bold hover:bg-[#0A2566] transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <div className="w-11 h-11 rounded-lg overflow-hidden relative shrink-0">
                    <Image
                      src={selectedFounder.image}
                      alt={selectedFounder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-[#001749]">{selectedFounder.name}</div>
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
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]"
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
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]"
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
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]"
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
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Search Priority / Topic *</label>
                    <select
                      value={briefingTopic}
                      onChange={(e) => setBriefingTopic(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]"
                    >
                      <option value="Direct Hire / Executive Search Priority">Direct Hire / Executive Search Priority</option>
                      <option value="Urgent Clinical / Medical Leadership Vacancy">Urgent Clinical / Medical Leadership Vacancy</option>
                      <option value="Lateral Law Firm Partner Acquisition">Lateral Law Firm Partner Acquisition</option>
                      <option value="Specialized Contract Staffing Team">Specialized Contract Staffing Team</option>
                      <option value="Confidential Succession Planning">Confidential Succession Planning</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time Window *</label>
                    <select
                      value={timePreference}
                      onChange={(e) => setTimePreference(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]"
                    >
                      <option value="Morning (9 AM - 12 PM EST)">Morning (9 AM - 12 PM EST)</option>
                      <option value="Early Afternoon (12 PM - 3 PM EST)">Early Afternoon (12 PM - 3 PM EST)</option>
                      <option value="Late Afternoon (3 PM - 6 PM EST)">Late Afternoon (3 PM - 6 PM EST)</option>
                      <option value="Urgent (Today - Founder Direct Call)">Urgent (Today - Founder Direct Call)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-3"
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

                <p className="text-[11px] text-center text-slate-400">
                  🔒 Strictly confidential · No agency sales reps · Direct conversation with {selectedFounder.name}
                </p>
              </form>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
