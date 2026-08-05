'use client'
import React, { useState, useRef, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: "Clinic Information System",
    description:
      "Fullstack information system for managing patient records, appointments, and clinic staff — built as a REST API (Express.js) consumed by a separate React front-end.",
    image: "/images/projects/clinic-system.png",
    stacks: ["React", "Express.js", "JWT", "MySQL"],
    keyFeatures: [
      "Patient record management (create, view, update)",
      "Appointment scheduling for clinic staff",
      "REST API built with Express.js, consumed by a separate React client",
    ],
    repoLinks: [
      { label: "Front-End Repo", url: "https://github.com/ardiwirya/klinik-frontend" },
      { label: "Back-End Repo", url: "https://github.com/ardiwirya/klinik-backend" },
    ],
    gitUrl: "https://github.com/ardiwirya/klinik-frontend",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "CineVault — Movie Discovery App",
    description:
      "A movie discovery portfolio project built with Astro and React islands, featuring live search, genre filtering, and a localStorage-based watchlist that runs entirely without a backend.",
    image: "/images/projects/cinevault.png",
    stacks: ["Astro", "React", "JavaScript"],
    keyFeatures: [
      "Live search and genre filtering powered by The Movie Database (TMDB) API",
      "Movie detail pages with poster, overview, genres, rating, and runtime",
      "Personal watchlist saved in the browser via localStorage — no backend required",
      "Static site architecture: the TMDB API key is only used at build time and never shipped to the browser",
      "Basic SEO: page titles, meta descriptions, canonical URLs, and Open Graph tags",
    ],
    gitUrl: "https://github.com/ardiwirya/cinevault-astro",
    previewUrl: "https://cinevault-astro.vercel.app/",
  },
  {
    id: 3,
    title: "HargaCerdas — AI Pricing Advisor",
    description:
      "A free pricing tool for small businesses (UMKM) to calculate profit margins, compare pricing scenarios, and get an AI-generated selling price recommendation. Runs fully client-side — no backend, no server cost, and all data stays on the user's device.",
    image: "/images/projects/harga-cerdas.png",
    stacks: ["React", "JavaScript", "AI Integration"],
    keyFeatures: [
      "Calculates profit margin from product cost and selling price",
      "Compares multiple pricing scenarios side by side",
      "AI-generated selling price recommendation",
      "No backend — all data stays in the browser (localStorage)",
    ],
    gitUrl: "https://github.com/ardiwirya/hargacerdas",
    previewUrl: "https://hargacerdas.vercel.app/",
  },
  {
    id: 4,
    title: "SkyCast — Weather Forecast App",
    description:
      "A weather forecast app to search any city and see current conditions, an hourly outlook, and a 7-day forecast — fully localized in Indonesian.",
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
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "This portfolio website itself — built with Next.js and Tailwind CSS, showcasing my background, projects, and certifications as a Front-End Developer.",
    image: "/images/projects/portfolio-website.png",
    stacks: ["Next.js", "Tailwind CSS"],
    keyFeatures: [
      "Built with Next.js App Router and Tailwind CSS",
      "Contact form powered by a Next.js API route + Resend",
      "Deployed on Vercel with automatic deployment on push",
    ],
    gitUrl: "https://github.com/ardiwirya/portfolio-website",
    previewUrl: "https://ardiwirya.vercel.app/",
  },
  {
    id: 6,
    title: "Pomodoro Timer",
    description:
      "A customizable Pomodoro timer app to help manage focus sessions and breaks for better productivity and time management.",
    image: "/images/projects/pomodoro.png",
    stacks: ["React", "JavaScript"],
    keyFeatures: [
      "Customizable focus and break durations",
      "Simple, distraction-free interface",
    ],
    gitUrl: "https://github.com/ardiwirya/pomodoro-timer",
    previewUrl: "/",
  },
];

const ProjectsSections = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project)
    }

    const closeModal = () => {
        setSelectedProject(null)
    }

    useEffect(() => {
        const closeOnEscape = (e) => {
            if (e.key === 'Escape') closeModal()
        }
        window.addEventListener('keydown', closeOnEscape)
        return () => window.removeEventListener('keydown', closeOnEscape)
    }, [])


    const cardVariants = {
        initial: { y:50, opacity: 0 },
        animate: { y:0, opacity: 1 }
    }

    return (
        <section id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project, index) => (
                    <motion.li 
                        key={index}
                        variants={cardVariants} 
                        initial='initial' 
                        animate={isInView ? 'animate' : 'initial'}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <div onClick={() => openModal(project)}>
                            <ProjectCard
                                title={project.title}
                                stacks={project.stacks}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                                showGitUrl={true}
                                showPreviewUrl={false}
                            />
                        </div>
                    </motion.li>
                ))}
            </ul>

            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" 
                onClick={closeModal}
                >
                <div className="bg-[#1e1e1e] w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-auto relative rounded-2xl p-6 text-white"
                onClick={(e) => e.stopPropagation()}
                    >
                    <button
                    className="absolute top-5 right-5 text-xl font-bold"
                    aria-label="Close project details"
                    onClick={closeModal}>
                    X
                    </button>

                    <h2 className="text-2xl font-bold text-center mb-4">{selectedProject.title}</h2>
                    <div className="flex justify-center mb-4">
                        <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="max-h-80 object-contain"
                        />
                    </div>
                    <p className="text-gray-200 mb-4">{selectedProject.description}</p>

                    {selectedProject.keyFeatures && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {selectedProject.keyFeatures.map((feature, i) => (
                                <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {selectedProject.keyTechnologies && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Key Technologies</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {selectedProject.keyTechnologies.map((technologies, i) => (
                                <li key={i}>{technologies}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {selectedProject.myRole && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">My Role</h3>
                            <ul className="list-disc list-inside space-y-1">
                                {selectedProject.myRole.map((myRole, i) => (
                                <li key={i}>{myRole}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {selectedProject.projectBackground && (
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Project Background</h3>
                            <p>{selectedProject.projectBackground}</p>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                        {selectedProject.repoLinks ? (
                            selectedProject.repoLinks.map((repo) => (
                                <a
                                    key={repo.url}
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block border rounded px-3 py-2 hover:bg-white hover:text-black transition-colors"
                                >
                                    {repo.label}
                                </a>
                            ))
                        ) : (
                            selectedProject.gitUrl && selectedProject.gitUrl !== "/" && (
                                <a
                                    href={selectedProject.gitUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block border rounded px-3 py-2 hover:bg-white hover:text-black transition-colors"
                                >
                                    View GitHub
                                </a>
                            )
                        )}

                        {selectedProject.previewUrl && selectedProject.previewUrl !== "/" && (
                            <a
                                href={selectedProject.previewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block border rounded px-3 py-2 hover:bg-white hover:text-black transition-colors"
                            >
                                View Live Demo
                            </a>
                        )}
                    </div>
                </div>
                </div>
            )}
            
        </section>
    )
}

export default ProjectsSections