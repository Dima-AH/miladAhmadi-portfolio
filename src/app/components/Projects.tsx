"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function Projects() {
  const t = useTranslations("projects");
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const projects = t.raw("items") as Array<{
    name: string;
    tech: string;
    company: string;
    year: string;
    type: string;
    role: string;
    desc: string;
    link?: string;
    image?: string;
  }>;

  return (
    <section
      id="projects"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-luxury-bg dark:bg-luxury-darkBg overflow-hidden"
    >
      <div className="absolute top-1/4 start-0 w-[500px] h-[500px] bg-brand/5 dark:bg-emerald/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-20"
        >
          <span
            className={`text-xs uppercase tracking-[0.4em] text-brand dark:text-gold font-medium ${
              locale === "fa" ? "font-peyda" : ""
            }`}
          >
            {t("label")}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-brand/30 to-transparent dark:from-gold/30" />
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="lg:max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-luxury-text dark:text-luxury-darkText ${
                locale === "fa" ? "font-peyda font-black" : ""
              }`}
            >
              {t.rich("title", {
                em: (chunks) => (
                  <span className="italic text-brand dark:text-gold">
                    {chunks}
                  </span>
                ),
              })}
            </motion.h2>
          </div>
          <div className="lg:text-end">
            <Link
              href="https://geotajak.ir/products"
              target="_blank"
              className={`inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-darkMuted hover:text-brand dark:hover:text-gold transition-colors border-b border-current pb-1 ${
                locale === "fa" ? "font-peyda" : ""
              }`}
            >
              {t("saafaaLink")} <ExternalLink size={14} />
            </Link>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Panel */}
                <div className="w-full lg:w-7/12">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden gradient-brand glow-emerald">
                    {/* Background Pattern */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "linear-gradient(45deg, transparent 48%, #C8A96B 49%, #C8A96B 51%, transparent 52%)",
                        backgroundSize: "30px 30px",
                      }}
                    />

                    {/* Large Letter */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-[20rem] md:text-[24rem] font-light text-ivory/10 select-none group-hover:scale-110 transition-transform duration-1000 ease-luxury">
                        {project.image ? (
                          <Image width={500} height={500} alt={project.name} src={project.image} />
                        ) : (
                          project.name.charAt(0)
                        )}
                      </span>
                    </div>

                    {/* Noise */}
                    <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-overlay" />

                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-black/0 to-gold/0 group-hover:from-black/20 group-hover:to-gold/10 transition-all duration-700" />

                    {project.type === "Private Project" && (
                      <div
                        className={`absolute top-6 start-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-gold/30 text-xs uppercase tracking-[0.2em] text-gold ${
                          locale === "fa" ? "font-peyda" : ""
                        }`}
                      >
                        <Lock size={12} />
                        {project.type}
                      </div>
                    )}

                    <div
                      className={`absolute bottom-6 end-6 text-xs uppercase tracking-[0.3em] text-ivory/60 ${
                        locale === "fa" ? "font-peyda" : ""
                      }`}
                    >
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-5/12">
                  <div className="flex items-center gap-3 mb-6 flex-wrap">
                    <span
                      className={`px-3 py-1 rounded-full bg-brand/10 dark:bg-gold/10 text-brand dark:text-gold text-xs uppercase tracking-[0.2em] font-medium border border-brand/20 dark:border-gold/20 ${
                        locale === "fa" ? "font-peyda" : ""
                      }`}
                    >
                      {project.tech}
                    </span>
                    {project.company && (
                      <span
                        className={`text-xs uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-darkMuted ${
                          locale === "fa" ? "font-peyda" : ""
                        }`}
                      >
                        @ {project.company}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-display text-5xl md:text-6xl font-light text-luxury-text dark:text-luxury-darkText mb-6 group-hover:text-brand dark:group-hover:text-gold transition-colors duration-500 ${
                      locale === "fa" ? "font-peyda font-bold" : ""
                    }`}
                  >
                    {project.name}
                  </h3>

                  <p
                    className={`text-lg text-luxury-muted dark:text-luxury-darkMuted leading-relaxed mb-8 ${
                      locale === "fa" ? "font-peyda" : ""
                    }`}
                  >
                    {project.desc}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-luxury flex-wrap gap-4">
                    <div>
                      <div
                        className={`text-[10px] uppercase tracking-[0.3em] text-luxury-muted dark:text-luxury-darkMuted mb-1 ${
                          locale === "fa" ? "font-peyda" : ""
                        }`}
                      >
                        {t("roleLabel")}
                      </div>
                      <div
                        className={`text-sm text-luxury-text dark:text-luxury-darkText ${
                          locale === "fa" ? "font-peyda font-medium" : ""
                        }`}
                      >
                        {project.role}
                      </div>
                    </div>

                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-brand dark:bg-gold text-ivory dark:text-brand rounded-full hover:glow-emerald dark:hover:glow-gold transition-all duration-500"
                      >
                        <span
                          className={`text-xs uppercase tracking-[0.2em] ${
                            locale === "fa" ? "font-peyda" : ""
                          }`}
                        >
                          {t("visitLabel")}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="group-hover/btn:rotate-45 transition-transform duration-500 rtl:-rotate-45 rtl:group-hover/btn:rotate-0"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
