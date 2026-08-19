"use client";

import { motion } from "framer-motion";

const coreSkills = ["React / Next.js", "Angular", "Vue.js"];
const toolSkills = [
  "TypeScript",
  "JavaScript",
  "HTML / CSS",
  "Tailwind CSS",
  "RxJS",
  "MapLibre",
  "OpenLayers",
  "Git / GitLab",
  "NG-ZORRO",
  "Axios",
  "Figma",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-luxury-bg dark:bg-luxury-darkBg border-t border-luxury"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.2em] text-deepGreen dark:text-deepGreen-light font-medium"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl mt-4 text-luxury-text dark:text-luxury-darkText"
          >
            Technologies & Tools
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-darkMuted mb-8 border-b border-luxury pb-4">
              Core Technologies
            </h3>
            <ul className="space-y-4">
              {coreSkills.map((skill, i) => (
                <li
                  key={i}
                  className="group flex items-center justify-between py-2 border-b border-luxury/50 hover:border-deepGreen/30 dark:hover:border-deepGreen-light/30 transition-colors cursor-default"
                >
                  <span className="font-serif text-2xl md:text-3xl text-luxury-text dark:text-luxury-darkText group-hover:text-deepGreen dark:group-hover:text-deepGreen-light transition-colors duration-300">
                    {skill}
                  </span>
                  <span className="text-luxury-muted dark:text-luxury-darkMuted text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-darkMuted mb-8 border-b border-luxury pb-4">
              Tools & Ecosystem
            </h3>
            <div className="flex flex-wrap gap-3">
              {toolSkills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(2, 48, 32, 0.05)",
                  }}
                  className="px-4 py-2 border border-luxury dark:border-white/10 text-sm text-luxury-text dark:text-luxury-darkText rounded-sm hover:border-deepGreen/30 dark:hover:border-deepGreen-light/30 dark:hover:bg-white/5 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
