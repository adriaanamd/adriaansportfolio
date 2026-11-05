export type StackItem = {
  name: string
  icon: string
  iconBackground?: string
}

export type StackGroup = {
  group: string
  items: StackItem[]
}

const simpleIcon = (slug: string) =>
  `https://cdn.simpleicons.org/${slug}/526540`

const customIcons = {
  aitum: "https://aitum.tv/logo.svg",
  ndi: "https://2136244485-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoUOsQwQ9oPpQ8LFlxOpLI%2Fuploads%2F1U4sO7iJ8fZEcxyRfpHb%2FPicture%202.png?alt=media&token=d4f3e033-ae57-478a-8320-2b5b459d2a49",
  photoshop:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  playwright:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
  propresenter:
    "https://cdn.prod.website-files.com/662f9c93a3bc73a71bd8dc81/662ff398fa7d280a13da12d3_ProPresenter_white_svg.svg",
}

export const stack: StackGroup[] = [
  {
    group: "TESTING / QA",
    items: [
      { name: "Cypress", icon: simpleIcon("cypress") },
      { name: "Playwright", icon: customIcons.playwright },
      { name: "Vitest", icon: simpleIcon("vitest") },
      { name: "Postman", icon: simpleIcon("postman") },
      { name: "Jira", icon: simpleIcon("jira") },
      {
        name: "Manual testing (Game beta)",
        icon: simpleIcon("testinglibrary"),
      },
    ],
  },
  {
    group: "CI/CD & TOOLS",
    items: [
      { name: "Docker", icon: simpleIcon("docker") },
      { name: "Git", icon: simpleIcon("git") },
      { name: "GitHub", icon: simpleIcon("github") },
      { name: "Netlify", icon: simpleIcon("netlify") },
      { name: "Vercel", icon: simpleIcon("vercel") },
    ],
  },
  {
    group: "FRONTEND",
    items: [
      { name: "HTML5/CSS3/JS", icon: simpleIcon("html5") },
      { name: "React", icon: simpleIcon("react") },
      { name: "TanStack Query", icon: simpleIcon("tanstack") },
      { name: "Vite", icon: simpleIcon("vite") },
      { name: "Angular", icon: simpleIcon("angular") },
      { name: "Tailwind CSS", icon: simpleIcon("tailwindcss") },
    ],
  },
  {
    group: "BACKEND",
    items: [
      { name: "Node.js", icon: simpleIcon("nodedotjs") },
      { name: "Deno", icon: simpleIcon("deno") },
      { name: "PHP", icon: simpleIcon("php") },
      { name: "Laravel", icon: simpleIcon("laravel") },
      { name: "Supabase", icon: simpleIcon("supabase") },
      { name: "ExpressJS", icon: simpleIcon("express") },
    ],
  },
  {
    group: "DATABASE",
    items: [
      { name: "PostgreSQL", icon: simpleIcon("postgresql") },
      { name: "MySQL", icon: simpleIcon("mysql") },
      { name: "MongoDB", icon: simpleIcon("mongodb") },
      { name: "SQLite", icon: simpleIcon("sqlite") },
    ],
  },
  {
    group: "STREAM & EVENT PRODUCTION",
    items: [
      { name: "OBS", icon: simpleIcon("obsstudio") },
      { name: "NDI", icon: customIcons.ndi },
      { name: "Aitum", icon: customIcons.aitum, iconBackground: "#24221f" },
      {
        name: "ProPresenter",
        icon: customIcons.propPresenter ?? customIcons.propresenter,
        iconBackground: "#24221f",
      },
    ],
  },
  {
    group: "OTHER",
    items: [
      { name: "Photoshop", icon: customIcons.photoshop },
      { name: "Trello", icon: simpleIcon("trello") },
    ],
  },
]
