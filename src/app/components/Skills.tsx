"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function Skills() {
  const t = useTranslations("skills");
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const coreSkills = t.raw("core") as { name: string; desc: string }[];
  const toolSkills = t.raw("tools") as string[];

  return (
    <section
      id="skills"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-brand dark:bg-surface-dark overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 noise-overlay opacity-20" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-forest/30 rounded-full blur-[150px]" />

      <div className="max-w-[1600px] mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-20"
        >
          <span
            className={`text-xs uppercase tracking-[0.4em] text-gold font-medium ${locale === "fa" ? "font-peyda" : ""}`}
          >
            {t("label")}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-ivory mb-20 ${
            locale === "fa" ? "font-peyda font-black" : ""
          }`}
        >
          {t.rich("title", {
            em: (chunks) => <span className="  text-gold">{chunks}</span>,
          })}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Core Skills */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`text-xs uppercase tracking-[0.3em] text-gold/70 mb-8 ${locale === "fa" ? "font-peyda" : ""}`}
            >
              {t("coreTitle")}
            </div>
            {coreSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl border border-ivory/10 bg-black/20 backdrop-blur-sm hover:border-gold/40 hover:bg-black/40 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center justify-between gap-6">
                  <div>
                    <h3
                      className={`font-display text-3xl md:text-4xl text-ivory group-hover:text-gold transition-colors duration-500 mb-2 ${
                        locale === "fa" ? "font-peyda font-bold" : ""
                      }`}
                    >
                      {skill.name}
                    </h3>
                    <p
                      className={`text-sm text-ivory/60 ${locale === "fa" ? "font-peyda" : ""}`}
                    >
                      {skill.desc}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-brand transition-all duration-500 text-gold">
                    <span
                      className={`font-display text-xl font-bold ${locale === "fa" ? "font-peyda" : ""}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="lg:col-span-5">
            <div
              className={`text-xs uppercase tracking-[0.3em] text-gold/70 mb-8 ${locale === "fa" ? "font-peyda" : ""}`}
            >
              {t("toolsTitle")}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-ivory/10 bg-black/20 backdrop-blur-sm"
            >
              <div className="flex flex-wrap gap-2">
                {toolSkills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 border border-ivory/10 text-sm text-ivory/80 rounded-full hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300 cursor-default ${
                      locale === "fa" ? "font-peyda" : ""
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-ivory/10">
                <p
                  className={`text-sm text-ivory/60   ${locale === "fa" ? "font-peyda" : ""}`}
                >
                  {t("quote")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
