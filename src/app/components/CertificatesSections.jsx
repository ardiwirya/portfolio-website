"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import Image from "next/image";

const featuredCertificates = [
  {
    id: 1,
    title: "Front-End Web Developer Expert",
    dateOrPublisher: "Dicoding Indonesia",
    image: "/images/certificates/fe-expert.jpg",
    type: ["Front-End", "PWA", "Automation Testing"],
    description:
      "Advanced-level certification covering optimized, scalable front-end web application development practices.",
  },
  {
    id: 2,
    title: "Certified Independent Study — Front-End & Back-End",
    dateOrPublisher: "Dicoding Indonesia · MSIB Cycle 5, 2023",
    image: "/images/certificates/msib-cycle5.jpg",
    type: ["Front-End", "Back-End", "Bootcamp"],
    description:
      "Completed a 918-hour Certified Independent Study program covering front-end development, back-end development, RESTful APIs, collaborative development, and career preparation.",
  },
  {
    id: 3,
    title: "Fundamental Front-End Web Development",
    dateOrPublisher: "Dicoding Indonesia · 2023",
    image: "/images/certificates/fundamental-fe.jpg",
    type: ["Learning", "Front-End", "JavaScript"],
    description:
      "Front-end development fundamentals covering responsive interfaces, JavaScript-based interactions, accessibility, and modern web development practices.",
  },
  {
    id: 4,
    title: "SOLID Programming Principles",
    dateOrPublisher: "Dicoding Indonesia",
    image: "/images/certificates/solid-principles.jpg",
    type: ["Learning", "Clean Code", "SOLID"],
    description:
      "Learned object-oriented design principles for building maintainable, extensible, and scalable software.",
  },
  {
    id: 5,
    title: "Productivity with AI Bootcamp",
    dateOrPublisher: "Badan Ekraf Digital Talent · 2026",
    image: "/images/certificates/ai-bootcamp.png",
    type: ["Generative AI", "Bootcamp"],
    description:
      "Completed the Productivity with AI Bootcamp organized by Badan Ekraf Digital Talent, focusing on the practical use of AI tools to improve professional productivity and digital workflows.",
  },
  {
    id: 6,
    title: "Generative AI Usage",
    dateOrPublisher: "Dicoding Indonesia",
    image: "/images/certificates/generative-ai.jpg",
    type: ["Learning", "AI"],
    description:
      "Practical application of generative AI tools to improve productivity and workflows.",
  },
  {
    id: 7,
    title: "TOEFL ITP - Score 483",
    dateOrPublisher: "UNIMAL Language Center, 2026",
    image: "/images/certificates/toefl.jpg",
    type: ["English"],
    description:
      "Official TOEFL ITP score certifying English language proficiency.",
  },
  {
    id: 8,
    title: "Presenter - SENASTIKA 2024",
    dateOrPublisher: "Universitas Malikussaleh",
    image: "/images/certificates/senastika-presenter.jpg",
    type: ["Publication", "Data Science"],
    description:
      'Co-authored and presented a published journal paper titled "Comparison of Accuracy of Household Electricity Consumption Prediction Using Single Exponential Smoothing and Single Moving Average Methods" at SENASTIKA 2024.',
  },
  {
    id: 9,
    title: "Project Lead - International Collaboration Mobility Students",
    dateOrPublisher: "UKM LDK Al-Kautsar, Universitas Malikussaleh, 2024",
    image: "/images/certificates/project-lead.jpg",
    type: ["Leadership", "Organization", "International"],
    description:
      "Project Lead (Ketua Panitia) for a 2-day cross-cultural collaboration program between Universitas Malikussaleh (Indonesia) and Universiti Sultan Zainal Abidin (Malaysia), coordinating international seminars for 250+ participants.",
  },
];

