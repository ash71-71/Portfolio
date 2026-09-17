import type { PersonalInfo, StatItem, SkillItem, ProjectItem, ExperienceItem } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Akash T Saji',
  role: 'Software Developer',
  roles: [
    'Software Developer',
    'Full-Stack Engineer',
    'React & React Native Specialist',
    'Node.js & API Developer',
    'State Architecture Enthusiast (Zustand)'
  ],
  company: 'Dotin Tech',
  email: 'akashtsaji8@gmail.com',
  phone: '+91 6282105086',
  location: 'Kerala, India',
  status: 'Open to high-impact opportunities & collaborations',
  bio: 'Computer Science and Engineering graduate with professional experience as a Software Developer at Dotin Tech. Passionate about building fluid, performant web and mobile applications with React, React Native, TypeScript, and robust backend microservices.',
  detailedBio: [
    'I specialize in building end-to-end digital solutions spanning interactive frontends, responsive mobile applications, and resilient backend systems.',
    'At Dotin Tech, I craft production-ready applications with React, React Native, Next.js, and Node.js. A cornerstone of my recent work was re-architecting global client state using Zustand, drastically cutting down redundant renders and boosting cross-platform app performance across Android and iOS.',
    'Graduated with a B.Tech in Computer Science and Engineering from College of Engineering, Cherthala (2021 – 2025). I combine disciplined software engineering practices, Git-driven CI/CD workflows, and a strong analytical mindset to solve complex architectural challenges.'
  ],
  github: 'https://github.com/ash71-71',
  linkedin: 'https://www.linkedin.com/in/akash-t-saji',
  resumeUrl: '#resume'
};

export const stats: StatItem[] = [
  {
    value: '1+',
    label: 'Years Professional Exp.',
    description: 'Active software engineer crafting production applications at Dotin Tech.',
    iconName: 'Briefcase'
  },
  {
    value: '100%',
    label: 'Mobile & Web Stack',
    description: 'Specialized in React, React Native, Expo, Next.js, & TypeScript.',
    iconName: 'Smartphone'
  },
  {
    value: 'Zero-Lag',
    label: 'State Architecture',
    description: 'Optimized Zustand store eliminating excessive mobile re-renders.',
    iconName: 'Zap'
  },
  {
    value: '2025',
    label: 'B.Tech CSE Graduate',
    description: 'College of Engineering, Cherthala with strong CS fundamentals.',
    iconName: 'GraduationCap'
  }
];

