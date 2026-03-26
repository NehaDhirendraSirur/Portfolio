// src/components/Skills.jsx
import { motion } from "framer-motion";
import { useState, memo } from "react";
import { X, ExternalLink } from "lucide-react";
import awsCert from "../assets/certAWS.jpg";
import ciscoCert from "../assets/cisco_networking.jpg";
import kubernetesCert from "../assets/Kubernetes_Certificate.jpg";
import gitCert from "../assets/version_control.jpg";
import mongoAggCert from "../assets/mongo_agg_fundamentals.jpg";
import mongoSQLCert from "../assets/sql_to_mongo.jpg";
import mongoVectorCert from "../assets/Mongodb_vector.jpg";

// ─── Level thresholds (change once, applies everywhere) ───────────────────────
function getLevel(percent) {
  if (percent >= 80) return "Advanced";
  if (percent >= 60) return "Intermediate";
  return "Beginner";
}

function levelBadge(percent) {
  const level = getLevel(percent);
  if (level === "Advanced")    return { cls: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30", label: "Advanced" };
  if (level === "Intermediate") return { cls: "bg-blue-500/20 text-blue-300 border border-blue-500/30",     label: "Intermediate" };
  return                               { cls: "bg-orange-500/20 text-orange-300 border border-orange-500/30", label: "Beginner" };
}

// ─── Skill Domains — just label + level now, no note needed ──────────────────
const domains = [
  {
    domain: "Languages",
    color: "#60A5FA",
    skills: [
      { label: "Python",      level: 85 },
      { label: "Java",        level: 70 },
      { label: "JavaScript",  level: 75 },
      { label: "C / C++",     level: 80 },
      { label: "SQL",         level: 80 },
    ],
  },
  {
    domain: "Web Development",
    color: "#34D399",
    skills: [
      { label: "React.js",    level: 80 },
      { label: "Spring Boot", level: 85 },
      { label: "HTML & CSS",  level: 85 },
      { label: "Node.js",     level: 65 },
      { label: "REST APIs",   level: 85 },
      { label: "Tailwind CSS",level: 80 },
    ],
  },
  {
    domain: "AI / ML & Research",
    color: "#F472B6",
    skills: [
      { label: "Machine Learning",   level: 85 },
      { label: "Deep Learning",      level: 80 },
      // { label: "Computer Vision",    level: 80 },
      { label: "NLP",                level: 75 },
      { label: "Generative AI",      level: 75 },
      { label: "Multimodal Learning",level: 70 },
      { label: "Explainable AI",     level: 75 },
    ],
  },
  // {
  //   domain: "ML Libraries & Tools",
  //   color: "#FBBF24",
  //   skills: [
  //     { label: "TensorFlow",    level: 80 },
  //     { label: "PyTorch",       level: 75 },
  //     { label: "scikit-learn",  level: 80 },
  //     { label: "OpenCV",        level: 70 },
  //     { label: "NumPy / Pandas",level: 85 },
  //   ],
  // },
  {
    domain: "Databases",
    color: "#A78BFA",
    skills: [
      { label: "MySQL / PostgreSQL", level: 80 },
      { label: "MongoDB",            level: 75 },
      { label: "Oracle DB",          level: 80 },
    ],
  },
  {
    domain: "Tools & Practices",
    color: "#FB923C",
    skills: [
      { label: "Git / GitHub",   level: 90 },
      { label: "Postman",        level: 90 },
      // { label: "Agile / Scrum",  level: 75 },
      { label: "Docker",         level: 50 },
      { label: "Kubernetes",     level: 50 },
      { label: "Hadoop / Big Data", level: 50 },
    ],
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
const certifications = [
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "Amazon Web Services (AWS Academy)",
    date: "Oct 2024",
    url: "https://www.credly.com/go/u4ekxOmP",
    skills: ["AWS Architecture", "AWS Core Services", "Cloud Computing", "AWS Pricing"],
    image: awsCert,
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "May 2024",
    url: "https://www.credly.com/badges/9b22a8f8-b165-47b1-a8ea-24670cdff35b",
    skills: ["Network Types", "IPv4 / IPv6", "Protocols & Standards", "Wireless Access"],
    image: ciscoCert,
  },
  {
    title: "Introduction to Version Control System using Git",
    issuer: "Microsoft Learn Student Ambassador",
    date: "Jan 2023",
    url: null,
    skills: ["Git", "GitHub", "Version Control"],
    image: gitCert,
  },
  {
    title: "MongoDB Aggregation Fundamentals",
    issuer: "MongoDB",
    date: "Jan 2026",
    url: "https://www.credly.com/badges/e774090d-a5d1-47eb-b4e1-bd1201cf27d3",
    skills: ["MongoDB", "Data Aggregation", "Data Transformation"],
    image: mongoAggCert,
  },
  {
    title: "From Relational Model (SQL) to MongoDB's Document Model",
    issuer: "MongoDB",
    date: "Jan 2026",
    url: "https://www.credly.com/badges/3681fc13-5de3-428b-ad81-08036b89b665",
    skills: ["MongoDB", "SQL", "Document Model", "Database Migration"],
    image: mongoSQLCert,
  },
  {
    title: "Building AI-Powered Search with MongoDB Vector Search",
    issuer: "MongoDB",
    date: "Jan 2026",
    url: "https://www.credly.com/badges/c0da2fa9-8764-42bb-8204-9d0e72be64ac",
    skills: ["MongoDB", "Vector Search", "AI Search", "Generative AI"],
    image: mongoVectorCert,
  },
  {
    title: "Kubernetes Course (Kubernetes + Docker)",
    issuer: "Infosys Springboard",
    date: "May 2024",
    url: "https://verify.onwingspan.com",
    skills: ["Kubernetes", "Docker", "DevOps", "Containerization"],
    image: kubernetesCert,
  },
];

// ─── Circular Progress Ring (memoized) ───────────────────────────────────────
const CircleRing = memo(function CircleRing({ percent, color, size = 80 }) {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={6}
      />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={color} strokeWidth={6} strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: offset }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </svg>
  );
});

