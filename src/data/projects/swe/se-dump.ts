import type { ArchiveProject } from "../types"
import mathVentureImage from "../../../project-assets/swe/mathventure-swe.png"
import meatLensImage from "../../../project-assets/swe/meatlens-swe.png"
import myLightDrugstoreImage from "../../../project-assets/swe/mylightdrugstore-swe.png"

export const engineeringArchive: ArchiveProject[] = [
  [
    "MeatLens",
    "TypeScript · thesis · in progress",
    "https://github.com/MeatLens-Freshness-Inspector/meatlens-application",
    "https://meatlensv2.netlify.app",
    meatLensImage,
    "A freshness inspection platform designed to help users scan and assess meat. An active thesis project joining a practical interface with classification workflows.",
    ["TypeScript", "React", "Computer vision"],
    "/meatlens-research-paper.pdf",
  ],
  [
    "MathVenture",
    "TypeScript · educational technology · deployed",
    "https://github.com/adriaanamd/mathventure",
    "https://mathventureprototype1.netlify.app/",
    mathVentureImage,
    "An interactive mathematics learning platform for kindergarten pupils, combining gamified activities, classroom management, and offline-first functionality to support engaging and accessible learning.",
    ["TypeScript", "Educational Tech", "Offline-first", "Gamification"],
  ],
  [
    "ExamHub",
    "TypeScript · full-stack application",
    "https://github.com/adriaanamd/ExamHub",
  ],
  [
    "SnapBooth",
    "TypeScript · WebSocket · deployed",
    "https://github.com/adriaanamd/snapbooth",
    "https://snapbooth-main.netlify.app/",
  ],
  [
    "MyLightDrugstore",
    "PHP · legacy application",
    "https://github.com/adriaanamd/MyLightDrugstore",
    undefined,
    myLightDrugstoreImage,
    "A pharmacy inventory and sales system covering medicine cataloging, stock movement, transaction history, and staff workflows.",
    ["PHP", "Inventory", "Full stack"],
  ],
  [
    "New PDC 2",
    "C++ · parallel computing",
    "https://github.com/adriaanamd/new-pdc-2",
  ],
]
