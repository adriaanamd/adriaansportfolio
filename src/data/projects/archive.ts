import type { ArchiveProject } from "./types"
import inkwellImage from "../../project-assets/archive/inkwell.png"
import snapBoothImage from "../../project-assets/archive/snapbooth.png"
import tahananImage from "../../project-assets/archive/tahanan.png"
import warOfDotsImage from "../../project-assets/archive/war-of-dots.png"

export const significantArchiveProjects: ArchiveProject[] = [
  {
    slug: "inkwell",
    title: "Inkwell",
    image: inkwellImage,
    eyebrow: "Desktop & Android · Cryptographic PDF Signing",
    role: "Full-Stack Engineering & Vitest QA",
    description:
      "An offline-first PDF fill, sign, and PKI certificate signing application packaged for desktop (Electron) and Android (Capacitor) with local SQLite persistence and zero cloud data collection.",
    highlights: [
      "Implemented Adobe-style cryptographic PDF signing using password-protected .p12/.pfx certificates with detached CMS/PKCS#7 signatures.",
      "Built automatic signature and tamper verification on document reopen, locking signed fields read-only so later edits cannot overwrite signed revisions.",
      "Kept private keys, certificate chains, and passphrases strictly in memory during signing without persisting sensitive material.",
    ],
    tags: [
      "Electron",
      "Capacitor Android",
      "React 19",
      "TypeScript",
      "SQLite",
      "PKI / CMS-PKCS#7",
      "Vitest",
    ],
    accent: "wine",
    repoUrl: "https://github.com/adriaanamd/inkwell",
    liveUrl: "https://inkwell-pdf.netlify.app/",
  },
  {
    slug: "snapbooth",
    title: "SnapBooth",
    image: snapBoothImage,
    eyebrow: "Real-Time WebSockets · Cross-Browser Camera QA",
    role: "Full-Stack Engineering & Release QA",
    description:
      "A real-time collaborative web photobooth pairing a React and MediaPipe Vision frontend with an Express 5 and WebSocket backend so couples and friends can capture synchronized photo strips together.",
    highlights: [
      "Synchronized room phases, countdown timers, live camera capture, and accessory state across connected clients over WebSockets.",
      "Engineered face-tracked accessory overlays with MediaPipe Tasks Vision and custom downloadable strip layouts.",
      "Backed by 17 automated frontend and backend contract test suites validating room stores, capture pipelines, and mobile layout parity.",
    ],
    tags: [
      "TypeScript",
      "React",
      "WebSockets",
      "MediaPipe Vision",
      "Express 5",
      "Contract Testing",
    ],
    accent: "sage",
    repoUrl: "https://github.com/adriaanamd/snapbooth",
    liveUrl: "https://snapbooth-main.netlify.app/",
  },
  {
    slug: "tahanan",
    title: "Tahanan",
    image: tahananImage,
    eyebrow: "Progressive Web App · Android · Realtime & RLS",
    role: "Full-Stack Engineering & Playwright E2E",
    description:
      "A private everyday-life PWA and Capacitor Android application built as a shared digital home for two partners—combining daily check-ins, shared calendars, tasks, health notes, and emergency SOS alerts.",
    highlights: [
      "Architected private partner workspaces backed by Supabase Auth, PostgreSQL Row-Level Security (RLS), and Realtime synchronization.",
      "Built emergency SOS alert workflows with Leaflet geolocation alongside offline-capable local SQLite and Android push notifications.",
      "Verified critical authentication, shared state, and mobile workflows with Playwright end-to-end tests.",
    ],
    tags: [
      "React 19",
      "TypeScript",
      "Supabase Realtime & RLS",
      "Capacitor",
      "Leaflet",
      "Playwright",
    ],
    accent: "sand",
    repoUrl: "https://github.com/adriaanamd/tahanan",
    liveUrl: "https://tahanan-drab.vercel.app/",
  },
  {
    slug: "war-of-dots",
    title: "War of Dots",
    image: warOfDotsImage,
    eyebrow: "Multiplayer RTS · Live Beta QA & Official Site",
    role: "Beta QA Tester & Credited Website Designer",
    description:
      'Contributed both live multiplayer quality assurance and frontend engineering for the minimalist real-time strategy game War of Dots—officially credited in-game under "website design: thalanas".',
    highlights: [
      "Conducted live beta testing in real player environments under 200–400 concurrent players, validating match stability across updates.",
      "Authored structured, reproducible bug reports covering tactical unit interactions, UI/UX inconsistencies, and edge-case failures.",
      'Rebuilt the official warofdots.net website in React, TanStack Query, and Tailwind CSS with creator permission, earning the in-game credit "website design: thalanas".',
    ],
    tags: [
      "Live Beta QA",
      "200–400 Concurrent Players",
      "Defect Triage",
      "React",
      "TanStack Query",
      "Tailwind CSS",
    ],
    accent: "wine",
    liveUrl: "https://warofdots.net",
  },
]
