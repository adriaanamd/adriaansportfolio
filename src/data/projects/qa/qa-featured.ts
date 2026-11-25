import type { FeaturedProject } from "../types"
import camFleaImage from "../../../project-assets/qa/camflea-qa.png"
import myLightDrugstoreImage from "../../../project-assets/qa/mylightdrugstore-qa.png"
import shekinahImage from "../../../project-assets/qa/shekinah-qa.png"

export const qaFeaturedProjects: FeaturedProject[] = [
  {
    slug: "camflea-qa",
    title: "CamFlea",
    image: camFleaImage,
    eyebrow: "QA case study · Marketplace application",
    description:
      "A flea marketplace application designed for students of institutions. This one's specifically done for a final project in 2025's Software Engineering 1 and 2. Rebuilt with a better architecture and a CBF recommendation algorithm, with heavy use of tests to preserve old application behavior.",
    tags: ["Test automation", "Regression", "CBF algorithm"],
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
    title: "Shekinah",
    image: shekinahImage,
    eyebrow: "QA case study · Worship presentation system",
    description:
      "A full-scale native C++20 and Qt 6 ProPresenter replacement built for I Care Balaybay Mountain Church and I Care SBMA. Engineered and stress-tested under strict TDD to run live worship lyrics, sermon decks, looping video backgrounds, and dual-monitor audience output on Celeron N4000-class Windows hardware with 4 GB RAM.",
    tags: [
      "Catch2 & CTest",
      "Qt 6 Test",
      "Performance & Memory QA",
      "C++20",
      "SQLite",
    ],
    link: "https://github.com/icarechurch/Shekinah",
    accent: "sage",
    caseStudy: {
      track: "qa",
      subtitle:
        "Enforcing a <300 MB process working-set ceiling, ≤100 ms p95 live cue latency, and 9-lane Catch2 + Qt Test verification for a native C++20 ProPresenter replacement on Celeron N4000 hardware.",
      role: "Lead Software Engineer & Test Architect",
      context:
        "I Care Balaybay Mountain Church & I Care SBMA · ProPresenter Replacement",
      focus: "9 CTest Suites · N4000 Hardware Gate · <300 MB Resource Governor",
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
          body: "Built as a full-scale ProPresenter replacement for I Care Balaybay Mountain Church and I Care SBMA, Shekinah had to deliver a complete live worship presentation workflow—reusable songs with continuous-text reflow editing, ordered sermon decks, file-backed image and looping MP4/H.264 backgrounds, a responsive 1–6 column operator cue grid, and full-screen dual-monitor audience output—while running reliably on two-core Intel Celeron N4000 Windows PCs with UHD 600 graphics and 4 GB of RAM.",
        },
        {
          eyebrow: "02 · Test Strategy & Coverage",
          title:
            "Strict TDD across 9 CTest architectural lanes and an automated N4000 benchmark executable",
          body: "To prevent Qt UI state, SQLite persistence, and live media decoding from coupling into untestable desktop code, the C++20 codebase was split into strict domain, application, storage, media, and Feature-Sliced Qt UI boundaries—each locked down by dedicated Catch2 v3 and Qt Test executables:",
          bullets: [
            "9 Blocking CTest Executables: Covered smoke, test-support fixtures, pure Qt-independent domain logic (presentation_engine_test), application contracts (presentation_service, song_reflow, song_text_importer, resource_governor), SQLite repositories and atomic asset/sermon importers, media caches, 13 Qt Test UI widget suites, operator-to-output E2E, and memory budget gates.",
            "Operator-to-Output E2E Verification (operator_to_output_test.cpp): Programmatically drives ShekinahWindow with QTest—creating a SQLite project folder, importing sermon slides, activating library rows, left-clicking cue cards, and asserting that AudienceOutput enters ProgramMode::cue with the rendered slide before verifying Clear and Blackout recovery.",
            "Windows UCRT64 Debug & Release CI + Benchmark Artifact: GitHub Actions compiles with -Wall -Wextra -Wpedantic -Werror across both debug and release MSYS2 UCRT64 presets, runs the full unfiltered CTest gate, and executes shekinah_n4000_bench.exe to upload JSON telemetry (working set, cue latency p95, CPU p95, decode path, and governor transitions).",
          ],
        },
        {
          eyebrow: "03 · Edge Cases & Key Findings",
          title:
            "Staged memory governance, atomic SQLite asset rollbacks, and non-live editing isolation",
          body: "Automated contract, UI, and performance tests targeted the failure modes that crash or stall live church services:",
          bullets: [
            "Staged ResourceGovernor & Byte-Bounded Pools (resource_governor_test.cpp, memory_budget_test.cpp): Capped active still-image textures at 36 MiB while sampling process working set every second—purging non-live caches at 220 MB, cancelling queued imports and releasing inactive media at 250 MB, and blocking new live video loads at 270 MB before the 300 MB hard gate.",
            "Live Program Isolation & UTF-8 Reflow Integrity: Verified that selecting service-order items, dragging assets onto songs or slide ranges, opening the right-click floating Inspector, or editing continuous lyric text with Ctrl+Enter slide-break markers in ReflowEditorDialog never mutates the live audience monitor until an operator explicitly left-clicks a cue.",
            "Content-Hashed Deduplication & Transactional Rollback: Confirmed that importing identical media reuses existing content-hash asset records, removing service-order items never deletes underlying reusable songs or media files, and failed imports roll back SQLite metadata atomically.",
          ],
        },
        {
          eyebrow: "04 · Outcome & Release Confidence",
          title:
            "A deterministic, low-footprint native worship engine proven in CI",
          body: "By treating memory ceilings, cue-to-output latency, and operator UI isolation as blocking CTest gates under -Werror, Shekinah delivers a full-scale ProPresenter workflow in native C++20/Qt 6 that holds steady on 4 GB Celeron hardware.",
        },
      ],
      takeaway:
        "When building live event software for constrained hardware, performance and memory budgets cannot be afterthoughts—they have to be executable test contracts enforced on every build.",
    },
  },
  {
    slug: "mylightdrugstore-qa",
    title: "MyLightDrugstore audit",
    image: myLightDrugstoreImage,
    eyebrow: "QA case study · Legacy system",
    description:
      "A structured pass through a legacy PHP application that is refactored by me, focused on critical transaction paths, data integrity, reproducible defects, and safe regression coverage.",
    tags: ["Manual QA", "Postman", "Bug reports"],
    link: "https://github.com/adriaanamd/MyLightDrugstore",
    accent: "sand",
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
]
