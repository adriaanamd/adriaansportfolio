import type { FeaturedProject } from "../types"
import camFleaImage from "../../../project-assets/qa/camflea-qa.png"
import meatLensImage from "../../../project-assets/qa/meatlens-qa.png"
import myLightDrugstoreImage from "../../../project-assets/qa/mylightdrugstore-qa.png"

export const qaFeaturedProjects: FeaturedProject[] = [
  {
    title: "CamFlea",
    image: camFleaImage,
    eyebrow: "QA case study · Marketplace application",
    description:
      "A flea marketplace application designed for students of institutions. This one's specifically done for a final project in 2025's Software Engineering 1 and 2. Rebuilt with a better architecture and a CBF recommendation algorithm, with heavy use of tests to preserve old application behavior.",
    tags: ["Test automation", "Regression", "CBF algorithm"],
    link: "https://github.com/adriaanamd/camflea",
    liveDemo: "https://github.com/adriaanamd/camflea",
    accent: "wine",
  },
  {
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
  },
  {
    title: "MyLightDrugstore audit",
    image: myLightDrugstoreImage,
    eyebrow: "QA case study · Legacy system",
    description:
      "A structured pass through a legacy PHP application that is refactored by me, focused on critical transaction paths, data integrity, reproducible defects, and safe regression coverage.",
    tags: ["Manual QA", "Postman", "Bug reports"],
    link: "https://github.com/adriaanamd/MyLightDrugstore",
    accent: "sand",
  },
]
