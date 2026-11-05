import { protoData } from "@/data/protoData";

export function ProtoReviews() {
  const { reviews, trust, brand } = protoData;

  return (
    <section className="proto-block" id="reviews">
      <div className="proto-wrap">
        <div className="proto-sec-head row">
          <div>
            <span className="proto-eyebrow">Reviews</span>
            <h2>What firms and candidates say</h2>
          </div>
          <a
            href={brand.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="proto-rating"
          >
            <b>{trust.rating}</b>
            <span className="proto-stars">{"★".repeat(5)}</span>
            <span style={{ color: "var(--proto-ink-2)" }}>{trust.reviews} Google reviews</span>
          </a>
        </div>

        <div className="proto-reviews-grid">
          {reviews.map((r) => (
            <div key={r.id} className="proto-rev-card">
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span className="proto-stars">{"★".repeat(5)}</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--proto-ink-3)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                    Google review
                  </span>
                </div>
                <p className="proto-rev-quote">
                  {r.lead && <span>{r.lead} </span>}“{r.quote}”
                </p>
              </div>

              <div className="proto-rev-foot">
                <b style={{ color: "var(--proto-ink)" }}>{r.name}</b>
                <span className="proto-badge-pill">{r.roleType}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
