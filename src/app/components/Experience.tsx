"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function Experience() {
  const t = useTranslations("experience");
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const experiences = t.raw("items") as Array<{
    company: string;
    role: string;
    period: string;
    duration: string;
    desc: string;
    type: string;
    current: boolean;
  }>;

  return (
    <section
      id="experience"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-luxury-bg dark:bg-luxury-darkBg overflow-hidden"
    >
      <div className="absolute top-1/3 end-0 w-[400px] h-[400px] bg-brand/5 dark:bg-emerald/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`font-display text-5xl md:text-7xl font-light leading-[1.05] text-luxury-text dark:text-luxury-darkText ${
                locale === "fa" ? "font-peyda font-black" : ""
              }`}
            >
              {t.rich("title", {
                em: (chunks) => (
                  <span className="  text-brand dark:text-gold">
                    {chunks}
                  </span>
                ),
              })}
            </motion.h2>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-lg text-luxury-muted dark:text-luxury-darkMuted leading-relaxed max-w-xl ${
                locale === "fa" ? "font-peyda" : ""
              }`}
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute start-0 md:start-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand/30 via-brand/20 to-transparent dark:from-gold/30 dark:via-gold/20" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative ps-12 md:ps-24"
              >
                <div
                  className={`absolute start-0 md:start-8 top-2 -translate-x-1/2 rtl:translate-x-1/2 w-4 h-4 rounded-full ${
                    exp.current
                      ? "bg-gold glow-gold"
                      : "bg-brand dark:bg-gold/50 border-2 border-luxury-bg dark:border-luxury-darkBg"
                  }`}
                />

                <div className="group p-8 md:p-12 rounded-2xl border border-luxury bg-luxury-bg dark:bg-white/[0.02] hover:border-brand/30 dark:hover:border-gold/30 hover:glow-emerald transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span
                          className={`text-xs uppercase tracking-[0.3em] text-brand dark:text-gold font-medium ${
                            locale === "fa" ? "font-peyda" : ""
                          }`}
                        >
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span
                            className={`px-2 py-0.5 text-[10px] uppercase tracking-widest bg-gold/10 text-gold rounded-full border border-gold/20 ${
                              locale === "fa" ? "font-peyda" : ""
                            }`}
                          >
                            {t("currentBadge")}
                          </span>
                        )}
                      </div>
                      <h3
                        className={`font-display text-4xl md:text-5xl text-luxury-text dark:text-luxury-darkText group-hover:text-brand dark:group-hover:text-gold transition-colors duration-500 ${
                          locale === "fa" ? "font-peyda font-bold" : ""
                        }`}
                      >
                        {exp.company}
                      </h3>
                    </div>
                    <div className="md:text-end">
                      <div
                        className={`text-xs uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-darkMuted mb-1 ${
                          locale === "fa" ? "font-peyda" : ""
                        }`}
                      >
                        {t("durationLabel")}
                      </div>
                      <div
                        className={`font-display text-2xl text-luxury-text dark:text-luxury-darkText ${
                          locale === "fa" ? "font-peyda font-bold" : ""
                        }`}
                      >
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-luxury">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <p
                        className={`text-lg text-brand dark:text-gold font-medium ${
                          locale === "fa" ? "font-peyda font-bold" : ""
                        }`}
                      >
                        {exp.role}
                      </p>
                      <span
                        className={`text-xs uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-darkMuted ${
                          locale === "fa" ? "font-peyda" : ""
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <p
                      className={`text-luxury-muted dark:text-luxury-darkMuted leading-relaxed max-w-2xl ${
                        locale === "fa" ? "font-peyda" : ""
                      }`}
                    >
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
