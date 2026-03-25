// Publications.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X, ExternalLink, Award } from "lucide-react";
import cert1 from "../assets/conf_certificate1.jpg";
import cert2 from "../assets/conf_certificate2.jpg";
import cert3 from "../assets/conf_certificate3.jpg";
import cert4 from "../assets/conf_certificate4.jpg";
import cert5 from "../assets/conf_certificate5.jpg";
import cert6 from "../assets/conf_certificate6.jpg";

// ── Publisher tag config ──────────────────────────────────────────────────────
function getPublisherTag(venue) {
  if (venue.toLowerCase().includes("ieee"))
    return { label: "IEEE", color: "#60A5FA", bg: "rgba(96,165,250,0.12)" };
  if (venue.toLowerCase().includes("springer") || venue.toLowerCase().includes("lnns"))
    return { label: "Springer", color: "#34D399", bg: "rgba(52,211,153,0.12)" };
  if (venue.toLowerCase().includes("scrs") || venue.toLowerCase().includes("advancements"))
    return { label: "SCRS", color: "#FBBF24", bg: "rgba(251,191,36,0.12)" };
  return { label: "Conference", color: "#A78BFA", bg: "rgba(167,139,250,0.12)" };
}

const publications = [
  {
    id: 1,
    title:
      "Explorative Analysis for Predicting Direct and Indirect Affected Population due to Alcohol Abuse in Karnataka using Machine Learning Techniques",
    authors:
      "Neha Dhirendra Sirur, Shreyas S. Airani, Amogh R. Mangalvedi, Nischay N. Sheshadry, P. G. Sunitha Hiremath, Tulasa A. Badagi",
    year: "2024-09-13",
    venue:
      "Advancements in Communication and Systems · International Conference on Data Science and Applications 2024, MNIT Jaipur",
    summary:
      "Analyzed 2017–2022 data on alcohol sales, consumption, and treatment centers in Karnataka. Linear Regression achieved 96% accuracy (direct) and 94% (indirect). Highlights a large treatment gap and need for expanded rehab services.",
    pdf: "https://www.publications.scrs.in/chapter/978-81-955020-7-3/49",
    certificate: cert1,
  },
  {
    id: 2,
    title: "An Improved Explainable AI Model for Plant Disease Detection",
    authors:
      "Neha Dhirendra Sirur, Risheek V. Hiremath, B. V. M. Sindhu, H. Gouri Arun Kumar, Priyadarshini Patil",
    year: "2025-06-22",
    venue:
      "Lecture Notes in Networks and Systems (LNNS, vol. 1264) · International Conference on Data Science and Applications 2024, MNIT Jaipur",
    summary:
      "Custom CNN baseline (1530 samples) enhanced via Federated Learning (FedAvg) improved accuracy from 91.3% → 96.6%. XAI methods added to increase interpretability and trust in agricultural disease detection.",
    pdf: "https://link.springer.com/chapter/10.1007/978-981-96-2179-8_7",
    certificate: cert2,
  },
  {
    id: 3,
    title: "An Efficient Multilingual Text Classification using IndicCorp dataset",
    authors:
      "Lalitha Madanbhavi, Padmashree Desai, Neha Dhirendra Sirur, Ananya Deshpande, Risheek V Hiremath, Chetan M Patil",
    year: "2025-03-20",
    venue:
      "2024 5th IEEE Global Conference for Advancement in Technology (GCAT), Nagarjuna College Of Engineering & Technology, Bangalore.",
    summary:
      "This paper introduces a language detection system using Multinomial Naive Bayes on the IndicCorp dataset, achieving 73.37% accuracy across multiple Indian languages. The study highlights its effectiveness for multilingual NLP tasks like translation and sentiment analysis.",
    pdf: "https://ieeexplore.ieee.org/document/10923964",
    certificate: cert3,
  },
  {
    id: 4,
    title: "Musical Alchemy: Generative AI for Inter-instrumental Synthesis",
    authors: "Neha Dhirendra Sirur, Shreyas Airani, Amogh R. Mangalvedi",
    year: "2025-07-27",
    venue:
      "Lecture Notes in Networks and Systems (LNNS, vol. 1304) · International Conference on Advances in Data-driven Computing and Intelligent Systems 2024",
    summary:
      "This work presents an LSTM-based music generation system trained on custom piano MIDI datasets, achieving 91.32% accuracy with low loss. Results show high novelty and generally positive listener feedback, highlighting AI's potential for creative music composition.",
    pdf: "https://link.springer.com/chapter/10.1007/978-981-96-3652-5_33",
    certificate: cert4,
  },
  {
    id: 5,
    title: "Strategies for Detecting Counterfeit Products in the Global Food Supply Chain",
    authors: "Neha Dhirendra Sirur, Uma Hiremath, Srajana Naik, Vats Mishra",
    year: "2025-02-13",
    venue:
      "IEEE - 2024 4th International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS), Shree Venkateshwara Hi-Tech Engineering College, Gobichettipalayam, Tamil Nadu.",
    summary:
      "This research introduces a blockchain-based anti-counterfeit system for the food supply chain, using smart contracts, role-based access, and QR code integration for secure, tamper-proof traceability. The decentralized application ensures transparency, real-time verification, and protection against counterfeit products.",
    pdf: "https://ieeexplore.ieee.org/abstract/document/10866916",
    certificate: cert5,
  },
  {
    id: 6,
    title: "Enhancing Classification with Joint Representation Learning on Multimodal Data",
    authors:
      "Neha Dhirendra Sirur, Padmashree Desai, Sujatha C, Uma Mudengudi, Ramesh Ashok Tabib",
    year: "2025",
    venue:
      "Lecture Notes in Networks and Systems ((LNNS,volume 1770)) · 5th International Conference on Computer Vision and Robotics (CVR 2025), National Institute of Technology Goa",
    summary:
      "This research introduces MRVAE, a variational autoencoder-based framework that fuses image and text embeddings into a probabilistic latent space for improved multimodal representation. It outperforms deterministic models like MRAE and MMEDA-I in book rating classification, achieving 97.85% accuracy.",
    pdf: "https://link.springer.com/chapter/10.1007/978-3-032-14038-8_33",
    certificate: cert6,
  },
];

