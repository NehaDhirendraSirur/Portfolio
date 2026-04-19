// src/components/About.jsx
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.E. in Computer Science & Engineering",
    institution: "KLE Technological University",
    location: "Hubballi, Karnataka",
    year: "2021 – 2025",
    score: "CGPA: 9.31",
    scoreColor: "#60A5FA",
    scoreBg: "rgba(96,165,250,0.12)",
    scoreBorder: "rgba(96,165,250,0.25)",
  },
  {
    degree: "Pre-University (Science)",
    institution: "Vidyaniketan PU Science College",
    location: "Hubballi, Karnataka",
    year: "2019 – 2021",
    score: "97.6%",
    scoreColor: "#34D399",
    scoreBg: "rgba(52,211,153,0.12)",
    scoreBorder: "rgba(52,211,153,0.25)",
  },
  {
    degree: "Class X (SSLC)",
    institution: "Smt. Vimala Kulkarni Memorial School",
    location: "Hubballi, Karnataka",
    year: "2019",
    score: "95.2%",
    scoreColor: "#FBBF24",
    scoreBg: "rgba(251,191,36,0.12)",
    scoreBorder: "rgba(251,191,36,0.25)",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="pt-28 pb-20 px-6 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-gray-200"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Single unified card */}
        <motion.div
          className="bg-[#1A2B42]/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* ── Bio section ── */}
          <div className="p-8 md:p-12 leading-relaxed text-lg text-justify">
            <p className="mb-4">
              I'm{" "}
              <span className="font-semibold text-white">
                Neha Dhirendra Sirur
              </span>
              , a Computer Science graduate (2025) from KLE Technological
              University, Hubballi, and currently working as a{" "}
              <span className="font-medium text-blue-300">
                Software Engineer at Allstate India
              </span>
              . I began my journey at Allstate as an intern, and was later
              converted to a full-time role, where I work on full-stack
              development - building scalable backend systems with{" "}
              <span className="font-medium text-blue-300">Java & Spring Boot</span>{" "}
              and designing dynamic, user-friendly frontends with{" "}
              <span className="font-medium text-blue-300">React</span>.
            </p>

            <p className="mb-4">
              I enjoy working at the intersection of{" "}
              <span className="font-medium">software engineering and AI</span>,
              with hands-on experience in creating solutions that balance
              technical depth with practical applications. I also have a strong
              interest in research, with{" "}
              <span className="font-semibold text-blue-300">
                six international publications
              </span>{" "}
              to my credit, exploring areas such as explainable AI, generative
              models, and data-driven applications.
            </p>

            <p>
              With a foundation in both development and research, I bring a
              problem-solving mindset, strong teamwork skills, and the drive to
              deliver solutions that are both innovative and impactful. I'm
              always eager to learn, adapt, and grow while contributing
              meaningfully to the tech ecosystem.
            </p>
          </div>

          {/* ── Divider ── */}
          <div className="mx-8 md:mx-12 border-t border-white/10" />

          {/* ── Education section ── */}
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
              Education
            </p>

            <div className="flex flex-col gap-5">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-wrap items-center justify-between gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    {/* Colored dot */}
                    <div
                      className="mt-1.5 w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: edu.scoreColor }}
                    />
                    <div>
                      <p className="text-white font-semibold text-sm md:text-base leading-snug">
                        {edu.degree}
                      </p>
                      <p className="text-blue-300 text-sm mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {edu.location} · {edu.year}
                      </p>
                    </div>
                  </div>

                  {/* Score badge */}
                  <span
                    className="text-sm font-bold px-3 py-1.5 rounded-xl shrink-0"
                    style={{
                      color: edu.scoreColor,
                      backgroundColor: edu.scoreBg,
                      border: `1px solid ${edu.scoreBorder}`,
                    }}
                  >
                    {edu.score}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;