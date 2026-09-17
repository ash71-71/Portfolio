export interface PersonalInfo {
  name: string;
  role: string;
  roles: string[];
  company: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  bio: string;
  detailedBio: string[];
  github: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'tools';
  level: 'Expert' | 'Advanced' | 'Proficient';
  icon: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedOverview: string;
  category: 'Full-Stack' | 'Mobile' | 'Frontend' | 'Machine Learning';
  technologies: string[];
  metrics: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  keyFeatures: string[];
  gradient: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-Time' | 'Education' | 'Internship';
  description: string[];
  technologies: string[];
  highlights: string[];
}
