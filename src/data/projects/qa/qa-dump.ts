import type { ArchiveProject } from "../types"
import camFleaImage from "../../../project-assets/qa/camflea-qa.png"

export const qaArchive: ArchiveProject[] = [
  [
    "CamFlea",
    "Test automation · regression · CBF recommendation",
    "https://github.com/adriaanamd/camflea",
    "https://github.com/adriaanamd/camflea",
    camFleaImage,
    "A flea marketplace application designed for students of institutions. This one's specifically done for a final project in 2025's Software Engineering 1 and 2. Rebuilt with a better architecture and a CBF recommendation algorithm, with heavy use of tests to preserve old application behavior.",
    ["Test automation", "Regression", "CBF algorithm"],
  ],
  [
    "SnapBooth — release QA",
    "Cross-browser · camera · WebSocket",
    "https://github.com/adriaanamd/snapbooth",
    "https://snapbooth-main.netlify.app/",
  ],
  [
    "MyLightDrugstore — legacy audit",
    "Manual QA · critical paths",
    "https://github.com/adriaanamd/MyLightDrugstore",
  ],
  [
    "MeatLens — model acceptance",
    "Data validation · exploratory testing",
    "https://github.com/MeatLens-Freshness-Inspector/meatlens-application",
    "https://meatlensv2.netlify.app",
    undefined,
    undefined,
    undefined,
    "/meatlens-research-paper.pdf",
  ],
  [
    "New PDC 2 — concurrency checks",
    "Parallel processing · edge cases",
    "https://github.com/adriaanamd/new-pdc-2",
  ],
]
