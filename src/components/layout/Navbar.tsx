"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight, ChevronDown, ChevronRight, ShieldCheck, Sparkles, BookOpen, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePracticesOpen, setMobilePracticesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "SERVICES", href: "#services" },
    { label: "PRACTICE AREAS", href: "#industries" },
    { label: "OUR PROCESS", href: "#process" },
    { label: "LEADERSHIP", href: "#founders" },
    { label: "WHY ORION", href: "#why-orion" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Background layer */}
      <div
        className={`absolute inset-0 -z-10 border-b transition-all duration-300 ${
          scrolled
            ? "bg-[#021124]/95 backdrop-blur-md shadow-2xl border-white/10"
            : "bg-[#021124] border-white/10"
        }`}
      />

      <div
        className={`max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 flex items-center justify-between relative transition-all duration-300 ${
          scrolled ? "py-3 sm:py-4" : "py-4 sm:py-5"
        }`}
      >
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white/5 border border-white/20 p-1 flex items-center justify-center">
            <Image
              src="/images/orion-logo.png"
              alt="Orion Placement Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                ORION
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-[#EAB308]">
                PLACEMENT
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-medium hidden sm:block">
              Executive Search &amp; Staffing
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links (Spacious & Clean) */}
        <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-9 font-sans font-extrabold text-xs xl:text-sm uppercase tracking-widest text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#EAB308] transition-colors py-1 border-b-2 border-transparent hover:border-[#EAB308] cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Phone & Request Talent CTA */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden md:flex items-center gap-2 text-white hover:text-[#EAB308] transition-colors text-xs font-bold uppercase tracking-wider"
          >
            <Phone className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>(201) 572-9538</span>
          </a>

          <a
            href="#hero-form-card"
            className="bg-[#EAB308] text-slate-950 hover:bg-[#FACC15] font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Request Talent</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl text-white hover:text-[#EAB308] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Open Mobile Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Rendered via Portal like SwiftPainting) */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[999] bg-[#021124] text-white flex flex-col overflow-y-auto p-5 sm:p-8 animate-in fade-in duration-200">
            {/* Top Bar with Logo & Close Button */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white/5 border border-white/20 p-1">
                  <Image
                    src="/images/orion-logo.png"
                    alt="Orion Placement Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-serif text-lg font-bold text-white block">ORION PLACEMENT</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#EAB308] font-bold">
                    Executive Search &amp; Staffing
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-[#EAB308] hover:text-slate-950 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Content Cards (SwiftPainting Style) */}
            <div className="py-6 space-y-3.5 flex-1">
              {/* Card 1: Primary Action Card */}
              <a
                href="#hero-form-card"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#EAB308] text-slate-950 rounded-2xl p-5 flex items-center justify-between shadow-lg group block cursor-pointer"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-slate-900/80 bg-black/10 px-2.5 py-0.5 rounded-full inline-block">
                    URGENT REQUISITIONS
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-950">Request Talent</h3>
                  <p className="text-xs font-sans font-medium text-slate-900 leading-tight">
                    Submit role criteria &amp; receive vetted candidate dossiers in 14 days.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#021124] text-[#EAB308] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform ml-2">
                  <ArrowRight className="w-5 h-5 text-[#EAB308]" />
                </div>
              </a>

              {/* Card 2: Expandable Practice Areas Accordion Card */}
              <div className="bg-[#051833] rounded-2xl border border-white/15 overflow-hidden transition-all">
                <div
                  onClick={() => setMobilePracticesOpen(!mobilePracticesOpen)}
                  className="p-5 flex items-center justify-between cursor-pointer group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-[#EAB308] bg-[#EAB308]/15 border border-[#EAB308]/30 px-2.5 py-0.5 rounded-full inline-block">
                      SPECIALIZED VERTICALS
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">Practice Areas</h3>
                    <p className="text-xs text-slate-300 font-sans leading-tight">
                      Legal, Healthcare, Tech, Finance &amp; Executive leadership.
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-[#EAB308] group-hover:text-slate-950 transition-colors ml-2">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        mobilePracticesOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {mobilePracticesOpen && (
                  <div className="px-5 pb-5 pt-2 space-y-2 border-t border-white/10 bg-[#021124]/60">
                    {[
                      { title: "Legal & Law Firms", desc: "Partners, Counsel & Litigation." },
                      { title: "Healthcare & Life Sciences", desc: "Clinical Directors & Nurse Leaders." },
                      { title: "Technology & IT", desc: "DevOps, Engineering & Cyber." },
                      { title: "Finance & Accounting", desc: "CFOs, Controllers & CPAs." },
                      { title: "Construction & Real Estate", desc: "Project Executives & Estimators." },
                    ].map((p, idx) => (
                      <a
                        key={idx}
                        href="#industries"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#021124] border border-white/10 hover:border-[#EAB308] transition-colors"
                      >
                        <div>
                          <h4 className="font-serif text-base font-bold text-white">{p.title}</h4>
                          <p className="text-xs text-slate-300">{p.desc}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#EAB308] shrink-0 ml-2" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Card 3: Founders Leadership Card */}
              <a
                href="#founders"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#051833] rounded-2xl p-5 border border-white/15 hover:border-[#EAB308] transition-colors group block cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-[#EAB308] bg-[#EAB308]/15 border border-[#EAB308]/30 px-2.5 py-0.5 rounded-full inline-block">
                      FOUNDER DIRECT
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">Meet Justin &amp; Jon</h3>
                    <p className="text-xs text-slate-300 font-sans leading-tight">
                      Direct partner oversight on every single search.
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 text-[#EAB308] flex items-center justify-center shrink-0 group-hover:bg-[#EAB308] group-hover:text-slate-950 transition-colors ml-2">
                    <ArrowRight className="w-4.5 h-4.5" />
                  </div>
                </div>
              </a>

              {/* Card 4: Cost of Vacancy Calculator */}
              <a
                href="#roi-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#051833] rounded-2xl p-5 border border-white/15 hover:border-[#EAB308] transition-colors group block cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-[#EAB308] bg-[#EAB308]/15 border border-[#EAB308]/30 px-2.5 py-0.5 rounded-full inline-block">
                      EXECUTIVE ROI
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">Cost of Vacancy Tool</h3>
                    <p className="text-xs text-slate-300 font-sans leading-tight">
                      Calculate daily revenue loss on your open roles.
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 text-[#EAB308] flex items-center justify-center shrink-0 group-hover:bg-[#EAB308] group-hover:text-slate-950 transition-colors ml-2">
                    <ArrowRight className="w-4.5 h-4.5" />
                  </div>
                </div>
              </a>
            </div>

            {/* Mobile Footer Call Direct */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-[#EAB308] hover:text-slate-950 text-white font-sans font-extrabold text-sm uppercase tracking-wider py-3.5 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-[#EAB308]" />
                <span>Call (201) 572-9538</span>
              </a>
              <p className="text-center text-xs text-slate-400">
                © {new Date().getFullYear()} Orion Placement LLC. Nationwide Search.
              </p>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
