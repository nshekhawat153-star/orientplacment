"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { protoData } from "@/data/protoData";

interface ProtoHeaderProps {
  onRequestModal?: () => void;
}

export function ProtoHeader({ onRequestModal }: ProtoHeaderProps) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenGroup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleGroup = (id: string) => {
    setOpenGroup(openGroup === id ? null : id);
  };

  return (
    <header className="proto-header" ref={navRef}>
      <div className="proto-wrap proto-header-wrap">
        {/* Brand Logo with Official Circular Emblem */}
        <Link href="/homepage2" className="proto-brand-logo">
          <Image
            src="/images/orion-logo.png"
            alt="Orion Placement Official Circular Emblem"
            width={38}
            height={38}
            className="rounded-full shadow-sm"
            priority
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.01em" }}>
              Orion Placement
            </span>
            <span
              style={{
                fontFamily: "var(--proto-sans)",
                fontSize: "0.68rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--proto-ink-3)",
                marginTop: "2px",
              }}
            >
              Legal Recruiters
            </span>
          </div>
        </Link>

        {/* Desktop Navigation with Mega Menus */}
        <nav className="proto-nav" style={{ display: "flex", alignItems: "center" }}>
          <ul className="proto-nav-list">
            {protoData.navGroups.map((group) => {
              const isOpen = openGroup === group.id;
              return (
                <li key={group.id} className="proto-nav-item">
                  <button
                    type="button"
                    className={`proto-nav-btn ${isOpen ? "open" : ""}`}
                    onClick={() => toggleGroup(group.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{group.label}</span>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.15s ease",
                      }}
                    >
                      <path d="M1 1L5 5L9 1" />
                    </svg>
                  </button>

                  {/* Mega Menu Dropdown */}
                  {isOpen && (
                    <div className="proto-mega">
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: group.items.length > 4 ? "1fr 1fr" : "1fr",
                          gap: "4px 12px",
                        }}
                      >
                        {group.items.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            className="proto-mega-item"
                            onClick={() => setOpenGroup(null)}
                          >
                            <b>{item.label}</b>
                            <span>{item.desc}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions on Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <a
            href="tel:9548599941"
            className="hide-mobile"
            style={{
              fontSize: "0.88rem",
              fontWeight: 600,
              color: "var(--proto-ink-2)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--proto-green)" }}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (954) 859-9941
          </a>

          <button
            type="button"
            onClick={onRequestModal}
            className="proto-btn proto-btn-primary proto-btn-sm"
          >
            Find candidates
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="proto-btn proto-btn-ghost proto-btn-sm show-mobile"
            style={{ padding: "6px 10px" }}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer if open */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "var(--proto-card)",
            borderBottom: "1px solid var(--proto-line)",
            padding: "20px 24px",
          }}
        >
          <div style={{ display: "grid", gap: "16px" }}>
            {protoData.navGroups.map((g) => (
              <div key={g.id}>
                <div
                  style={{
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--proto-green)",
                    marginBottom: "8px",
                  }}
                >
                  {g.label}
                </div>
                <div style={{ display: "grid", gap: "6px" }}>
                  {g.items.map((it, idx) => (
                    <a
                      key={idx}
                      href={it.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontSize: "0.92rem",
                        color: "var(--proto-ink)",
                        padding: "4px 0",
                      }}
                    >
                      {it.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--proto-line)", paddingTop: "14px" }}>
              <a
                href="tel:9548599941"
                style={{ fontWeight: 600, color: "var(--proto-ink)" }}
              >
                Call: (954) 859-9941
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
