"use client";

import { useState } from "react";
import { ProtoCandidate, protoData } from "@/data/protoData";

interface ProtoCandidateModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidate?: ProtoCandidate | null;
}

export function ProtoCandidateModal({ isOpen, onClose, candidate }: ProtoCandidateModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firmName: "",
    contactName: "",
    email: "",
    phone: "",
    roleNeeded: candidate ? candidate.roleName : "Estate Planning Attorney",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(4, 13, 33, 0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "560px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          border: "1px solid var(--proto-line)",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid var(--proto-line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "var(--proto-paper)",
          }}
        >
          <div>
            <span className="proto-eyebrow" style={{ marginBottom: "2px" }}>
              {candidate ? `Candidate Profile: ${candidate.id}` : "Confidential Candidate Request"}
            </span>
            <h3 style={{ margin: 0, fontSize: "1.25rem" }}>
              {candidate ? candidate.headline : "Tell us the seat you are filling"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: "none",
              border: "1px solid var(--proto-line-2)",
              borderRadius: "6px",
              padding: "4px 8px",
              cursor: "pointer",
              fontSize: "1rem",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "24px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "var(--proto-green-soft)",
                  color: "var(--proto-green)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>Request Received</h3>
              <p style={{ color: "var(--proto-ink-2)", fontSize: "0.95rem", lineHeight: 1.5, maxWidth: "42ch", margin: "0 auto 20px" }}>
                Justin or Jon will review your seat criteria and email you the confidential redacted profile within 4 hours.
              </p>
              <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <a
                  href={protoData.brand.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proto-btn proto-btn-primary proto-btn-sm"
                >
                  Book 15 mins now →
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="proto-btn proto-btn-ghost proto-btn-sm"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
              {candidate && (
                <div
                  style={{
                    background: "var(--proto-paper-2)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    fontSize: "0.86rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    <b>Bar:</b> {candidate.bars.join(", ")} · {candidate.years} yrs exp
                  </span>
                  <span>
                    <b>Expects:</b> ${candidate.pay[0]}k–${candidate.pay[1]}k
                  </span>
                </div>
              )}

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "4px" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Managing Partner / Hiring Partner"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      border: "1px solid var(--proto-line-2)",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "4px" }}>
                    Law Firm Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sterling & Partners LLP"
                    value={formData.firmName}
                    onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      border: "1px solid var(--proto-line-2)",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "4px" }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@lawfirm.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      border: "1px solid var(--proto-line-2)",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "4px" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      border: "1px solid var(--proto-line-2)",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "4px" }}>
                  Role & Location You Are Hiring For
                </label>
                <input
                  type="text"
                  value={formData.roleNeeded}
                  onChange={(e) => setFormData({ ...formData, roleNeeded: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid var(--proto-line-2)",
                    fontSize: "0.9rem",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "4px" }}>
                  Must-Haves or Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Texas bar, 4+ years estate planning & probate experience, hybrid schedule preferred..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid var(--proto-line-2)",
                    fontSize: "0.9rem",
                    resize: "vertical",
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--proto-ink-3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--proto-green)" }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Zero retainer. 20% contingency fee payable only upon candidate start date.</span>
              </div>

              <button
                type="submit"
                className="proto-btn proto-btn-primary proto-btn-block"
                style={{ padding: "12px", fontSize: "1rem" }}
              >
                Send Request to Justin & Jon →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
