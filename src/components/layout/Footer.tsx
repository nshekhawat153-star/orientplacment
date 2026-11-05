import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Mail, Clock, Linkedin, Instagram, Facebook, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#030917] text-slate-400 text-sm border-t border-white/10">
      {/* Main Footer Container */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Orion Placement Home">
              <div className="relative w-11 h-11 rounded-full bg-[#040D21] border border-[#00D2FF]/30 p-1 flex items-center justify-center shrink-0 shadow-lg shadow-[#00D2FF]/10 group-hover:border-[#00D2FF] transition-colors">
                <Image
                  src="/images/orion-logo.png"
                  alt="Orion Placement"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight text-white">
                  ORION <span className="font-sans font-light text-white/60 text-base">PLACEMENT</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#00D2FF] font-semibold -mt-1">
                  Executive Search &amp; Advisory
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Connecting premier executives, specialized attorneys, healthcare leaders, and critical technical talent with high-growth organizations across 48 states.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-3 text-slate-200">
                <Phone className="w-4 h-4 text-[#00D2FF]" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-[#00D2FF] transition-colors font-medium"
                >
                  Direct: {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <Mail className="w-4 h-4 text-[#00D2FF]" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#00D2FF] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-200">
                <Clock className="w-4 h-4 text-[#00D2FF]" />
                <span>Executive Desk: {siteConfig.hours}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#00D2FF]/20 hover:border-[#00D2FF]/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#00D2FF]/20 hover:border-[#00D2FF]/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#00D2FF]/20 hover:border-[#00D2FF]/50 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Specialized Practice Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Specialized Practices
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#industries" className="hover:text-[#00D2FF] transition-colors">
                  Legal &amp; Law Firms (Partners / Associates)
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#00D2FF] transition-colors">
                  Healthcare &amp; Hospital Network Staffing
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#00D2FF] transition-colors">
                  Technology, Cloud Architecture &amp; DevOps
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#00D2FF] transition-colors">
                  Finance, Controllers &amp; Accounting
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#00D2FF] transition-colors">
                  Construction Executives &amp; Real Estate
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#00D2FF] transition-colors">
                  Board &amp; C-Suite Retained Search
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Search Models */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Search Models
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-[#00D2FF] transition-colors">
                  Direct Hire (Contingency)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00D2FF] transition-colors">
                  Retained Executive Search
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00D2FF] transition-colors">
                  Contract &amp; Project Surge
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00D2FF] transition-colors">
                  Contract-to-Hire
                </a>
              </li>
              <li>
                <a href="#why-orion" className="hover:text-[#00D2FF] transition-colors">
                  90-Day Warranty Protection
                </a>
              </li>
              <li>
                <a href="#hero-talent-form" className="text-[#00D2FF] hover:underline font-medium">
                  Candidate Portal →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Founders & Trust */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Partnership &amp; Governance
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#founders" className="hover:text-[#00D2FF] transition-colors">
                  Justin Sofman (Managing Partner)
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-[#00D2FF] transition-colors">
                  Jon Missirlian (Talent Acquisition)
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#00D2FF] transition-colors">
                  Our 4-Step Placement Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#00D2FF] transition-colors">
                  Verified Client Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00D2FF] transition-colors">
                  Hiring FAQs
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <div className="p-4 rounded-[20px] bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 space-y-1">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  100% Confidential Mandates
                </span>
                <p className="text-slate-400">
                  Every candidate and client mandate is safeguarded under strict non-disclosure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Orion Placement LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero-talent-form" className="hover:text-[#00D2FF] transition-colors">
              Privacy Policy
            </a>
            <a href="#hero-talent-form" className="hover:text-[#00D2FF] transition-colors">
              Terms of Search Engagement
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-[#00D2FF] transition-colors">
              Direct: (201) 572-9538
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
