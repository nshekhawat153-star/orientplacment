interface ProtoCandidateBandProps {
  onOpenJobs?: () => void;
}

export function ProtoCandidateBand({ onOpenJobs }: ProtoCandidateBandProps) {
  return (
    <section className="proto-block flush">
      <div className="proto-wrap">
        <div className="proto-cand-band">
          <div>
            <span className="proto-eyebrow">For attorneys and paralegals</span>
            <h2>Confidential roles with the pay shown</h2>
            <p>
              Roles at small and mid-size firms. Free for candidates. No firm sees your name until you say yes.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenJobs}
            className="proto-btn proto-btn-ghost proto-btn-lg"
            style={{ background: "#FFFFFF", whiteSpace: "nowrap" }}
          >
            See open jobs
          </button>
        </div>
      </div>
    </section>
  );
}
