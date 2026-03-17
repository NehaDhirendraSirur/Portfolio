// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Explainable AI Model for Plant Disease Detection",
    description:
      "This project explores the integration of Explainable Artificial Intelligence (XAI) and Federated Learning to enhance the transparency, privacy, and accuracy of plant disease detection models.",
    tech: ["Python", "Pytorch", "Federated Learning framework (FedAvg)", "XAI Libraries: LIME", "Matplotlib for visualization"],
    github: "https://github.com/NehaDhirendraSirur/XAI_with_Federated_Learning",
  },
  {
    title: "Generative AI for Inter-instrumental Synthesis of Indian Classical Music",
    description:
      "The objective of the project is to develop a generative AI solution powered by LSTM-RNN to automatically convert classical piano tunes into harmonium renditions while retaining the unique characteristics of the instrument.",
    tech: ["Python", "TensorFlow", "PyTorch"],
    github: "https://github.com/NehaDhirendraSirur/GenAI_for_IndianClassicalMusic",
  },
  {
    title: "URL Redirection Service",
    description:
      "A URL Redirection Service with URL shortening, expiry handling, and analytics using Spring Boot and PostgreSQL. Long URLs are difficult to share and track. This service generates short, unique URLs and resolves them with low latency while handling expiration and basic analytics.",
    tech: ["Spring Boot", "PostgreSQL", "React.js"],
    github: "https://github.com/NehaDhirendraSirur/Url_Redirection_Service",
  },
  {
    title: "Multilingual Text Classification using IndicCorp dataset",
    description:
      "This project presents a Multilingual Text Classification System using IndicCorp, a monolingual dataset with 11 Indic languages. The methodology integrates CountVectorizer for feature extraction and Multinomial Naïve Bayes for classification, achieving 73.37% accuracy.",
    tech: ["Python", "scikit-learn", "pandas", "NumPy", "matplotlib"],
    github: "https://github.com/NehaDhirendraSirur/Multilingual_Text_Classification",
  },
  {
    title: "Big Data Analytics on NFL Big Data Bowl 2025",
    description:
      "Analyzed the NFL Big Data Bowl 2025 Kaggle dataset to uncover insights on quarterback performance, passing yards, receiver contributions, and team statistics. Leveraged Alteryx for ETL workflows and Hadoop MapReduce in Java for distributed data processing.",
    tech: ["Alteryx", "Hadoop MapReduce", "Java", "Big Data Analytics"],
    github: "https://github.com/NehaDhirendraSirur/NFLBowl_BigData",
  },
  {
    title: "Crop Wellness Analyzer",
    description:
      "Developed a full-stack web application using React, Spring Boot, MySQL, and MongoDB to optimize crop productivity for small-scale farmers. Built a Crop Information System with a relational schema for plants, diseases, symptoms, and solutions. Integrated an ML-based disease detection API using Flask and Axios for real-time image analysis.",
    tech: ["React.js", "Spring Boot", "MySQL", "MongoDB", "Flask", "Machine Learning"],
    github: "https://github.com/NehaDhirendraSirur/Crop-Wellness-Analyzer",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, certificates, and experiences with smooth UI/UX.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/NehaDhirendraSirur/portfolio",
  },
];

export default function Projects() {
  return (
    <div className="bg-[#0a192f] text-white min-h-screen px-6 pt-28 pb-20">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#1A2B42] rounded-2xl shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-300 mb-4">{proj.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                <span className="font-semibold">Tech Stack: </span>
                {proj.tech.join(", ")}
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}