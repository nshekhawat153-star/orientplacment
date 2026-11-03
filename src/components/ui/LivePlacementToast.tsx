"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, X, Building, MapPin, Sparkles } from "lucide-react";

interface Placement {
  id: number;
  role: string;
  firmType: string;
  location: string;
  timeAgo: string;
}

const verifiedPlacements: Placement[] = [
  {
    id: 1,
    role: "Partner (Commercial Litigation)",
    firmType: "Regional AmLaw 200 Firm",
    location: "Florham Park, NJ",
    timeAgo: "14 mins ago"
  },
  {
    id: 2,
    role: "Director of Clinical Operations",
    firmType: "Multi-Specialty Surgical Group",
    location: "Philadelphia, PA",
    timeAgo: "42 mins ago"
  },
  {
    id: 3,
    role: "VP of Cloud Infrastructure",
    firmType: "FinTech Enterprise Platform",
    location: "New York, NY",
    timeAgo: "2 hours ago"
  },
  {
    id: 4,
    role: "Senior Controller",
    firmType: "Commercial Real Estate Fund",
    location: "Jersey City, NJ",
    timeAgo: "3 hours ago"
  },
  {
    id: 5,
    role: "Senior Construction Project Manager",
    firmType: "General Contracting Leader",
    location: "Morristown, NJ",
    timeAgo: "5 hours ago"
  }
];

export function LivePlacementToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show first toast after 4 seconds
    const initialTimer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 4000);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      // Change item & fade in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % verifiedPlacements.length);
        setIsVisible(true);
      }, 600);
    }, 8500);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = verifiedPlacements[currentIndex];

  return (
    <aside 
      aria-label="Recent Placement Notifications"
      className={`fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 max-w-[340px] sm:max-w-[370px] transition-all duration-500 ease-out ${
      isVisible
        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
        : "opacity-0 translate-y-4 scale-95 pointer-events-none"
    }`}>
      <div className="bg-[#000F2E]/95 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-white/15 relative overflow-hidden group">
        {/* Subtle Accent Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header Strip */}
        <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10 text-[11px]">
          <div className="flex items-center gap-1.5 font-bold text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Verified Candidate Placement</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-400">{current.timeAgo}</span>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-slate-400 hover:text-white transition-colors p-0.5 rounded cursor-pointer"
              aria-label="Dismiss placement alert"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-bold text-white line-clamp-1">
            {current.role}
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-slate-300">
            <span className="flex items-center gap-1">
              <Building className="w-3 h-3 text-[#D4AF37]" />
              <span className="line-clamp-1">{current.firmType}</span>
            </span>
            <span className="text-slate-500">·</span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3" />
              <span>{current.location}</span>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
