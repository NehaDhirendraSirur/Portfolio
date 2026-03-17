// src/components/Experience.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Analyst",
    company: "Allstate India",
    duration: "July 2025 – Present",
    summary: "Full-stack development with Java, Spring Boot & React. Building REST APIs, contributing to Agile sprints, and exploring AI-based POCs.",
    tags: ["Java", "Spring Boot", "React", "REST APIs", "Agile"],
    description: [
      "Working on application development and enhancements using Java, Spring Boot, and React.",
      "Assisting in building and testing REST APIs, using Postman for validation and debugging.",
      "Using Git/GitHub for version control, code reviews, and collaborative development.",
      "Supporting feature implementation, bug fixes, and code refactoring under guidance of senior engineers.",
      "Developing and experimenting with proof-of-concepts (POCs), including AI-based explorations, to understand feasibility and application impact.",
      "Following Agile practices, contributing to sprint tasks, discussions, and incremental delivery.",
    ],
  },
  {
    role: "Apprentice Associate",
    company: "Allstate India",
    duration: "Feb 2025 – July 2025",
    summary: "Built a full-stack e-commerce app with React, Spring Boot & Oracle DB. Implemented auth, cart, wishlist and order flows with TDD principles.",
    tags: ["React", "Spring Boot", "Oracle DB", "Tailwind CSS", "JUnit"],
    description: [
      "Developed a full-stack e-commerce web application using React, Spring Boot, and Oracle Database with responsive UI styled using Tailwind CSS.",
      "Implemented core features including user authentication, product listing, cart/wishlist management, and order processing with RESTful API integration and Context API for state management.",
      "Followed TDD and OBD principles; tested APIs using Postman, wrote JUnit test cases, and planned Selenium scripts for end-to-end UI testing.",
    ],
  },
  {
    role: "Research Intern",
    company: "KLETech – Centre of Excellence in Visual Intelligence",
    duration: "July 2024 – March 2025",
    summary: "Worked on multimodal representation learning — fusing text & image data using VAE-based architectures. Research led to a conference-accepted paper.",
    tags: ["Multimodal Learning", "VAE", "Deep Learning", "Python", "Research"],
    description: [
      "Worked on multimodal representation learning, integrating text and image data into unified embeddings.",
      "Analyzed and redesigned existing autoencoder-based architectures (AE, VAE, and hybrid models) to improve multimodal fusion and generalization.",
      "Performed extensive preprocessing of textual and visual data, including embeddings and CNN-based feature extraction.",
      "Validated models on classification, regression, and retrieval tasks, demonstrating improved cross-modal alignment.",
      "Contributed to experimental analysis and research documentation, leading to a conference-accepted paper.",
    ],
  },
  {
    role: "Intern",
    company: "Knit Space Private Limited",
    duration: "July 2023 – Aug 2023",
    summary: "Built Python tools to process product JSON data, identify common device specs, and automate dataset updates using Pandas.",
    tags: ["Python", "Pandas", "JSON", "Data Processing"],
    description: [
      "Developed Python tools to analyse and process product data from JSON files.",
      "Built interactive search functions for identifying common specifications across devices.",
      "Implemented algorithms to update JSON files with most common device specifications.",
      "Utilized Pandas and Counter for efficient data analysis and manipulation.",
    ],
  },
];

export default function Experience() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <div className="relative min-h-screen bg-[#0a192f] text-white px-6 pt-28 pb-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="max-w-3xl mx-auto relative">

        {/* Vertical line */}
        <div
          className="absolute left-[18px] top-0 bottom-0 w-0.5"
          style={{ backgroundColor: "#005A9C" }}
        />

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative pl-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-[11px] top-5 w-4 h-4 rounded-full border-2 z-10"
                style={{
                  backgroundColor: openIdx === idx ? "#60A5FA" : "#005A9C",
                  borderColor: openIdx === idx ? "#93C5FD" : "#005A9C",
                  transition: "all 0.3s ease",
                }}
              />

              {/* Card */}
              <div
                className={`rounded-2xl bg-[#1A2B42] ring-1 transition-all duration-300 overflow-hidden ${
                  openIdx === idx
                    ? "ring-blue-400 shadow-lg shadow-blue-500/20"
                    : "ring-white/10 hover:ring-white/25"
                }`}
              >
                {/* Header — always visible, click to toggle */}
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    {/* Role + company + duration */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-blue-300 font-medium text-sm">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-3">{exp.duration}</p>

                    {/* Summary snippet */}
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-200 border border-blue-500/25 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: openIdx === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 mt-1 text-gray-400"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Expanded bullet points */}
                <AnimatePresence initial={false}>
                  {openIdx === idx && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-white/10 pt-4">
                        <ul className="space-y-2.5">
                          {exp.description.map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start gap-2.5 text-sm text-gray-200"
                            >
                              <span
                                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: "#60A5FA" }}
                              />
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}