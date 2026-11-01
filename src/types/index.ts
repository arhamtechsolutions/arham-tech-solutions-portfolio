export interface Service {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  deliverableTimeline: string;
  deliverables: string[];
  icon: string;
  accentColor: 'red' | 'blue';
}

export interface Project {
  id: string;
  title: string;
  category: 'Mobile Applications' | 'Websites' | 'Ecommerce' | 'Web Applications' | 'UI/UX Design';
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  metrics: { label: string; value: string }[];
  featured?: boolean;
}

export interface Technology {
  name: string;
  category: 'Mobile' | 'Frontend' | 'Backend' | 'Database' | 'Design & Tools';
  icon: string;
  level: number; // percentage
  description: string;
  highlight: string;
  color: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverables: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  photo: string;
  rating: number;
  feedback: string;
  projectType: string;
  country: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  budgetRange: string;
  projectDetails: string;
}

