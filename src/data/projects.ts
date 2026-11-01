import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'pulse-fitness-app',
    title: 'PulseFit — Next-Gen AI Workout Companion',
    category: 'Mobile Applications',
    shortDescription: 'Cross-platform Flutter mobile application featuring real-time rep tracking, offline workout syncing, and custom audio cues.',
    fullDescription: 'PulseFit was engineered as a high-performance cross-platform Flutter application targeting both iOS and Android. Built with state-of-the-art state management and background audio syncing, it delivers smooth 120 FPS animations and biometric telemetry.',
    challenge: 'Achieving sub-16ms frame times on diverse Android hardware while running background audio, sensor listeners, and real-time biometric analysis without draining device battery.',
    solution: 'Engineered a custom BLoC architecture with isolates for data processing, fine-tuned SQLite caching for zero-latency offline performance, and integrated Flutter platform channels.',
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1510519138161-58474ebf8804?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://github.com/arhamtech',
    metrics: [
      { label: 'Frame Rate', value: '120 FPS' },
      { label: 'App Startup Time', value: '< 1.2s' },
      { label: 'Offline Sync', value: '100% Reliable' }
    ],
    featured: true
  },
  {
    id: 'apex-logistics-portal',
    title: 'ApexFlow — Enterprise Freight & Logistics ERP',
    category: 'Web Applications',
    shortDescription: 'Custom Laravel enterprise web application for fleet dispatching, automated shipment billing, and real-time telemetry.',
    fullDescription: 'A multi-tenant web application architecture designed to streamline supply chain routing, dispatch management, automated freight invoice generation, and high-volume driver status tracking.',
    challenge: 'Handling concurrent driver location pings, generating 5,000+ monthly multi-currency invoices, and maintaining sub-second query response across millions of relational records.',
    solution: 'Designed an optimized MySQL relational schema with composite indexes, queued heavy PDF generation with background workers, and implemented a sleek responsive Tailwind dashboard.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://github.com/arhamtech',
    metrics: [
      { label: 'Query Speed', value: '< 45ms' },
      { label: 'Automation Gain', value: '85%' },
      { label: 'Uptime Score', value: '99.98%' }
    ],
    featured: true
  },
  {
    id: 'luxe-commerce-storefront',
    title: 'Aura Luxe — High-Conversion Designer E-Commerce',
    category: 'Ecommerce',
    shortDescription: 'Bespoke e-commerce experience with sub-second product filtering, custom cart micro-interactions, and frictionless checkout.',
    fullDescription: 'A luxury lifestyle retail platform built for international customers, prioritizing visual elegance, fluid product transitions, instant facet filtering, and high security.',
    challenge: 'Creating a silky smooth mobile shopping journey with complex visual filtering that preserves 95+ Core Web Vitals on slow 4G cellular connections.',
    solution: 'Architected a lightweight frontend with modern CSS3/HTML5 and JavaScript, lazy-loaded visual assets via edge CDN, and implemented a streamlined 2-step checkout funnel.',
    technologies: ['Core PHP', 'JavaScript', 'HTML5', 'CSS3', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://github.com/arhamtech',
    metrics: [
      { label: 'Conversion Lift', value: '+34%' },
      { label: 'Page Speed', value: '0.8s' },
      { label: 'Mobile Score', value: '98/100' }
    ],
    featured: true
  },
  {
    id: 'fintech-design-system',
    title: 'VaultX — FinTech Mobile App UI/UX & Design System',
    category: 'UI/UX Design',
    shortDescription: 'Comprehensive design system, responsive interfaces, and 70+ interactive screens for a next-gen digital banking application.',
    fullDescription: 'A modular, high-contrast digital banking user experience engineered in Figma. Featuring biometric security flows, instant peer-to-peer transfers, and multi-currency cryptocurrency portfolio analytics.',
    challenge: 'Designing an ultra-clean, trustworthy interface for complex financial instruments while eliminating cognitive load for first-time users.',
    solution: 'Formulated a comprehensive design token library with strict WCAG AAA color contrast, tested with over 40 user testing sessions, and crafted micro-interaction prototypes.',
    technologies: ['Figma', 'UI/UX', 'Design Systems', 'Mobile App UI'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://figma.com',
    metrics: [
      { label: 'Design Tokens', value: '180+' },
      { label: 'User Task Success', value: '96%' },
      { label: 'Components', value: '120+' }
    ],
    featured: false
  },
  {
    id: 'zenith-corporate-hq',
    title: 'Zenith Holdings — Global Corporate Web Presence',
    category: 'Websites',
    shortDescription: 'Modern corporate website with interactive investor relations reporting, multilingual support, and dynamic CMS capabilities.',
    fullDescription: 'A digital headquarters built for an international investment firm, establishing authority through cinematic visuals, precision typography, and flawless responsiveness.',
    challenge: 'Combining rich interactive brand storytelling with strict corporate governance, speed compliance, and multi-region localization.',
    solution: 'Built a lightweight custom PHP/Laravel engine paired with semantic HTML5, localized MySQL routing, and automated sitemap generation.',
    technologies: ['Laravel', 'PHP', 'HTML5', 'CSS3', 'Git'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://github.com/arhamtech',
    metrics: [
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'SEO Rank', value: 'Top 3' },
      { label: 'Bounce Rate', value: '-22%' }
    ],
    featured: false
  },
  {
    id: 'medsync-telehealth',
    title: 'MedSync — Real-Time Telehealth & Doctor Booking',
    category: 'Mobile Applications',
    shortDescription: 'Cross-platform patient and clinician Flutter application featuring video consultations, prescription history, and push reminders.',
    fullDescription: 'A secure, HIPAA-compliant patient communication ecosystem that connects patients with licensed healthcare specialists via real-time encrypted video and instant appointment scheduling.',
    challenge: 'Managing encrypted peer-to-peer WebRTC video feeds alongside real-time scheduling conflicts across different international time zones.',
    solution: 'Built Flutter mobile interfaces with strict permission handling, integrated REST endpoints with token authentication, and optimized background appointment notifications.',
    technologies: ['Flutter', 'Dart', 'REST APIs', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://github.com/arhamtech',
    metrics: [
      { label: 'Video Latency', value: '< 150ms' },
      { label: 'Patient Retention', value: '91%' },
      { label: 'App Rating', value: '4.9 ★' }
    ],
    featured: true
  }
];

