import { protoData } from "@/data/protoData";

export function ProtoTerms() {
  const { terms, brand } = protoData;

  const tiles = [
    {
      k: "Fee",
      v: terms.feeRate,
      desc: terms.feeDetail,
      icon: "%",
    },
    {
      k: "Guarantee",
      v: terms.guaranteeDays,
      desc: terms.guaranteeDetail,
      icon: "🛡️",
    },
    {
      k: "Upfront",
      v: terms.upfront,
      desc: terms.upfrontDetail,
      icon: "💵",
    },
    {
      k: "When you pay",
      v: terms.whenYouPay,
      desc: terms.whenYouPayDetail,
      icon: "📅",
    },
  ];

  return (
    <section className="proto-block alt" id="terms">
      <div className="proto-wrap">
        <div className="proto-sec-head row">
          <div>
            <span className="proto-eyebrow">What it costs</span>
            <h2>One fee, and only if you hire</h2>
            <p>The same terms for every firm. Nothing to sign until you want to meet someone.</p>
          </div>
          <a
            href={brand.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="proto-link-arrow"
          >
            Fees and a consultation →
          </a>
        </div>

        <div className="proto-tiles4">
          {tiles.map((t, idx) => (
            <div key={idx} className="proto-tt">
              <span className="proto-tt-k">{t.k}</span>
              <b className="proto-tt-v">{t.v}</b>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
