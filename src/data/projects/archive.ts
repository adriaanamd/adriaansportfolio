import type { ArchiveProject } from "./types"

import inkwellImage from "../../project-assets/archive/inkwell.png"

import meatLensImage from "../../project-assets/qa/meatlens-qa.png"

import myLightDrugstoreImage from "../../project-assets/qa/mylightdrugstore-qa.png"

import snapBoothImage from "../../project-assets/archive/snapbooth.png"

import tahananImage from "../../project-assets/archive/tahanan.png"

import warOfDotsImage from "../../project-assets/archive/wod.png"

import warOfDotsCreditsImage from "../../project-assets/archive/wod-credits.jpg"

import warOfDotsDiscordProofImage from "../../project-assets/archive/wod-discord-proof.jpg"

import warOfDotsInitialImage from "../../project-assets/archive/wod-initial.jpg"

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
    slug: "mylightdrugstore-qa",

    title: "MyLightDrugstore audit",

    image: myLightDrugstoreImage,

    eyebrow: "QA case study · Legacy system",

    role: "QA Auditor & Refactoring Engineer",

    description:
      "A structured pass through a legacy PHP application that is refactored by me, focused on critical transaction paths, data integrity, reproducible defects, and safe regression coverage.",

    highlights: [
      "Audited overlapping 2009–2012 procedural PHP scripts (MyLightDrugstore/ and pharmacy/) relying on removed mysql_* calls and repeated conf.php files before migrating to a Laravel /api/v1 modular monolith.",

      "Built 5 automated test suites (Unit, Architecture, FeatureFoundation, FeatureBusiness, FeatureTransport) backed by PHPStan Level 9 and PHP 8.5.12 PHP2Shell runtime hardening.",

      "Enforced atomic stock-lot/sale transactions, string-decimal money math, AES-256-GCM transport encryption, and X-Request-ID ULID error correlation.",
    ],

    tags: [
      "PHPUnit",

      "PHPStan",

      "Playwright",

      "Vitest",

      "PHP",

      "Laravel",

      "TypeScript",

      "React",

      "TanStack Start",

      "Tailwind CSS",

      "MySQL",

      "SQLite",
    ],

    accent: "sand",

    repoUrl: "https://github.com/adriaanamd/MyLightDrugstore",

    caseStudy: {
      track: "qa",

      subtitle:
        "Auditing a 2009–2012 legacy PHP pharmacy system and verifying its refactor into a PHPStan Level 9 Laravel modular monolith.",

      role: "QA Auditor & Refactoring Engineer",

      context: "2009–2012 Legacy PHP Audit → Laravel /api/v1 Refactor",

      focus:
        "Legacy Defect Audit · Atomic Stock/Sales · PHPStan Level 9 + 5 Test Suites",

      metrics: [
        {
          value: "Level 9",

          label:
            "PHPStan static analysis + 5 automated suites (Unit, Arch, Foundation, Business, Transport)",
        },

        {
          value: "2009–2012",

          label:
            "Legacy mysql_* procedural scripts audited across duplicated admin, staff & pharmacy folders",
        },

        {
          value: "AES + ULID",

          label:
            "Encrypted /api/v1 payloads, string-decimal currency, and req_ ULID error tracing",
        },
      ],

      sections: [
        {
          eyebrow: "01 · Context & Risk",

          title:
            "Untangling a 15-year-old pharmacy codebase with duplicated pages and removed mysql_* calls",

          body: "Originally written between 2009 and 2012, MyLightDrugstore existed as two overlapping procedural PHP copies (MyLightDrugstore/ with separate administrator/ and staff/ directories, and pharmacy/) relying on removed mysql_* functions and repeated conf.php files. Auditing the legacy behavior was essential to refactor it into a modern Laravel modular monolith + React FSD frontend without losing a single medicine lot or sales rule.",
        },

        {
          eyebrow: "02 · Test Strategy & Coverage",

          title:
            "Contract-first API specification paired with 5 CI test suites",

          body: "I audited every legacy screen and mapped its exact behavior into a formal /api/v1 contract (API-DOCS.md) across six strict domain modules (Identity, Catalog, Inventory, Sales, Users, Reporting):",

          bullets: [
            "5 Automated Test Suites: Built Unit, Architecture, FeatureFoundation, FeatureBusiness, and FeatureTransport test suites running against SQLite locally and MySQL 8 / MariaDB in CI.",

            "Static & Runtime Hardening: Enforced PHPStan Level 9 analysis and pinned CI to PHP 8.5.12, explicitly rejecting runtimes vulnerable to PHP2Shell (CVE-2026-109618 and CVE-2026-109619).",

            "Postman & Transport Contract Checks: Validated AES-256-GCM encrypted request/response envelopes (/transport/public-key + X-Transport-Key) and X-Request-ID ULID correlation headers.",
          ],
        },

        {
          eyebrow: "03 · Edge Cases & Key Findings",

          title:
            "Eliminating floating-point money drift, race conditions, and cross-table leakage",

          body: "The legacy audit and new architecture tests caught and prevented critical financial and inventory defects:",

          bullets: [
            "Atomic sale & stock-lot transactions: Ensured Sales calls Inventory's application service inside a single database transaction, returning explicit 409 insufficient_stock or idempotency_key_reused conflicts instead of partial writes.",

            "String-decimal money representation: Replaced floating-point currency math with exact decimal strings (e.g., '12.50') and rejected unknown fields or invalid enums with strict 422 validation_failed details.",

            "Zero schema leakage: Enforced architecture rules so modules never mutate each other's tables directly and 500 responses never leak SQL, stack traces, or internal column names.",
          ],
        },

        {
          eyebrow: "04 · Outcome & Release Confidence",

          title:
            "A 2009 family pharmacy system brought up to modern financial-grade QA standards",

          body: "What began as a fragile procedural PHP app with scattered conf.php credentials is now governed by a documented /api/v1 contract, encrypted transport, deterministic error codes, and blocking architecture and business test suites.",
        },
      ],

      takeaway:
        "Refactoring legacy software starts with respect for the original domain—auditing every quirk of the 2009 workflows first so the new modular monolith preserves what worked while eliminating everything that could corrupt the ledger.",
    },
  },

  {
    slug: "war-of-dots",

    title: "War of Dots landing page",

    image: warOfDotsImage,

    eyebrow: "Official Site Redesign & Beta QA · Game by TeaAndPython",

    role: "Website Designer & Beta QA Tester",

    description:
      'Redesigned and built the official warofdots.net landing page by December for TeaAndPython\'s minimalist RTS (game created by TeaAndPython)—plus live multiplayer beta QA and an official in-game credit ("Website Design: Thalanas").',

    highlights: [
      "Redesigned the unusable original website into a dark tactical landing page shipped by December for TeaAndPython's Steam release.",

      "Conducted live beta testing in real player environments under 200–400 concurrent players, authoring structured bug reports for unit interactions and UI/UX edge cases.",

      'Rebuilt warofdots.net in React, TanStack Query, and Tailwind CSS with creator permission, earning the in-game credit "Website Design: Thalanas" (codebase remains proprietary, so no source repo is linked).',
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

    caseStudy: {
      track: "engineering",

      subtitle:
        "Replacing an unusable initial page with a production-ready landing experience by December for TeaAndPython's minimalist RTS—alongside live beta QA at 200–400 concurrent players.",

      role: "Website Designer & Beta QA Tester",

      context: "warofdots.net Redesign & Beta QA (Game by TeaAndPython)",

      focus: "Before/After Landing Redesign · React + Tailwind · Live Beta QA",

      metrics: [
        {
          value: "Steam Launch",

          label:
            "Production-ready landing page shipped by December for TeaAndPython's free-to-play Steam release",
        },

        {
          value: "200–400",

          label:
            "Concurrent players during live multiplayer beta QA sessions and match stability checks",
        },

        {
          value: "Thalanas",

          label:
            'Officially credited in-game ("Website Design: Thalanas") for rebuilding warofdots.net',
        },
      ],

      sections: [
        {
          eyebrow: "01 · The Problem",

          title:
            "An initial site that was unusable and completely unfit for the game",

          body: "War of Dots is a sharp, tactical real-time strategy game created and published on Steam by TeaAndPython—yet its original website failed the most basic product job. Visitors were dropped onto a bright, raw map screenshot with oversized black display text stamped across the frontline, a cramped translucent top bar anchored by an off-theme mug icon, zero explanation of gameplay, and no clear call-to-action to download or play.",

          image: warOfDotsInitialImage,

          imageAlt:
            "Initial War of Dots website before the redesign, showing a bright map background, black title text over the frontline, and a cluttered top bar",

          imageCaption:
            "Before: The original landing page lacked visual hierarchy, readable contrast, game context, and a clear path to play.",
        },

        {
          eyebrow: "02 · Redesign & Architecture",

          title: "Shipping a production-ready Steam landing page by December",

          body: "While TeaAndPython developed the game itself, I received creator permission to scrap the original web layout and rebuild warofdots.net from scratch in React, TanStack Query, and Tailwind CSS—turning it into a dark, tactical landing page ready for Steam launch by December:",

          bullets: [
            "Tactical visual identity & contrast: Replaced the bright flat canvas with a darkened strategic map backdrop, bold gold stencil typography, and glowing red/blue dot accents true to the game's aesthetic.",

            "Clear above-the-fold conversion flow: Anchored the hero around the 'COMMAND. CONQUER. DOMINATE.' tagline, an 'OUT NOW!' status pill, a prominent 'Available on Steam' free-to-play button, and direct 'Learn More' and 'Join Discord' actions.",

            "Structured player onboarding: Organized navigation into About, Gameplay, How to Play, YouTube, and Discord so new players understand unit tactics before entering live matches.",
          ],
        },

        {
          eyebrow: "03 · Live Beta QA & Stability",

          title:
            "Validating unit behavior and UI edge cases under 200–400 concurrent players",

          body: "Alongside rebuilding the official web presence, I contributed live multiplayer quality assurance for the game across ongoing updates:",

          bullets: [
            "High-concurrency field testing: Tested live matches in real player environments with 200–400 concurrent players to verify match stability across releases.",

            "Reproducible defect reporting: Authored structured bug reports isolating tactical unit interaction defects, UI/UX inconsistencies, and edge-case failures.",
          ],
        },

        {
          eyebrow: "04 · Outcome & Proprietary Boundary",

          title:
            "Live on warofdots.net, supporting TeaAndPython's Steam release",

          body: 'The redesigned warofdots.net shipped on schedule for TeaAndPython\'s Steam release and earned the official in-game credit "Website Design: Thalanas". While the repository is publicly visible, the codebase remains proprietary—so live source code links are intentionally omitted here in favor of the production site at warofdots.net.',

          gallery: [
            {
              src: warOfDotsCreditsImage,

              alt: 'War of Dots in-game credits screen showing "Website Design: Thalanas"',

              caption:
                'In-game credits screen in War of Dots listing "Website Design: Thalanas".',
            },

            {
              src: warOfDotsDiscordProofImage,

              alt: "Official War of Dots Discord message from Thalanas verifying the in-game Website Design credit",

              caption:
                "Official War of Dots Discord verification tying the Thalanas contributor handle to the in-game credit.",
            },
          ],
        },
      ],

      takeaway:
        "A game's website is its first playable impression. Replacing an unusable prototype with tactical hierarchy, Steam onboarding, and live beta QA turned warofdots.net into a front door worthy of the game.",
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
]
