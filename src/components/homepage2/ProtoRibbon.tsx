"use strict";
import Link from "next/link";

export function ProtoRibbon() {
  return (
    <div className="proto-ribbon">
      <div className="proto-wrap">
        <div>
          <span>
            <b>Orion Placement · Legal Recruiting</b> — Direct contingency search for small & mid-size law firms nationwide.
          </span>
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Link
            href="/"
            style={{
              fontWeight: 600,
              fontSize: "0.78rem",
              textDecoration: "underline",
              color: "var(--proto-green)",
            }}
          >
            ← View Homepage 1
          </Link>
          <span style={{ color: "var(--proto-line-2)" }}>|</span>
          <span style={{ fontSize: "0.78rem", color: "var(--proto-ink-3)" }}>
            Direct Line: (954) 859-9941
          </span>
        </div>
      </div>
    </div>
  );
}
