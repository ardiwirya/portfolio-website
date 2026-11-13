"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ItemDetails from "./ItemDetails";
import { certificates } from "../data/certificates";
import type { Certificate } from "../data/types";

export default function CertificatesSections() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="certificates" className="pt-20">
      <h2 className="text-center text-4xl font-bold text-foreground mt-4 mb-8 md:mb-12">
        My Certificates
      </h2>
      <ul id="certificate-list" className="grid md:grid-cols-3 gap-8 md:gap-12">
        {certificates.slice(0, showAll ? undefined : 9).map((certificate) => (
          <motion.li
            key={certificate.id}
            initial={{ y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard
              item={certificate}
              certificate
              onOpen={() => setSelected(certificate)}
            />
          </motion.li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        <button
          type="button"
          aria-expanded={showAll}
          aria-controls="certificate-list"
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 min-h-11 text-foreground bg-chip rounded-sm"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
      {selected && (
        <ItemDetails
          item={selected}
          certificate
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