// ─── Skill Card (memoized) ────────────────────────────────────────────────────
const SkillCard = memo(function SkillCard({ skill, color }) {
  const badge = levelBadge(skill.level);
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
        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ color }}>
          {skill.level}%
        </span>
      </div>
      <p className="mt-3 text-sm text-center text-gray-200 font-medium leading-tight">{skill.label}</p>
      <span className={`mt-2 text-[10px] px-2 py-0.5 rounded-full font-semibold ${badge.cls}`}>
        {badge.label}
      </span>
    </motion.div>
  );
});

// ─── Cert Card ────────────────────────────────────────────────────────────────
function CertCard({ cert }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => cert.image && setOpen(true)}
        className={`rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/25 hover:bg-white/10 transition p-5 flex flex-col gap-3 ${cert.image ? "cursor-pointer" : ""}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="w-full h-28 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
          {cert.image ? (
            <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl">🏅</span>
              <span className="text-[10px] text-gray-500 italic">Certificate</span>
            </div>
          )}
        </div>

        <div>
          <h4 className="font-semibold text-white text-sm leading-snug">{cert.title}</h4>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-gray-400">{cert.issuer}</span>
            <span className="text-[10px] text-gray-500">{cert.date}</span>
          </div>
          {cert.url && (
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 mt-1.5 text-xs text-blue-300 hover:text-blue-200 transition"
            >
              <ExternalLink size={11} /> View Credential
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-1">
          {cert.skills.map((s) => (
            <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-200 border border-blue-500/25">
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      {open && cert.image && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative z-10 max-w-3xl w-[90%] bg-[#0E1F33] rounded-2xl p-5 shadow-2xl border border-white/10">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold text-sm">{cert.title}</h3>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white"><X size={20} /></button>
            </div>
            <img src={cert.image} alt={cert.title} className="w-full max-h-[75vh] object-contain rounded-lg" />
          </div>
        </div>
      )}
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 pt-28 pb-20 px-6 bg-gradient-to-b from-[#0E1F33] via-[#152A45] to-[#0B1627] text-white">
      <div className="max-w-7xl mx-auto">

        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h1>

        {/* Legend */}
        {/* <motion.div
          className="flex items-center justify-center gap-4 mb-12 text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span className="text-gray-400">Advanced (80–100)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
            <span className="text-gray-400">Intermediate (60–79)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
            <span className="text-gray-400">Beginner (0–59)</span>
          </span>
        </motion.div> */}

        {/* Domain Sections */}
        {domains.map((d, di) => (
          <motion.div key={d.domain} className="mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: di * 0.08 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
              <h2 className="text-xl md:text-2xl font-semibold" style={{ color: d.color }}>{d.domain}</h2>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {d.skills.map((s) => <SkillCard key={s.label} skill={s} color={d.color} />)}
            </div>
          </motion.div>
        ))}

        {/* Soft Skills */}
        <motion.div className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block w-3 h-3 rounded-full bg-rose-400" />
            <h2 className="text-xl md:text-2xl font-semibold text-rose-300">Soft Skills</h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="flex flex-wrap gap-3">
            {["Design Thinking", "Problem Solving", "Teamwork", "Communication", "Leadership", "Research & Writing", "Chess"].map((s) => (
              <span key={s} className="px-4 py-2 rounded-full text-sm bg-rose-500/15 text-rose-200 border border-rose-500/25 font-medium">{s}</span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-3 h-3 rounded-full bg-yellow-400" />
            <h2 className="text-xl md:text-2xl font-semibold text-yellow-300">Certifications</h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((c) => <CertCard key={c.title} cert={c} />)}
          </div>
        </motion.div>

      </div>
    </section>
  );
}