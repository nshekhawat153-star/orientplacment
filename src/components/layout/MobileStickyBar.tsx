"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#040D21]/95 backdrop-blur-md border-t border-white/10 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 text-white font-bold text-xs border border-white/15 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#00D2FF]" />
          <span>Call Desk</span>
        </a>

        <a
          href="#hero-talent-form"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-[#00D2FF] to-[#38BDF8] text-[#040D21] font-bold text-xs shadow-md active:scale-95 transition-transform"
        >
          <span>Request Talent</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
