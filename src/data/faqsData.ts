export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "employers" | "candidates" | "general";
}

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    question: "How does Orion Placement’s fee structure work?",
    answer:
      "For Direct Hire permanent placements, we operate primarily on a success-based contingency model: you invest zero dollars upfront, and our fee is only earned once your chosen candidate accepts the offer and begins work. For Retained Executive Searches (C-suite and senior officer roles), we work on structured engagement milestones. All pricing and terms are transparently agreed upon before any search commences.",
    category: "employers",
  },
  {
    id: "faq-2",
    question: "How quickly can we expect to review qualified candidate profiles?",
    answer:
      "For specialized professional, legal, healthcare, and engineering roles, you will receive your first curated shortlist of 3 to 5 thoroughly vetted contenders within 5 to 10 business days. For urgent contract or operational staffing roles, we can frequently present qualified talent within 48 to 72 hours thanks to our proactive talent network.",
    category: "employers",
  },
  {
    id: "faq-3",
    question: "What is your replacement warranty if a placement doesn't work out?",
    answer:
      "We stand behind every single placement with our 100% Replacement Warranty (ranging from 90 to 180 days based on search tier). If a candidate leaves or fails to meet the defined performance standards during the warranty period, we will conduct an immediate replacement search at no additional cost to your organization.",
    category: "employers",
  },
  {
    id: "faq-4",
    question: "How do you source high-performing passive candidates who aren't applying online?",
    answer:
      "Over 75% of our successful placements are passive candidates. Unlike traditional agencies that simply repost ads on job boards, our partners Justin Sofman and Jon Missirlian utilize direct consultative headhunting methods. We maintain active, confidential dialogues with top-tier professionals who are currently employed and thriving, presenting them with career-defining opportunities that match their exact trajectories.",
    category: "employers",
  },
  {
    id: "faq-5",
    question: "Are there any fees or costs for job seekers working with Orion Placement?",
    answer:
      "None whatsoever. Our placement services are 100% free for candidates. We act as your confidential career agent—presenting you with unadvertised opportunities, preparing you for interviews, helping you navigate compensation negotiations, and ensuring your current employer is never compromised.",
    category: "candidates",
  },
  {
    id: "faq-6",
    question: "Which geographic markets and states does Orion Placement serve?",
    answer:
      "We operate nationwide across all 50 states. Whether you require on-site leadership in New York, New Jersey, Texas, Florida, California, or distributed remote specialists anywhere in the country, our recruitment desk possesses national jurisdiction and multi-state compliance proficiency.",
    category: "general",
  },
];
