// src/components/Contact.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaAward } from "react-icons/fa";
import { SiGooglescholar, SiOrcid } from "react-icons/si";
import resumePDF from "../assets/NehaSirur_Resume.pdf";

const messages = [
  "Got a project idea or research problem in mind? I'd love to brainstorm and collaborate.",
  "Always curious to connect with like-minded professionals, researchers, and developers. Let's share ideas and grow together.",
  "My inbox is always open—whether for opportunities, feedback, or just a tech chat."
];

const Contact = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 pt-28 pb-20"
      style={{ background: "linear-gradient(to bottom right, #0f172a, #1e293b)" }}
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
      </div>

      {/* Rotating messages */}
      <div className="h-24 flex items-center justify-center mb-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="text-lg md:text-xl text-center max-w-3xl px-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6 }}
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Social icons */}
      <motion.div
        className="grid grid-cols-3 gap-8 mt-6 sm:flex sm:justify-center sm:gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.a href="https://www.linkedin.com/in/neha-sirur" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" whileHover={{ scale: 1.12, rotate: 4 }} className="text-3xl sm:text-4xl text-white hover:text-blue-300 transition-colors">
          <FaLinkedin />
        </motion.a>
        <motion.a href="https://github.com/NehaDhirendraSirur" target="_blank" rel="noopener noreferrer" aria-label="GitHub" whileHover={{ scale: 1.12, rotate: -4 }} className="text-3xl sm:text-4xl text-white hover:text-blue-300 transition-colors">
          <FaGithub />
        </motion.a>
        <motion.a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOv-ny-1zEMdjkSU9Yr8h5nPje_XlgVmZzvqVUH8vD5arPOuqetwJZIbjkHWW-9pDmHI5hFaljikwzYwCJmq22uOql1rafz8jX5F3xETAmA&user=7obJF9UAAAAJ" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" whileHover={{ scale: 1.12 }} className="text-3xl sm:text-4xl text-white hover:text-blue-300 transition-colors">
          <SiGooglescholar />
        </motion.a>
        <motion.a href="mailto:sirurneha@gmail.com" aria-label="Email" whileHover={{ scale: 1.12, rotate: 2 }} className="text-3xl sm:text-4xl text-white hover:text-blue-300 transition-colors">
          <FaEnvelope />
        </motion.a>
        <motion.a href="https://orcid.org/0009-0006-4702-8395" target="_blank" rel="noopener noreferrer" aria-label="ORCID" whileHover={{ scale: 1.12 }} className="text-3xl sm:text-4xl text-white hover:text-blue-300 transition-colors">
          <SiOrcid />
        </motion.a>
        <motion.a href="https://www.credly.com/users/neha-sirur/badges#credly" target="_blank" rel="noopener noreferrer" aria-label="Credly Badges" whileHover={{ scale: 1.12, rotate: -2 }} className="text-3xl sm:text-4xl text-white hover:text-blue-300 transition-colors">
          <FaAward />
        </motion.a>
      </motion.div>

      {/* CTA Buttons */}
      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6 items-center justify-center">
        <motion.a
          href="mailto:sirurneha@gmail.com"
          className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-white hover:text-[#0f172a] transition"
          whileHover={{ scale: 1.03 }}
        >
          Drop me a message
        </motion.a>
        <motion.a
          href={resumePDF}
          download="NehaSirur_Resume.pdf"
          className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-white hover:text-[#0f172a] transition"
          whileHover={{ scale: 1.03 }}
        >
          Download my resume
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;