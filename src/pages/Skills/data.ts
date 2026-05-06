export type SkillCategory =
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "leadership";

export interface SkillNodeRaw {
  id: string;
  label: string;
  category: SkillCategory;
  proficiency: 1 | 2 | 3 | 4 | 5;
  yearsExp: number;
  /** Job experience first, then personal projects */
  projectKeys: string[];
  /** Strong technical relationships — used for edge rendering */
  connections: string[];
  x: number;
  y: number;
}

/** Resolved node with translated project names */
export interface SkillNode extends Omit<SkillNodeRaw, "projectKeys"> {
  projects: string[];
}

export const CATEGORY_COLOR: Record<SkillCategory, string> = {
  language:   "#8b5cf6",
  frontend:   "#3b82f6",
  backend:    "#10b981",
  database:   "#ef4444",
  devops:     "#f59e0b",
  leadership: "#ec4899",
};

export const CATEGORY_LABEL_KEYS: Record<SkillCategory, string> = {
  language:   "Languages",
  frontend:   "Frontend",
  backend:    "Backend",
  database:   "Database",
  devops:     "DevOps & Cloud",
  leadership: "Leadership",
};

export const BASE_RADIUS = 18;
export const RADIUS_STEP = 6;

// ─────────────────────────────────────────────────────────────────────────────
// Canvas: 1280 × 780
// Edges are explicit strong technical relationships (not all shared "used in").
//
// Strong edges kept:
//   TS → React, Node.js, NestJS
//   React → RN, MobX, Tailwind, RHF, Framer Motion, shadcn
//   RN ↔ MobX
//   Tailwind ↔ shadcn
//   Node.js → Express, NestJS
//   Express → GraphQL, MongoDB
//   NestJS → GraphQL, Prisma, MongoDB
//   Prisma ↔ PostgreSQL
//   Docker → K8s, AWS, Google Cloud
//   K8s ↔ AWS
//   Python → ThingsBoard
// ─────────────────────────────────────────────────────────────────────────────
export const skillNodesRaw: SkillNodeRaw[] = [

  // ── Languages ─────────────────────────────────────────────────────────────
  {
    id: "typescript",
    label: "TypeScript",
    category: "language",
    proficiency: 5,
    yearsExp: 6,
    projectKeys: ["Varadise", "Sharp Peak", "Personal Portfolio", "Data Schema Analyser"],
    connections: ["react", "nodejs", "nestjs"],
    x: 95,  y: 130,
  },
  {
    id: "python",
    label: "Python",
    category: "language",
    proficiency: 4,
    yearsExp: 5,
    projectKeys: ["GeoGuessr Clone", "Hololive Recorder", "Sharp Peak"],
    connections: ["thingsboard"],
    x: 265, y: 85,
  },
  {
    id: "go",
    label: "Go",
    category: "language",
    proficiency: 3,
    yearsExp: 1,
    projectKeys: [],
    connections: [],
    x: 415, y: 140,
  },
  {
    id: "java",
    label: "Java",
    category: "language",
    proficiency: 3,
    yearsExp: 2,
    projectKeys: [],
    connections: [],
    x: 525, y: 75,
  },

  // ── Frontend ──────────────────────────────────────────────────────────────
  {
    id: "framer-motion",
    label: "Framer Motion",
    category: "frontend",
    proficiency: 3,
    yearsExp: 1,
    projectKeys: ["Personal Portfolio"],
    connections: ["react"],
    x: 700, y: 55,
  },
  {
    id: "react",
    label: "React",
    category: "frontend",
    proficiency: 5,
    yearsExp: 4,
    projectKeys: ["Varadise", "Meeopp", "Personal Portfolio", "Pitch Detection", "Mark Six Simulator"],
    connections: ["typescript", "react-native", "mobx", "tailwind", "react-hook-form", "framer-motion", "shadcn"],
    x: 900, y: 100,
  },
  {
    id: "react-native",
    label: "React Native",
    category: "frontend",
    proficiency: 3,
    yearsExp: 2,
    projectKeys: ["Varadise"],
    connections: ["react", "mobx"],
    x: 1070, y: 55,
  },
  {
    id: "mobx",
    label: "MobX",
    category: "frontend",
    proficiency: 4,
    yearsExp: 2,
    projectKeys: ["Varadise"],
    connections: ["react", "react-native"],
    x: 1210, y: 115,
  },
  {
    id: "react-hook-form",
    label: "React Hook Form",
    category: "frontend",
    proficiency: 4,
    yearsExp: 2,
    projectKeys: ["Personal Portfolio"],
    connections: ["react"],
    x: 755, y: 215,
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    category: "frontend",
    proficiency: 5,
    yearsExp: 3,
    projectKeys: ["Varadise", "Personal Portfolio", "Pitch Detection"],
    connections: ["react", "shadcn"],
    x: 960, y: 255,
  },
  {
    id: "shadcn",
    label: "shadcn/ui",
    category: "frontend",
    proficiency: 4,
    yearsExp: 2,
    projectKeys: ["Personal Portfolio", "Data Schema Analyser"],
    connections: ["tailwind", "react"],
    x: 1140, y: 200,
  },

  // ── Backend ───────────────────────────────────────────────────────────────
  {
    id: "nodejs",
    label: "Node.js",
    category: "backend",
    proficiency: 4,
    yearsExp: 4,
    projectKeys: ["Varadise", "Meeopp", "Personal Portfolio"],
    connections: ["typescript", "express", "nestjs"],
    x: 80,  y: 360,
  },
  {
    id: "express",
    label: "Express",
    category: "backend",
    proficiency: 4,
    yearsExp: 3,
    projectKeys: ["Meeopp", "GeoGuessr Clone"],
    connections: ["nodejs", "graphql", "mongodb"],
    x: 270, y: 415,
  },
  {
    id: "nestjs",
    label: "NestJS",
    category: "backend",
    proficiency: 4,
    yearsExp: 2,
    projectKeys: ["Varadise", "Data Schema Analyser"],
    connections: ["typescript", "nodejs", "graphql", "prisma", "mongodb"],
    x: 155, y: 530,
  },
  {
    id: "graphql",
    label: "GraphQL",
    category: "backend",
    proficiency: 3,
    yearsExp: 1,
    projectKeys: ["Meeopp"],
    connections: ["express", "nestjs"],
    x: 330, y: 545,
  },

  // ── Database ──────────────────────────────────────────────────────────────
  {
    id: "mongodb",
    label: "MongoDB",
    category: "database",
    proficiency: 4,
    yearsExp: 3,
    projectKeys: ["Varadise", "Meeopp", "GeoGuessr Clone"],
    connections: ["express", "nestjs"],
    x: 490, y: 365,
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    category: "database",
    proficiency: 3,
    yearsExp: 2,
    projectKeys: [],
    connections: ["prisma"],
    x: 670, y: 430,
  },
  {
    id: "prisma",
    label: "Prisma",
    category: "database",
    proficiency: 3,
    yearsExp: 2,
    projectKeys: ["Varadise"],
    connections: ["nestjs", "postgresql"],
    x: 545, y: 530,
  },

  // ── DevOps & Cloud ────────────────────────────────────────────────────────
  {
    id: "git",
    label: "Git",
    category: "devops",
    proficiency: 5,
    yearsExp: 6,
    projectKeys: ["Personal Portfolio", "GeoGuessr Clone", "Hololive Recorder"],
    connections: [],
    x: 840, y: 345,
  },
  {
    id: "docker",
    label: "Docker",
    category: "devops",
    proficiency: 3,
    yearsExp: 2,
    projectKeys: ["Varadise", "Meeopp", "GeoGuessr Clone"],
    connections: ["kubernetes", "aws", "google-cloud"],
    x: 1025, y: 385,
  },
  {
    id: "kubernetes",
    label: "Kubernetes",
    category: "devops",
    proficiency: 3,
    yearsExp: 1,
    projectKeys: ["Varadise", "Meeopp"],
    connections: ["docker", "aws"],
    x: 1195, y: 330,
  },
  {
    id: "vercel",
    label: "Vercel",
    category: "devops",
    proficiency: 4,
    yearsExp: 2,
    projectKeys: ["Personal Portfolio"],
    connections: [],
    x: 1235, y: 490,
  },
  {
    id: "thingsboard",
    label: "ThingsBoard",
    category: "devops",
    proficiency: 2,
    yearsExp: 1,
    projectKeys: ["Sharp Peak"],
    connections: ["python"],
    x: 875, y: 505,
  },
  {
    id: "google-cloud",
    label: "Google Cloud",
    category: "devops",
    proficiency: 3,
    yearsExp: 1,
    projectKeys: ["Meeopp"],
    connections: ["docker"],
    x: 1060, y: 520,
  },
  {
    id: "aws",
    label: "AWS",
    category: "devops",
    proficiency: 3,
    yearsExp: 2,
    projectKeys: ["Varadise", "Meeopp"],
    connections: ["docker", "kubernetes"],
    x: 1165, y: 460,
  },

  // ── Leadership ────────────────────────────────────────────────────────────
  {
    id: "tech-stack-migration",
    label: "Tech Stack Migration",
    category: "leadership",
    proficiency: 4,
    yearsExp: 2,
    projectKeys: ["Varadise", "Meeopp"],
    connections: [],
    x: 290, y: 655,
  },
  {
    id: "code-review",
    label: "Code Review",
    category: "leadership",
    proficiency: 4,
    yearsExp: 3,
    projectKeys: ["Varadise", "Meeopp"],
    connections: [],
    x: 570, y: 690,
  },
  {
    id: "agile",
    label: "Agile / Scrum",
    category: "leadership",
    proficiency: 3,
    yearsExp: 3,
    projectKeys: ["Varadise", "Meeopp"],
    connections: [],
    x: 820, y: 650,
  },
];
