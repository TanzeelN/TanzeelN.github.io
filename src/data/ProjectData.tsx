import type { ProjectTypes } from "../types/ProjectTypes";

export const projects: ProjectTypes[] = [
  {
    title: "Food Inflation Dashboard",
    image: "/assets/projects/Food-Inflation.png",
    tech: ["Python", "Pandas", "Plotly", "Jupyter", "VS Code"],
    bullets: [
      "Interactive dashboard exploring food inflation by country and continent",
      "Animated choropleth map with year-by-year playback",
      "Filtering by year range and geographic scope",
    ],
  },
  {
    title: "AI Image Enhancer",
    image: "/assets/projects/Ai-Upscaler.png",
    tech: ["React Native", "JavaScript", "AWS", "Python", "REST APIs"],
    bullets: [
      "Prototype iOS application for AI-based image enhancement",
      "React Native front end with a Python back end",
      "Cloud-hosted inference via AWS",
    ],
  },
    {
  title: "Diabetes Classification Model",
  image: "/assets/projects/Diabetes-Classification.png",
  tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
  bullets: [
    "Built a binary classification model to predict diabetes risk from patient health data",
    "Applied data cleaning, feature scaling, and class imbalance handling",
    "Evaluated performance using accuracy, ROC AUC, and confusion matrix analysis",
  ],
},

];
