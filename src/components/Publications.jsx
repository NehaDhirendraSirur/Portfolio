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
    authors:
      "Neha Dhirendra Sirur, Shreyas Airani, Amogh R. Mangalvedi ",
    year: "2025-07-27",
    venue:
      "Lecture Notes in Networks and Systems (LNNS, vol. 1304) · International Conference on Advances in Data-driven Computing and Intelligent Systems 2024,",
    summary:
      "This work presents an LSTM-based music generation system trained on custom piano MIDI datasets, achieving 91.32% accuracy with low loss. Results show high novelty and generally positive listener feedback, highlighting AI’s potential for creative music composition.",
    pdf: "https://link.springer.com/chapter/10.1007/978-981-96-3652-5_33",
    certificate: cert4,
  },
  {
  id: 5,
    title: "Strategies for Detecting Counterfeit Products in the Global Food Supply Chain",
    authors:
      "Neha Dhirendra Sirur, Uma Hiremath, Srajana Naik, Vats Mishra",
    year: "2025-02-13",
    venue:
      "2024 4th International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS), Shree Venkateshwara Hi-Tech Engineering College, Gobichettipalayam, Tamil Nadu.",
    summary:
      "This research introduces a blockchain-based anti-counterfeit system for the food supply chain, using smart contracts, role-based access, and QR code integration for secure, tamper-proof traceability. The decentralized application ensures transparency, real-time verification, and protection against counterfeit products.",
    pdf: "https://ieeexplore.ieee.org/abstract/document/10866916",
    certificate: cert5,
  },
  {
  id: 5,
    title: "Enhancing Classification with Joint Representation Learning on Multimodal Data",
    authors:
      "Neha Dhirendra Sirur, Padmashree Desai, Sujatha C, Uma Mudengudi, Ramesh Ashok Tabib",
    year: "2025",
    venue:
      "5th International Conference on Computer Vision and Robotics (CVR 2025), National Institute of Technology Goa",
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
  <div className="max-w-7xl mx-auto relative">

        {/* Info Note with Tooltip */}
        <div className="absolute right-0 top-0 mt-0 mr-2 -translate-y-8 z-10">
          <div className="group relative inline-block">
            <span className="font-semibold bg-blue-900/90 text-blue-100 rounded-full w-7 h-7 flex items-center justify-center text-base cursor-pointer shadow hover:bg-blue-800 transition" tabIndex={0}>
              i
            </span>
            <div className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-200 absolute right-0 mt-2 w-64 bg-blue-900/95 text-blue-100 px-4 py-2 rounded-lg shadow text-xs md:text-sm text-right" style={{ minWidth: '220px' }}>
              For more information about a publication, click on its card to view more details.
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Publications
        </h1>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
              }}
              className="
                flex flex-col justify-between
                text-left p-5 rounded-2xl w-full h-full min-h-[220px]
                bg-white/5 backdrop-blur
                ring-1 ring-white/10 hover:ring-white/25
                hover:bg-white/10 transition
                shadow-sm hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-blue-300
              "
            >
              <div>
                <h3 className="text-lg md:text-xl font-semibold leading-snug">
                  {p.title}
                </h3>
              </div>
              <div className="mt-3 text-sm text-blue-200">
                {yearLabel(p.year)} · {p.venue}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Main Publication Modal */}
        {active && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <div className="relative z-10 w-[92%] max-w-2xl">
              <div className="rounded-2xl 
                  bg-gradient-to-br from-white via-slate-50 to-slate-100 
                      text-gray-900 shadow-[0_25px_80px_rgba(0,0,0,0.45)] 
                      overflow-hidden border border-gray-200">

                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-xl md:text-2xl font-bold leading-snug">
                      {active.title}
                    </h3>
                    <button
                      className="shrink-0 text-gray-500 hover:text-gray-800"
                      onClick={() => setActive(null)}
                    >
                      <X size={22} />
                    </button>
                  </div>

                  <div className="mt-3 text-sm text-gray-600">
                    <div>
                      <span className="font-semibold">Authors:</span>{" "}
                      {active.authors}
                    </div>
                    <div className="mt-1">
                      <span className="font-semibold">Year:</span>{" "}
                      {yearLabel(active.year)}
                    </div>
                    <div className="mt-1">
                      <span className="font-semibold">Venue:</span>{" "}
                      {active.venue}
                    </div>
                  </div>

                  {active.summary && (
                    <p className="mt-4 text-gray-800">{active.summary}</p>
                  )}

                  <div className="mt-5 flex flex-wrap gap-3">
                    {active.pdf && (
                      <a
                        href={active.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl 
                                    bg-white text-[#1A2B42] 
                                    border border-[#1A2B42]/20
                                    hover:bg-slate-50 hover:scale-[1.03] transition shadow-sm"
                      >
                        <ExternalLink size={18} />
                        View PDF / DOI
                      </a>
                    )}
                    {active.certificate && (
                      <button
                        onClick={() => setShowCert(true)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl 
                                    bg-white text-[#1A2B42] 
                                    border border-[#1A2B42]/20
                                    hover:bg-slate-50 hover:scale-[1.03] transition shadow-sm"

                      >
                        <Award size={18} />
                        Certificate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {showCert && active && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setShowCert(false)}
            />
            <div className="relative z-10 max-w-4xl w-[90%] 
                rounded-2xl p-5 
                shadow-[0_25px_80px_rgba(0,0,0,0.5)] border border-gray-200">

              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">Certificate</h2>
                <button
                  onClick={() => setShowCert(false)}
                  className="text-gray-600 hover:text-black"
                >
                  <X size={22} />
                </button>
              </div>
              <img
                src={active.certificate}
                alt="Certificate"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
