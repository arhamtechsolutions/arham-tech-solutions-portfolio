export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  badge: string;
  stats: string;
}

export const whyChooseUsData: FeatureItem[] = [
  {
    id: 'modern-tech',
    title: 'Modern Technology',
    tagline: 'Cutting-Edge Stacks',
    description: 'We harness modern frameworks like Flutter, modern Laravel, and high-performance reactive interfaces that outperform legacy systems.',
    icon: 'Cpu',
    badge: 'Next-Gen',
    stats: '100% Modern Stack'
  },
  {
    id: 'clean-code',
    title: 'Clean & Maintainable Code',
    tagline: 'Engineered for Longevity',
    description: 'Every line follows industry design patterns (SOLID, DRY, Clean Architecture) with comprehensive documentation for seamless scaling.',
    icon: 'FileCode',
    badge: 'Architecture',
    stats: 'Zero Tech Debt'
  },
  {
    id: 'user-centered',
    title: 'User-Centered Design',
    tagline: 'Intuitive Experiences',
    description: 'Human psychology informs our UI/UX decisions, crafting frictionless customer journeys that convert visitors into loyal clients.',
    icon: 'Users',
    badge: 'UX First',
    stats: '96% User Satisfaction'
  },
  {
    id: 'responsive-dev',
    title: 'Responsive Development',
    tagline: 'Flawless on Every Screen',
    description: 'From compact smartphones to 4K desktop workstations, our applications render flawlessly with adaptive layouts and touch-friendly controls.',
    icon: 'MonitorSmartphone',
    badge: 'Universal',
    stats: 'All Screen Sizes'
  },
  {
    id: 'performance-opt',
    title: 'Performance Optimization',
    tagline: 'Sub-Second Speeds',
    description: 'Sub-second response times, 120 FPS mobile frame rates, and 95+ Google Lighthouse scores engineered through efficient caching and asset pipelines.',
    icon: 'Zap',
    badge: 'Speed',
    stats: '< 1s Load Times'
  },
  {
    id: 'security-focused',
    title: 'Security-Focused Development',
    tagline: 'Bank-Grade Defense',
    description: 'Strict adherence to OWASP standards, SQL injection prevention, encrypted token authentication, and data protection at every touchpoint.',
    icon: 'ShieldCheck',
    badge: 'Protection',
    stats: 'OWASP Compliant'
  },
  {
    id: 'pro-communication',
    title: 'Professional Communication',
    tagline: 'Transparent Collaboration',
    description: 'Real-time updates via WhatsApp, Slack, and scheduled milestone video syncs. You are never left in the dark about your project status.',
    icon: 'MessageSquare',
    badge: 'Transparent',
    stats: '< 2hr Response'
  },
  {
    id: 'reliable-support',
    title: 'Reliable Support',
    tagline: 'Long-Term Partnership',
    description: 'Our commitment does not conclude at launch. We provide dedicated post-launch support, server monitoring, and continuous feature iterations.',
    icon: 'Headphones',
    badge: 'Dedicated',
    stats: '24/7 Availability'
  }
];

