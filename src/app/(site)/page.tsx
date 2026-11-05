import { siteConfig } from "@/config/site";
import HomeClient from "./HomeClient";
import { faqsData } from "@/data/faqsData";

export default function Home() {
  // Schema.org Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/orion-logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    openingHours: "Mo-Fr 08:00-18:30",
    priceRange: "$$$",
    founders: siteConfig.founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.role,
      sameAs: f.linkedin,
    })),
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "Executive Search",
      "Legal Recruitment",
      "Healthcare Staffing",
      "Technology Recruiting",
      "Financial Services Staffing",
      "Contingency Search",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HomeClient />
    </>
  );
}
