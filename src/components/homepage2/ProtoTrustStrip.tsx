import { protoData } from "@/data/protoData";

export function ProtoTrustStrip() {
  const T = protoData.trust;

  return (
    <section className="proto-trust-strip" aria-label="Orion in numbers">
      <div className="proto-wrap">
        <div className="proto-trustbar">
          <div className="proto-tb">
            <b className="proto-tb-n">{T.rating}</b>
            <div className="proto-tb-l">
              <span className="proto-stars">{"★".repeat(5)}</span>
              <span>on Google, {T.reviews} reviews</span>
            </div>
          </div>

          <div className="proto-tb">
            <b className="proto-tb-n">{T.placements}</b>
            <div className="proto-tb-l">
              <span>attorneys and paralegals placed</span>
            </div>
          </div>

          <div className="proto-tb">
            <b className="proto-tb-n">{T.clientFirms}</b>
            <div className="proto-tb-l">
              <span>law firms we have hired for</span>
            </div>
          </div>

          <div className="proto-tb">
            <b className="proto-tb-n">{T.since}</b>
            <div className="proto-tb-l">
              <span>recruiting since, from {T.place.split(",")[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