export const skills: SkillItem[] = [
  // Programming Languages
  {
    name: 'TypeScript',
    category: 'languages',
    level: 'Expert',
    icon: 'FileCode2',
    description: 'Strict typing, modern generics, enterprise-scale maintainability'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'languages',
    level: 'Expert',
    icon: 'Code',
    description: 'Asynchronous flows, functional paradigms, DOM/V8 optimizations'
  },
  // {
  //   name: 'Python',
  //   category: 'languages',
  //   level: 'Advanced',
  //   icon: 'Terminal',
  //   description: 'Data analysis, machine learning algorithms, scripting'
  // },
  {
    name: 'SQL',
    category: 'languages',
    level: 'Advanced',
    icon: 'Database',
    description: 'Relational data modeling, indexing, complex query tuning'
  },

  // Frontend & Mobile
  {
    name: 'React',
    category: 'frontend',
    level: 'Expert',
    icon: 'Atom',
    description: 'Component architecture, custom hooks, virtual DOM performance'
  },
  {
    name: 'React Native & Expo',
    category: 'frontend',
    level: 'Expert',
    icon: 'Smartphone',
    description: 'Cross-platform iOS & Android mobile apps, native module bridges'
  },
  {
    name: 'Next.js',
    category: 'frontend',
    level: 'Advanced',
    icon: 'Globe',
    description: 'App router, SSR/SSG, SEO-first architecture, edge routing'
  },
  {
    name: 'Zustand',
    category: 'frontend',
    level: 'Expert',
    icon: 'Layers',
    description: 'Lightweight reactive global store, selector memoization'
  },
  {
    name: 'Context API',
    category: 'frontend',
    level: 'Advanced',
    icon: 'Share2',
    description: 'Scoped state injection, theme & session management'
  },
  {
    name: 'Modern HTML & CSS',
    category: 'frontend',
    level: 'Expert',
    icon: 'Palette',
    description: 'Glassmorphism, responsive flex/grid layouts, animations'
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    level: 'Advanced',
    icon: 'Server',
    description: 'Event-driven I/O, scalable asynchronous server architecture'
  },
  {
    name: 'Express.js',
    category: 'backend',
    level: 'Advanced',
    icon: 'Cpu',
    description: 'RESTful API endpoints, middleware pipeline, authentication'
  },
  {
    name: 'REST API Design',
    category: 'backend',
    level: 'Expert',
    icon: 'Network',
    description: 'Clean contracts, semantic HTTP methods, error handling'
  },

  // Database
  {
    name: 'PostgreSQL',
    category: 'database',
    level: 'Advanced',
    icon: 'Database',
    description: 'Relational constraints, joins, transaction integrity'
  },
  {
    name: 'Supabase',
    category: 'database',
    level: 'Advanced',
    icon: 'CloudLightning',
    description: 'Realtime database, row-level security policies, BaaS integration'
  },

  // Tools & DevOps
  {
    name: 'Docker',
    category: 'tools',
    level: 'Advanced',
    icon: 'Box',
    description: 'Containerization, reproducible multi-stage builds'
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    level: 'Expert',
    icon: 'GitBranch',
    description: 'Branching strategies, code reviews, collaborative PR workflows'
  },
  {
    name: 'Linux',
    category: 'tools',
    level: 'Advanced',
    icon: 'TerminalSquare',
    description: 'Bash scripting, server environment config, process management'
  },
  {
    name: 'npm & Yarn',
    category: 'tools',
    level: 'Expert',
    icon: 'Package',
    description: 'Dependency management, script automation, monorepo tooling'
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'bogo-platform',
    title: 'Bogo Mobile & Web Ecosystem',
    tagline: 'Cross-platform customer & merchant deal platform with zero-lag state management.',
    description: 'Full-stack commercial ecosystem featuring a mobile customer client (React Native / Expo), web merchant onboarding and claim management portal (Next.js), and REST API backend.',
    detailedOverview: 'Engineered for seamless deal discovery and zone-based claiming. Architected global client state with Zustand to isolate re-renders, resulting in fluid 60fps mobile transitions across Android and iOS devices. Connected to real-time transactional REST services and PostgreSQL database.',
    category: 'Mobile',
    technologies: ['React Native', 'Expo', 'Next.js', 'TypeScript', 'Zustand', 'REST APIs', 'PostgreSQL'],
    metrics: '⚡ Eliminated unnecessary re-renders with Zustand',
    githubUrl: 'https://github.com/ash71-71',
    liveUrl: '#',
    featured: true,
    keyFeatures: [
      'Architected lightweight Zustand stores with granular selectors to eliminate UI jank',
      'Real-time deal claiming flow with instant QR/code validation',
      'Unified TypeScript interfaces shared across web and mobile surfaces',
      'Responsive merchant dashboard for inventory and zone management'
    ],
    gradient: 'from-violet-600 to-indigo-700'
  },
  {
    id: 'college-hostel-website',
    title: 'College Hostel Official Web Portal',
    tagline: 'Responsive full-stack portal streamlining student accommodation and management.',
    description: 'Developed the official web application for College of Engineering, Cherthala hostel community, digitizing resident onboarding, room allocations, announcements, and grievance tickets.',
    detailedOverview: 'Built a clean, mobile-first web interface ensuring accessibility for students and administration. Replaced cumbersome manual paperwork with digital status tracking, automated notifications, and secure authentication.',
    category: 'Full-Stack',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'CSS3'],
    metrics: '🏢 100% digital transition for resident services',
    githubUrl: 'https://github.com/ash71-71',
    liveUrl: '#',
    featured: true,
    keyFeatures: [
      'Role-based access control for students, wardens, and administrative staff',
      'Real-time grievance reporting and resolution audit trail',
      'Dynamic room and mess hall schedule management',
      'Fully responsive UI optimized for mobile smartphones and campus kiosks'
    ],
    gradient: 'from-emerald-500 to-teal-700'
  },
  {
    id: 'breathtaking-portfolio',
    title: 'Modern Developer Portfolio & Terminal',
    tagline: 'Hyper-smooth dark aesthetic portfolio with embedded interactive CLI terminal.',
    description: 'State-of-the-art personal engineering portfolio showcasing projects, live skills matrix, career timeline, and an interactive developer CLI emulator.',
    detailedOverview: 'Designed with modern aesthetic principles: frosted glassmorphism, dynamic starry particle constellation, subtle ambient gradients, zero external layout frameworks, and compositor-accelerated micro-animations.',
    category: 'Frontend',
    technologies: ['React 19', 'TypeScript', 'Vite', 'HTML5 Canvas', 'Vanilla CSS', 'Lucide Icons'],
    metrics: '⚡ 60 FPS compositor animations & 100/100 Lighthouse',
    githubUrl: 'https://github.com/ash71-71/Portfolio',
    liveUrl: '#',
    featured: false,
    keyFeatures: [
      'Interactive canvas particle system responding to mouse pointer dynamics',
      'Embedded CLI terminal emulator with executable developer commands',
      'Zero-dependency modern CSS design system with custom properties',
      'One-click contact clipboard copy and interactive celebration confetti'
    ],
    gradient: 'from-pink-500 to-rose-700'
  }
];

