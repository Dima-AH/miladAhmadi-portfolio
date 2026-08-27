"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function Education() {
  const t = useTranslations("education");
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const education = t.raw("items") as Array<{
    institution: string;
    degree: string;
    period: string;
    current: boolean;
  }>;

  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 bg-brand dark:bg-surface-dark overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-20" />
      <div className="absolute top-0 end-0 w-[500px] h-[500px] bg-emerald/20 rounded-full blur-[150px]" />

      <div className="max-w-[1600px] mx-auto relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`font-display text-5xl md:text-7xl font-light leading-[1.05] text-ivory ${
                locale === "fa" ? "font-peyda font-black" : ""
              }`}
            >
              {t.rich("title", {
                em: (chunks) => (
                  <span className="italic text-gold">{chunks}</span>
                ),
              })}
            </motion.h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 md:p-10 rounded-2xl border border-ivory/10 bg-black/20 backdrop-blur-sm hover:border-gold/40 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span
                        className={`text-xs uppercase tracking-[0.3em] text-gold/70 ${locale === "fa" ? "font-peyda" : ""}`}
                      >
                        {edu.period}
                      </span>
                      {edu.current && (
                        <span
                          className={`px-2 py-0.5 text-[10px] uppercase tracking-widest bg-gold/10 text-gold rounded-full border border-gold/20 ${locale === "fa" ? "font-peyda" : ""}`}
                        >
                          {t("currentBadge")}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`font-display text-3xl md:text-4xl text-ivory group-hover:text-gold transition-colors duration-500 ${
                        locale === "fa" ? "font-peyda font-bold" : ""
                      }`}
                    >
                      {edu.institution}
                    </h3>
                    <p
                      className={`text-ivory/60 mt-2 ${locale === "fa" ? "font-peyda" : ""}`}
                    >
                      {edu.degree}
                    </p>
                  </div>
                  <div
                    className={`w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold font-display text-xl ${
                      locale === "fa" ? "font-peyda font-bold" : ""
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
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
