"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Saafaa",
    role: "Angular and Next.js Developer",
    duration: "5 months",
    description: "Developed frontend interfaces and built responsive user interfaces. Contributed to web application development with a focus on usability and maintainable frontend code using modern frameworks.",
  },
  {
    company: "Chabok Andishan Parandeh Afarin",
    role: "React / Next.js Developer",
    duration: "1 month",
    description: "Worked with modern frontend frameworks to build responsive user interfaces and contributed to web application development.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Work Experience</h2>
          <p className="text-text-muted max-w-2xl">
            Professional journey and contributions to modern web development.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-primary" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <span className="text-sm font-medium text-accent mt-1 sm:mt-0">{exp.duration}</span>
              </div>
              <p className="text-base font-medium text-text-muted mb-3">{exp.company}</p>
              <p className="text-text-muted leading-relaxed max-w-3xl">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}