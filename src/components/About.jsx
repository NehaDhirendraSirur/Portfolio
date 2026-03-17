// src/components/About.jsx
import { motion } from "framer-motion";

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

        {/* Card container */}
        <motion.div
          className="bg-[#1A2B42]/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 leading-relaxed text-lg text-justify"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
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
            to my credit, exploring areas such as explainable AI, generative models,
            and data-driven applications.
          </p>

          <p>
            With a foundation in both development and research, I bring a
            problem-solving mindset, strong teamwork skills, and the drive to
            deliver solutions that are both innovative and impactful. I'm always
            eager to learn, adapt, and grow while contributing meaningfully to
            the tech ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;