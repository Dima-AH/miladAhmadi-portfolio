"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Rooydado",
    tech: "Vue.js",
    description: "A nationwide platform for sharing tours and events, featuring dynamic content rendering and seamless user interactions.",
    role: "Frontend Developer",
    type: "Public",
    link: "https://rooydado.com"
  },
  {
    name: "GeoNet",
    tech: "Angular",
    description: "Professional geospatial networking platform developed for Saafaa, featuring complex data visualization and mapping integrations.",
    role: "Angular Developer",
    type: "Private Project",
    company: "Saafaa"
  },
  {
    name: "GeoTajak Amayesh",
    tech: "Next.js",
    description: "Advanced spatial analysis and mapping application built with Next.js, optimized for performance and large dataset handling.",
    role: "Next.js Developer",
    type: "Private Project",
    company: "Saafaa"
  },
  {
    name: "FMS",
    tech: "Angular",
    description: "Comprehensive Fleet Management System for Saafaa, utilizing NG-ZORRO and RxJS for robust state management and enterprise UI.",
    role: "Frontend Developer",
    type: "Private Project",
    company: "Saafaa"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-luxury-bg dark:bg-luxury-darkBg border-t border-luxury">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.2em] text-deepGreen dark:text-deepGreen-light font-medium"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl mt-4 text-luxury-text dark:text-luxury-darkText"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="https://geotajak.ir/products" 
              target="_blank"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-luxury-muted dark:text-luxury-darkMuted hover:text-deepGreen dark:hover:text-deepGreen-light transition-colors border-b border-current pb-1"
            >
              View Saafaa Public Products <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              <div className="lg:col-span-5 relative aspect-[4/3] bg-luxury-text/5 dark:bg-luxury-darkText/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-6xl md:text-8xl text-luxury-text/5 dark:text-luxury-darkText/5 select-none">
                    {project.name.charAt(0)}
                  </span>
                </div>
                {project.type === "Private Project" && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-luxury-bg/90 dark:bg-luxury-darkBg/90 backdrop-blur-sm border border-luxury text-xs uppercase tracking-wider text-luxury-muted dark:text-luxury-darkMuted">
                    <Lock size={12} />
                    Private Project
                  </div>
                )}
              </div>
              
              <div className="lg:col-span-7 lg:pt-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-deepGreen dark:text-deepGreen-light font-medium">
                    {project.tech}
                  </span>
                  {project.company && (
                    <span className="text-xs uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-darkMuted">
                      — {project.company}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-4xl md:text-5xl text-luxury-text dark:text-luxury-darkText mb-6 group-hover:text-deepGreen dark:group-hover:text-deepGreen-light transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-lg text-luxury-muted dark:text-luxury-darkMuted leading-relaxed mb-8 max-w-xl">
                  {project.description}
                </p>
                <div className="flex items-center gap-8">
                  <span className="text-sm text-luxury-muted dark:text-luxury-darkMuted">
                    <span className="uppercase tracking-wider text-xs block mb-1">Role</span>
                    {project.role}
                  </span>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-luxury-text/20 dark:border-luxury-darkText/20 text-luxury-text dark:text-luxury-darkText text-sm uppercase tracking-widest hover:bg-deepGreen hover:border-deepGreen hover:text-white dark:hover:bg-deepGreen dark:hover:border-deepGreen transition-all duration-300"
                    >
                      Visit Website <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}