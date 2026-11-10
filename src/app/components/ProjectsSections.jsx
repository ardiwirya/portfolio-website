"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ItemDetails from "./ItemDetails";
import { projects } from "../data/projects";

export default function ProjectsSections() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-foreground mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project) => (
          <motion.li
            key={project.id}
            initial={{ y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard item={project} onOpen={() => setSelected(project)} />
          </motion.li>
        ))}
      </ul>
      {selected && (
        <ItemDetails item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
