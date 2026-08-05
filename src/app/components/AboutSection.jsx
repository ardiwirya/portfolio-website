'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const SKILLS_DATA = [
  {
    title: "Front-End Web Development",
    language:
      "React, Next.js, Astro, TypeScript, JavaScript, Tailwind CSS, Vite, HTML5, CSS, PWA",
    totalDuration: "Primary Focus",
  },
  {
    title: "Back-End Development",
    language: "Node.js, Express.js, RESTful API, SQL, JWT Authentication",
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
    language:
      "Git, GitHub, Postman, Testing (Unit, Integration, E2E), Web Performance Auditing",
    totalDuration: "Development Tools",
  },
  {
    title: "Soft Skills",
    language:
      "Leadership, Teamwork, Client Communication, Technical Troubleshooting, Strategic Planning, Cross-Cultural Collaboration",
    totalDuration: "Professional Skills",
  },
];

const EXPERIENCE_DATA = [
  {
    image: "/images/logo/freelance.png",
    title: "Freelance Software Engineer",
    institution: "Self-Employed",
    date: "2023 - Present",
    totalDuration: "Ongoing",
  },
  {
    image: "/images/logo/dicoding.avif",
    title: "Front-End & Back-End Developer",
    institution: "Certified Independent Study (MSIB) — Dicoding Indonesia",
    date: "Aug - Dec 2023",
    totalDuration: "918-hour intensive program",
  },
];

const ORGANIZATIONS_DATA = [
  {
    image: "/images/logo/ldk.png",
    title: "Secretary General & Project Leader",
    institution: "UKM LDK Al-Kautsar, Malikussaleh University",
    date: "Jan - Dec 2024",
    totalDuration: "12 months",
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

const HONOR_AWARDS_DATA = [
  {
    image: "/images/logo/senastika.png",
    title: "Published Paper & Presenter",
    institution:
      "Seminar Nasional Teknologi Informasi dan Teknik Informatika (SENASTIKA) 2024",
    monthYear: "2024",
  },
];

function renderSkills() {
    return (
      <div>
        {SKILLS_DATA.map((skill, idx) => (
          <div key={idx} className={`flex flex-row gap-3 items-center py-4
            ${idx < SKILLS_DATA.length - 1 ? "border-b border-gray-600" : ""}
          `}>
            <div className="flex flex-col">
                <h3 className="font-semibold text-base mb-1">{skill.title}</h3>
                <p className="text-sm text-gray-300 mb-1">{skill.language}</p>
                <p className="text-sm text-gray-400 mb-1">
                    {skill.totalDuration}
                </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  function renderExperiences(dataArray) {
    return (
        <div>
          {dataArray.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-row gap-3 items-center py-4
                ${idx < dataArray.length - 1 ? "border-b border-gray-600" : ""}
              `}
            >
              <div className="flex-shrink-0 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-1">{item.institution}</p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                  <span >{item.date}</span>
                  <span>•</span>
                  <span>{item.totalDuration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  
  function renderHonorsAwards() {
    return (
      <div>
        {HONOR_AWARDS_DATA.map((award, idx) => (
          <div key={idx} className={`flex flex-row gap-3 items-center py-4
            ${idx < HONOR_AWARDS_DATA.length - 1 ? "border-b border-gray-600" : ""}
          `}>
            <div className="flex-shrink-0">
              <Image
                src={award.image}
                alt={award.title}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-base mb-1">{award.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{award.institution}</span>
                  <span>•</span>
                  <span>{award.monthYear}</span>
                </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: renderSkills()
    },
    {
      title: "Experience",
      id: "experience",
      content: renderExperiences(EXPERIENCE_DATA)
    },
    {
      title: "Organizations",
      id: "organizations",
      content: renderExperiences(ORGANIZATIONS_DATA)
    },
    {
      title: "Awards",
      id: "award",
      content: renderHonorsAwards()
    }
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition()
    const [isLoading, setIsLoading] = useState(true);

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
      <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div>
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-opacity-60">
                <div className="w-8 h-8 border-4 border-t-transparent border-white rounded-full animate-spin" />
              </div>
            )}
            <Image
              src="/images/programmer.png"
              alt="Software engineering activity"
              width={700}
              height={700}
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              Fresh graduate in Informatics Engineering with a strong focus on
              Front-End Development. Experienced in building responsive and
              accessible web applications using React, Next.js, Astro,
              JavaScript, TypeScript, and Tailwind CSS. Familiar with Node.js,
              Express.js, RESTful APIs, and SQL for full-stack collaboration.
              Passionate about creating fast, user-centered digital experiences
              and writing clean, maintainable code.
            </p>
            <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-4 mt-5">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                {" "}
                Experience{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("organizations")}
                active={tab === "organizations"}
              >
                {" "}
                Organizations{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("award")}
                active={tab === "award"}
              >
                {" "}
                Awards{" "}
              </TabButton>
            </div>
            <div className="mt-2">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutSection
