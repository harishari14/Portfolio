export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  deployedUrl?: string;
  githubUrl?: string;
  year?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  points: string[];
  skills?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const PERSONAL_INFO = {
  name: 'HARISH M',
  role: 'Software Engineer',
  degree: 'B.E. Computer Science 2025',
  cgpa: 'CGPA 8.63',
  location: 'Chennai, India',
  phone: '+91 9944098830',
  email: 'amharish.m@gmail.com',
  github: 'https://github.com/harishari14',
  githubHandle: 'harishari14',
  linkedin: 'https://linkedin.com/in/harish',
  linkedinHandle: 'in/harish',
  summary:
    'Results-driven Computer Science graduate (CGPA 8.63) with practical Java Full-Stack development experience, currently advancing skills at QSpiders, Vadapalani. Proven ability to deliver measurable outcomes — 15% faster page load, zero double-booking, 5 production UI features shipped — in both team and independent settings. Seeking an entry-level Software Engineer role at an MNC.',
};

export const PROJECTS: Project[] = [
  {
    id: 'aetherspend',
    title: 'AetherSpend — Expense Tracker',
    description:
      'A modern, high-performance financial expense tracker application engineered with 2026 glassmorphic aesthetics. Features an interactive cash flow trend wave, monthly inflow/outflow charts, category allocation doughnut, and a $0.00 clean-slate state where all calculations and graphs scale dynamically in real time. Powered by a Java Spring Boot 3.3 (Java 21) REST API with an in-memory concurrent store.',
    techStack: ['Java 21', 'Spring Boot 3.3', 'React 19', 'Vite', 'Tailwind CSS', 'REST API'],
    deployedUrl: 'https://aetherspend-2026-glassmorphic-expense-tracker.ai.studio/',
    year: '2026',
  },
  {
    id: 'prooflane',
    title: 'ProofLane — Client Milestone Portal',
    description:
      'A milestone deliverable and payment authorization portal for developers and clients. Developers attach verifiable deliverable proofs (live staging URLs, GitHub Pull Requests, Figma specs, and demo walkthroughs) directly to contract milestones. Clients review submitted work to either authorize payout releases or submit structured revision requests, backed by an immutable activity audit trail.',
    techStack: ['Java 17', 'Spring Boot 3.3', 'React 19', 'TypeScript', 'Tailwind CSS', 'Maven'],
    deployedUrl: 'https://prooflane-client-milestone-deliverable-poortal-7590.ai.studio/',
    year: '2026',
  },
  {
    id: 'hospital-management',
    title: 'Hospital Appointment Management System',
    description:
      'A 3-role web application (Patient, Doctor, Admin) covering the end-to-end appointment lifecycle (Pending → Confirmed → Completed) to eliminate manual scheduling follow-ups. Completely prevented double-booking by enforcing a composite UNIQUE constraint on (doctor_id, date, time_slot) at the Oracle database level and secured all dashboards with HTTP session authentication.',
    techStack: ['Java', 'JSP', 'Servlets', 'Oracle DB', 'JDBC', 'MVC'],
    githubUrl: 'https://github.com/harishari14/HospitalManagement',
    year: '2024',
  },
  {
    id: 'movie-booking',
    title: 'Movie Booking App',
    description:
      'A full-stack movie ticket reservation web application with seat selection and show management. Reduced API response time by ~30% through targeted database indexing and query-level optimizations in MongoDB. Implemented end-to-end user authentication with JWT and Bcrypt hashing for secure login and protected-route access.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Bcrypt'],
    githubUrl: 'https://github.com/harishari14',
    year: '2024',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Java Servlets', 'JSP', 'JDBC', 'Spring Boot', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['Oracle DB', 'MongoDB'],
  },
  {
    category: 'Tools & Concepts',
    items: ['Git', 'GitHub', 'Eclipse', 'VS Code', 'OOP', 'MVC', 'SDLC'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'qspiders',
    role: 'Java Full-Stack Development (Training in Progress)',
    organization: 'QSpiders',
    location: 'Vadapalani, Chennai',
    period: 'Dec 2025 – Apr 2026',
    points: [
      'Covering Core Java, Advanced Java (Servlets, JDBC), web-tier technologies, and project work in an industry-aligned curriculum.',
      'Hands-on coding practice reinforcing Servlet lifecycle, JDBC connection pooling, MVC design patterns, and SQL optimization.',
    ],
    skills: ['Core Java', 'Servlets', 'JSP', 'JDBC', 'SQL', 'MVC Pattern'],
  },
  {
    id: 'aaf-india',
    role: 'Web Development Intern',
    organization: 'AAFIndia Pvt Ltd',
    location: 'Bangalore, India',
    period: 'Jul 2024 – Aug 2024',
    points: [
      'Reduced page-load time by ~15% by auditing and eliminating redundant code and restructuring static-asset delivery — measured before/after via browser DevTools.',
      'Shipped 5 UI features in HTML5/CSS3 as part of a 4-member Agile team, each passing a structured QA workflow before merging — zero rollbacks on delivery.',
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Browser DevTools', 'Agile Teamwork'],
  },
  {
    id: 'nss',
    role: 'NSS Club President (Leadership & Activities)',
    organization: 'Anand Institute of Higher Technology',
    location: 'Chennai, India',
    period: '2021 – 2022',
    points: [
      'Led a 50-member volunteer team through a 7-day NSS camp, growing community participation 10% via structured outreach.',
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Anand Institute of Higher Technology',
    location: 'Chennai',
    period: '2021 – 2025',
    score: 'CGPA: 8.63 / 10',
  },
  {
    degree: 'Higher Secondary — Computer Science',
    institution: 'KSR Matric Public Hr. Sec. School',
    location: 'Ambur',
    period: '2021',
    score: 'Percentage: 91.5%',
  },
];

export const CERTIFICATIONS = [
  { name: 'Java Programming — Certified', issuer: 'Certification Authority', date: 'Jan 2023' },
  { name: 'Oracle Cloud Computing', issuer: 'Oracle University', date: '2024' },
  { name: 'MongoDB for Students', issuer: 'MongoDB University', date: '2024' },
];
