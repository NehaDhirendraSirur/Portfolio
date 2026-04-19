// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Star } from "lucide-react";

const projects = [
  {
  title: "Stiq - The Habit Tracker",
  tagline: "Streak-Based Habit Tracker Web Application with Gamification",
  category: "Web Dev",
  categoryColor: "#34D399",
  featured: true,
  description:
    "A full-stack gamified habit tracking application that helps users build consistency through streaks, rewards, and growth progression. Users can track daily habits, earn points, maintain streaks with freeze mechanisms, and level up a visual growth companion, making habit building engaging and interactive.",
  tech: [
    "Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "React", "Vite", "Tailwind CSS"
  ],
  github: "https://github.com/NehaDhirendraSirur/Stiq-TheHabitTracker.git",
   },
   {
  title: "GitHub Profile Analyzer",
  tagline: "Analytics + AI insights for any GitHub developer profile",
  category: "Web Dev / AI",
  categoryColor: "#34D399",
  featured: true,
  description:
    "A full-stack web application that transforms any GitHub username into a comprehensive developer profile with analytics and AI-powered insights. Features include repository analytics, contribution heatmaps, language trends, and AI-generated portfolio bio, role fit evaluation, and developer archetype using Google Gemini.",
  tech: [
    "Next.js", "TypeScript", "Tailwind CSS", "Recharts", "TanStack Query", "Google Gemini API", "Vercel"
  ],
  github: "https://github.com/NehaDhirendraSirur/Github-Profile-Analyzer",
   },
  {
    title: "Explainable AI Model for Plant Disease Detection",
    tagline: "Federated Learning + XAI for transparent agricultural AI",
    category: "AI / ML",
    categoryColor: "#F472B6",
    featured: true,
    description:
      "Explores the integration of Explainable Artificial Intelligence (XAI) and Federated Learning to enhance the transparency, privacy, and accuracy of plant disease detection models.",
    tech: ["Python", "PyTorch", "FedAvg", "LIME", "Matplotlib"],
    github: "https://github.com/NehaDhirendraSirur/XAI_with_Federated_Learning",
   },
   {
    title: "URL Redirection Service",
    tagline: "URL shortener with expiry, analytics & low-latency resolution",
    category: "Web Dev",
    categoryColor: "#34D399",
    featured: true,
    description:
      "URL shortening service with expiry handling and analytics using Spring Boot and PostgreSQL. Generates short, unique URLs and resolves them with low latency while handling expiration and basic analytics.",
    tech: ["Spring Boot", "PostgreSQL", "React.js"],
    github: "https://github.com/NehaDhirendraSirur/Url_Redirection_Service",
    },
    {
    title: "Generative AI for Inter-instrumental Synthesis of Indian Classical Music",
    tagline: "LSTM-RNN converting piano tunes to harmonium renditions",
    category: "Generative AI",
    categoryColor: "#F472B6",
    featured: true,
    description:
      "A generative AI solution powered by LSTM-RNN to automatically convert classical piano tunes into harmonium renditions while retaining the unique characteristics of the instrument.",
    tech: ["Python", "TensorFlow", "PyTorch", "MIDI"],
    github: "https://github.com/NehaDhirendraSirur/GenAI_for_IndianClassicalMusic",
    },
    {
    title: "Multilingual Text Classification using IndicCorp dataset",
    tagline: "73.37% accuracy across 11 Indian languages",
    category: "NLP",
    categoryColor: "#F472B6",
    featured: false,
    description:
      "Multilingual Text Classification System using IndicCorp, a monolingual dataset with 11 Indic languages. Integrates CountVectorizer for feature extraction and Multinomial Naïve Bayes for classification.",
    tech: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/NehaDhirendraSirur/Multilingual_Text_Classification",
    },
    {
    title: "Big Data Analytics on NFL Big Data Bowl 2025",
    tagline: "ETL + Hadoop MapReduce for NFL performance insights",
    category: "Big Data",
    categoryColor: "#FBBF24",
    featured: false,
    description:
      "Analyzed the NFL Big Data Bowl 2025 Kaggle dataset to uncover insights on quarterback performance, passing yards, receiver contributions, and team statistics using Alteryx and Hadoop MapReduce.",
    tech: ["Alteryx", "Hadoop MapReduce", "Java"],
    github: "https://github.com/NehaDhirendraSirur/NFLBowl_BigData",
    },
    {
    title: "Crop Wellness Analyzer",
    tagline: "Full-stack app with ML disease detection for farmers",
    category: "Web Dev / ML",
    categoryColor: "#34D399",
    featured: false,
    description:
      "Full-stack web application using React, Spring Boot, MySQL, and MongoDB to optimize crop productivity for small-scale farmers. Integrated an ML-based disease detection API using Flask and Axios for real-time image analysis.",
    tech: ["React.js", "Spring Boot", "MySQL", "MongoDB", "Flask", "ML"],
    github: "https://github.com/NehaDhirendraSirur/Crop-Wellness-Analyzer",
    },
    {
    title: "Portfolio Website",
    tagline: "This very portfolio — built from scratch",
    category: "Web Dev",
    categoryColor: "#34D399",
    featured: false,
    description:
      "Personal portfolio showcasing projects, publications, certifications, and experiences with smooth UI/UX, page transitions, and responsive design.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/NehaDhirendraSirur/portfolio",
    },
];

export default function Projects() {
  return (
    <div className="bg-[#0a192f] text-white min-h-screen px-6 pt-28 pb-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* <motion.p
        className="text-center text-sm text-blue-300/70 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        ⭐ Featured projects highlighted
      </motion.p> */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            whileHover={{
              boxShadow: `0 0 28px 4px ${proj.categoryColor}2A`,
              y: -4,
            }}
            className={`
              relative rounded-2xl p-6 flex flex-col justify-between
              transition-all duration-300
              ${proj.featured
                ? "bg-[#1A2B42] ring-1 ring-white/20"
                : "bg-[#1A2B42]/70 ring-1 ring-white/10"
              }
            `}
          >
            {/* Featured badge */}
            {proj.featured && (
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-400/15 text-yellow-300 border border-yellow-400/30 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                <Star size={10} fill="currentColor" />
                Featured
              </div>
            )}

            <div>
              {/* Category tag */}
              <span
                className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-3"
                style={{
                  color: proj.categoryColor,
                  backgroundColor: `${proj.categoryColor}18`,
                }}
              >
                {proj.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-1 leading-snug pr-16">
                {proj.title}
              </h3>

              {/* Tagline */}
              <p className="text-xs text-blue-300/70 mb-3 italic">
                {proj.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {proj.description}
              </p>

              {/* Tech pill tags */}
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub button */}
            <div className="mt-5 flex justify-end">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-4 py-2 rounded-lg transition"
              >
                <FaGithub size={15} /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}