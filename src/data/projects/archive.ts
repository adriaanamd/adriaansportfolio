import type { ArchiveProject } from "./types"
import inkwellImage from "../../project-assets/archive/inkwell.png"
import meatLensImage from "../../project-assets/qa/meatlens-qa.png"
import snapBoothImage from "../../project-assets/archive/snapbooth.png"
import tahananImage from "../../project-assets/archive/tahanan.png"
import warOfDotsImage from "../../project-assets/archive/wod.png"

export const significantArchiveProjects: ArchiveProject[] = [
  {
    slug: "meatlens-qa",
    title: "MeatLens model acceptance",
    image: meatLensImage,
    eyebrow: "QA case study · Classification workflow",
    role: "Project Leader · QA & Acceptance Lead",
    description:
      "A structured acceptance pass for the inspection workflow, focused on input validation, classification confidence, and evidence around edge cases.",
    highlights: [
      "Enforced pre-scan DTI regulatory safety short-circuits, native camera blur rejection, and strict Pork-only specimen boundaries during Ikot Palengke wet-market trials.",
      "Architected a 4-sharded Playwright E2E suite (capped at 110s per shard) alongside Java 21 Android Gradle JVM and WebView instrumentation gates in GitHub Actions.",
      "Built an in-app ground-truth recalibration hub that recalculates live Precision, Recall, Accuracy, and F1-Score, earning formal certification from the Olongapo City Veterinary Office.",
    ],
    tags: ["Exploratory QA", "Data validation", "Acceptance"],
    accent: "sage",
    repoUrl:
      "https://github.com/MeatLens-Freshness-Inspector/meatlens-application",
    liveUrl: "https://meatlensv2.netlify.app",
    paperLink: "/meatlens-research-paper.pdf",
    caseStudy: {
      track: "qa",
      subtitle:
        "Validating a 5-tier pork freshness CNN, pre-scan DTI compliance gates, and 4-sharded Playwright + Android CI pipelines.",
      role: "Project Leader · QA & Acceptance Lead",
      context:
        "Ikot Palengke Wet-Market Trials · Olongapo City Veterinary Office",
      focus: "Model Acceptance · 4-Shard Playwright CI · Blur & Scope Guards",
      metrics: [
        {
          value: "4 Shards",
          label:
            "Deterministic Playwright E2E lanes capped at 110s per shard in GitHub Actions",
        },
        {
          value: "5 Classes",
          label:
            "Veterinary-validated ground truth: Fresh, Acceptable, Not Fresh, Warning, Spoiled",
        },
        {
          value: "Java 21 + Web",
          label:
            "Path-aware CI gating React, Express/OpenCV, and Android Gradle JVM/WebView suites",
        },
      ],
      sections: [
        {
          eyebrow: "01 · Context & Risk",
          title:
            "Preventing bad captures, scope creep, and false confidence in wet-market inspections",
          body: "In field trials for Olongapo City's Ikot Palengke program, two major quality risks emerged: web-camera limitations producing blurry or poorly lit specimen photos, and scope ambiguity around non-pork samples or failed sanitation conditions that AI alone cannot judge.",
        },
        {
          eyebrow: "02 · Test Strategy & Coverage",
          title:
            "Multi-layered acceptance from regulatory pre-checks to sharded E2E and Android gates",
          body: "Acceptance testing spanned deterministic workflow rules, model ground-truth evaluation, and cross-platform CI:",
          bullets: [
            "4-Sharded Playwright E2E Suite: Split into fast pull-request critical journeys (test:e2e:critical) and 4 deterministic full-coverage shards (test:e2e:full --shard=1/4..4/4), each bounded by a strict 110-second global timeout.",
            "Android JVM & Instrumentation Gate: Added Gradle JVM architecture contracts (android/app/src/test) and ActivityScenario/WebView checks (android/app/src/androidTest) under Java 21.",
            "In-App Ground Truth Recalibration: Built an Admin Datasets & Ground Truth workspace where manual inspector overrides immediately recalculate live Precision, Recall, Accuracy, and F1-Score.",
          ],
        },
        {
          eyebrow: "03 · Edge Cases & Key Findings",
          title:
            "Hardening camera blur prevention, regulatory short-circuits, and specimen boundaries",
          body: "Field-informed QA passes drove four critical product revisions:",
          bullets: [
            "Pre-Scan Safety Short-Circuit: Verified that if any DTI compliance check (Stall Number, MIC proof, expiry date, storage, light color, or area cleanliness) is answered 'No', the app bypasses AI inference and immediately logs the inspection as spoiled.",
            "Native camera routing & blur rejection: Replaced constrained web-camera streams with native phone camera invocation and a blur-prevention algorithm to reject out-of-focus captures before analysis.",
            "Strict specimen delimitation: Enforced explicit Pork-only scope reminders and boundaries so beef, poultry, or fish samples are never misclassified under pork freshness weights.",
          ],
        },
        {
          eyebrow: "04 · Outcome & Release Confidence",
          title:
            "Certified by the Lead City Veterinarian for academic and field documentation",
          body: "Backed by formal certification from Dr. Joseph Arnold C. Lopez (Lead Veterinarian, Olongapo City Veterinary Office) and zero-vulnerability runtime/dependency gates (security:audit & security:runtime), MeatLens achieved full acceptance for its 5-level classification workflow.",
        },
      ],
      takeaway:
        "Model acceptance is more than a confusion matrix—it means guarding what enters the lens, short-circuiting when regulatory safety fails, and proving every path in CI.",
    },
  },
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
