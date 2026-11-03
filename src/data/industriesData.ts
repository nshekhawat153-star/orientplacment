export interface IndustryItem {
  id: string;
  name: string;
  shortDesc: string;
  overview: string;
  roles: string[];
  keyChallenge: string;
  solution: string;
  iconName: string;
  salaryBand: string;
  avgTurnaround: string;
  talentPool: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "legal",
    name: "Legal & Law Firms",
    shortDesc: "Attorneys, Litigation Counsel, Paralegals & Firm Operations",
    overview:
      "From high-stakes commercial litigation boutiques to regional AmLaw 200 practices and in-house corporate legal teams, we recruit legal talent with the specialized practice depth required for modern jurisprudence.",
    roles: [
      "Partners & Practice Group Leaders",
      "Senior Commercial Litigators",
      "Corporate & M&A Associates",
      "Certified Paralegals & Legal Assistants",
      "Chief Legal Officers & General Counsel",
      "Compliance & Regulatory Directors",
      "Law Firm Business Operations Managers",
    ],
    keyChallenge: "Lateral partner and senior associate talent is heavily recruited and reluctant to respond to mass outreach.",
    solution: "Confidential, partner-level consultative headhunting that respects attorney privacy and firm culture.",
    iconName: "Scale",
    salaryBand: "$140,000 – $450,000+",
    avgTurnaround: "14 Days to Shortlist",
    talentPool: "7,200+ Vetted Attorneys & Staff",
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    shortDesc: "Clinical Leadership, Nursing, Administrators & Billing Specialists",
    overview:
      "Healthcare facilities require fast, highly credentialed professionals who can maintain quality care and strict HIPAA compliance. We staff clinical and administrative leaders across private practices and hospital networks.",
    roles: [
      "Practice Administrators & Operations Directors",
      "Clinical Nurse Managers & Supervisors",
      "Medical Billing & Revenue Cycle Specialists",
      "Health Information & EHR Administrators",
      "Credentialing & Quality Officers",
      "Allied Health Technologists",
      "Executive Directors & Clinic Leaders",
    ],
    keyChallenge: "Severe industry burnout, strict credentialing delays, and high turnover across administrative teams.",
    solution: "Pre-screened, credential-verified talent pipelines ready for immediate onboarding and long-term retention.",
    iconName: "Activity",
    salaryBand: "$95,000 – $280,000",
    avgTurnaround: "10 Days to Shortlist",
    talentPool: "11,500+ Clinical & Admin Pros",
  },
  {
    id: "technology",
    name: "Technology & IT",
    shortDesc: "Software Engineers, Cloud Architects, Cybersecurity & IT Leadership",
    overview:
      "In tech hiring, speed cannot compromise competence. We match high-growth startups, enterprise SaaS firms, and internal IT departments with top-quartile engineering and technical talent.",
    roles: [
      "VP of Engineering & CTOs",
      "Cloud Solutions Architects (AWS/Azure/GCP)",
      "Full-Stack & Backend Developers",
      "Cybersecurity & InfoSec Directors",
      "DevOps & Site Reliability Engineers",
      "Senior Product Managers",
      "Enterprise IT Infrastructure Managers",
    ],
    keyChallenge: "Inflated resumes, lack of practical problem-solving skills, and fierce competition for passive engineers.",
    solution: "Technical vetting rubrics that assess verified architecture experience and pragmatic delivery.",
    iconName: "Cpu",
    salaryBand: "$130,000 – $320,000 + Equity",
    avgTurnaround: "12 Days to Shortlist",
    talentPool: "14,800+ Engineers & Architects",
  },
  {
    id: "finance",
    name: "Finance & Accounting",
    shortDesc: "CFOs, Controllers, CPAs, Financial Analysts & Tax Specialists",
    overview:
      "Fiscal integrity demands precision. We place accounting and financial leadership across private equity portfolio firms, mid-market enterprises, and CPA practices.",
    roles: [
      "Chief Financial Officers (CFO)",
      "Corporate Controllers & Assistant Controllers",
      "Senior Accountants & CPAs",
      "Financial Planning & Analysis (FP&A) Managers",
      "Audit & Tax Compliance Managers",
      "Treasury & Risk Management Leaders",
      "Payroll & AP/AR Managers",
    ],
    keyChallenge: "Severe nationwide shortage of licensed CPAs and experienced corporate controllers.",
    solution: "Direct outreach to top-performing finance leaders ready for career elevation and ownership stakes.",
    iconName: "TrendingUp",
    salaryBand: "$110,000 – $350,000+",
    avgTurnaround: "12 Days to Shortlist",
    talentPool: "8,900+ CPAs & Finance Execs",
  },
  {
    id: "construction",
    name: "Construction & Real Estate",
    shortDesc: "Project Executives, Superintendents, Estimators & Property Directors",
    overview:
      "Capital projects live and die by field leadership and financial controls. We source field-tested builders and asset managers for commercial, multi-family, and industrial builders.",
    roles: [
      "Project Executives & Senior Project Managers",
      "General Field Superintendents",
      "Chief Estimators & Pre-construction Leads",
      "Commercial Property & Asset Managers",
      "Safety & Quality Compliance Directors",
      "Real Estate Acquisitions Specialists",
      "Facilities & Plant Engineers",
    ],
    keyChallenge: "Retaining reliable superintendents and estimators with verified project portfolio completions.",
    solution: "Deep regional field connections and thorough project portfolio reference verifications.",
    iconName: "Building2",
    salaryBand: "$105,000 – $260,000",
    avgTurnaround: "14 Days to Shortlist",
    talentPool: "6,400+ Builders & Asset Mgrs",
  },
  {
    id: "executive",
    name: "Executive & Operational Leadership",
    shortDesc: "CEOs, COOs, Chief People Officers & General Managers",
    overview:
      "Transformational leadership changes an organization’s trajectory. Our executive search desk pairs boardrooms with visionary operators who drive bottom-line profitability and team cohesion.",
    roles: [
      "Chief Operating Officers (COO)",
      "Chief Executive Officers (CEO)",
      "Chief People Officers & VP of HR",
      "VP of Supply Chain & Logistics",
      "General Managers & Managing Directors",
      "VP of Strategic Business Development",
      "Board of Directors Advisors",
    ],
    keyChallenge: "Assessing authentic cultural alignment, leadership endurance, and strategic stakeholder management.",
    solution: "Retained, confidential dossiers with 360-degree reference audits and milestone-based placement models.",
    iconName: "Award",
    salaryBand: "$220,000 – $550,000+",
    avgTurnaround: "21 Days to Shortlist",
    talentPool: "3,800+ Board & C-Suite Leaders",
  },
  {
    id: "sales",
    name: "Sales & Marketing",
    shortDesc: "VPs of Sales, Enterprise AEs, Growth Marketers & Revenue Officers",
    overview:
      "Revenue generation requires demonstrable quota achievement and strategic sales enablement. We place top revenue producers who exceed sales targets.",
    roles: [
      "VP of Sales & Chief Revenue Officers (CRO)",
      "Enterprise Account Executives (B2B)",
      "Sales Directors & Regional Managers",
      "Head of Growth & Demand Generation",
      "Product Marketing Managers",
      "Customer Success Directors",
    ],
    keyChallenge: "Sifting through salespeople who interview well but fail to hit real-world quota targets.",
    solution: "Historical quota verification, compensation validation, and pipeline methodology assessments.",
    iconName: "Target",
    salaryBand: "$120,000 – $300,000 (OTE)",
    avgTurnaround: "10 Days to Shortlist",
    talentPool: "5,900+ Revenue Producers",
  },
];
