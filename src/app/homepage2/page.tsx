"use client";

import { useState } from "react";
import "./proto.css";
import { ProtoRibbon } from "@/components/homepage2/ProtoRibbon";
import { ProtoHeader } from "@/components/homepage2/ProtoHeader";
import { ProtoHero } from "@/components/homepage2/ProtoHero";
import { ProtoTrustStrip } from "@/components/homepage2/ProtoTrustStrip";
import { ProtoWhoWeAre } from "@/components/homepage2/ProtoWhoWeAre";
import { ProtoProcess } from "@/components/homepage2/ProtoProcess";
import { ProtoCandidates } from "@/components/homepage2/ProtoCandidates";
import { ProtoTerms } from "@/components/homepage2/ProtoTerms";
import { ProtoReviews } from "@/components/homepage2/ProtoReviews";
import { ProtoHiringTools } from "@/components/homepage2/ProtoHiringTools";
import { ProtoBrowse } from "@/components/homepage2/ProtoBrowse";
import { ProtoCandidateBand } from "@/components/homepage2/ProtoCandidateBand";
import { ProtoFaq } from "@/components/homepage2/ProtoFaq";
import { ProtoCtaBand } from "@/components/homepage2/ProtoCtaBand";
import { ProtoFooter } from "@/components/homepage2/ProtoFooter";
import { ProtoMobileBar } from "@/components/homepage2/ProtoMobileBar";
import { ProtoCandidateModal } from "@/components/homepage2/ProtoCandidateModal";
import { ProtoCandidate } from "@/data/protoData";

export default function Homepage2() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<ProtoCandidate | null>(null);

  const handleOpenModal = (candidate?: ProtoCandidate) => {
    setSelectedCandidate(candidate || null);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCandidate(null);
  };

  return (
    <div className="proto-page">
      {/* Top Prototype & Switcher Ribbon */}
      <ProtoRibbon />

      {/* Sticky Header with Official Logo & Dropdowns */}
      <ProtoHeader onRequestModal={() => handleOpenModal()} />

      <main id="main">
        {/* 1. Hero Section with Interactive 3-Card Shortlist Stack */}
        <ProtoHero onRequestModal={() => handleOpenModal()} />

        {/* 2. Trust Strip (5.0, 500+, 200+, 2022) */}
        <ProtoTrustStrip />

        {/* 3. Who We Are (Justin Sofman & Jon Missirlian with real photos) */}
        <ProtoWhoWeAre />

        {/* 4. How It Works (3 Steps with visual mini interface illustrations) */}
        <ProtoProcess />

        {/* 5. Candidates Available Now (EP-0412, LIT-0390, RE-0274) */}
        <ProtoCandidates onSelectCandidate={(c) => handleOpenModal(c)} />

        {/* 6. What It Costs (20% fee, 90 days guarantee, $0 upfront, start date) */}
        <ProtoTerms />

        {/* 7. Reviews (Verbatim Google reviews + 5.0 badge) */}
        <ProtoReviews />

        {/* 8. Free Hiring Tools (4 Resource Cards) */}
        <ProtoHiringTools />

        {/* 9. Browse Directory (Pay & Candidates by City & Role) */}
        <ProtoBrowse />

        {/* 10. For Candidates Callout Band */}
        <ProtoCandidateBand onOpenJobs={() => handleOpenModal()} />

        {/* 11. FAQ Questions Accordion */}
        <ProtoFaq />

        {/* 12. Final Midnight Dark Call to Action Band */}
        <ProtoCtaBand onRequestModal={() => handleOpenModal()} />
      </main>

      {/* 13. Comprehensive 5-Column Editorial Footer */}
      <ProtoFooter />

      {/* 14. Mobile Sticky Bottom Action Bar */}
      <ProtoMobileBar onRequestModal={() => handleOpenModal()} />

      {/* 15. Interactive Candidate & Seat Request Modal */}
      <ProtoCandidateModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        candidate={selectedCandidate}
      />
    </div>
  );
}
