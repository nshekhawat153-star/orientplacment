export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  companyType: string;
  industry: string;
  rating: number;
  location: string;
  avatar?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    quote:
      "Orion Placement helped us locate a premier Commercial Litigation Partner in under three weeks. Justin understood the subtle partner-level economics and culture fit better than any national headhunting firm we've worked with in twenty years.",
    author: "Managing Partner",
    role: "Head of Litigation Practice",
    companyType: "Regional AmLaw 200 Law Firm",
    industry: "Legal & Jurisprudence",
    rating: 5,
    location: "Florham Park, NJ",
  },
  {
    id: "test-2",
    quote:
      "When our Clinical Operations Director resigned unexpectedly, we were bracing for a 6-month vacancy that would stall outpatient volume. Jon Missirlian delivered three exceptional, fully credentialed candidates within 10 days. The hire has been transformative.",
    author: "Dr. Evelyn Vance, MD",
    role: "Chief Medical Officer",
    companyType: "Multi-Specialty Surgical Network",
    industry: "Healthcare & Life Sciences",
    rating: 5,
    location: "Philadelphia, PA",
  },
  {
    id: "test-3",
    quote:
      "Orion's team doesn't blast you with random resumes or keyword matches. Every person they sent was someone our leadership team genuinely wanted to interview. They saved our executive team dozens of wasted hours and helped us scale our cloud engineering pod seamlessly.",
    author: "Marcus Chen",
    role: "VP of People & Culture",
    companyType: "Series B FinTech Platform",
    industry: "Technology & Software",
    rating: 5,
    location: "New York, NY",
  },
  {
    id: "test-4",
    quote:
      "Working with Orion was completely different from typical recruiters who ghost you. They took the time to understand my long-term career aspirations, maintained strict confidentiality, and guided me through a complex executive compensation negotiation effortlessly.",
    author: "David R. Kowalski",
    role: "Placed Chief Financial Officer (CFO)",
    companyType: "Commercial Real Estate Development Firm",
    industry: "Real Estate & Construction",
    rating: 5,
    location: "Austin, TX",
  },
];
