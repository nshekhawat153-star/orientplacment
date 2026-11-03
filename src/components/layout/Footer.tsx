import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Mail, Clock, MapPin, Linkedin, Instagram, Facebook, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#000F2E] text-slate-400 text-sm border-t border-slate-800">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                <Image
                  src="/images/orion-logo.png"
                  alt="Orion Placement"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white">
                  ORION<span className="font-light text-slate-300 ml-1.5 text-base">PLACEMENT</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium -mt-1">
                  Executive Search & Staffing
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Orion Placement connects top professionals and essential support staff with leading companies across the United States. Our consultative expertise ensures immediate access to candidates ready to make a measurable impact.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-white transition-colors font-semibold"
                >
                  Direct: {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1E5CD9] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Specialized Practice Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specialized Practice Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Legal & Law Firms
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Healthcare & Clinical Staffing
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Technology & Cloud Infrastructure
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Finance, Accounting & Tax
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Construction & Commercial Real Estate
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Executive & C-Suite Search
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Sales & Strategic Revenue Growth
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Search Models */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Search Models
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Direct Hire (Contingency)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Executive Search (Retained)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Contract & Project Staffing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Contract-to-Hire
                </a>
              </li>
              <li>
                <a href="#hero-talent-form" className="hover:text-white transition-colors">
                  Candidate Portal
                </a>
              </li>
              <li>
                <a href="#why-orion" className="hover:text-white transition-colors">
                  90-Day Warranty
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Founders */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company & Leadership
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#founders" className="hover:text-white transition-colors">
                  Meet Justin Sofman (Managing Partner)
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-white transition-colors">
                  Meet Jon Missirlian (Talent Acquisition)
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  The Orion 4-Step Methodology
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client & Candidate Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Hiring FAQs
                </a>
              </li>
              <li>
                <a href="#hero-talent-form" className="text-[#D4AF37] hover:underline font-bold">
                  Request Immediate Consultation →
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 space-y-1">
                <span className="font-semibold text-white flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  100% Confidential
                </span>
                <p className="text-slate-400">
                  Candidate submissions and client searches are treated under strict non-disclosure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Orion Placement LLC. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero-talent-form" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#hero-talent-form" className="hover:text-slate-300 transition-colors">
              Terms of Engagement
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-slate-300 transition-colors">
              Direct: (201) 572-9538
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
