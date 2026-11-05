import Image from "next/image";
import Link from "next/link";
import { protoData } from "@/data/protoData";

export function ProtoFooter() {
  const { trust, brand, cities, roles } = protoData;

  return (
    <footer className="proto-footer">
      <div className="proto-wrap">
        {/* Top Brand & Review Badge */}
        <div className="proto-f-top">
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/homepage2" className="proto-brand-logo">
              <Image
                src="/images/orion-logo.png"
                alt="Orion Placement"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>Orion Placement</span>
            </Link>
            <p style={{ maxWidth: "48ch", fontSize: "0.86rem", color: "#98A2B3", margin: 0 }}>
              Orion Placement is a legal recruiting firm in Fort Lauderdale that has placed attorneys and paralegals with law firms across the US since {trust.since}.
            </p>
          </div>

          <a
            href={brand.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              border: "1px solid #333B44",
              borderRadius: "999px",
              background: "#1A1F26",
              color: "#FFFFFF",
              fontSize: "0.85rem",
            }}
          >
            <b>{trust.rating}</b>
            <span className="proto-stars">{"★".repeat(5)}</span>
            <span style={{ color: "#98A2B3" }}>{trust.reviews} Google reviews</span>
          </a>
        </div>

        {/* 5 Navigation Columns */}
        <div className="proto-f-cols">
          {/* Col 1 */}
          <div className="proto-f-col">
            <h2>For employers</h2>
            <ul>
              <li><a href="#candidates">Find candidates</a></li>
              <li><a href="#terms">Submit a job</a></li>
              <li><a href="#terms">Fees and guarantee</a></li>
              <li><a href="#tools">Hiring kits</a></li>
              <li><a href="#tools">Where to post a job</a></li>
              <li><a href="#tools">Where to hire from</a></li>
              <li><a href="#process">Employers overview</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="proto-f-col">
            <h2>For candidates</h2>
            <ul>
              <li><a href="#candidates">Open jobs</a></li>
              <li><a href="#contact">Upload your resume</a></li>
              <li><a href="#browse">Check your salary</a></li>
              <li><a href="#browse">Best firms to work for</a></li>
              <li><a href="#who-we-are">Candidates overview</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="proto-f-col">
            <h2>Salary guides</h2>
            <ul>
              {roles.slice(0, 8).map((r) => (
                <li key={r.slug}><a href="#browse">{r.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div className="proto-f-col">
            <h2>Cities</h2>
            <ul>
              {cities.map((c) => (
                <li key={c.slug}><a href="#browse">{c.name}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 5 */}
          <div className="proto-f-col">
            <h2>About</h2>
            <ul>
              <li><a href="#who-we-are">About Orion</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#faq">Fees & FAQ</a></li>
              <li><a href="tel:9548599941">Contact: (954) 859-9941</a></li>
              <li>
                <a
                  href={brand.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#00D2FF" }}
                >
                  Book 15 mins with Justin
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Anti-phishing & copyright footer strip */}
        <div className="proto-f-bottom">
          <div>
            Orion emails come only from <b>orionplacement.com</b>. If a message uses another domain, forward it to us before you reply.
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span>© {new Date().getFullYear()} Orion Placement LLC.</span>
            <Link href="/" style={{ color: "#8CA3C3", textDecoration: "underline" }}>
              Homepage 1
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
