import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "NusaMart \u2014 E-Commerce Platform",
    description:
      "A production-style fullstack e-commerce platform with category browsing, flash sales, and a full checkout flow \u2014 built with Next.js, TypeScript, PostgreSQL, and Prisma.",
    image: "/images/projects/nusa-mart.png",
    stacks: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    keyFeatures: [
      "Product browsing across multiple categories (Electronics, Fashion, Beauty, Food & Beverage, Sports)",
      "Flash sale section with countdown timer and discount badges",
      "Checkout flow backed by PostgreSQL via Prisma ORM and Next.js API routes",
      "Responsive storefront layout built with Tailwind CSS",
    ],
    gitUrl: "https://github.com/ardiwirya/nusa-mart",
    previewUrl: "",
    imageWidth: 1920,
    imageHeight: 1200,
  },
  {
    id: 2,
    title: "CollabSpace \u2014 Team Collaboration Workspace",
    description:
      "A real-time team collaboration workspace with channel-based messaging, presence, and notifications \u2014 built with Next.js, TypeScript, and Supabase.",
    image: "/images/projects/collabspace.png",
    stacks: ["Next.js", "TypeScript", "Supabase", "Zustand"],
    keyFeatures: [
      "Real-time channel-based messaging powered by Supabase",
      "Presence indicators and direct messages",
      "Multi-channel workspace structure, including restricted/permissioned channels",
      "Zustand for client state, TanStack Query for server state",
    ],
    gitUrl: "https://github.com/ardiwirya/collabspace",
    previewUrl: "",
    imageWidth: 1919,
    imageHeight: 908,
  },
  {
    id: 3,
    title: "Clinic Information System",
    description:
      "Fullstack information system for managing patient records, appointments, and clinic staff \u2014 built as a REST API (Express.js) consumed by a separate React front-end.",
    image: "/images/projects/clinic-system.png",
    stacks: ["React", "Express.js", "JWT", "MySQL"],
    keyFeatures: [
      "Patient record management (create, view, update)",
      "Appointment scheduling for clinic staff",
      "REST API built with Express.js, consumed by a separate React client",
    ],
    repoLinks: [
      {
        label: "Front-End Repo",
        url: "https://github.com/ardiwirya/klinik-frontend",
      },
      {
        label: "Back-End Repo",
        url: "https://github.com/ardiwirya/klinik-backend",
      },
    ],
    gitUrl: "https://github.com/ardiwirya/klinik-frontend",
    previewUrl: "/",
    imageWidth: 1239,
    imageHeight: 706,
  },
  {
    id: 4,
    title: "Resumake AI \u2014 Resume Builder",
    description:
      "A modern CV/resume builder with a guided multi-step form, live preview, multiple templates, and one-click PDF export \u2014 built with Next.js 15, TypeScript, and shadcn/ui.",
    image: "/images/projects/resumake-ai.png",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    keyFeatures: [
      "8-step guided form covering personal info, education, experience, skills, certificates, and languages",
      "Live preview that updates as the user types",
      "Multiple resume templates (Modern, Classic, Minimal)",
      "Auto-save progress and one-click PDF export",
    ],
    gitUrl: "https://github.com/ardiwirya/resumake-ai",
    previewUrl: "https://resumake-ai.vercel.app/",
    imageWidth: 1920,
    imageHeight: 1200,
  },
  {
    id: 5,
    title: "CineVault \u2014 Movie Discovery App",
    description:
      "A movie discovery portfolio project built with Astro and React islands, featuring live search, genre filtering, and a localStorage-based watchlist that runs entirely without a backend.",
    image: "/images/projects/cinevault.png",
    stacks: ["Astro", "React", "JavaScript"],
    keyFeatures: [
      "Live search and genre filtering powered by The Movie Database (TMDB) API",
      "Movie detail pages with poster, overview, genres, rating, and runtime",
      "Personal watchlist saved in the browser via localStorage \u2014 no backend required",
      "Static site architecture: the TMDB API key is only used at build time and never shipped to the browser",
      "Basic SEO: page titles, meta descriptions, canonical URLs, and Open Graph tags",
    ],
    gitUrl: "https://github.com/ardiwirya/cinevault-astro",
    previewUrl: "https://cinevault-astro.vercel.app/",
    imageWidth: 1920,
    imageHeight: 912,
  },
  {
    id: 6,
    title: "HargaCerdas \u2014 AI Pricing Advisor",
    description:
      "A free pricing tool for small businesses (UMKM) to calculate profit margins, compare pricing scenarios, and get an AI-generated selling price recommendation. Runs fully client-side \u2014 no backend, no server cost, and all data stays on the user's device.",
    image: "/images/projects/harga-cerdas.png",
    stacks: ["React", "JavaScript", "AI Integration"],
    keyFeatures: [
      "Calculates profit margin from product cost and selling price",
      "Compares multiple pricing scenarios side by side",
      "AI-generated selling price recommendation",
      "No backend \u2014 all data stays in the browser (localStorage)",
    ],
    gitUrl: "https://github.com/ardiwirya/hargacerdas",
    previewUrl: "https://hargacerdas.vercel.app/",
    imageWidth: 1920,
    imageHeight: 1747,
  },
  {
    id: 7,
    title: "SkyCast \u2014 Weather Forecast App",
    description:
      "A weather forecast app to search any city and see current conditions, an hourly outlook, and a 7-day forecast \u2014 fully localized in Indonesian.",
    image: "/images/projects/skycast-weather.png",
    stacks: ["React", "TypeScript", "Vite"],
    keyFeatures: [
      "Search weather by city name",
      "Current conditions, hourly outlook, and 7-day forecast",
      "UI and weather terms fully localized in Indonesian",
      "Built with TypeScript for safer, more maintainable code",
    ],
    gitUrl: "https://github.com/ardiwirya/skycast",
    previewUrl: "https://indo-skycast.vercel.app/",
    imageWidth: 1920,
    imageHeight: 1781,
  },
  {
    id: 8,
    title: "Portfolio Website",
    description:
      "This portfolio website itself \u2014 built with Next.js, TypeScript, and Tailwind CSS, showcasing my background, projects, and certifications as a Front-End Developer.",
    image: "/images/projects/portfolio-website.png",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS"],
    keyFeatures: [
      "Built with Next.js App Router and Tailwind CSS",
      "Contact form powered by a Next.js API route + Resend",
      "Deployed on Vercel with automatic deployment on push",
    ],
    gitUrl: "https://github.com/ardiwirya/portfolio-website",
    previewUrl: "https://ardiwirya.vercel.app/",
    imageWidth: 1366,
    imageHeight: 768,
  },
];
