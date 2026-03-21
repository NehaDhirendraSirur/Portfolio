// src/components/Home.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/img1.jpg";

const roles = [
  "Full Stack Developer",
  "AI / ML Enthusiast",
  "Budding Researcher",
  "Software Engineer",
];

const stats = [
  { value: "6", label: "Publications" },
  { value: "7", label: "Projects" },
  { value: "2", label: "Roles at Allstate" },
  { value: "1+", label: "Years Experience" },
];

// ── Typing animation hook ──────────────────────────────────────────────────────
function useTypingEffect(words, typingSpeed = 80, pauseTime = 1400, deletingSpeed = 45) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const current = words[wordIdx];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), pauseTime);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed);
        return () => clearTimeout(t);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [displayed, phase, wordIdx, words, typingSpeed, pauseTime, deletingSpeed]);

  return displayed;
}

// ── Stagger variants ───────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const typedRole = useTypingEffect(roles);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-24 pb-16">

      {/* ── Main content row ── */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-5xl">

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="shrink-0"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl scale-110 pointer-events-none" />
            <img
              src={profileImg}
              alt="Neha Dhirendra Sirur"
              className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-400/60 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center md:text-left"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-blue-300 text-sm md:text-base font-medium tracking-widest uppercase mb-2"
          >
            Hey there, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Neha Dhirendra Sirur
            <br />
            {/* <span className="text-blue-400">Sirur</span> */}
          </motion.h1>

          {/* Typing role */}
          <motion.div
            variants={itemVariants}
            className="mt-4 text-lg md:text-2xl text-gray-300 font-medium h-9 flex items-center justify-center md:justify-start"
          >
            <span>{typedRole}</span>
            <span className="ml-0.5 inline-block w-0.5 h-6 bg-blue-400 animate-pulse" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm md:text-base text-gray-400 max-w-md leading-relaxed"
          >
            Building scalable software at Allstate India · 6 international publications · Passionate about AI, research & clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <Link
              to="/projects"
              className="px-6 py-2.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full border border-white/30 hover:border-blue-400 text-white font-medium text-sm transition-all duration-200 hover:bg-white/5 hover:scale-105"
            >
              Let's Connect
            </Link>
            <Link
              to="/publications"
              className="px-6 py-2.5 rounded-full border border-white/30 hover:border-blue-400 text-white font-medium text-sm transition-all duration-200 hover:bg-white/5 hover:scale-105"
            >
              Publications
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats bar ── */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="mt-16 w-full max-w-2xl"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-5 px-4 bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <span className="text-2xl md:text-3xl font-bold text-blue-300">
                {s.value}
              </span>
              <span className="text-xs text-gray-400 mt-1 text-center tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div> */}

    </section>
  );
}