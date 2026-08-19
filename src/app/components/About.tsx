"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, User, Briefcase } from "lucide-react";

const infoCards = [
  { icon: User, label: "Name", value: "Milad Ahmadi" },
  { icon: Briefcase, label: "Role", value: "Frontend Developer" },
  { icon: MapPin, label: "Location", value: "Yazd, Iran" },
  { icon: Calendar, label: "Date of Birth", value: "August 25, 2008" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">About Me</h2>
          <p className="text-lg text-text-muted leading-relaxed">
            I’m a frontend developer who enjoys transforming ideas into clear, functional, and engaging digital experiences. 
            I work with modern JavaScript frameworks and care about clean architecture, responsive interfaces, performance, 
            accessibility, and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-colors duration-300"
            >
              <card.icon className="w-6 h-6 text-accent mb-4" />
              <p className="text-sm text-text-muted mb-1">{card.label}</p>
              <p className="text-white font-medium">{card.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary bg-white rounded-full hover:bg-accent transition-colors duration-300"
          >
            Let’s Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}