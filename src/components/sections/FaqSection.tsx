"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqsData";
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#001749]/10 text-[#001749] text-xs font-bold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Straightforward Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001749] tracking-tight">
            Frequently Asked <span className="text-[#1E5CD9]">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Everything you need to know about our fee structure, search timelines, replacement warranties, and confidentiality protocols.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#001749] hover:text-[#1E5CD9] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#001749] text-[#D4AF37] rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-normal animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <h4 className="font-bold text-[#001749] text-base">Have a specialized question or unique requisition?</h4>
            <p className="text-xs text-slate-500">Speak directly with our search partners about your requirements.</p>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#001749] text-white text-xs font-bold hover:bg-[#0A2566] transition-all shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Call {siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