export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer',
    company: 'Dotin Tech',
    location: 'Kerala, India',
    period: 'June 2025 – Present',
    type: 'Full-Time',
    description: [
      'Develop and maintain software applications using modern frontend, backend, and database technologies.',
      'Develop application features using JavaScript, TypeScript, React, React Native, Node.js, and related development technologies.',
      'Build and integrate REST APIs to support application functionality and communication between frontend and backend systems.',
      'Work with databases and application data using PostgreSQL and related database technologies.',
      'Debug application issues, identify technical problems, and implement solutions to improve software reliability.',
      'Follow Git-based version control and software development workflows while collaborating on application development tasks.',
      'Architected global client state using Zustand, reducing unnecessary component re-renders and improving mobile app responsiveness across Android and iOS.'
    ],
    technologies: ['React', 'React Native', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Zustand', 'Docker', 'Git'],
    highlights: [
      'Zustand Global State Optimization',
      'Cross-Platform iOS & Android Modules',
      'High-Reliability REST Microservices',
      'PostgreSQL Relational Schemas'
    ]
  },
  // {
  //   role: 'B.Tech in Computer Science & Engineering',
  //   company: 'College of Engineering, Cherthala',
  //   location: 'Kerala, India',
  //   period: '2021 – 2025',
  //   type: 'Education',
  //   description: [
  //     'Graduated with a comprehensive foundation in Data Structures, Algorithms, Operating Systems, Database Management Systems, and Computer Networks.',
  //     'Collaborated on engineering projects including Machine Learning predictive models and official institutional web portals.',
  //     'Active contributor to technical initiatives, hackathons, and software engineering societies on campus.'
  //   ],
  //   technologies: ['Algorithms & Data Structures', 'Python', 'C/C++', 'SQL', 'Web Technologies', 'Software Engineering'],
  //   highlights: [
  //     'Computer Science & Engineering Degree',
  //     'Machine Learning Capstone Project',
  //     'Hostel Portal Web Lead',
  //     'Strong Analytical & Problem-Solving Core'
  //   ]
  // }
];

export const terminalCommands = {
  help: 'Available commands: about, skills, projects, experience, contact, clear, sudo, whoami',
  whoami: 'visitor@portfolio:~guest (Welcome! You are exploring Akash T Saji\'s portfolio)',
  about: `Akash T Saji - Software Developer at Dotin Tech (Kerala, India)
B.Tech CSE Graduate (College of Engineering, Cherthala, 2021-2025).
Specialized in React, React Native, TypeScript, Node.js, and state architecture with Zustand.`,
  skills: `Core Tech Stack:
- Languages: TypeScript, JavaScript (ES6+), Python, SQL
- Frontend/Mobile: React, React Native, Next.js, Expo, Zustand, Modern CSS
- Backend/DB: Node.js, Express.js, PostgreSQL, Supabase, REST APIs
- Tools: Git, Docker, Linux, Vite, npm/Yarn`,
  projects: `Featured Projects:
1. Bogo Mobile & Web - E-commerce & merchant platform (React Native, Expo, Zustand, Next.js)
2. College Hostel Web Portal - Official resident management web app (React, Node, PostgreSQL)
3. Developer Portfolio - Dark theme React portfolio with CLI terminal`,
  experience: `Professional Experience:
- Software Developer @ Dotin Tech (June 2025 – Present)
- B.Tech in CSE @ College of Engineering, Cherthala (2021 – 2025)`,
  contact: `Contact Akash:
- Email: akashtsaji8@gmail.com
- Phone: +91 6282105086
- GitHub: https://github.com/ash71-71
- LinkedIn: https://www.linkedin.com/in/akash-t-saji
- Location: Kerala, India`,
  sudo: 'Permission denied: Nice try! But you already have root read access to Akash\'s portfolio 😉'
};
