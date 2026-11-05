export function ProtoProcess() {
  return (
    <section className="proto-block alt" id="process">
      <div className="proto-wrap">
        <div className="proto-sec-head">
          <span className="proto-eyebrow">How it works</span>
          <h2>From open seat to shortlist in days</h2>
          <p>
            You describe the seat once. We send screened people who fit it, and you pay only when one of them starts.
          </p>
        </div>

        <div className="proto-process-grid">
          {/* Step 1 */}
          <div className="proto-step-card">
            <div>
              <span className="proto-step-day">Step 1 · Day 0</span>
              <h3>Tell us the seat</h3>
            </div>
            <p>
              A 15-minute call with Justin. Tell us the practice mix, experience level, must-haves and firm culture.
            </p>
            <div className="proto-mock" aria-hidden="true">
              <div className="proto-mk-h">
                <span>Your seat brief</span>
                <span style={{ color: "var(--proto-green)" }}>Active</span>
              </div>
              <div style={{ display: "grid", gap: "4px", fontSize: "0.82rem" }}>
                <div>
                  <span style={{ color: "var(--proto-ink-3)" }}>Role: </span>
                  <b>Estate planning attorney</b>
                </div>
                <div>
                  <span style={{ color: "var(--proto-ink-3)" }}>City: </span>
                  <b>Houston, TX</b>
                </div>
              </div>
              <div className="proto-mk-chips">
                <span className="proto-mk-chip on">Texas bar</span>
                <span className="proto-mk-chip on">Probate</span>
                <span className="proto-mk-chip">Spanish</span>
                <span className="proto-mk-chip on">3+ yrs</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="proto-step-card">
            <div>
              <span className="proto-step-day">Step 2 · Days 1–5</span>
              <h3>See the shortlist</h3>
            </div>
            <p>
              Jon screens candidates before you see any name. You receive redacted profiles with experience and salary.
            </p>
            <div className="proto-mock" aria-hidden="true">
              <div className="proto-mk-h">
                <span>Shortlist</span>
                <span style={{ fontStyle: "italic" }}>3 matches</span>
              </div>
              <div style={{ display: "grid", gap: "8px" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem" }}>
                    <b>Candidate A (EP-0412)</b>
                    <span style={{ color: "var(--proto-green)" }}>5 of 5</span>
                  </div>
                  <div className="proto-mixbar" style={{ marginTop: "3px" }}>
                    <i style={{ width: "92%" }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem" }}>
                    <b>Candidate B (EP-0388)</b>
                    <span style={{ color: "var(--proto-green)" }}>4 of 5</span>
                  </div>
                  <div className="proto-mixbar" style={{ marginTop: "3px" }}>
                    <i style={{ width: "80%" }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem" }}>
                    <b>Candidate C (EP-0451)</b>
                    <span style={{ color: "var(--proto-green)" }}>4 of 5</span>
                  </div>
                  <div className="proto-mixbar" style={{ marginTop: "3px" }}>
                    <i style={{ width: "72%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="proto-step-card">
            <div>
              <span className="proto-step-day">Step 3 · Start Date</span>
              <h3>Interview, hire, then pay</h3>
            </div>
            <p>
              We coordinate interviews and offers. You pay 20% only when the candidate starts, backed by 90-day replacement.
            </p>
            <div className="proto-mock" aria-hidden="true">
              <div className="proto-mk-h">
                <span>Interviews & Start</span>
                <span style={{ color: "var(--proto-green)" }}>Confirmed</span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "0.74rem",
                  margin: "8px 0",
                }}
              >
                <span style={{ padding: "4px", background: "var(--proto-card)", borderRadius: "4px" }}>Mon</span>
                <span style={{ padding: "4px", background: "var(--proto-card)", borderRadius: "4px" }}>Tue</span>
                <span
                  style={{
                    padding: "4px",
                    background: "var(--proto-green)",
                    color: "#fff",
                    borderRadius: "4px",
                    fontWeight: 600,
                  }}
                >
                  Wed 10am
                </span>
                <span style={{ padding: "4px", background: "var(--proto-card)", borderRadius: "4px" }}>Thu</span>
                <span style={{ padding: "4px", background: "var(--proto-card)", borderRadius: "4px" }}>Fri</span>
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--proto-green)",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontWeight: 600,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                90-day guarantee active upon start date
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
