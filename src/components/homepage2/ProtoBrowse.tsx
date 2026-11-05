import { protoData } from "@/data/protoData";

export function ProtoBrowse() {
  const { cities, roles } = protoData;

  return (
    <section className="proto-block" id="browse">
      <div className="proto-wrap">
        <div className="proto-sec-head">
          <span className="proto-eyebrow">Browse</span>
          <h2>Pay and candidates near you</h2>
        </div>

        <div className="proto-browse">
          {/* Column 1: By City */}
          <div>
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--proto-green)" }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              By city
            </h3>
            <div className="proto-tiles-grid">
              {cities.map((c) => (
                <a key={c.slug} href="#candidates" className="proto-tile">
                  <b>{c.name}</b>
                  <span>{c.state} · median {c.median}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: By Role */}
          <div>
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--proto-green)" }}>
                <path d="M12 3v18M3 9l9-6 9 6M6 14l-3-5 3-5M18 14l3-5-3-5" />
                <circle cx="6" cy="14" r="3" />
                <circle cx="18" cy="14" r="3" />
              </svg>
              By role
            </h3>
            <div className="proto-tiles-grid">
              {roles.map((r) => (
                <a key={r.slug} href="#candidates" className="proto-tile">
                  <b>{r.name}</b>
                  <span>{r.median}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
