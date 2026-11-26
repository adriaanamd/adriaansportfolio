import type { FeaturedProject } from "../types"
import camFleaImage from "../../../project-assets/qa/camflea-qa.png"
import scan2BorrowImage from "../../../project-assets/qa/scan2borrow-qa.jpg"
import shekinahImage from "../../../project-assets/qa/shekinah-qa.png"

export const qaFeaturedProjects: FeaturedProject[] = [
  {
    slug: "camflea-qa",
    title: "CamFlea",
    image: camFleaImage,
    eyebrow: "QA case study · Marketplace application",
    description:
      "A flea marketplace application designed for students of institutions. This one's specifically done for a final project in 2025's Software Engineering 1 and 2. Rebuilt with a better architecture and a CBF recommendation algorithm, with heavy use of tests to preserve old application behavior.",
    tags: [
      "Vitest",
      "Testing Library",
      "TypeScript",
      "React",
      "TanStack Start",
      "TanStack Query",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
    link: "https://github.com/adriaanamd/camflea",
    liveDemo: "https://github.com/adriaanamd/camflea",
    accent: "wine",
    caseStudy: {
      track: "qa",
      subtitle:
        "Enforcing legacy behavioral parity, zero direct frontend DB queries, and CBF recommendation accuracy across a 5-layer test architecture.",
      role: "QA Lead & Full-Stack Engineer",
      context: "Software Engineering 1 & 2 Rebuild (CamFlea-SE2)",
      focus: "5-Layer Vitest Suite · RLS Security · CBF Regression",
      metrics: [
        {
          value: "5 Layers",
          label:
            "Unit, Server Integration, Supabase RLS, UI, and E2E Workflow suites in camflea-test/",
        },
        {
          value: "36+ → 0",
          label:
            "Direct frontend Supabase queries audited and migrated to SECURITY DEFINER RPCs",
        },
        {
          value: "CBF + Parity",
          label:
            "Strict TDD compatibility contract preserving all legacy SE1 marketplace flows",
        },
      ],
      sections: [
        {
          eyebrow: "01 · Context & Risk",
          title:
            "Rebuilding a monolithic student marketplace without breaking legacy contracts",
          body: "In Software Engineering 2, CamFlea was rebuilt from its legacy SE1 codebase (camflea-legacy) into a modular TanStack Start + Supabase architecture with a Content-Based Filtering (CBF) recommendation engine. Furthermore, a security audit uncovered 36+ direct supabase.from() calls across 15 frontend files—exposing table schemas and risking Row-Level Security (RLS) bypasses.",
        },
        {
          eyebrow: "02 · Test Strategy & Coverage",
          title:
            "Treat the legacy app as an executable compatibility contract under strict TDD",
          body: "Before migrating vertical slices or retiring the monolithic camflea-app.tsx, every route, state transition, and access rule was locked down in camflea-test/:",
          bullets: [
            "5-Layer Test Architecture: Organized into unit/domain & validation, integration/server, integration/supabase (schema, seed, profile projections), ui/features (browse, listing detail, messages, notifications, accessibility), and security/workflows.",
            "Zero-Frontend-Query Verification: Audited and replaced direct browser queries with SECURITY DEFINER PostgreSQL RPCs and typed TanStack createServerFn wrappers.",
            "CBF Recommendation & Browse Checks: Verified category filtering, single/range/hidden price semantics, and CBF similarity ranking across campus listings.",
          ],
        },
        {
          eyebrow: "03 · Edge Cases & Key Findings",
          title:
            "Atomic transaction lifecycles, message privacy, and RBAC escalation checks",
          body: "Dedicated security and integration tests targeted the highest-risk marketplace failure modes:",
          bullets: [
            "Transaction snapshot integrity (transaction-contract.test.ts): Verified that cart → purchase request → seller acceptance → receipt confirmation → completion/cancellation lock rows atomically and snapshot listing title and price so subsequent edits cannot alter past orders.",
            "Cross-user privacy & RBAC (message-privacy.test.ts, admin-report-access.test.ts): Confirmed that non-participants cannot read thread messages, editable student profiles cannot self-grant staff roles in public.user_roles, and banned/restricted accounts fail safely at the DB boundary.",
            "Accessibility & keyboard recovery (accessibility.test.tsx): Tested dialog focus management, visible labels, and recoverable network/validation error states.",
          ],
        },
        {
          eyebrow: "04 · Outcome & Release Confidence",
          title:
            "A hardened campus marketplace with provable parity and security boundaries",
          body: "By treating legacy behavior as an executable test contract and enforcing strict TDD on every vertical slice, the SE2 rebuild shipped with clean domain separation, verified CBF discovery, and database-enforced authorization.",
        },
      ],
      takeaway:
        "The browser may request actions, but it should never decide whether they are allowed. Pairing legacy parity tests with database-level RLS and RPC contracts made the rebuild both safer and faster.",
    },
  },
  {
    slug: "shekinah-qa",
    title: "Project Shekinah",
    image: shekinahImage,
    eyebrow: "QA & systems case study · Worship presentation engine",
    description:
      "A full-scale native C++20 and Qt 6 ProPresenter replacement architected and stress-tested under strict TDD for I Care Balaybay Mountain Church and I Care SBMA. Engineered with decoupled domain/media layers, SQLite storage, and a staged memory governor to run live worship lyrics, sermon decks, looping video backgrounds, and dual-monitor audience output on 4 GB Celeron N4000 Windows hardware.",
    tags: [
      "C++20 & Qt 6",
      "Catch2 & CTest",
      "Qt 6 Test",
      "Performance & Memory QA",
      "SQLite",
    ],
    link: "https://github.com/icarechurch/Shekinah",
    liveDemo: "https://github.com/icarechurch/Shekinah/releases/",
    accent: "sage",
    caseStudy: {
      track: "qa",
      subtitle:
        "Architecting a native C++20/Qt 6 ProPresenter replacement and enforcing a <300 MB working-set ceiling, ≤100 ms p95 live cue latency, and 9-lane Catch2 + Qt Test verification on Celeron N4000 hardware.",
      role: "Lead Software Engineer & Test Architect",
      context:
        "I Care Balaybay Mountain Church & I Care SBMA · ProPresenter Replacement",
      focus:
        "C++20/Qt 6 Architecture · 9 CTest Suites · <300 MB Resource Governor",
      metrics: [
        {
          value: "9 Suites",
          label:
            "Blocking CTest lanes: Smoke, Support, Domain, Storage, Application, Media, UI, E2E & Performance",
        },
        {
          value: "< 300 MB",
          label:
            "Hard process working-set ceiling with staged ResourceGovernor eviction at 220/250/270 MB",
        },
        {
          value: "≤ 100 ms",
          label:
            "Direct cue-to-program latency p95 and 33.3 ms (1080p30) frame budget on Celeron N4000",
        },
      ],
      sections: [
        {
          eyebrow: "01 · Context & Risk",
          title:
            "Replacing ProPresenter on modest church hardware without dropping a live worship cue",
          body: "Built as a full-scale ProPresenter replacement for I Care Balaybay Mountain Church and I Care SBMA, Project Shekinah had to deliver a complete live worship presentation workflow—reusable songs with continuous-text reflow editing, ordered sermon decks, file-backed image and looping MP4/H.264 backgrounds, a responsive 1–6 column operator cue grid, and full-screen dual-monitor audience output—while running reliably on two-core Intel Celeron N4000 Windows PCs with UHD 600 graphics and 4 GB of RAM. Unlike cloud-backed web apps, an offline native media engine on constrained hardware has zero margin for memory leaks, UI stalls, or accidental live-output mutations.",
        },
        {
          eyebrow: "02 · Systems Architecture & SWE Design",
          title:
            "Engineering a testable C++20/Qt 6 desktop engine for deterministic low-RAM execution",
          body: "Extreme hardware constraints meant testability had to be engineered into the software architecture from day one rather than bolted on afterward:",
          bullets: [
            "Layered C++20 Boundaries & Feature-Sliced Qt UI: Isolated pure Qt-independent presentation domain rules (presentation_engine) from application services (presentation_service, song_reflow, song_text_importer), SQLite storage repositories, media decoding/caching, and Feature-Sliced Qt 6 widgets so core state transitions run headless in milliseconds.",
            "Decoupled Operator & Dual-Monitor Program Pipeline: Separated operator preview, editing (ReflowEditorDialog, floating Inspector), and service-order navigation from the live AudienceOutput renderer so explicit cue activation, Clear, and Blackout transitions remain deterministic under live service pressure.",
            "Local-First SQLite & Bounded Resource Management: Built transactional SQLite repositories with content-hashed media deduplication alongside a dedicated ResourceGovernor and byte-bounded texture/media pools (36 MiB active still-image cap) to prevent runaway VRAM/RAM growth on 4 GB machines.",
          ],
        },
        {
          eyebrow: "03 · Test Strategy & Coverage",
          title:
            "Strict TDD across 9 CTest architectural lanes and an automated N4000 benchmark executable",
          body: "Because live dual-monitor media playback, SQLite persistence, and memory ceilings fail in subtle, hardware-dependent ways, every architectural boundary was locked down by dedicated Catch2 v3 and Qt Test executables:",
          bullets: [
            "9 Blocking CTest Executables: Covered smoke, test-support fixtures, pure Qt-independent domain logic (presentation_engine_test), application contracts (presentation_service, song_reflow, song_text_importer, resource_governor), SQLite repositories and atomic asset/sermon importers, media caches, 13 Qt Test UI widget suites, operator-to-output E2E, and memory budget gates.",
            "Operator-to-Output E2E Verification (operator_to_output_test.cpp): Programmatically drives ShekinahWindow with QTest—creating a SQLite project folder, importing sermon slides, activating library rows, left-clicking cue cards, and asserting that AudienceOutput enters ProgramMode::cue with the rendered slide before verifying Clear and Blackout recovery.",
            "Windows UCRT64 Debug & Release CI + Benchmark Artifact: GitHub Actions compiles with -Wall -Wextra -Wpedantic -Werror across both debug and release MSYS2 UCRT64 presets, runs the full unfiltered CTest gate, and executes shekinah_n4000_bench.exe to upload JSON telemetry (working set, cue latency p95, CPU p95, decode path, and governor transitions).",
          ],
        },
        {
          eyebrow: "04 · Edge Cases & Key Findings",
          title:
            "Staged memory governance, atomic SQLite asset rollbacks, and non-live editing isolation",
          body: "Automated contract, UI, and performance tests targeted the highest-severity failure modes that crash or stall live church services:",
          bullets: [
            "Staged ResourceGovernor & Byte-Bounded Pools (resource_governor_test.cpp, memory_budget_test.cpp): Verified that the 36 MiB active still-image cap and 1-second process working-set sampler deterministically purge non-live caches at 220 MB, cancel queued imports and release inactive media at 250 MB, and block new live video loads at 270 MB before hitting the 300 MB hard gate.",
            "Live Program Isolation & UTF-8 Reflow Integrity: Verified that selecting service-order items, dragging assets onto songs or slide ranges, opening the right-click floating Inspector, or editing continuous lyric text with Ctrl+Enter slide-break markers in ReflowEditorDialog never mutates the live audience monitor until an operator explicitly left-clicks a cue.",
            "Content-Hashed Deduplication & Transactional Rollback: Confirmed that importing identical media reuses existing content-hash asset records, removing service-order items never deletes underlying reusable songs or media files, and failed imports roll back SQLite metadata atomically.",
          ],
        },
        {
          eyebrow: "05 · Outcome & Release Confidence",
          title:
            "A deterministic, low-footprint native worship engine proven in CI",
          body: "By pairing clean C++20/Qt 6 architectural boundaries with blocking CTest gates for memory ceilings, cue-to-output latency, and operator UI isolation under -Werror, Project Shekinah delivers a full-scale ProPresenter workflow that holds steady on 4 GB Celeron hardware.",
        },
      ],
      takeaway:
        "When building live event software for constrained hardware, architecture and QA are inseparable—clean C++20 boundaries make performance, memory budgets, and UI isolation executable test contracts enforced on every build.",
    },
  },
  {
    slug: "scan2borrow-qa",
    title: "Scan2Borrow",
    image: scan2BorrowImage,
    eyebrow: "QA & refactor case study · Library system",
    description:
      "A full-scale refactor and QA overhaul of a legacy 2009-style procedural PHP library system for Binalbagan Catholic College, built in collaboration with a friend in Binalbagan, Negros Occidental—modernized into a framework-free PHP 8.5 modular monolith and vanilla ES-module frontend guarded by PHPUnit, PHPStan Level 9, and Node contract tests.",
    tags: [
      "PHPUnit",
      "PHPStan Level 9",
      "Node Test",
      "PHP 8.5",
      "Vanilla JS (ESM)",
      "MySQL",
      "SQLite",
      "Modular Monolith",
    ],
    link: "https://github.com/adriaanamd/scan2borrow",
    accent: "sand",
    caseStudy: {
      track: "qa",
      subtitle:
        "Refactoring a 2009-style procedural PHP library system into a framework-free PHP 8.5.12+ modular monolith and feature-owned ES-module frontend under strict automated QA.",
      role: "QA Architect & Co-Refactoring Engineer",
      context:
        "Binalbagan Catholic College · Collab with Friend in Binalbagan, Negros Occidental",
      focus:
        "Legacy 2009 Refactor · 139 PHPUnit + 54 Node Suites · PHPStan Level 9",
      metrics: [
        {
          value: "139 Suites",
          label:
            "PHPUnit Unit & Feature tests across 18 backend domains, CSRF, routes, and MySQL/SQLite schemas",
        },
        {
          value: "Level 9",
          label:
            "PHPStan strict-rules static analysis pinned to PHP2Shell-patched PHP 8.5.12+",
        },
        {
          value: "54 Contracts",
          label:
            "Native Node frontend module & served-template parity tests guarding 290px–desktop layouts",
        },
      ],
      sections: [
        {
          eyebrow: "01 · Context & Risk",
          title:
            "Untangling a 2009-style procedural PHP library codebase built with a Binalbagan collaborator",
          body: "Developed in collaboration with a friend in Binalbagan, Negros Occidental for Binalbagan Catholic College, Scan2Borrow began as 72 files (11,008 lines) of classic 2009-style procedural root PHP scripts—mixed HTML/SQL entry points like adboard.php, adstud.php, books_api.php, guest_*.php, and a 1,024-line includes/functions.php—where rewriting workflows risked breaking active library circulation and MySQL compatibility.",
        },
      ],
      takeaway:
        "Modernizing a 2009-style PHP codebase does not require a heavy framework—clear architectural boundaries and automated contract tests make full-scale refactoring predictable.",
    },
  },
]
