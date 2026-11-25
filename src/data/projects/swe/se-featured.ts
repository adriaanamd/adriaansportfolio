import type { FeaturedProject } from "../types"
import examHubImage from "../../../project-assets/swe/examhub-swe.jpg"
import mathVentureImage from "../../../project-assets/swe/mathventure-swe.png"
import meatLensImage from "../../../project-assets/swe/meatlens-swe.png"

export const engineeringFeaturedProjects: FeaturedProject[] = [
  {
    slug: "examhub-swe",
    title: "ExamHub",
    image: examHubImage,
    eyebrow: "Software engineering · Education",
    description:
      "An automated Exam Management System designed for modern classrooms. Includes real-time monitoring, anti-cheat countermeasures, and a centralized dashboard for student performance analytics. Created as the final requirement for Frontend and Backend Electives.",
    tags: [
      "TypeScript",
      "Playwright",
      "React",
      "Tanstack Start",
      "PHP Vanilla",
      "MySQL",
    ],
    link: "https://github.com/adriaanamd/ExamHub",
    accent: "wine",
    caseStudy: {
      track: "engineering",
      subtitle:
        "Containerized online examination platform with FSD frontend boundaries, AES-256-GCM answer encryption, and MySQL stored-routine analytics.",
      role: "Full-Stack Developer & QA",
      context: "Frontend & Backend Electives Final Project",
      focus: "FSD Architecture · AES-256-GCM Security · Violation Telemetry",
      metrics: [
        {
          value: "5,701 Users",
          label:
            "Seeded scale dataset (5,000 students, 700 professors, 1 admin) for read-path tuning",
        },
        {
          value: "AES-256-GCM",
          label:
            "Split ciphertext/IV/tag encryption for exam answers, feedback, PII, and accommodations",
        },
        {
          value: "Playwright",
          label:
            "E2E verification across auth, timed exam taking, grading, and violation logs",
        },
      ],
      sections: [
        {
          eyebrow: "01 · The Problem",
          title:
            "Making digital classroom assessments fair, observable, and fast to grade",
          body: "Digital classroom exams often fail at one of two extremes: unmonitored browser forms where tab-switching and schedule tampering go undetected, or rigid tools that cannot handle per-student accommodations and item-level analytics. ExamHub was built to give instructors live violation tracking, strict server-side timing enforcement, and instant cohort performance breakdowns.",
        },
        {
          eyebrow: "02 · System Architecture",
          title:
            "Feature-Sliced React frontend paired with a Vanilla PHP 8.5.12+ modular monolith",
          body: "Built across both Frontend and Backend Electives, the stack enforces strict architectural boundaries in code and in the database:",
          bullets: [
            "Frontend (React + TanStack Start): Organized under Feature-Sliced Design (FSD) with automated boundary and source-size gate scripts (check-fsd-boundaries.mjs).",
            "Backend (Vanilla PHP 8.5.12+): Custom modular monolith with JWT + persisted token sessions and split AES-256-GCM field encryption isolated in dedicated backend utilities.",
            "Database (MySQL/MariaDB): Powered by ordered schema and stored-routine migrations (app_001–app_008) plus a dedicated fail-open logging and violation database (logs_001–logs_005).",
          ],
        },
        {
          eyebrow: "03 · Core Features & Engineering",
          title:
            "Anti-cheat violation cases, student accommodations, and SQL-scoped analytics",
          body: "Every workflow was engineered for real academic constraints and high-concurrency read paths:",
          bullets: [
            "Violation tracking & case management: Logs exam violations and groups them into reviewable violation cases via dedicated MySQL stored procedures.",
            "Per-student exam accommodations: Supports extraTimeMinutes, alternate schedule windows, custom attemptLimits, and encrypted accessibilityPreferences enforced at attempt start and submit time.",
            "In-database read optimization: Applies role-scoped authorization predicates and question-level analytics directly in MySQL stored routines before rows cross the PHP boundary.",
          ],
        },
        {
          eyebrow: "04 · Impact & Quality Built-In",
          title:
            "Containerized with Docker and verified end-to-end with Playwright",
          body: "Deployed across Vercel, Render, and Aiven MySQL (with automated daily log-retention cron jobs), ExamHub is guarded by Playwright E2E suites covering student exam-taking, teacher grading, violation review, and admin API verification.",
        },
      ],
      takeaway:
        "Good assessment software pairs strict server-side integrity—encrypted answers, enforced time windows, and violation logs—with thoughtful flexibility for students who need accommodations.",
    },
  },
  {
    slug: "meatlens-swe",
    title: "Project MeatLens",
    image: meatLensImage,
    eyebrow: "Software engineering · Thesis",
    description:
      "A freshness inspection platform designed to help users scan and assess meat, built for meat inspectors of DTI-Zambales, the National Meat Inspection Service, and the Olongapo City Veterinary Office. An active thesis project joining a practical interface with classification workflows.",
    tags: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Express.js",
      "Supabase",
      "Deno",
      "PostgreSQL",
      "SQLite",
      "Capacitor",
      "ONNX Runtime Web",
      "Playwright",
      "MobileNetV3-Small",
      "TensorFlow",
    ],
    link: "https://github.com/MeatLens-Freshness-Inspector/meatlens-application",
    liveDemo: "https://meatlensv2.netlify.app",
    paperLink: "/meatlens-research-paper.pdf",
    extraLinks: [
      {
        label: "Main model training",
        url: "https://github.com/MeatLens-Freshness-Inspector/meatlens-training-1",
      },
      {
        label: "Secondary model training",
        url: "https://github.com/MeatLens-Freshness-Inspector/meatlens-training-2",
      },
    ],
    accent: "sage",
    caseStudy: {
      track: "engineering",
      subtitle:
        "CNN-based pork meat freshness classification and decision-support system for the Ikot Palengke program in Olongapo wet markets.",
      role: "Project Leader & Lead Software Engineer",
      context: "BSCS Thesis · DTI-Zambales, NMIS & Olongapo City Vet Office",
      focus: "MobileNetV3-Small CNN · Regulatory Compliance · Field UX",
      metrics: [
        {
          value: "5 Levels",
          label:
            "Veterinary-certified pork classes: Fresh, Acceptable, Not Fresh, Warning, Spoiled",
        },
        {
          value: "DTI + Vet",
          label:
            "Built for the Ikot Palengke program with DTI & Olongapo City Veterinary Office",
        },
        {
          value: "AES + RSA",
          label:
            "Per-request AES-256-GCM encrypted API payloads with RSA key wrapping",
        },
      ],
      sections: [
        {
          eyebrow: "01 · The Problem",
          title:
            "Image-guided decision support for wet-market inspectors in the Ikot Palengke program",
          body: "During Olongapo City's Ikot Palengke market inspections, field personnel from DTI-Zambales, NMIS, and the Olongapo City Veterinary Office evaluate pork stalls under tight time constraints and variable market lighting. MeatLens was built to pair CNN-based visual freshness screening with mandatory regulatory compliance logging and official veterinary reporting.",
        },
        {
          eyebrow: "02 · System Architecture",
          title:
            "Monorepo across React, Express/OpenCV, Supabase, and an Android shell",
          body: "The platform joins computer-vision inference with hardened API transport and field-ready mobile ergonomics:",
          bullets: [
            "Vision & capture pipeline: Runs exported MobileNetV3-Small ONNX weights (trained in meatlens-training-1 as the main model, paired with secondary/calibration pipelines in meatlens-training-2) client-side via ONNX Runtime Web alongside OpenCV.js/Sharp image checks and native phone camera routing with blur rejection.",
            "Encrypted API boundary: Frontend clients encrypt request bodies using fresh per-request AES-256-GCM keys wrapped with the backend's RSA public key (TRANSPORT_RSA_PRIVATE_KEY).",
            "Live ground-truth retraining hub: Includes an Admin Developer Settings workspace where updating manual ground-truth classifications recalculates live In-App Accuracy, Precision, Recall, and F1-Score metrics and exports training datasets.",
          ],
        },
        {
          eyebrow: "03 · Core Features & Engineering",
          title:
            "Pre-scan regulatory gates, GPS redundancy, and veterinary report generation",
          body: "Shaped directly by feedback from veterinary experts and field inspectors, MeatLens enforces real regulatory protocol before AI ever runs:",
          bullets: [
            "Pre-Scan Safety Protocol: Requires Stall Number, Meat Inspection Certificate (MIC) proof, expiry date, storage check, light color check, and sanitation check before opening the camera—any safety item marked 'No' skips AI and records the inspection as spoiled.",
            "GPS + manual market tracking: Captures GPS coordinates alongside manual market selection for verifiable inspection audit trails.",
            "Role-based administrative reports: Generates official City Veterinary Office overview reports with total inspections, average confidence, spoiled rates, and deviation tracking.",
          ],
        },
        {
          eyebrow: "04 · Impact & Quality Built-In",
          title:
            "Certified by the City Veterinary Office and guarded by multi-lane CI",
          body: "Formally reviewed and certified by Lead Veterinarian Dr. Joseph Arnold C. Lopez of the Olongapo City Veterinary Office, the codebase is protected by path-aware GitHub Actions CI running unit/integration suites, Java 21 Android JVM/instrumentation checks, and 4-sharded Playwright E2E gates.",
        },
      ],
      takeaway:
        "In public-health software, AI is decision support—not a replacement for the inspector. Enforcing regulatory checklists before the camera opens keeps human authority and food safety first.",
    },
  },
  {
    slug: "mathventure-swe",
    title: "Project MathVenture",
    image: mathVentureImage,
    eyebrow: "Software Engineering · Educational Technology",
    description:
      "An interactive mathematics learning platform for kindergarten pupils, combining gamified activities, classroom management, and offline-first functionality to support engaging and accessible learning.",
    tags: [
      "TypeScript",
      "Vitest",
      "React",
      "Tanstack Start",
      "Supabase",
      "Deno",
      "PostgreSQL",
      "IndexedDB",
      "SQLite",
    ],
    link: "https://github.com/adriaanamd/mathventure",
    liveDemo: "https://mathventureprototype1.netlify.app/",
    extraLinks: [
      {
        label: "Collaborator repo",
        url: "https://github.com/dmjm99125/mathventurev2",
      },
    ],
    accent: "sand",
    caseStudy: {
      track: "engineering",
      subtitle:
        "Addressing early numeracy and DepEd curriculum sequencing gaps in the Philippines through 9 offline-first, gamified kindergarten math modules.",
      role: "Lead Software Engineer & Test Architect",
      context:
        "Backed by 'Counting the Uncounted' ECEd Research · New Cabalan Elementary School",
      focus: "9 DepEd Numeracy Modules · SQLite OPFS / Tauri Offline Sync",
      metrics: [
        {
          value: "9 Modules",
          label:
            "Targeted games built around DepEd kindergarten competencies including Sequencing",
        },
        {
          value: "42 Pupils",
          label:
            "Grounded in empirical pre/post-test research at New Cabalan Elementary School",
        },
        {
          value: "7-Day Lease",
          label:
            "Full offline classroom operation via SQLite WASM (OPFS), IndexedDB & Windows Tauri",
        },
      ],
      sections: [
        {
          eyebrow: "01 · The Problem",
          title:
            "Filipino kids struggle with early math instruction—and sequencing takes one of the worst direct hits",
          body: "With 84% of Filipino 15-year-olds scoring below minimum math proficiency in PISA 2022, the root starts in early childhood—where unaddressed gaps compound over time ('the Matthew Effect'). Across the DepEd kindergarten curriculum (MATATAG MELCs), children struggle heavily to understand standard math instruction, and sequencing—ordering by size/length, identifying before/after/between, and arranging least-to-greatest—is one of the hardest-hit competencies. At the same time, public elementary classrooms rarely have reliable internet for cloud-only edtech tools.",
        },
        {
          eyebrow: "02 · System Architecture",
          title:
            "True offline-first classroom operation across Web PWA (SQLite OPFS) and Windows Tauri",
          body: "MathVenture was engineered so a teacher can log in once online, download the classroom pack, and run an entire class without internet on a sliding 7-day offline lease:",
          bullets: [
            "Dual-runtime local persistence: Uses SQLite WASM in OPFS (behind a worker boundary) with automatic fallback to a durable IndexedDB adapter on the web PWA, and native SQLite (mathventure-app.sqlite3) via a Rust-managed atomic transaction bridge on Windows Tauri.",
            "Dependency-ordered outbox sync: Local class creation, roster switches, assignments, quiz checkpoints, and attempts queue in a durable outbox and reconcile with Supabase (PostgreSQL + Deno Edge Functions) via 'Sync now' when coverage returns.",
            "Security & privacy: Stores only a salted password verifier locally (never raw passwords) and routes cloud traffic exclusively through HTTPS Supabase Edge Functions.",
          ],
        },
        {
          eyebrow: "03 · Core Features & Engineering",
          title:
            "Conceived around 9 interactive learning modules and localized Filipino context",
          body: "Anchored on Clements and Sarama's Learning Trajectories Approach and revised directly with early childhood educators, the platform features 9 dedicated student modules alongside a Teacher Control Panel:",
          bullets: [
            "The 9 Core Modules: (1) Sequencing & Pattern Completion (with Alpabasa video integration), (2) Numbers & Counting (1–20 correspondence), (3) Addition (scaffolded 1–5 sums up to 10), (4) Subtraction (minuends up to 7), (5) Comparison, (6) Clock & Time Reading, (7) Colors, (8) Shapes (localized everyday objects: bilog, parisukat, tatsulok, oval), and (9) Measurement—plus unrestricted Free Play.",
            "Strict pedagogical guardrails: Enforces exact attempt counts, immediate audio-visual celebration feedback, and explicit 'Repeat Game' / 'Skip or Next Game' controls tailored for 5-to-6-year-old learners.",
            "Teacher Control Panel: Multi-section classroom management, custom quiz assignments, cached student switching, and Recharts mastery analytics.",
          ],
        },
        {
          eyebrow: "04 · Impact & Quality Built-In",
          title:
            "Backed by empirical research and multi-runtime CI quality gates",
          body: "Paired with the Gordon College ECEd research study 'Counting the Uncounted' (which demonstrated statistically significant numeracy gains, Wilcoxon W = 143, p = .008, large effect size |r_rb| = 0.52), the repository enforces blocking CI lanes across Vitest frontend suites, Deno Supabase tests, and Rust cargo test/clippy checks.",
        },
      ],
      takeaway:
        "Closing early math gaps in Philippine classrooms requires solving the pedagogical problem and the infrastructure problem together: culturally familiar play for competencies like sequencing, running on an offline-first engine that never waits on school Wi-Fi.",
    },
  },
]
