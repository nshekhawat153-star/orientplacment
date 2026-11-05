"use client";

import { useState } from "react";
import { protoData, ProtoCandidate } from "@/data/protoData";

interface ProtoHeroProps {
  onRequestModal?: () => void;
}

export function ProtoHero({ onRequestModal }: ProtoHeroProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const candidates = protoData.shortlistCandidates;
  const current = candidates[selectedIdx] || candidates[0];

  return (
    <section className="proto-hero" aria-labelledby="hero-heading">
      <div className="proto-wrap proto-hero-grid">
        {/* Left: Copy & Actions */}
        <div>
          <span className="proto-eyebrow">Contingency legal recruiting</span>
          <h1 id="hero-heading">
            Legal recruiters for small and mid-size law firms
          </h1>
          <p className="proto-lede">
            See screened attorneys and paralegals for your open seat today. No fee unless you hire.
          </p>

          <div className="proto-hero-act">
            <button
              type="button"
              onClick={onRequestModal}
              className="proto-btn proto-btn-primary proto-btn-lg"
            >
              See candidates for my seat
            </button>
            <a
              href={protoData.brand.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="proto-link-arrow"
              style={{ fontSize: "1rem" }}
            >
              Book 15 minutes with Justin →
            </a>
          </div>

          <div className="proto-trust-line">
            <span className="proto-stars">
              {"★".repeat(5)}
            </span>
            <span>
              <b>5.0 on Google</b> ({protoData.trust.reviews} reviews) · No fee unless you hire
            </span>
          </div>

          <p className="proto-hero-sub">
            Looking for a role?{" "}
            <a href="#candidates" className="proto-link-arrow">
              See open jobs →
            </a>
          </p>
        </div>

        {/* Right: Interactive Candidate Shortlist Stack */}
        <div>
          <div className="proto-stack3" role="region" aria-label="Example candidate shortlist">
            <div className="proto-stack3-label">
              <span>Your shortlist</span>
              <span>Estate Planning Attorney · Houston, TX</span>
            </div>

            {/* Interactive Candidate Switcher Tabs */}
            <div className="proto-shortlist-tabs">
              {candidates.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  className={`proto-tab-pill ${selectedIdx === i ? "active" : ""}`}
                  onClick={() => setSelectedIdx(i)}
                  aria-pressed={selectedIdx === i}
                >
                  Candidate {String.fromCharCode(65 + i)} ({c.id})
                </button>
              ))}
            </div>

            {/* Active Shortlist Card */}
            <div className="proto-sc-card">
              <div className="proto-sc-top">
                <span style={{ fontWeight: 700, color: "var(--proto-green)" }}>
                  {current.id}
                </span>
                <span className="proto-sc-ok">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Meets 5 of 5 must-haves
                </span>
              </div>

              <div className="proto-sc-h">{current.headline}</div>

              <div className="proto-sc-facts">
                <span>
                  <i>Experience</i>
                  <b>{current.years} years</b>
                </span>
                <span>
                  <i>Bar</i>
                  <b>{current.bars.join(", ") || "Texas"}</b>
                </span>
                <span>
                  <i>Expects</i>
                  <b>${current.pay[0]}k–${current.pay[1]}k base</b>
                </span>
                <span>
                  <i>Notice</i>
                  <b>{current.availability}</b>
                </span>
              </div>

              {/* Practice Mix Visualization Bar */}
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.74rem",
                    color: "var(--proto-ink-3)",
                    marginBottom: "4px",
                  }}
                >
                  <span>Practice mix</span>
                  <span>{current.mix.map(([k, v]) => `${k} ${v}%`).join(" · ")}</span>
                </div>
                <div className="proto-mixbar" aria-hidden="true">
                  {current.mix.map(([_, pct], idx) => (
                    <i key={idx} style={{ width: `${pct}%` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Lock / Confidential note */}
            <div className="proto-stack3-foot">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--proto-green)" }}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Names and firms stay hidden until you ask for the profile.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
