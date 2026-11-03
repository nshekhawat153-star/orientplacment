export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  features: string[];
  bestFor: string;
  guarantee: string;
  iconName: string;
  popular?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "direct-hire",
    title: "Direct Hire & Permanent Placement",
    badge: "Most Requested",
    popular: true,
    headline: "Permanent, high-impact contributors seamlessly integrated into your culture.",
    description:
      "Our full-cycle recruitment solution is designed for long-term organizational health. We handle end-to-end sourcing, rigorous vetting, compensation alignment, and onboarding support on a success-contingent basis.",
    features: [
      "Rigorous behavioral & technical screening rubrics",
      "Confidential active & passive candidate headhunting",
      "Thorough multi-point reference & credential audits",
      "Complete offer negotiation and counteroffer mitigation",
      "Structured 30/60/90-day post-placement check-ins",
    ],
    bestFor: "Critical permanent vacancies, department managers, and key individual contributors.",
    guarantee: "100% Replacement Warranty (up to 90 days)",
    iconName: "UserCheck",
  },
  {
    id: "executive-search",
    title: "Executive Search & Retained Advisory",
    badge: "Board & C-Suite",
    headline: "Discreet, consultative headhunting for game-changing organizational leaders.",
    description:
      "When leadership is mission-critical, confidentiality and exhaustive market coverage are paramount. Our senior partners Justin Sofman and Jon Missirlian lead retained executive mandates with board-level discretion.",
    features: [
      "Comprehensive competitive talent & compensation mapping",
      "Confidential direct approaches to proven top 5% executives",
      "Executive profile dossiers with leadership style breakdowns",
      "Stakeholder consensus building and equity package structuring",
      "Extended 180-day executive integration guarantee",
    ],
    bestFor: "CEOs, CFOs, COOs, General Counsel, VPs, and Board Members.",
    guarantee: "180-Day Executive Leadership Guarantee",
    iconName: "ShieldCheck",
  },
  {
    id: "contract-staffing",
    title: "Contract & Project Staffing",
    badge: "Agile Scaling",
    headline: "Fast, flexible workforce agility for project surges and specialized needs.",
    description:
      "Scale your operational and technical teams rapidly without bloating permanent payroll. We deploy pre-screened contract specialists capable of driving immediate business results from day one.",
    features: [
      "Rapid deployment (qualified profiles in 48 to 72 hours)",
      "Zero payroll overhead — Orion manages all compliance & administration",
      "Flexible month-to-month or project-based contract agreements",
      "Seamless offboarding or contract extension workflows",
      "Strict background screening and non-disclosure execution",
    ],
    bestFor: "Surge capacity, medical leave cover, audits, and system migrations.",
    guarantee: "Immediate replacement within 24 hours if unsatisfied",
    iconName: "Clock",
  },
  {
    id: "contract-to-hire",
    title: "Contract-to-Hire Solutions",
    badge: "Risk Mitigation",
    headline: "Evaluate real-world performance and culture fit before committing full-time.",
    description:
      "Mitigate hiring risk completely. Bring exceptional candidates on board in a contract capacity to observe hands-on execution, communication style, and team dynamics before extending a permanent offer.",
    features: [
      "Real-world job evaluation with zero upfront long-term risk",
      "Transparent conversion milestones and predefined buyout schedules",
      "Smooth, uninterrupted transition from contractor to W2 employee",
      "Candidate engagement maintained by Orion throughout contract period",
      "Preserves organizational morale and team velocity",
    ],
    bestFor: "Rapidly expanding teams testing new operational roles.",
    guarantee: "Flexible conversion with prorated credits",
    iconName: "Briefcase",
  },
];
