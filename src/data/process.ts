import { ProcessStage } from '../types';

export const processStages: ProcessStage[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Understanding Your Vision',
    description: 'We immerse ourselves in your brand objectives, audience demographics, competitive landscape, and functional requirements to define crystal-clear success metrics.',
    duration: 'Week 1',
    deliverables: [
      'Project Scope & Technical Specification Document',
      'User Personas & Customer Journey Maps',
      'System Architecture Blueprint',
      'Milestone Timeline & Deliverables Agreement'
    ],
    icon: 'Search'
  },
  {
    number: '02',
    title: 'Strategy',
    subtitle: 'Architecture & Engineering Roadmap',
    description: 'We determine the ideal technology stack, database schemas, API contracts, security protocols, and cloud hosting infrastructure built for effortless scalability.',
    duration: 'Week 1-2',
    deliverables: [
      'Database Entity-Relationship Diagrams (ERD)',
      'API Interface Contracts & Security Matrix',
      'Third-party Integration Roadmap',
      'Technology Selection Rationale'
    ],
    icon: 'Compass'
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Intuitive & Modern Interfaces',
    description: 'Our design studio crafts high-fidelity wireframes, interactive Figma prototypes, and complete design systems with micro-animations that captivate users.',
    duration: 'Week 2-4',
    deliverables: [
      'Full Interactive Figma Prototypes',
      'Component Library & Design Tokens',
      'Responsive Mobile & Tablet Viewports',
      'Motion Design & Micro-interaction Guides'
    ],
    icon: 'Layers'
  },
  {
    number: '04',
    title: 'Development',
    subtitle: 'Scalable & Secure Code Engineering',
    description: 'Our software engineers write clean, maintainable, and strictly typed code following test-driven practices, modern MVC architectures, and security guidelines.',
    duration: 'Week 4-8',
    deliverables: [
      'Modular Codebase with Git Versioning',
      'Bi-weekly Sprint Demos & Staging Builds',
      'API Security Testing & Performance Audits',
      'Automated Quality Assurance Testing'
    ],
    icon: 'Code'
  },
  {
    number: '05',
    title: 'Launch',
    subtitle: 'Deploy, Optimize & Celebrate',
    description: 'We handle production server provisioning, SSL certificates, App Store and Google Play submissions, speed optimization, and ongoing maintenance support.',
    duration: 'Week 8+',
    deliverables: [
      'Live Production Deployment & DNS Setup',
      'Store Submission (Google Play & App Store)',
      'Full Source Code & Admin Documentation',
      '30-Day Post-Launch Warranty & Support'
    ],
    icon: 'Rocket'
  }
];

