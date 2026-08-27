"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function About() {
  const t = useTranslations("about");
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <section
      id="about"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-luxury-bg dark:bg-luxury-darkBg overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 dark:bg-emerald/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-20"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-brand dark:text-gold font-medium">
            {t("label")}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-brand/30 to-transparent dark:from-gold/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-luxury-text dark:text-luxury-darkText ${
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

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="w-20 h-px bg-brand dark:bg-gold" />
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-luxury-muted dark:text-luxury-darkMuted mb-1">
                  {t("basedInLabel")}
                </div>
                <div className={`font-display text-xl text-luxury-text dark:text-luxury-darkText ${
                  locale === "fa" ? "font-peyda font-bold" : ""
                }`}>
                  {t("basedInValue")}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-xl md:text-2xl text-luxury-text/80 dark:text-luxury-darkText/80 leading-relaxed font-light ${
                locale === "fa" ? "font-peyda" : ""
              }`}
            >
              {t("p1")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`text-lg text-luxury-muted dark:text-luxury-darkMuted leading-relaxed ${
                locale === "fa" ? "font-peyda" : ""
              }`}
            >
              {t("p2")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-12 border-t border-luxury"
            >
              <div>
                <div className={`font-display text-5xl md:text-6xl text-brand dark:text-gold font-light ${
                  locale === "fa" ? "font-peyda font-black" : ""
                }`}>
                  1+
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-darkMuted mt-2">
                  {t("stats.years")}
                </div>
              </div>
              <div>
                <div className={`font-display text-5xl md:text-6xl text-brand dark:text-gold font-light ${
                  locale === "fa" ? "font-peyda font-black" : ""
                }`}>
                  4+
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-darkMuted mt-2">
                  {t("stats.projects")}
                </div>
              </div>
              <div>
                <div className={`font-display text-5xl md:text-6xl text-brand dark:text-gold font-light ${
                  locale === "fa" ? "font-peyda font-black" : ""
                }`}>
                  3
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-darkMuted mt-2">
                  {t("stats.frameworks")}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}