"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Yazd University",
    period: "2026 – Present",
    degree: "Undergraduate Studies",
  },
  {
    institution: "Montazer Ghaem Technical and Vocational High School",
    period: "2023 – 2026",
    degree: "Technical and Vocational Diploma",
  },
];

export default function Education() {
  return (
    <section className="py-24 md:py-32 bg-primary-light/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Education</h2>
          <p className="text-text-muted max-w-2xl">
            Academic background and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-colors duration-300"
            >
              <GraduationCap className="w-8 h-8 text-accent mb-6" />
              <h3 className="text-xl font-semibold text-white mb-2">{edu.institution}</h3>
              <p className="text-sm font-medium text-accent mb-3">{edu.period}</p>
              <p className="text-text-muted">{edu.degree}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}