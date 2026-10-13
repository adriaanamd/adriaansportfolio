export const stack: { group: string; items: string[] }[] = [
  {
    group: "FRONTEND",
    items: ["HTML5/CSS3/JS", "React", "TanStack Query", "Vite", "Angular", "TailwindCSS"],
  },
  { group: "BACKEND", items: ["PHP", "Laravel", "Node.js", "Supabase", "Appwrite", "ExpressJS"] },
  { group: "DATABASE", items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
  { group: "CI/CD", items: ["Docker", "Git", "GitHub", "Netlify", "Vercel"] },
  {
    group: "TESTING / QA",
    items: ["Cypress", "Playwright", "Postman", "Vitest", "Manual testing (Game beta)"],
  },
  { group: "STREAM & EVENT PRODUCTION", items: ["OBS", "NDI", "Aitum", "ProPresenter"] },
  { group: "OTHER", items: ["Photoshop", "Trello", "Jira"] },
];



then, for the imports
export const STACK_LOGO_IMAGES: Record<string, string> = {
  "TanStack Query": "https://tanstack.com/images/logos/logo-color-100.png",
  Angular: "/logos/angular-color.svg",
  Photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  Playwright:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
  ProPresenter:
    "https://cdn.prod.website-files.com/662f9c93a3bc73a71bd8dc81/662ff398fa7d280a13da12d3_ProPresenter_white_svg.svg",
  Aitum: "https://aitum.tv/logo.svg",
  NDI: "https://2136244485-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoUOsQw9oPpQ8LFlxOpLI%2Fuploads%2F1U4sO7iJ8fZEcxyRfpHb%2FPicture%202.png?alt=media&token=d4f3e033-ae57-478a-8320-2b5b459d2a49",
};


some more
export const STACK_LOGOS: Record<string, SimpleIcon> = {
  "HTML5/CSS3/JS": siHtml5,
  React: siReact,
  "TanStack Query": siTanstack,
  Vite: siVite,
  Angular: siAngular,
  TailwindCSS: siTailwindcss,
  PHP: siPhp,
  Laravel: siLaravel,
  "Node.js": siNodedotjs,
  Supabase: siSupabase,
  Appwrite: siAppwrite,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  Docker: siDocker,
  Git: siGit,
  GitHub: siGithub,
  Netlify: siNetlify,
  Vercel: siVercel,
  Cypress: siCypress,
  Postman: siPostman,
  ExpressJS: siExpress,
  Vitest: siVitest,
  "Manual testing (Game beta)": siTestinglibrary,
  Trello: siTrello,
  Jira: siJira,
  OBS: siObsstudio,
  NDI: siNdi,
};
import {
  siHtml5,
  siReact,
  siTanstack,
  siVite,
  siAngular,
  siTailwindcss,
  siPhp,
  siLaravel,
  siNodedotjs,
  siSupabase,
  siAppwrite,
  siPostgresql,
  siMysql,
  siMongodb,
  siDocker,
  siGit,
  siGithub,
  siNetlify,
  siVercel,
  siCypress,
  siPostman,
  siTestinglibrary,
  siExpress,
  siVitest,
  siTrello,
  siJira,
  siObsstudio,
  siNdi,
} from "simple-icons/icons";