function yearLabel(isoString) {
  try {
    const d = new Date(isoString);
    if (!isNaN(d)) return d.getFullYear();
  } catch {}
  return isoString;
}

export default function Publications() {
  const [active, setActive] = useState(null);
  const [showCert, setShowCert] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (showCert) setShowCert(false);
        else setActive(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showCert]);

  return (
    <section
      id="publications"
      className="scroll-mt-24 pt-28 pb-20 px-6 bg-gradient-to-b from-[#0E1F33] via-[#152A45] to-[#0B1627] text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Publications
        </motion.h1>

        {/* Visible hint text replacing tooltip */}
        <motion.p
          className="text-center text-sm text-blue-300/70 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Click on any card to view full details, PDF link & conference certificate.
        </motion.p>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((p, i) => {
            const tag = getPublisherTag(p.venue);
            return (
              <motion.button
                key={p.id}
                onClick={() => setActive(p)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 0 28px 4px ${tag.color}33`,
                }}
                className="
                  flex flex-col justify-between text-left
                  p-5 rounded-2xl w-full h-full min-h-[220px]
                  bg-white/5 backdrop-blur
                  ring-1 ring-white/10 hover:ring-white/20
                  transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-300
                "
              >
                {/* Publisher tag + year */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: tag.color, backgroundColor: tag.bg }}
                  >
                    {tag.label}
                  </span>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {yearLabel(p.year)}
                  </span>
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold leading-snug text-white">
                    {p.title}
                  </h3>
                </div>

                {/* Venue */}
                <p className="mt-3 text-xs text-blue-200/70 line-clamp-2 leading-relaxed">
                  {p.venue}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* ── Main Publication Modal (dark themed) ── */}
        {active && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              className="relative z-10 w-[92%] max-w-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <div className="rounded-2xl bg-[#0E1F33] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                {/* Modal header accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(to right, ${getPublisherTag(active.venue).color}, transparent)` }}
                />

                <div className="p-6 md:p-7">
                  {/* Title row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-1 shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          color: getPublisherTag(active.venue).color,
                          backgroundColor: getPublisherTag(active.venue).bg,
                        }}
                      >
                        {getPublisherTag(active.venue).label}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold leading-snug text-white">
                        {active.title}
                      </h3>
                    </div>
                    <button
                      className="shrink-0 text-gray-400 hover:text-white transition mt-1"
                      onClick={() => setActive(null)}
                    >
                      <X size={22} />
                    </button>
                  </div>

                  {/* Meta */}
                  <div className="space-y-1.5 text-sm text-gray-400 border-t border-white/10 pt-4">
                    <div>
                      <span className="text-gray-300 font-medium">Authors: </span>
                      {active.authors}
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">Year: </span>
                      {yearLabel(active.year)}
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">Venue: </span>
                      {active.venue}
                    </div>
                  </div>

                  {/* Summary */}
                  {active.summary && (
                    <p className="mt-4 text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                      {active.summary}
                    </p>
                  )}

                  {/* Action buttons */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    {active.pdf && (
                      <a
                        href={active.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                          bg-white/10 text-white border border-white/15
                          hover:bg-white/15 hover:scale-[1.03] transition shadow-sm text-sm"
                      >
                        <ExternalLink size={16} />
                        View PDF / DOI
                      </a>
                    )}
                    {active.certificate && (
                      <button
                        onClick={() => setShowCert(true)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                          bg-white/10 text-white border border-white/15
                          hover:bg-white/15 hover:scale-[1.03] transition shadow-sm text-sm"
                      >
                        <Award size={16} />
                        Certificate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* ── Certificate Modal ── */}
        {showCert && active && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowCert(false)}
            />
            <motion.div
              className="relative z-10 max-w-4xl w-[90%] bg-[#0E1F33] rounded-2xl p-5 shadow-2xl border border-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-white text-sm">Conference Certificate</h2>
                <button onClick={() => setShowCert(false)} className="text-gray-400 hover:text-white transition">
                  <X size={22} />
                </button>
              </div>
              <img
                src={active.certificate}
                alt="Certificate"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}