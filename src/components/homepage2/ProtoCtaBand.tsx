import { protoData } from "@/data/protoData";

interface ProtoCtaBandProps {
  onRequestModal?: () => void;
}

export function ProtoCtaBand({ onRequestModal }: ProtoCtaBandProps) {
  const { trust, brand } = protoData;

  return (
    <section className="proto-cta-band" id="contact">
      <div className="proto-wrap proto-cta-band-grid">
        <div>
          <h2>See candidates for your seat today</h2>
          <p>
            Screened attorneys and paralegals, no retainer, and no fee unless you hire.
          </p>
        </div>

        <div className="proto-cta-act">
          <div>
            <button
              type="button"
              onClick={onRequestModal}
              className="proto-btn proto-btn-light proto-btn-lg"
              style={{ fontWeight: 700 }}
            >
              See candidates for my seat
            </button>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.88rem",
              color: "#C5D3E4",
            }}
          >
            <span className="proto-stars">{"★".repeat(5)}</span>
            <span>
              <b>{trust.rating} on Google</b> · no fee unless you hire
            </span>
          </div>

          <p className="proto-cta-alt">
            Or{" "}
            <a
              href={brand.calendly}
              target="_blank"
              rel="noopener noreferrer"
            >
              book 15 minutes with Justin
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
