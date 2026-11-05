"use client";

import React, { useState } from "react";
import { Download, CheckCircle2, BookOpen, Sparkles } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export function HiringPlaybookLeadMagnet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
  };

  return (
    <section id="playbook" className="scroll-mt-24 py-20 lg:py-28 bg-[#FAFBFD] border-b border-[#CBD5E1]/60">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        <div className="bg-[#040D21] border border-white/10 rounded-[32px] p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/10 text-xs font-semibold text-[#00D2FF] tracking-[0.2em] uppercase border border-[#00D2FF]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Research Report</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
                The 2025 Executive Compensation &amp; <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#00D2FF]">Talent Retention Benchmark</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-normal max-w-xl leading-relaxed">
                Download our comprehensive 42-page market intelligence report analyzing current salary percentiles, equity distributions, remote vs. on-site premiums, and counteroffer mitigation tactics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300 max-w-lg">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shrink-0" />
                  <span>Salary percentiles for 120+ executive roles</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shrink-0" />
                  <span>Cost-of-vacancy calculation model</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shrink-0" />
                  <span>Passive candidate engagement strategies</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shrink-0" />
                  <span>2025 hybrid compensation data</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-xs font-bold text-[#040D21] bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] hover:brightness-105 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Free 2025 Benchmark Report (PDF)</span>
                </button>
              </div>
            </div>

            {/* Right Visual: Mock Book Dossier */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-80 h-96 rounded-[24px] bg-[#071630] p-7 shadow-2xl border border-white/10 flex flex-col justify-between text-left transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] text-[#00D2FF] font-semibold uppercase tracking-[0.2em] border-b border-white/10 pb-3">
                    <span>Orion Placement</span>
                    <span>2025 Edition</span>
                  </div>

                  <BookOpen className="w-8 h-8 text-[#00D2FF]" />

                  <h3 className="font-serif text-2xl text-white leading-tight">
                    Executive Compensation &amp; Retention Playbook
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Exhaustive salary and retention benchmarks for managing partners, founders, and talent committees.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>42 Pages • Instant PDF</span>
                  <span className="text-[#00D2FF] font-medium">Verified Data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Lead Capture */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setDownloadSuccess(false);
        }}
        title="Download 2025 Executive Benchmark Guide"
      >
        {downloadSuccess ? (
          <div className="text-center py-6 space-y-4 font-sans">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif text-2xl text-[#040D21]">Report Dispatched!</h4>
              <p className="text-xs text-slate-600 mt-1.5 max-w-sm mx-auto">
                A download link has been sent to <span className="font-semibold text-slate-900">{email}</span>. Check your inbox to access the full 42-page dossier.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2.5 rounded-full bg-[#040D21] text-white text-xs font-semibold hover:bg-[#00D2FF] hover:text-[#040D21] transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-4 font-sans">
            <p className="text-xs text-slate-600">
              Enter your work email and organization name to receive immediate access to the 42-page executive compensation benchmark report.
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1">Work Email *</label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-[#FAFBFD] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#00D2FF]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1">Company Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Health Partners"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 bg-[#FAFBFD] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#00D2FF]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-[#040D21] bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] hover:brightness-105 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Send Me The Free Report</span>
            </button>

            <p className="text-[10px] text-slate-400 text-center">
              Strictly confidential. No spam. Unsubscribe with one click at any time.
            </p>
          </form>
        )}
      </Modal>
    </section>
  );
}
