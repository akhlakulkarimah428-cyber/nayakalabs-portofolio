export interface Service {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  highlightWords: string[];
  features: string[];
  techs: string[];
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Web App" | "Mobile App" | "Desktop App" | "SEO Optimization" | "UI/UX Design";
  client: string;
  image: string;
  summary: string;
  metrics: string;
  techs: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}
