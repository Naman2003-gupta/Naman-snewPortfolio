export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  value: string;
  title: string;
  description: string;
}

export const profile = {
  name: "Naman Gupta",
  title: "Full Stack Developer | MERN Stack Developer | Frontend Focused Engineer",
  shortTitle: "Full Stack Developer",
  location: "IT Park, Chandigarh, India",
  availability: "Open to opportunities",
  email: "naman05mah@gmail.com",
  tagline:
    "I build full-stack MERN products and animation-rich interfaces that feel polished, fast, and production ready.",
  summary: [
    "I completed my B.Tech in Computer Science Engineering from Lovely Professional University in September 2025.",
    "I specialize in building full-stack MERN applications and modern frontend interfaces with strong animations.",
    "I have built multiple real-world projects, worked as a Software Developer at Teachnook, and have been working as a Full Stack Software Developer at Kreativan Technologies for the last 1.5 years.",
    "I have delivered AI/ML and prompt engineering seminars for large student audiences and collaborated with universities on full stack management seminars.",
    "I also work on freelance and startup products spanning gaming rewards, real website rebuilds, AI tools, marketplaces, and fitness solutions.",
    "I focus on scalable backend APIs, responsive UI design, and efficient database architecture.",
  ],
  currentRole: "Full Stack Software Developer at Kreativan Technologies",
  previousRole: "Software Developer at Teachnook",
  specialties: [
    "Scalable backend APIs",
    "Responsive UI design",
    "Efficient database architecture",
    "High-end frontend animation systems",
    "AI/ML prompt engineering seminars",
    "Freelance product delivery and website rebuilds",
  ],
};

export const heroPhrases = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend Focused Engineer",
  "Animation Driven Builder",
];

export const heroHighlights = [
  { label: "Location", value: "IT Park, Chandigarh" },
  { label: "Current Role", value: "Kreativan Technologies" },
  { label: "Focus", value: "MERN + motion UI" },
];

export const quickFacts = [
  { label: "Availability", value: "Open to opportunities" },
  { label: "Education", value: "B.Tech CSE, Completed Sep 2025" },
  { label: "Experience", value: "Kreativan Technologies, Teachnook, Freelance, Startup" },
  { label: "Strength", value: "Frontend polish with backend depth" },
];

export const education = {
  degree: "B.Tech Computer Science Engineering",
  university: "Lovely Professional University",
  status: "Completed in Sep 2025",
  focus: [
    "Full Stack Development",
    "MERN Stack",
    "System Design",
  ],
  summary:
    "Completed Computer Science Engineering in September 2025 while building practical full-stack systems, responsive interfaces, and stronger system design fundamentals.",
};

export const stats: Stat[] = [
  { label: "Graduation Year", value: 2025, suffix: "" },
  { label: "LeetCode Problems", value: 250, suffix: "+" },
  { label: "Work Tracks", value: 3, suffix: "" },
  { label: "Project Builds", value: 10, suffix: "+" },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 88 },
    { name: "HTML5", level: 96 },
    { name: "CSS3", level: 94 },
    { name: "Tailwind CSS", level: 94 },
    { name: "Bootstrap", level: 86 },
    { name: "Framer Motion", level: 90 },
  ] satisfies SkillItem[],
  backend: [
    { name: "Node.js", level: 92 },
    { name: "Express.js", level: 90 },
    { name: "REST API Development", level: 93 },
    { name: "JWT Authentication", level: 89 },
    { name: "MVC Architecture", level: 87 },
  ] satisfies SkillItem[],
  database: [
    { name: "MongoDB", level: 92 },
    { name: "MySQL", level: 84 },
    { name: "Mongoose", level: 90 },
    { name: "Database Schema Design", level: 88 },
  ] satisfies SkillItem[],
  tools: [
    { name: "Git", level: 92 },
    { name: "GitHub", level: 92 },
    { name: "Postman", level: 90 },
    { name: "Docker (Basics)", level: 72 },
    { name: "Vercel Deployment", level: 88 },
    { name: "Render Deployment", level: 86 },
  ] satisfies SkillItem[],
  languages: [
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 78 },
    { name: "Java", level: 74 },
    { name: "C++", level: 76 },
    { name: "SQL", level: 84 },
  ] satisfies SkillItem[],
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Software Developer",
    company: "Kreativan Technologies",
    period: "Current Role | 1.5 Years",
    description:
      "Working on production-focused full-stack solutions with emphasis on scalable backend APIs, responsive UI delivery, and maintainable MERN application architecture.",
  },
  {
    role: "Software Developer",
    company: "Teachnook",
    period: "Previous Role",
    description:
      "Contributed to software development work across frontend implementation and backend workflows while shipping practical features in a fast-moving environment.",
  },
  {
    role: "Freelancer",
    company: "Full Stack Web Development",
    period: "Independent Work",
    description:
      "Built products like Ice Play for a private client, currently rebuilding tslceramat.com for TSL Ceramat in Mumbai, and contributing to startup-focused full-stack and AI product ecosystems.",
  },
];

export const achievements: AchievementItem[] = [
  {
    id: "leetcode",
    value: "250+",
    title: "LeetCode Problems Solved",
    description:
      "Consistent problem-solving practice across DSA patterns, logic building, and coding interview style challenges.",
  },
  {
    id: "delivery",
    value: "MERN",
    title: "Full Stack Product Delivery",
    description:
      "Built multiple MERN applications covering authentication, CRUD flows, bookings, AI integrations, modern frontend motion, and scalable backend APIs.",
  },
  {
    id: "seminar",
    value: "10,000+",
    title: "Students Reached Through AI/ML Seminar",
    description:
      "Delivered a seminar on AI, ML, and prompt engineering at St. Andrews Institute of Management, Farukh Nagar, Gurugram, Haryana for an audience of over 10,000 students.",
  },
  {
    id: "university",
    value: "University",
    title: "Full Stack Seminar Collaboration",
    description:
      "Collaborated with Sri Guru Granth Sahib World University, Fatehgarh Sahib, India on a full stack management seminar and extended technical sessions across multiple colleges.",
  },
  {
    id: "freelance",
    value: "Live Work",
    title: "Freelance Product and Website Delivery",
    description:
      "Built Ice Play as a reward-based gaming platform for a private client and currently working on the live website rebuild of tslceramat.com for TSL Ceramat, Mumbai.",
  },
  {
    id: "startup",
    value: "AI Startup",
    title: "AI Forge Studios Ecosystem",
    description:
      "Currently building AI Forge Studios and related products including Mediscan AI, DocGen AI, GameForge Studios, Veritas, Insure Trip, and FitGenAI.",
  },
];