const otherCertificates = [
  {
    id: 10,
    title: "Back-End Development for Beginners",
    dateOrPublisher: "Dicoding Indonesia · 2023",
    image: "/images/certificates/be-beginner.jpg",
    type: ["Learning", "Node.js", "Postman", "RESTful API"],
    description:
      "Introductory back-end development covering Node.js, RESTful API design, server-side programming, and API testing.",
  },
  {
    id: 11,
    title: "JavaScript Programming Fundamentals",
    dateOrPublisher: "Dicoding Indonesia",
    image: "/images/certificates/js-fundamental.jpg",
    type: ["Learning", "JavaScript"],
    description:
      "Programming fundamentals using JavaScript, including data structures, functions, object-oriented programming, and asynchronous processes.",
  },
  {
    id: 12,
    title: "Machine Learning for Beginners",
    dateOrPublisher: "Dicoding Indonesia · 2026",
    image: "/images/certificates/machine-learning.png",
    type: ["Learning", "Machine Learning", "Python"],
    description:
      "Introductory machine learning training covering basic concepts, data preprocessing, and model building fundamentals.",
  },
  {
    id: 13,
    title: "Python Programming Fundamentals",
    dateOrPublisher: "Dicoding Indonesia · 2026",
    image: "/images/certificates/python-fundamental.jpg",
    type: ["Learning", "Python"],
    description:
      "Introductory Python programming covering syntax, data types, control flow, and basic problem-solving.",
  },
  {
    id: 14,
    title: "Git and GitHub Fundamentals",
    dateOrPublisher: "Dicoding Indonesia · 2023",
    image: "/images/certificates/git-github.jpg",
    type: ["Learning", "Git", "GitHub"],
    description:
      "Version control fundamentals using Git and collaborative repository workflows with GitHub.",
  },
  {
    id: 15,
    title: "SQL Fundamentals",
    dateOrPublisher: "Dicoding Indonesia · 2024",
    image: "/images/certificates/sql-fundamental.jpg",
    type: ["Learning", "SQL", "Database"],
    description:
      "Fundamentals of relational databases, data manipulation, filtering, aggregation, and SQL query development.",
  },
];

const CertificatesSections = () => {
  const ref = useRef(null);

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const listA = featuredCertificates;
  const listB = otherCertificates;

  const openModal = (project) => {
    setSelectedCertificate(project);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  function renderListA() {
    return listA.map((item, i) => {
      const delay = i * 0.4;
      return (
        <motion.li
          key={item.id}
          initial="initial"
          animate="animate"
          variants={cardVariants}
          transition={{ duration: 0.3, delay }}
        >
          <div onClick={() => openModal(item)}>
            <ProjectCard
              key={item.id}
              title={item.title}
              dateOrPublisher={item.dateOrPublisher}
              type={item.type}
              imgUrl={item.image}
              gitUrl={""}
              previewUrl={item.previewUrl}
              showGitUrl={false}
              showPreviewUrl={true}
            />
          </div>
        </motion.li>
      );
    });
  }

  function renderListB() {
    if (!showAll) return null;
    return listB.map((item, i) => {
      const delay = i * 0.4;
      return (
        <motion.li
          key={item.id}
          initial="initial"
          animate="animate"
          variants={cardVariants}
          transition={{ duration: 0.3, delay }}
        >
          <div onClick={() => openModal(item)}>
            <ProjectCard
              key={item.id}
              title={item.title}
              dateOrPublisher={item.dateOrPublisher}
              type={item.type}
              imgUrl={item.image}
              gitUrl={""}
              previewUrl={item.previewUrl}
              showGitUrl={false}
              showPreviewUrl={true}
            />
          </div>
        </motion.li>
      );
    });
  }

  function handleToggle() {
    setShowAll((prev) => !prev);
  }

  return (
    <section id="certificates">
      <br />
      <br />
      <br />
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Certificates
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6"></div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {renderListA()}
        {renderListB()}
      </ul>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleToggle}
          className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div
            className="bg-[#1e1e1e] w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-auto relative rounded-2xl p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 text-xl font-bold"
              aria-label="Close certificate details"
              onClick={closeModal}
            >
              X
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">
              {selectedCertificate.title}
            </h2>
            <div className="flex justify-center mb-4">
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                width={800} 
                height={320} 
                className="max-h-80 w-auto object-contain"
              />
            </div>
            <p className="text-gray-200 mb-4">
              {selectedCertificate.description}
            </p>

            {selectedCertificate.myRole && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">My Role</h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedCertificate.myRole.map((myRole, i) => (
                    <li key={i}>{myRole}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedCertificate.learningAbout && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Learning About</h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedCertificate.learningAbout.map((learningAbout, i) => (
                    <li key={i}>{learningAbout}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedCertificate.previewUrl &&
              selectedCertificate.previewUrl !== "/" && (
                <a
                  href={selectedCertificate.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border rounded px-3 py-2 mt-2 hover:bg-white hover:text-black transition-colors"
                >
                  Download Certificate
                </a>
              )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSections;
