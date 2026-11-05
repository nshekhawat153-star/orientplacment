import { protoData } from "@/data/protoData";

export function ProtoHiringTools() {
  const { hiringTools } = protoData;

  return (
    <section className="proto-block alt" id="tools">
      <div className="proto-wrap">
        <div className="proto-sec-head">
          <span className="proto-eyebrow">Free hiring tools</span>
          <h2>Run the hire with or without us</h2>
          <p>
            Pay data, a ready posting and where to find people. No sign-up to read any of it.
          </p>
        </div>

        <div className="proto-rcards">
          {hiringTools.map((t) => (
            <div key={t.id}>
              <a href={t.href} className="proto-rcard">
                <div>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "var(--proto-green-soft)",
                      color: "var(--proto-green)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <h3>{t.title}</h3>
                  <p style={{ marginTop: "6px" }}>{t.desc}</p>
                </div>

                <div>
                  <p className="proto-rget">
                    <b>You get:</b> {t.get}
                  </p>
                  <span className="proto-rgo" style={{ marginTop: "12px" }}>
                    Open →
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
