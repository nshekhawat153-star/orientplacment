import Image from "next/image";
import { protoData } from "@/data/protoData";

export function ProtoWhoWeAre() {
  const { founders, trust, brand } = protoData;

  return (
    <section className="proto-block" id="who-we-are">
      <div className="proto-wrap">
        <div className="proto-sec-head">
          <span className="proto-eyebrow">Who we are</span>
          <h2>Two recruiters you can call by name</h2>
        </div>

        <div className="proto-split">
          {/* Left Column */}
          <div>
            <p className="proto-who-line">
              Orion Placement is a legal recruiting firm in Fort Lauderdale that has placed attorneys and paralegals with law firms across the US since {trust.since}.
            </p>

            <div style={{ marginTop: "24px" }}>
              <div className="proto-rating proto-rating-lg">
                <b>{trust.rating}</b>
                <span className="proto-stars" style={{ fontSize: "1.1rem" }}>{"★".repeat(5)}</span>
                <span style={{ color: "var(--proto-ink-2)", fontWeight: 500 }}>
                  {trust.reviews} Google reviews
                </span>
              </div>
            </div>

            <p className="proto-named-line">
              Jon is named in <b>47 of our 60</b> Google reviews.
            </p>
          </div>

          {/* Right Column: Founder Cards with Real Photos */}
          <div className="proto-people-grid">
            {founders.map((person) => (
              <div key={person.id} className="proto-person">
                <Image
                  src={person.photo}
                  alt={`${person.name} - ${person.role}`}
                  width={104}
                  height={104}
                  className="proto-person-img"
                />
                <div>
                  <h3>{person.displayName}</h3>
                  <div className="proto-role">{person.role}</div>
                  <p>{person.does}</p>

                  <div className="proto-person-meta">
                    <a
                      href={`mailto:${person.email}`}
                      className="proto-link-arrow"
                      style={{ fontSize: "0.86rem" }}
                    >
                      {person.email}
                    </a>
                    <span style={{ color: "var(--proto-line-2)" }}>·</span>
                    <a
                      href={`tel:${person.phone.replace(/\D/g, "")}`}
                      style={{ fontSize: "0.86rem", color: "var(--proto-ink-2)" }}
                    >
                      {person.phone}
                    </a>
                    {person.calendly && (
                      <>
                        <span style={{ color: "var(--proto-line-2)" }}>·</span>
                        <a
                          href={person.calendly}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "0.86rem",
                            fontWeight: 600,
                            color: "var(--proto-green)",
                            textDecoration: "underline",
                          }}
                        >
                          Book 15 mins
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
