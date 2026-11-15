import type { FeaturedProject } from "../types"
import camFleaImage from "../../../project-assets/qa/camflea-qa.png"
import meatLensImage from "../../../project-assets/qa/meatlens-qa.png"
import myLightDrugstoreImage from "../../../project-assets/qa/mylightdrugstore-qa.png"

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
    slug: "meatlens-qa",
    title: "MeatLens model acceptance",
    image: meatLensImage,
    eyebrow: "QA case study · Classification workflow",
    description:
      "A structured acceptance pass for the inspection workflow, focused on input validation, classification confidence, and evidence around edge cases.",
    tags: ["Exploratory QA", "Data validation", "Acceptance"],
    link: "https://github.com/MeatLens-Freshness-Inspector/meatlens-application",
    liveDemo: "https://meatlensv2.netlify.app",
    paperLink: "/meatlens-research-paper.pdf",
    accent: "sage",
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
