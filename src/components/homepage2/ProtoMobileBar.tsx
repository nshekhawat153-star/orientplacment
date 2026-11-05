"use client";

interface ProtoMobileBarProps {
  onRequestModal?: () => void;
}

export function ProtoMobileBar({ onRequestModal }: ProtoMobileBarProps) {
  return (
    <div className="proto-mbar" role="region" aria-label="Mobile quick actions">
      <button
        type="button"
        onClick={onRequestModal}
        className="proto-btn proto-btn-primary proto-btn-block"
        style={{ minHeight: "48px", fontSize: "0.98rem" }}
      >
        See candidates for my seat
      </button>
    </div>
  );
}
