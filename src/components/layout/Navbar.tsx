"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { siteConfig } from "@/config/site";
import {
  Phone,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Scale,
  Stethoscope,
  Laptop,
  TrendingUp,
  Building2,
  Users,
  ShieldCheck,
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePracticesOpen, setMobilePracticesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background body scroll when mobile full-screen drawer is active
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
    { label: "Services", href: "#services" },
    { label: "Practice Areas", href: "#industries" },
    { label: "Our Process", href: "#process" },
    { label: "Leadership", href: "#founders" },
    { label: "Why Orion", href: "#why-orion" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Background layer */}
      <div
        className={`absolute inset-0 -z-10 border-b transition-all duration-300 ${
          scrolled
            ? "bg-[#040D21]/95 backdrop-blur-md shadow-xl border-white/10"
            : "bg-[#040D21]/80 backdrop-blur-sm border-white/5"
        }`}
      />

      <div
        className={`max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12 flex items-center justify-between relative transition-all duration-300 ${
          scrolled ? "py-2 sm:py-2.5 lg:py-3" : "py-4 sm:py-5 lg:py-6"
        }`}
      >
        {/* Left: Brand Logo (Scroll-responsive size) */}
        <Link href="/" className="flex items-center shrink-0 group" aria-label="Orion Placement Home">
          <div
            className={`relative rounded-full overflow-hidden bg-[#040D21] border border-[#00D2FF]/30 p-1 flex items-center justify-center shadow-md group-hover:border-[#00D2FF] transition-all duration-300 ${
              scrolled
                ? "w-10 h-10 sm:w-11 sm:h-11"
                : "w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18"
            }`}
          >
            <Image
              src="/images/orion-logo.png"
              alt="Orion Placement"
              width={64}
              height={64}
              className="object-contain transform group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-9 font-sans font-semibold text-xs xl:text-sm uppercase tracking-[0.18em] text-white/85">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#00D2FF] transition-colors py-1 border-b-2 border-transparent hover:border-[#00D2FF] cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Phone & Request Talent CTA */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="hidden md:flex items-center gap-2 text-white/90 hover:text-[#00D2FF] transition-colors text-xs font-semibold uppercase tracking-wider"
          >
            <Phone className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>(201) 572-9538</span>
          </a>

          <a
            href="#hero-talent-form"
            className={`bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] text-[#040D21] hover:brightness-105 font-sans font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 group cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
              scrolled
                ? "py-2 px-4.5 sm:px-5 text-xs rounded-lg"
                : "py-2.5 sm:py-3.5 px-5 sm:px-7 text-xs sm:text-sm rounded-xl"
            }`}
          >
            <span>Request Talent</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl text-white hover:text-[#00D2FF] hover:bg-white/10 transition-colors cursor-pointer"
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
          <div className="fixed inset-0 z-[999] bg-[#040D21] text-white flex flex-col overflow-y-auto p-5 sm:p-8 animate-in fade-in duration-200">
            {/* Top Bar with Logo & Close Button */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#040D21] border border-[#00D2FF]/40 p-1 flex items-center justify-center shadow-md">
                <Image
                  src="/images/orion-logo.png"
                  alt="Orion Placement Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-[#00D2FF] hover:text-[#040D21] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Content Cards (SwiftPainting Style) */}
            <div className="py-6 space-y-3.5 flex-1">
              {/* Card 1: Primary Action Card */}
              <a
                href="#hero-talent-form"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] text-[#040D21] rounded-[24px] p-5 flex items-center justify-between shadow-lg shadow-[#00D2FF]/20 group block cursor-pointer"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#040D21]/80 bg-black/10 px-2.5 py-0.5 rounded-full inline-block">
                    URGENT MANDATES
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#040D21]">Request Talent</h3>
                  <p className="text-xs font-sans font-medium text-[#040D21]/90 leading-tight">
                    Submit role criteria &amp; receive vetted candidate dossiers in 14 days.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#040D21] text-[#00D2FF] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform ml-2">
                  <ArrowRight className="w-5 h-5 text-[#00D2FF]" />
                </div>
              </a>

              {/* Card 2: Expandable Practice Areas Accordion Card */}
              <div className="bg-white/[0.04] rounded-[24px] border border-white/10 overflow-hidden transition-all">
                <div
                  onClick={() => setMobilePracticesOpen(!mobilePracticesOpen)}
                  className="p-5 flex items-center justify-between cursor-pointer group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#00D2FF] bg-[#00D2FF]/10 border border-[#00D2FF]/30 px-2.5 py-0.5 rounded-full inline-block">
                      SPECIALIZED VERTICALS
                    </span>
                    <h3 className="font-serif text-2xl text-white">Practice Areas</h3>
                    <p className="text-xs text-white/60 font-sans leading-tight">
                      Legal, Healthcare, Tech, Finance &amp; Executive leadership.
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-[#00D2FF] group-hover:text-[#040D21] transition-colors ml-2">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        mobilePracticesOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {mobilePracticesOpen && (
                  <div className="px-5 pb-5 pt-2 space-y-2 border-t border-white/10 bg-black/20">
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
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00D2FF] transition-colors"
                      >
                        <div>
                          <h4 className="font-serif text-base text-white">{p.title}</h4>
                          <p className="text-xs text-white/50">{p.desc}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#00D2FF] shrink-0 ml-2" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Card 3: Founders Leadership Card */}
              <a
                href="#founders"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-white/[0.04] rounded-[24px] p-5 border border-white/10 hover:border-[#00D2FF] transition-colors group block cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#00D2FF] bg-[#00D2FF]/10 border border-[#00D2FF]/30 px-2.5 py-0.5 rounded-full inline-block">
                      FOUNDER DIRECT
                    </span>
                    <h3 className="font-serif text-2xl text-white">Meet Justin &amp; Jon</h3>
                    <p className="text-xs text-white/60 font-sans leading-tight">
                      Direct partner oversight on every single search.
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 text-[#00D2FF] flex items-center justify-center shrink-0 group-hover:bg-[#00D2FF] group-hover:text-[#040D21] transition-colors ml-2">
                    <ArrowRight className="w-4.5 h-4.5" />
                  </div>
                </div>
              </a>

              {/* Card 4: Cost of Vacancy Calculator */}
              <a
                href="#roi-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-white/[0.04] rounded-[24px] p-5 border border-white/10 hover:border-[#00D2FF] transition-colors group block cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#00D2FF] bg-[#00D2FF]/10 border border-[#00D2FF]/30 px-2.5 py-0.5 rounded-full inline-block">
                      EXECUTIVE ROI
                    </span>
                    <h3 className="font-serif text-2xl text-white">Cost of Vacancy Tool</h3>
                    <p className="text-xs text-white/60 font-sans leading-tight">
                      Calculate daily revenue loss on your open roles.
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 text-[#00D2FF] flex items-center justify-center shrink-0 group-hover:bg-[#00D2FF] group-hover:text-[#040D21] transition-colors ml-2">
                    <ArrowRight className="w-4.5 h-4.5" />
                  </div>
                </div>
              </a>
            </div>

            {/* Mobile Footer Call Direct */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-[#00D2FF] hover:text-[#040D21] text-white font-sans font-bold text-sm uppercase tracking-wider py-3.5 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 text-[#00D2FF]" />
                <span>Call (201) 572-9538</span>
              </a>
              <p className="text-center text-xs text-white/40">
                © {new Date().getFullYear()} Orion Placement LLC. Nationwide Search.
              </p>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
