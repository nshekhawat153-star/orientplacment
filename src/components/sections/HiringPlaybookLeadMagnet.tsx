"use client";

import React, { useState } from "react";
import { Download, CheckCircle2, FileText, ArrowRight, ShieldCheck, Sparkles, BookOpen } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export function HiringPlaybookLeadMagnet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
    setTimeout(() => {
      // In a live app, this triggers the direct PDF download
    }, 1000);
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#000F2E] via-[#001749] to-[#0A2566] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-xs font-bold text-[#D4AF37] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complimentary Executive Resource</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                The 2025 Executive Compensation & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FDE047]">
                  Talent Retention Benchmark
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Download our comprehensive 42-page market report analyzing current salary percentiles, equity packages, remote vs. on-site premiums, and counteroffer mitigation tactics across Legal, Tech, Healthcare, and Finance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Salary percentiles for 120+ key roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Cost of a bad hire mitigation rubric</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Passive candidate engagement scripts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>2025 hybrid work compensation data</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Free 2025 Benchmark Guide (PDF)</span>
                </button>
              </div>
            </div>

            {/* Right Visual: Mock Book Dossier */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-80 h-96 rounded-2xl bg-gradient-to-br from-[#001749] to-[#0A192F] p-6 shadow-2xl border-2 border-[#D4AF37]/50 flex flex-col justify-between text-left transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#D4AF37] font-bold uppercase tracking-widest border-b border-white/10 pb-3">
                    <span>Orion Placement</span>
                    <span>2025 Edition</span>
                  </div>

                  <BookOpen className="w-8 h-8 text-[#D4AF37]" />

                  <h3 className="text-xl font-black text-white leading-tight">
                    Executive Compensation & Staffing Playbook
                  </h3>
                  <p className="text-xs text-slate-400">
                    Comprehensive market intelligence for founders, board members, and human resource leaders.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>42 Pages • Instant PDF</span>
                  <span className="text-[#D4AF37] font-semibold">Verified Data</span>
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
        title="Download the 2025 Executive Benchmark Guide"
      >
        {downloadSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#001749]">Report Sent To Your Inbox!</h4>
              <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                A download link has been dispatched to <span className="font-semibold text-slate-900">{email}</span>. You can also view the preview immediately.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2.5 rounded-xl bg-[#001749] text-white text-xs font-bold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-4">
            <p className="text-xs text-slate-600">
              Enter your work email and organization name below to receive instantaneous access to the 42-page compensation benchmark.
            </p>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Company Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Health Partners"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5CD9]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Send Me The Free Guide</span>
            </button>

            <p className="text-[10px] text-slate-400 text-center">
              We respect your privacy. No spam. Unsubscribe with one click anytime.
            </p>
          </form>
        )}
      </Modal>
    </section>
  );
}
