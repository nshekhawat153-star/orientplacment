import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Mail, Clock, Linkedin, Instagram, Facebook, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#010A16] text-white/60 text-sm border-t border-[#E5D9C5]/10">
      {/* Main Footer Container */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-2xl bg-white p-1.5 flex items-center justify-center shrink-0">
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
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#EAB308] font-semibold -mt-1">
                  Executive Search & Advisory
                </span>
              </div>
            </Link>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Connecting premier executives, specialized attorneys, healthcare leaders, and critical technical talent with high-growth organizations across 48 states.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-4 h-4 text-[#EAB308]" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  Direct: {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-4 h-4 text-[#EAB308]" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-4 h-4 text-[#EAB308]" />
                <span>Executive Desk: {siteConfig.hours}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#EAB308]/20 hover:border-[#EAB308]/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#EAB308]/20 hover:border-[#EAB308]/40 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#EAB308]/20 hover:border-[#EAB308]/40 transition-all"
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
                <a href="#industries" className="hover:text-white transition-colors">
                  Legal & Law Firms (Partners / Associates)
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Healthcare & Hospital Network Staffing
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Technology, Cloud Architecture & DevOps
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Finance, Controllers & Accounting
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Construction Executives & Real Estate
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Board & C-Suite Retained Search
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
                <a href="#services" className="hover:text-white transition-colors">
                  Direct Hire (Contingency)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Retained Executive Search
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Contract & Project Surge
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Contract-to-Hire
                </a>
              </li>
              <li>
                <a href="#why-orion" className="hover:text-white transition-colors">
                  90-Day Warranty Protection
                </a>
              </li>
              <li>
                <a href="#hero-talent-form" className="text-[#EAB308] hover:underline font-medium">
                  Candidate Portal →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Founders & Trust */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Partnership & Governance
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#founders" className="hover:text-white transition-colors">
                  Justin Sofman (Managing Partner)
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-white transition-colors">
                  Jon Missirlian (Talent Acquisition)
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Our 4-Step Placement Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Verified Client Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Hiring FAQs
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <div className="p-4 rounded-[20px] bg-white/[0.04] border border-white/10 text-[11px] text-white/70 space-y-1">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  100% Confidential Mandates
                </span>
                <p className="text-white/50">
                  Every candidate and client mandate is safeguarded under strict non-disclosure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40">
          <p>© {new Date().getFullYear()} Orion Placement LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero-talent-form" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#hero-talent-form" className="hover:text-white/80 transition-colors">
              Terms of Search Engagement
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white/80 transition-colors">
              Direct: (201) 572-9538
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
