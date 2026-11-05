"use client";

import { useState } from "react";
import { protoData } from "@/data/protoData";

export function ProtoFaq() {
  const { faqs, brand } = protoData;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="proto-block alt" id="faq">
      <div className="proto-wrap proto-faq-wrap">
        {/* Left Column */}
        <div className="proto-sec-head">
          <span className="proto-eyebrow">Questions</span>
          <h2>What firms ask first</h2>
          <p>
            More on the{" "}
            <a href="#terms" style={{ textDecoration: "underline" }}>
              fees and guarantee
            </a>{" "}
            page, or ask Justin directly.
          </p>
        </div>

        {/* Right Column: Interactive FAQ Accordion */}
        <div className="proto-faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="proto-faq-item">
                <button
                  type="button"
                  className="proto-faq-summary"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  style={{ width: "100%", background: "none", border: 0, textAlign: "left" }}
                >
                  <span>{faq.question}</span>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      color: "var(--proto-green)",
                      marginLeft: "12px",
                      transform: isOpen ? "rotate(45deg)" : "none",
                      transition: "transform 0.15s ease",
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="proto-faq-answer">
                    <p>
                      {faq.question === "What does it cost?" ? (
                        <>
                          <mark>20% of the hire&apos;s first-year base salary</mark>, invoiced{" "}
                          <mark>on their start date and due in 30 days</mark>. Nothing upfront and nothing if you do not hire. Terms for several hires can be arranged.
                        </>
                      ) : faq.question === "What if the hire leaves early?" ? (
                        <>
                          If they leave or are let go within <mark>90 days</mark> of starting, we search again and send replacements at no extra fee.
                        </>
                      ) : (
                        faq.answer
                      )}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
