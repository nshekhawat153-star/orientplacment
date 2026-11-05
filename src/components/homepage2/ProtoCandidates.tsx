"use client";

import { protoData, ProtoCandidate } from "@/data/protoData";

interface ProtoCandidatesProps {
  onSelectCandidate?: (candidate: ProtoCandidate) => void;
}

export function ProtoCandidates({ onSelectCandidate }: ProtoCandidatesProps) {
  const candidates = protoData.availableCandidates;

  return (
    <section className="proto-block" id="candidates">
      <div className="proto-wrap">
        <div className="proto-sec-head row">
          <div>
            <span className="proto-eyebrow">Available now</span>
            <h2>Candidates open to a move</h2>
            <p>Screened by Jon. Names and firms stay hidden until you ask for the profile.</p>
          </div>
          <button
            type="button"
            onClick={() => onSelectCandidate && onSelectCandidate(candidates[0])}
            className="proto-btn proto-btn-ghost"
          >
            Request a shortlist
          </button>
        </div>

        <div className="proto-cand-grid">
          {candidates.map((c) => (
            <article key={c.id} className="proto-cand-card">
              <div className="proto-cand-top">
                <span className="id">{c.id}</span>
                <span className="avail">{c.availability}</span>
              </div>

              <h3>{c.headline}</h3>

              <div className="proto-sc-facts">
                <span>
                  <i>Experience</i>
                  <b>{c.years} years</b>
                </span>
                <span>
                  <i>Bar</i>
                  <b>{c.bars.join(", ")}</b>
                </span>
                <span>
                  <i>Based</i>
                  <b>{c.area.split(",")[1]?.trim() || c.cityName}</b>
                </span>
                <span>
                  <i>Expects</i>
                  <b>${c.pay[0]}k–${c.pay[1]}k</b>
                </span>
              </div>

              {/* Mix Bar */}
              <div>
                <div className="proto-mixbar" aria-hidden="true">
                  {c.mix.map(([_, pct], idx) => (
                    <i key={idx} style={{ width: `${pct}%` }} />
                  ))}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--proto-ink-3)",
                    marginTop: "4px",
                  }}
                >
                  {c.mix.slice(0, 2).map(([k, v]) => `${k} ${v}%`).join(" · ")}
                </div>
              </div>

              <div className="proto-cand-why">
                {c.why}
              </div>

              <button
                type="button"
                onClick={() => onSelectCandidate && onSelectCandidate(c)}
                className="proto-btn proto-btn-line proto-btn-sm proto-btn-block"
              >
                Request profile
              </button>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => onSelectCandidate && onSelectCandidate(candidates[0])}
            className="proto-btn proto-btn-ghost"
          >
            See all candidates
          </button>
          <span style={{ fontSize: "0.88rem", color: "var(--proto-ink-3)" }}>
            Filter by role, city, years and must-haves.
          </span>
        </div>
      </div>
    </section>
  );
}
