import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'flutter-development',
    number: '01',
    title: 'Flutter App Development',
    category: 'Mobile Engineering',
    tagline: 'High-performance cross-platform apps with native speed and fluid 120fps UI.',
    shortDescription: 'We build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    fullDescription: 'Leveraging Google Flutter and Dart, our team engineers robust, reactive mobile applications engineered for hyper-growth. From custom animation physics to offline-first synchronization and complex hardware sensors integration, we ensure your app dominates the App Store and Google Play.',
    features: [
      'Android Applications',
      'iOS Applications',
      'Cross-Platform Apps',
      'API Integration'
    ],
    technologies: ['Flutter', 'Dart', 'Bloc / Riverpod', 'REST APIs', 'Firebase', 'SQLite'],
    deliverableTimeline: '4 to 8 Weeks',
    deliverables: [
      'Production-ready Android APK / App Bundle',
      'App Store validated iOS IPA',
      'Native device feature integration (Camera, GPS, Biometrics)',
      'Automated CI/CD deployment pipeline'
    ],
    icon: 'Smartphone',
    accentColor: 'blue'
  },
  {
    id: 'website-development',
    number: '02',
    title: 'Website Development',
    category: 'Web Engineering',
    tagline: 'Enterprise-grade, secure, and blazingly fast backend & full-stack web platforms.',
    shortDescription: 'Specialized in robust Laravel architectures, modern PHP, and bespoke enterprise web applications.',
    fullDescription: 'We build mission-critical web applications, SaaS platforms, and enterprise portals powered by modern Laravel and PHP frameworks. With clean MVC architecture, robust security auditing, and lightning-fast database queries, your web presence is built to scale gracefully.',
    features: [
      'Laravel Development',
      'Core PHP Development',
      'Custom Web Applications',
      'Business Websites'
    ],
    technologies: ['Laravel', 'Core PHP', 'MySQL', 'RESTful API', 'Tailwind CSS', 'Alpine.js / Vue'],
    deliverableTimeline: '3 to 6 Weeks',
    deliverables: [
      'Clean modular MVC codebase with documented endpoints',
      'Admin dashboard with role-based access control (RBAC)',
      'Payment gateway & third-party API hooks',
      'SSL and hardened OWASP security compliance'
    ],
    icon: 'Globe',
    accentColor: 'red'
  },
  {
    id: 'ui-ux-design',
    number: '03',
    title: 'UI/UX & Web Design',
    category: 'Digital Product Design',
    tagline: 'Award-winning digital experiences designed to captivate and convert.',
    shortDescription: 'Human-centric user interfaces crafted with precision, motion design, and scalable design systems.',
    fullDescription: 'Our design studio translates your brand vision into bespoke, world-class UI/UX. We conduct user journey mapping, high-fidelity interactive prototyping in Figma, and build scalable design tokens that streamline development and elevate client brand prestige.',
    features: [
      'Website UI/UX',
      'Mobile App UI/UX',
      'Responsive Interfaces',
      'Modern Design Systems'
    ],
    technologies: ['Figma', 'Interactive Prototypes', 'Design Systems', 'Micro-interactions', 'Wireframing'],
    deliverableTimeline: '2 to 4 Weeks',
    deliverables: [
      'Complete high-fidelity Figma design system with components',
      'Interactive click-through prototypes for stakeholder testing',
      'Responsive design across mobile, tablet, and ultra-wide screens',
      'Developer handoff spec sheets with asset exports'
    ],
    icon: 'Palette',
    accentColor: 'blue'
  },
  {
    id: 'database-solutions',
    number: '04',
    title: 'Database Solutions',
    category: 'Data & Architecture',
    tagline: 'High-availability, optimized schema design and bulletproof data integrity.',
    shortDescription: 'Scalable relational architectures, sub-millisecond query optimization, and rock-solid backups.',
    fullDescription: 'Data is the backbone of any enterprise. We architect, normalize, optimize, and secure relational databases. Whether restructuring legacy schemas, resolving indexing bottlenecks, or deploying automated backup failovers, we ensure zero data loss and blistering query speeds.',
    features: [
      'MySQL',
      'Database Architecture',
      'Optimization',
      'Secure Data Management'
    ],
    technologies: ['MySQL', 'Database Indexing', 'Query Profiling', 'Replication', 'Schema Migration'],
    deliverableTimeline: '1 to 3 Weeks',
    deliverables: [
      'Normalized Entity-Relationship Architecture (ERD)',
      'Optimized indexed queries with execution plan reviews',
      'Automated point-in-time disaster recovery scripts',
      'Security encryption at rest and in transit'
    ],
    icon: 'Database',
    accentColor: 'red'
  },
  {
    id: 'seo-digital-marketing',
    number: '05',
    title: 'SEO & Digital Marketing',
    category: 'Organic Growth',
    tagline: 'Dominating organic search results with data-backed technical SEO.',
    shortDescription: 'Comprehensive search engine optimization to maximize organic discoverability, speed, and conversion.',
    fullDescription: 'Great software deserves visibility. We implement deep technical SEO, structured schema data, Core Web Vitals optimization, and keyword architecture that push your business to the top of Google and Bing search result pages.',
    features: [
      'Technical SEO',
      'On-Page SEO',
      'Website Optimization',
      'Search Engine Growth'
    ],
    technologies: ['Google Search Console', 'Core Web Vitals', 'Schema.org JSON-LD', 'Lighthouse Auditing', 'Keyword Mapping'],
    deliverableTimeline: 'Ongoing / 4 Weeks Setup',
    deliverables: [
      'Full technical site audit & speed score elevation (90+ Lighthouse)',
      'Rich snippets and structured schema markup integration',
      'Keyword strategy and competitive gap report',
      'Monthly organic rank tracking & performance dashboard'
    ],
    icon: 'Search',
    accentColor: 'blue'
  },
  {
    id: 'ads-management',
    number: '06',
    title: 'Ads Management',
    category: 'Paid Acquisition',
    tagline: 'High-converting targeted campaigns that yield exceptional return on ad spend (ROAS).',
    shortDescription: 'Strategic social media advertising, precision targeting, and continuous conversion rate optimization.',
    fullDescription: 'Accelerate your client acquisition engine with data-driven advertising across Meta, Google, and LinkedIn. We craft compelling visual ad copy, set up conversion tracking pixels, execute granular A/B split tests, and optimize campaigns to lower CAC and maximize revenue.',
    features: [
      'Social Media Advertising',
      'Campaign Management',
      'Audience Targeting',
      'Performance Optimization'
    ],
    technologies: ['Meta Ads Manager', 'Google Ads', 'Pixel Tracking', 'A/B Testing', 'Lookalike Audiences'],
    deliverableTimeline: 'Monthly Campaign Cycles',
    deliverables: [
      'Omnichannel conversion tracking and pixel verification',
      'Laser-targeted audience segmentation and lookalikes',
      'High-converting ad copy and dynamic creatives',
      'Bi-weekly ROAS optimization and attribution reporting'
    ],
    icon: 'TrendingUp',
    accentColor: 'red'
  }
];

