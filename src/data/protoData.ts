export interface ProtoCandidate {
  id: string;
  role: string;
  roleName: string;
  headline: string;
  years: number;
  city: string;
  cityName: string;
  area: string;
  bars: string[];
  firmType: string;
  firmSize: string;
  mix: [string, number][];
  pay: [number, number];
  availability: string;
  modes: string[];
  tags: string[];
  why: string;
}

export interface ProtoReview {
  id: string;
  name: string;
  roleType: "LAW FIRM CLIENT" | "CANDIDATE";
  lead?: string;
  quote: string;
  rating: number;
}

export const protoData = {
  brand: {
    name: "Orion Placement",
    tagline: "Legal recruiters for small and mid-size law firms",
    phone: "(954) 859-9941",
    email: "justin@orionplacement.com",
    address: "Fort Lauderdale, Florida",
    calendly: "https://calendly.com/orionplacement/call-with-justin",
    googleReviewsUrl: "https://www.google.com/search?q=Orion+Placement+reviews",
  },
  trust: {
    rating: "5.0",
    reviews: 60,
    jonNamed: 47,
    since: "2022",
    place: "Fort Lauderdale, Florida",
    placements: "500+",
    clientFirms: "200+",
  },
  founders: [
    {
      id: "justin",
      name: "Justin Sofman",
      displayName: "Justin",
      role: "Co-Founder & Partner",
      photo: "/images/founders/justin-sofman.png",
      phone: "(954) 859-9941",
      email: "justin@orionplacement.com",
      note: "Sends most candidate introductions and agrees terms with firms.",
      does: "Your first call. Takes the seat brief, sends the shortlist and agrees terms with your firm.",
      calendly: "https://calendly.com/orionplacement/call-with-justin",
    },
    {
      id: "jon",
      name: "Jon Missirlian",
      displayName: "Jon",
      role: "Co-Founder & Head of Screening",
      photo: "/images/founders/jon-missirlian.jpg",
      phone: "(954) 859-9941",
      email: "jon@orionplacement.com",
      note: "Screens every candidate before any profile is sent.",
      does: "Screens every candidate before you see a profile, and stays with them through the move.",
      namedStat: "Named in 47 of our 60 Google reviews",
    },
  ],
  terms: {
    feeRate: "20%",
    feeDetail: "of first-year base salary, only if you hire someone we introduced",
    guaranteeDays: "90 days",
    guaranteeDetail: "If the hire leaves in that time, we replace them at no charge",
    upfront: "$0",
    upfrontDetail: "No retainer and no exclusivity. Keep your other recruiters",
    whenYouPay: "Start date",
    whenYouPayDetail: "Invoiced on start date, due in 30 days. Nothing upfront",
  },
  shortlistCandidates: [
    {
      id: "EP-TX-0412",
      role: "estate-planning-attorney",
      roleName: "Estate Planning Attorney",
      headline: "Estate planning associate, drafts and runs trust administrations",
      years: 5,
      city: "houston-tx",
      cityName: "Houston, TX",
      area: "Houston, Inner Loop",
      bars: ["Texas"],
      firmType: "Estate planning boutique",
      firmSize: "6 attorneys",
      mix: [
        ["Wills & trusts", 55],
        ["Trust administration", 25],
        ["Probate", 20],
      ] as [string, number][],
      pay: [125, 140] as [number, number],
      availability: "4 weeks' notice",
      modes: ["on-site", "hybrid"],
      tags: ["Texas bar", "Drafting wills & trusts", "Trust administration", "Probate"],
      why: "Five years at firms your size, runs administrations without a partner in the room.",
    },
    {
      id: "EP-TX-0388",
      role: "estate-planning-attorney",
      roleName: "Estate Planning Associate",
      headline: "High-net-worth estate planning associate with LL.M. in Taxation",
      years: 4,
      city: "houston-tx",
      cityName: "Houston, TX",
      area: "Houston, Galleria",
      bars: ["Texas"],
      firmType: "Private wealth practice",
      firmSize: "12 attorneys",
      mix: [
        ["Tax & wealth planning", 60],
        ["Irrevocable trusts", 25],
        ["Probate", 15],
      ] as [string, number][],
      pay: [135, 150] as [number, number],
      availability: "3 weeks' notice",
      modes: ["hybrid"],
      tags: ["Texas bar", "LL.M. Taxation", "High-net-worth planning"],
      why: "Drafts complex generational wealth strategies independently with zero supervision.",
    },
    {
      id: "EP-TX-0451",
      role: "estate-planning-attorney",
      roleName: "Estate Planning & Probate Counsel",
      headline: "Senior probate & trust administration specialist",
      years: 7,
      city: "houston-tx",
      cityName: "Houston, TX",
      area: "Houston, Woodlands / North",
      bars: ["Texas"],
      firmType: "Full-service boutique",
      firmSize: "8 attorneys",
      mix: [
        ["Probate litigation", 40],
        ["Estate administration", 40],
        ["Guardianships", 20],
      ] as [string, number][],
      pay: [145, 165] as [number, number],
      availability: "30 days' notice",
      modes: ["on-site", "hybrid"],
      tags: ["Texas bar", "Contested probate", "Independent administration"],
      why: "Seasoned lead counsel with 50+ successful contested probate resolutions.",
    },
  ],
  availableCandidates: [
    {
      id: "EP-TX-0412",
      role: "estate-planning-attorney",
      roleName: "Estate Planning Attorney",
      headline: "Estate planning associate, drafts and runs trust administrations",
      years: 5,
      city: "houston-tx",
      cityName: "Houston, TX",
      area: "Houston, Inner Loop",
      bars: ["Texas"],
      firmType: "Estate planning boutique",
      firmSize: "6 attorneys",
      mix: [
        ["Wills and trusts", 55],
        ["Trust administration", 25],
        ["Probate", 20],
      ] as [string, number][],
      pay: [125, 140] as [number, number],
      availability: "4 weeks' notice",
      modes: ["on-site", "hybrid"],
      tags: ["Texas bar", "Drafting wills and trusts", "Trust administration", "Probate"],
      why: "Five years at firms your size, runs administrations without a partner in the room.",
    },
    {
      id: "LIT-TX-0390",
      role: "litigation-attorney",
      roleName: "Litigation Attorney",
      headline: "Civil litigation associate, insurance defense background",
      years: 4,
      city: "houston-tx",
      cityName: "Houston, TX",
      area: "Houston, Downtown",
      bars: ["Texas"],
      firmType: "Insurance defense firm",
      firmSize: "14 attorneys",
      mix: [
        ["Insurance defense", 60],
        ["General civil", 40],
      ] as [string, number][],
      pay: [115, 130] as [number, number],
      availability: "2 weeks' notice",
      modes: ["on-site", "hybrid"],
      tags: ["Texas bar", "Court appearances", "Depositions"],
      why: "Takes depositions on her own; carries a full caseload with first-chair courtroom poise.",
    },
    {
      id: "RE-TX-0274",
      role: "real-estate-attorney",
      roleName: "Real Estate Attorney",
      headline: "Real estate associate, commercial closings and title",
      years: 5,
      city: "houston-tx",
      cityName: "Houston, TX",
      area: "Houston, Memorial",
      bars: ["Texas"],
      firmType: "Real estate firm",
      firmSize: "9 attorneys",
      mix: [
        ["Commercial closings", 50],
        ["Title review", 30],
        ["Leasing", 20],
      ] as [string, number][],
      pay: [120, 135] as [number, number],
      availability: "4 weeks' notice",
      modes: ["on-site", "hybrid"],
      tags: ["Texas bar", "Client-facing", "Commercial transactions"],
      why: "Closes commercial deals without supervision; trusted direct contact for high-value developers.",
    },
  ],
  reviews: [
    {
      id: "jn",
      name: "JN",
      roleType: "LAW FIRM CLIENT" as const,
      quote: "Jon and Justin understand law firm dynamics like no one else. We needed an associate who could hit the ground running immediately, and within four days they brought us candidates who matched our culture and case load. Unreservedly recommended to any law firm looking for a recruiting partner.",
      rating: 5,
    },
    {
      id: "brett-zimmerman",
      name: "Brett Zimmerman",
      roleType: "LAW FIRM CLIENT" as const,
      lead: "Jon found",
      quote: "a perfect candidate for my company. He was prompt, clear in communication, and stayed engaged through the entire interview and onboarding process. Orion is by far the most reliable search team we've partnered with.",
      rating: 5,
    },
    {
      id: "n-brown",
      name: "N Brown",
      roleType: "CANDIDATE" as const,
      quote: "They set great expectations and delivered for me within less than a week. This is perhaps the best result I have ever had. Completely confidential, transparent with salary expectations, and attentive to what I was actually looking for.",
      rating: 5,
    },
  ],
  hiringTools: [
    {
      id: "salary-guides",
      title: "Salary guides",
      desc: "What firms pay by role, city and years of practice.",
      get: "Bands, the median and the source, free",
      icon: "chart",
      href: "#browse",
    },
    {
      id: "hiring-kit",
      title: "Hiring kit",
      desc: "Everything to run the hire yourself, ready to copy.",
      get: "Posting, interview questions, scorecard",
      icon: "doc",
      href: "#process",
    },
    {
      id: "where-to-post",
      title: "Where to post a job",
      desc: "Job boards compared on cost and speed.",
      get: "Cost and time to the first applicant",
      icon: "post",
      href: "#terms",
    },
    {
      id: "where-to-hire",
      title: "Where to hire from",
      desc: "Law schools, programmes and bar groups.",
      get: "Who to contact and when they hire",
      icon: "school",
      href: "#browse",
    },
  ],
  cities: [
    { name: "Houston", state: "Texas", median: "$132k", slug: "houston-tx" },
    { name: "Dallas", state: "Texas", median: "$135k", slug: "dallas-tx" },
    { name: "Austin", state: "Texas", median: "$128k", slug: "austin-tx" },
    { name: "San Antonio", state: "Texas", median: "$114k", slug: "san-antonio-tx" },
    { name: "New York", state: "New York", median: "$172k", slug: "new-york-ny" },
    { name: "Denver", state: "Colorado", median: "$128k", slug: "denver-co" },
    { name: "Chicago", state: "Illinois", median: "$140k", slug: "chicago-il" },
    { name: "Atlanta", state: "Georgia", median: "$126k", slug: "atlanta-ga" },
    { name: "Boston", state: "Massachusetts", median: "$150k", slug: "boston-ma" },
    { name: "Los Angeles", state: "California", median: "$160k", slug: "los-angeles-ca" },
  ],
  roles: [
    { name: "Estate planning attorney", median: "Houston median $132k", slug: "estate-planning-attorney" },
    { name: "Litigation attorney", median: "Houston median $138k", slug: "litigation-attorney" },
    { name: "Commercial litigation attorney", median: "Houston median $150k", slug: "commercial-litigation-attorney" },
    { name: "Personal injury attorney", median: "Houston median $125k", slug: "personal-injury-attorney" },
    { name: "Real estate attorney", median: "Houston median $133k", slug: "real-estate-attorney" },
    { name: "Insurance defense attorney", median: "Houston median $118k", slug: "insurance-defense-attorney" },
    { name: "Family law attorney", median: "Houston median $112k", slug: "family-law-attorney" },
    { name: "Employment attorney", median: "Pay by city", slug: "employment-attorney" },
    { name: "Estate planning paralegal", median: "Houston median $66k", slug: "estate-planning-paralegal" },
    { name: "Litigation paralegal", median: "Houston median $70k", slug: "litigation-paralegal" },
    { name: "Legal assistant", median: "Houston median $52k", slug: "legal-assistant" },
  ],
  faqs: [
    {
      question: "What does it cost?",
      answer: "20% of the hire's first-year base salary, invoiced on their start date and due in 30 days. Nothing upfront and nothing if you do not hire. Terms for several hires can be arranged.",
      highlight: ["20% of the hire's first-year base salary", "on their start date and due in 30 days"],
    },
    {
      question: "What if the hire leaves early?",
      answer: "If they leave or are let go within 90 days of starting, we search again and send replacements at no extra fee.",
      highlight: ["90 days"],
    },
    {
      question: "Do we have to work only with you?",
      answer: "No. Keep posting and keep your other recruiters. You owe a fee only for a hire we introduced.",
      highlight: [],
    },
    {
      question: "How do you keep candidates anonymous?",
      answer: "Profiles show firm type and size, never names. The full redacted resume goes to you on request, and names follow when both sides agree to meet.",
      highlight: [],
    },
    {
      question: "Which seats do you fill?",
      answer: "Attorneys, paralegals and legal assistants at small and mid-size law firms across the US. Other legal seats can be arranged; ask Justin.",
      highlight: [],
    },
  ],
  navGroups: [
    {
      id: "employers",
      label: "For employers",
      items: [
        { label: "Find candidates", desc: "Describe the seat and see screened candidates now", href: "#candidates" },
        { label: "Submit a job", desc: "Paste your posting; we check the pay and match", href: "#terms" },
        { label: "Fees and guarantee", desc: "One fee, only if you hire, with a guarantee", href: "#terms" },
        { label: "Hiring kits", desc: "Posting template, interview questions and a scorecard", href: "#tools" },
        { label: "Where to post a job", desc: "Job boards compared on cost and time to applicants", href: "#tools" },
        { label: "Where to hire from", desc: "Law schools, paralegal programmes and bar groups", href: "#tools" },
        { label: "Employers overview", desc: "How Orion works for small and mid-size firms", href: "#process" },
      ],
    },
    {
      id: "candidates",
      label: "For candidates",
      items: [
        { label: "Open jobs", desc: "Confidential roles with the pay on every listing", href: "#candidates" },
        { label: "Upload your resume", desc: "See matching roles in seconds, in private", href: "#contact" },
        { label: "Check your salary", desc: "Compare your base with your city and level", href: "#browse" },
        { label: "Best firms to work for", desc: "Small and mid-size firms that publish their pay", href: "#browse" },
        { label: "Candidates overview", desc: "Free for candidates and confidential from the first call", href: "#about" },
      ],
    },
    {
      id: "salaries",
      label: "Salary guides",
      items: [
        { label: "Estate Planning Attorney", desc: "Bands by years of practice, median $132k", href: "#browse" },
        { label: "Litigation Attorney", desc: "Commercial & civil litigation bands", href: "#browse" },
        { label: "Real Estate Attorney", desc: "Commercial closings and leasing bands", href: "#browse" },
        { label: "Personal Injury Attorney", desc: "Plaintiff and defense compensation benchmarks", href: "#browse" },
        { label: "Estate Planning Paralegal", desc: "Paralegal compensation bands by state", href: "#browse" },
      ],
    },
    {
      id: "cities",
      label: "Cities",
      items: [
        { label: "Houston, TX", desc: "Median base $132k · 40+ candidates available", href: "#browse" },
        { label: "Dallas, TX", desc: "Median base $135k · Active market", href: "#browse" },
        { label: "Austin, TX", desc: "Median base $128k · Tech & estate focus", href: "#browse" },
        { label: "New York, NY", desc: "Median base $172k · Commercial & litigation", href: "#browse" },
        { label: "Los Angeles, CA", desc: "Median base $160k · Southern California", href: "#browse" },
        { label: "Atlanta, GA", desc: "Median base $126k · Southeast hub", href: "#browse" },
      ],
    },
    {
      id: "about",
      label: "About",
      items: [
        { label: "About Orion", desc: "A boutique legal recruiting team in Fort Lauderdale", href: "#who-we-are" },
        { label: "Reviews", desc: "5.0 on Google from 60 verified reviews", href: "#reviews" },
        { label: "Fees & Guarantee", desc: "20% contingent fee and 90-day guarantee", href: "#terms" },
        { label: "Contact Justin Sofman", desc: "Call (954) 859-9941 or book a calendar meeting", href: "https://calendly.com/orionplacement/call-with-justin" },
      ],
    },
  ],
};
