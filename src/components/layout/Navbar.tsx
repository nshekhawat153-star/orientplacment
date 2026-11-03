"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Menu, X, ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";

interface NavbarProps {
  onRequestTalent?: () => void;
}

export function Navbar({ onRequestTalent }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      {/* Top Urgent Announcement Bar */}
      <div className="bg-[#000F2E] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
              NATIONWIDE DESK
            </span>
            <span className="hidden md:inline">
              Over 1,200+ executive & specialized placements across 48 states.
            </span>
            <span className="md:hidden">Nationwide Executive Search & Staffing</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Recruiters Active Now
            </span>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="font-semibold text-white hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Direct: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#001749]/95 backdrop-blur-md shadow-lg shadow-slate-950/20 py-3 border-b border-slate-800/60"
            : "bg-[#001749] py-4 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white p-1 shadow-sm flex items-center justify-center overflow-hidden">
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
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
                ORION<span className="font-light text-slate-300 ml-1.5 text-lg">PLACEMENT</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium -mt-1 hidden sm:block">
                Executive Search & Staffing
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-200 hover:text-[#D4AF37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{siteConfig.phone}</span>
            </a>

            <a
              href="#hero-talent-form"
              onClick={onRequestTalent}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D4AF37] shadow-md shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Request Talent</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#000F2E] border-t border-slate-800 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-white/10 hover:text-[#D4AF37] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-white/10 border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call {siteConfig.phone}</span>
              </a>

              <a
                href="#hero-talent-form"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] shadow-md"
              >
                <span>Request Talent Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
