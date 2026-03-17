// src/components/Skills.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";

// ─── Skill Domains ────────────────────────────────────────────────────────────
const domains = [
  {
    domain: "Languages",
    color: "#60A5FA",
    skills: [
      { label: "Python", level: 90, note: "Advanced" },
      { label: "Java", level: 85, note: "Advanced" },
      { label: "JavaScript", level: 75, note: "Intermediate" },
      { label: "C / C++", level: 70, note: "Intermediate" },
      { label: "SQL", level: 80, note: "Advanced" },
    ],
  },
  {
    domain: "Web Development",
    color: "#34D399",
    skills: [
      { label: "React.js", level: 85, note: "Advanced" },
      { label: "Spring Boot", level: 80, note: "Advanced" },
      { label: "HTML & CSS", level: 85, note: "Advanced" },
      { label: "Node.js", level: 65, note: "Intermediate" },
      { label: "REST APIs", level: 85, note: "Advanced" },
      { label: "Tailwind CSS", level: 80, note: "Advanced" },
    ],
  },
  {
    domain: "AI / ML & Research",
    color: "#F472B6",
    skills: [
      { label: "Machine Learning", level: 85, note: "Advanced" },
      { label: "Deep Learning", level: 80, note: "Advanced" },
      { label: "Computer Vision", level: 75, note: "Intermediate" },
      { label: "NLP", level: 75, note: "Intermediate" },
      { label: "Generative AI", level: 75, note: "Intermediate" },
      { label: "Multimodal Learning", level: 70, note: "Intermediate" },
      { label: "Explainable AI", level: 75, note: "Intermediate" },
    ],
  },
  {
    domain: "ML Libraries & Tools",
    color: "#FBBF24",
    skills: [
      { label: "TensorFlow", level: 80, note: "Advanced" },
      { label: "PyTorch", level: 75, note: "Intermediate" },
      { label: "scikit-learn", level: 80, note: "Advanced" },
      { label: "OpenCV", level: 70, note: "Intermediate" },
      { label: "NumPy / Pandas", level: 85, note: "Advanced" },
    ],
  },
  {
    domain: "Databases",
    color: "#A78BFA",
    skills: [
      { label: "MySQL / PostgreSQL", level: 80, note: "Advanced" },
      { label: "MongoDB", level: 75, note: "Intermediate" },
      { label: "Oracle DB", level: 65, note: "Intermediate" },
    ],
  },
  {
    domain: "Tools & Practices",
    color: "#FB923C",
    skills: [
      { label: "Git / GitHub", level: 85, note: "Advanced" },
      { label: "Postman", level: 80, note: "Advanced" },
      { label: "Agile / Scrum", level: 75, note: "Intermediate" },
      { label: "Hadoop / Big Data", level: 60, note: "Beginner" },
      { label: "Docker (basics)", level: 50, note: "Beginner" },
    ],
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
// Replace cert images and URLs with your actual assets
const certifications = [
  {
    title: "Google Data Analytics Certificate",
    issuer: "Google / Coursera",
    url: "https://coursera.org",
    skills: ["Data Analytics", "SQL", "Tableau", "R"],
    image: null, // replace with: import cert1 from "../assets/cert1.jpg"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    url: "https://aws.amazon.com/certification/",
    skills: ["Cloud Computing", "AWS Services", "Security"],
    image: null,
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    url: "https://coursera.org",
    skills: ["Neural Networks", "CNNs", "RNNs", "TensorFlow"],
    image: null,
  },
];

// ─── Circular Progress Ring ───────────────────────────────────────────────────
function CircleRing({ percent, color, size = 80 }) {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={6}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={6}
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: offset }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </svg>
  );
}

// ─── Badge color by level ─────────────────────────────────────────────────────
function levelBadge(note) {
  if (note === "Advanced")
    return "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";
  if (note === "Intermediate")
    return "bg-blue-500/20 text-blue-300 border border-blue-500/30";
  return "bg-orange-500/20 text-orange-300 border border-orange-500/30";
}

// ─── Skill Card ───────────────────────────────────────────────────────────────
function SkillCard({ skill, color }) {
  return (
    <motion.div
      className="flex flex-col items-center p-4 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/25 hover:bg-white/10 transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <CircleRing percent={skill.level} color={color} size={80} />
        <span
          className="absolute inset-0 flex items-center justify-center text-sm font-bold rotate-0"
          style={{ color }}
        >
          {skill.level}%
        </span>
      </div>
      <p className="mt-3 text-sm text-center text-gray-200 font-medium leading-tight">
        {skill.label}
      </p>
      <span
        className={`mt-2 text-[10px] px-2 py-0.5 rounded-full font-semibold ${levelBadge(
          skill.note
        )}`}
      >
        {skill.note}
      </span>
    </motion.div>
  );
}

// ─── Cert Card ────────────────────────────────────────────────────────────────
function CertCard({ cert }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => cert.image && setOpen(true)}
        className={`rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/25 hover:bg-white/10 transition p-5 flex flex-col gap-3 ${
          cert.image ? "cursor-pointer" : ""
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Cert image preview or placeholder */}
        <div className="w-full h-28 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-xs text-gray-500 italic">Certificate image</span>
          )}
        </div>

        <div>
          <h4 className="font-semibold text-white text-sm leading-snug">
            {cert.title}
          </h4>
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 mt-1 text-xs text-blue-300 hover:text-blue-200 transition"
          >
            <ExternalLink size={11} /> {cert.issuer}
          </a>
        </div>

        <div className="flex flex-wrap gap-1">
          {cert.skills.map((s) => (
            <span
              key={s}
              className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-200 border border-blue-500/25"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Certificate Image Modal */}
      {open && cert.image && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 max-w-3xl w-[90%] bg-[#0E1F33] rounded-2xl p-5 shadow-2xl border border-white/10">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold text-sm">{cert.title}</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 pt-28 pb-20 px-6 bg-gradient-to-b from-[#0E1F33] via-[#152A45] to-[#0B1627] text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Page Title ── */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h1>

        {/* ── Domain Sections ── */}
        {domains.map((d, di) => (
          <motion.div
            key={d.domain}
            className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: di * 0.08 }}
          >
            {/* Domain header */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: d.color }}
              />
              <h2
                className="text-xl md:text-2xl font-semibold"
                style={{ color: d.color }}
              >
                {d.domain}
              </h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Skill cards grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {d.skills.map((s) => (
                <SkillCard key={s.label} skill={s} color={d.color} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* ── Soft Skills strip ── */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block w-3 h-3 rounded-full bg-rose-400" />
            <h2 className="text-xl md:text-2xl font-semibold text-rose-300">
              Soft Skills
            </h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Design Thinking",
              "Problem Solving",
              "Teamwork",
              "Communication",
              "Leadership",
              "Research & Writing",
              "Chess",
            ].map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm bg-rose-500/15 text-rose-200 border border-rose-500/25 font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-3 h-3 rounded-full bg-yellow-400" />
            <h2 className="text-xl md:text-2xl font-semibold text-yellow-300">
              Certifications
            </h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c) => (
              <CertCard key={c.title} cert={c} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}