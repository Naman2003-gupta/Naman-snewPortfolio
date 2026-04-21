export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Full Stack"
  | "Freelance"
  | "Startup"
  | "Language Based";

export interface Project {
  id: string;
  title: string;
  description: string;
  primaryCategory: ProjectCategory;
  categories: ProjectCategory[];
  language?: string;
  tech: string[];
  codeUrl?: string;
  demoUrl?: string;
  image: string;
  status: string;
}

export const projects: Project[] = [
  {
    id: "gameforge",
    title: "GameForge",
    description:
      "Interactive gaming product experience focused on immersive UI states, strong animation, and responsive frontend polish.",
    primaryCategory: "Frontend",
    categories: ["Frontend", "Full Stack"],
    tech: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB"],
    image: "GF",
    status: "Interactive frontend heavy UI project",
  },
  {
    id: "ember",
    title: "Ember",
    description:
      "Modern interface concept built around motion design, refined layout rhythm, and premium hover and scroll interactions.",
    primaryCategory: "Frontend",
    categories: ["Frontend"],
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "EM",
    status: "Modern UI based project with animations",
  },
  {
    id: "ai-forge",
    title: "AI Forge",
    description:
      "AI-powered full-stack system that combines backend APIs, integration flows, and product-oriented delivery across the stack.",
    primaryCategory: "Backend",
    categories: ["Backend", "Full Stack"],
    tech: ["Node.js", "Express.js", "REST APIs", "MongoDB", "AI Integration"],
    image: "AI",
    status: "Backend APIs and AI integration project",
  },
  {
    id: "bookmyslot",
    title: "BookMySlot",
    description:
      "Appointment booking system built with MERN architecture, scheduling logic, authentication, and streamlined user flows.",
    primaryCategory: "Backend",
    categories: ["Backend", "Full Stack"],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    image: "BM",
    status: "MERN based appointment system",
  },
  {
    id: "quotekeeper",
    title: "QuoteKeeper",
    description:
      "Authentication-backed quote management application with protected CRUD, MongoDB persistence, and structured data handling.",
    primaryCategory: "Database",
    categories: ["Database"],
    tech: ["MongoDB", "Mongoose", "JWT Authentication", "Node.js"],
    image: "QK",
    status: "MongoDB storage with authentication",
  },
  {
    id: "online-banking-system",
    title: "Online Banking System",
    description:
      "Database-driven application centered on account records, transaction flows, query design, and dependable data relationships.",
    primaryCategory: "Database",
    categories: ["Database"],
    tech: ["MySQL", "SQL", "Java", "Database Schema Design"],
    image: "OB",
    status: "Database-driven application",
  },
  {
    id: "bon-voyage",
    title: "Bon Voyage",
    description:
      "Travel booking capstone project that connects booking workflows, user-facing pages, and backend logic into one full-stack experience.",
    primaryCategory: "Full Stack",
    categories: ["Full Stack"],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    image: "BV",
    status: "Travel booking system capstone project",
  },
  {
    id: "ice-play",
    title: "Ice Play",
    description:
      "Reward-based gaming platform built in freelance work for a private client, focused on gameplay engagement, user rewards, and interactive earning mechanics.",
    primaryCategory: "Freelance",
    categories: ["Freelance", "Full Stack"],
    tech: ["React.js", "Node.js", "MongoDB", "Reward Logic", "Gamification"],
    image: "IP",
    status: "Private freelance gaming rewards platform",
  },
  {
    id: "tsl-ceramat",
    title: "TSL Ceramat Website Rebuild",
    description:
      "Freelance rebuilding effort for the live TSL Ceramat website, focused on refreshed UI, responsiveness, and a stronger production-ready web presence.",
    primaryCategory: "Freelance",
    categories: ["Freelance", "Frontend", "Full Stack"],
    tech: ["React.js", "Next.js", "Responsive UI", "Website Rebuild", "Performance"],
    demoUrl: "https://tslceremat.com",
    image: "TS",
    status: "Live business website rebuild for TSL Ceramat, Mumbai",
  },
  {
    id: "ai-forge-studios",
    title: "AI Forge Studios",
    description:
      "AI-first startup ecosystem designed around building solution-focused products for real user problems across healthcare, documents, games, freelancing, insurance, and fitness.",
    primaryCategory: "Startup",
    categories: ["Startup", "Full Stack"],
    tech: ["AI Workflows", "Prompt Engineering", "Full Stack Development", "Product Architecture"],
    image: "AF",
    status: "Startup ecosystem in active development",
  },
  {
    id: "mediscan-ai",
    title: "Mediscan AI",
    description:
      "Medical AI concept inside AI Forge Studios built to support diagnosis-oriented workflows with AI-assisted interpretation and healthcare-focused user experiences.",
    primaryCategory: "Startup",
    categories: ["Startup", "Backend", "Full Stack"],
    tech: ["AI Integration", "Healthcare Workflow", "Node.js", "Full Stack"],
    image: "MS",
    status: "Medical AI support product",
  },
  {
    id: "docgen-ai",
    title: "DocGen AI",
    description:
      "Free-form AI document generation system built to create structured outputs such as PDF-style and spreadsheet-style documents directly from prompts.",
    primaryCategory: "Startup",
    categories: ["Startup", "Full Stack"],
    tech: ["AI Document Generation", "Prompt Workflows", "PDF Output", "Structured Data"],
    image: "DG",
    status: "AI document generation product",
  },
  {
    id: "gameforge-studios",
    title: "GameForge Studios",
    description:
      "Prompt-to-real game building platform concept that turns user ideas into game-oriented building flows and interactive creation experiences.",
    primaryCategory: "Startup",
    categories: ["Startup", "Frontend", "Full Stack"],
    tech: ["Prompt Engineering", "Game Building", "Interactive UI", "Full Stack"],
    image: "GS",
    status: "Prompt to real game building startup product",
  },
  {
    id: "veritas",
    title: "Veritas",
    description:
      "Freelancing platform designed to connect project providers and freelancers while enabling workflow management, project delivery, and monetization paths.",
    primaryCategory: "Startup",
    categories: ["Startup", "Full Stack"],
    tech: ["Marketplace", "Freelancing Workflow", "Payments", "Full Stack"],
    image: "VR",
    status: "Freelancing platform with project and earning flow",
  },
  {
    id: "insure-trip",
    title: "Insure Trip",
    description:
      "Insurance-focused product concept aimed at giving small projects lightweight coverage and easier access to protection-oriented workflows.",
    primaryCategory: "Startup",
    categories: ["Startup", "Full Stack"],
    tech: ["Insurance Workflow", "Form Systems", "Full Stack", "User Journey"],
    image: "IN",
    status: "Insurance product for small projects",
  },
  {
    id: "fitgen-ai",
    title: "FitGenAI",
    description:
      "AI fitness trainer product focused on personalized guidance, training flows, and digital fitness support through intelligent user interaction.",
    primaryCategory: "Startup",
    categories: ["Startup", "Full Stack"],
    tech: ["AI Fitness", "Personalization", "Dashboard UX", "Full Stack"],
    image: "FT",
    status: "AI trainer for fitness",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "JavaScript browser game with clean state handling, responsive interaction feedback, and simple but polished gameplay logic.",
    primaryCategory: "Language Based",
    categories: ["Language Based"],
    language: "JavaScript",
    tech: ["JavaScript", "HTML5", "CSS3"],
    image: "TT",
    status: "Language based project",
  },
  {
    id: "chatting-application",
    title: "Chatting Application",
    description:
      "Node.js messaging application focused on real-time communication flows, event handling, and connected user interactions.",
    primaryCategory: "Language Based",
    categories: ["Language Based"],
    language: "Node.js",
    tech: ["Node.js", "Express.js", "JavaScript"],
    image: "CA",
    status: "Language based project",
  },
  {
    id: "file-explorer",
    title: "File Explorer",
    description:
      "Node.js project for navigating directories and managing file-system operations with structured logic and utility-driven workflows.",
    primaryCategory: "Language Based",
    categories: ["Language Based"],
    language: "Node.js",
    tech: ["Node.js", "JavaScript", "File System APIs"],
    image: "FE",
    status: "Language based project",
  },
  {
    id: "email-verification-system",
    title: "Email Verification System",
    description:
      "PHP-based verification workflow for validating users during signup and authentication with practical backend handling.",
    primaryCategory: "Language Based",
    categories: ["Language Based"],
    language: "PHP",
    tech: ["PHP", "MySQL", "Authentication"],
    image: "EV",
    status: "Language based project",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Full Stack",
  "Freelance",
  "Startup",
  "Language Based",
];
