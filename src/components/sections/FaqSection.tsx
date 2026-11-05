"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqsData";
import { ChevronDown, PhoneCall, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="scroll-mt-24 py-20 lg:py-28 bg-[#FAFBFD] border-b border-[#CBD5E1]/60">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        {/* Editorial Split Header (SwiftPainting Archetype) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-10 border-b border-[#CBD5E1] items-end mb-12">
          <div className="lg:col-span-6 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
              <span>Straightforward Answers</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#040D21] tracking-tight leading-[1.1]">
              Frequently Asked <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#0284C7]">Search Questions</span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Everything you need to know about our contingency fee structures, search turnaround timelines, replacement warranties, and confidentiality protocols.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-[20px] border border-[#CBD5E1] shadow-sm overflow-hidden transition-all duration-200 hover:border-[#00D2FF]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl text-[#040D21] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#040D21] text-[#00D2FF] rotate-180"
                        : "bg-[#FAFBFD] text-slate-500 border border-slate-200"
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

        {/* Direct Partner Help Banner */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-[24px] p-6 sm:p-8 border border-[#CBD5E1] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl text-[#040D21]">
              Have a specialized requisition or confidential search inquiry?
            </h4>
            <p className="text-xs text-slate-500 font-normal">
              Speak directly with managing partners Justin Sofman and Jon Missirlian.
            </p>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#040D21] text-white text-xs font-semibold hover:bg-[#00D2FF] hover:text-[#040D21] transition-all shrink-0 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Call {siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
