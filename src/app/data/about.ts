import type { AboutItem } from "./types";

export const SKILLS_DATA: AboutItem[] = [
  {
    title: "Front-End Web Development",
    language:
      "Angular, Ionic, TypeScript, JavaScript, React, Next.js, Tailwind CSS",
    totalDuration: "Primary Focus",
  },
  {
    title: "Back-End Development",
    language: "Node.js, Express.js, REST API, JWT, PostgreSQL, MySQL, Supabase",
    totalDuration: "Working Knowledge",
  },
  {
    title: "Data & Analytics",
    language:
      "Python, Data Mining, Machine Learning, Data Analysis, Isolation Forest",
    totalDuration: "Academic Experience",
  },
  {
    title: "Tools & Testing",
    language: "Git, GitHub, Postman, Jest, AI-assisted development",
    totalDuration: "Development Tools",
  },
  {
    title: "Soft Skills",
    language:
      "Teamwork, Leadership, Client Communication, Technical Troubleshooting, Cross-Cultural Communication",
    totalDuration: "Professional Skills",
  },
  {
    title: "Languages",
    language: "Bahasa Indonesia (native), English (TOEFL ITP 483)",
  },
];

export const EXPERIENCE_DATA: AboutItem[] = [
  {
    title: "Frontend Developer (Apprenticeship)",
    institution: "PT Bakrie Autoparts — Bekasi, West Java",
    date: "Sep 2026 - Present",
    highlights: [
      "Build frontend features for ERIS, an internal multi-application enterprise platform, using Angular, Ionic, and TypeScript.",
      "Implement authentication, routing, session guards, and role-based access control in the UI.",
      "Integrate REST APIs for auth, users, and roles, and test CRUD endpoints with Postman alongside a mentor and a teammate.",
    ],
  },
  {
    image: "/images/logo/freelance.png",
    title: "Freelance Software Engineer",
    institution: "Self-Employed",
    date: "Jul 2023 - Aug 2026",
    totalDuration: "3 years",
    highlights: [
      "Developed, debugged, maintained, and optimized client websites using HTML, CSS, and JavaScript.",
      "Delivered a village government CMS for resident profiles, demographic data, and local news publishing through an admin panel.",
      "Managed client requirements from the initial briefing through final delivery.",
    ],
  },
  {
    image: "/images/logo/dicoding.avif",
    title: "Frontend Developer Student",
    institution: "Kampus Merdeka / Dicoding Indonesia — Remote",
    date: "Aug - Dec 2023",
    totalDuration: "918-hour intensive program",
    highlights: [
      "Completed a certified independent study program covering frontend and backend web development.",
      "Built responsive web applications and REST APIs with Node.js, with code managed on GitHub.",
    ],
  },
];

export const ORGANIZATIONS_DATA: AboutItem[] = [
  {
    image: "/images/logo/ldk.png",
    title: "Secretary General & Project Leader",
    institution: "UKM LDK Al-Kautsar, Malikussaleh University",
    date: "Jan - Dec 2024",
    totalDuration: "12 months",
    description: "Managed administration and evaluations for more than 25 activities alongside leading the international collaboration program.",
  },
  {
    image: "/images/logo/unimal.png",
    title: "Project Lead International Collaboration Mobility Students",
    institution:
      "Universitas Malikussaleh and Universiti Sultan Zainal Abidin (UniSZA), Malaysia",
    date: "2024",
    totalDuration: "2-Day International Program",
    description:
      "Led a cross-cultural collaboration program between Universitas Malikussaleh (Indonesia) and Universiti Sultan Zainal Abidin (Malaysia), coordinating international seminars and academic exchange activities for more than 250 participants.",
  },
];

export const HONOR_AWARDS_DATA: AboutItem[] = [
  {
    image: "/images/logo/senastika.png",
    title: "Published Paper & Presenter",
    institution:
      "Seminar Nasional Teknologi Informasi dan Teknik Informatika (SENASTIKA) 2024",
    monthYear: "2024",
    description:
      'Co-authored and presented "Comparison of Accuracy of Household Electricity Consumption Prediction Using Single Exponential Smoothing and Single Moving Average Methods" at SENASTIKA 2024.',
  },
];
