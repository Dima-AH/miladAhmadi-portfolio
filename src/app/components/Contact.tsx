"use client";

import { motion } from "framer-motion";
import { Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function Contact() {
  const t = useTranslations("contact");
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isRTL = locale === "fa";

  const contactItems = t.raw("items") as Array<{
    label: string;
    value: string;
    href: string;
  }>;

  const getIcon = (label: string) => {
    if (label === "Phone" || label === "تلفن") return Phone;
    if (label === "Telegram" || label === "تلگرام") return Send;
    return null;
  };

  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 px-6 md:px-12 bg-luxury-bg dark:bg-luxury-darkBg overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 start-1/4 w-[600px] h-[600px] bg-brand/10 dark:bg-emerald/20 rounded-full blur-[150px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 end-1/4 w-[500px] h-[500px] bg-gold/5 dark:bg-gold/10 rounded-full blur-[150px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-20"
        >
          <span
            className={`text-xs uppercase tracking-[0.4em] text-brand dark:text-gold font-medium ${
              isRTL ? "font-peyda" : ""
            }`}
          >
            {t("label")}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-brand/30 to-transparent dark:from-gold/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`font-display text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] text-luxury-text dark:text-luxury-darkText ${
                isRTL ? "font-peyda font-black" : ""
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

          <div className="lg:col-span-4 lg:pt-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`text-lg text-luxury-muted dark:text-luxury-darkMuted leading-relaxed ${
                isRTL ? "font-peyda" : ""
              }`}
            >
              {t("subtitle")}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, i) => {
            const LucideIcon = getIcon(item.label);

            return (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl border border-luxury bg-luxury-bg dark:bg-white/[0.02] hover:border-brand dark:hover:border-gold hover:glow-emerald transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/0 via-brand/0 to-brand/0 group-hover:from-brand/5 group-hover:to-transparent dark:group-hover:from-gold/5 transition-all duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-brand/10 dark:bg-gold/10 border border-brand/20 dark:border-gold/20 flex items-center justify-center text-brand dark:text-gold mb-6 group-hover:bg-brand dark:group-hover:bg-gold group-hover:text-ivory dark:group-hover:text-brand transition-all duration-500">
                    {LucideIcon ? (
                      <LucideIcon size={22} />
                    ) : item.label === "GitHub" || item.label === "گیت‌هاب" ? (
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-current"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 stroke-current"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <path d="M2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    )}
                  </div>

                  <div
                    className={`text-[10px] uppercase tracking-[0.3em] text-luxury-muted dark:text-luxury-darkMuted mb-2 ${
                      isRTL ? "font-peyda" : ""
                    }`}
                  >
                    {item.label}
                  </div>
                  <div
                    className={`font-display text-xl text-luxury-text dark:text-luxury-darkText group-hover:text-brand dark:group-hover:text-gold transition-colors duration-500 ${
                      isRTL ? "font-peyda font-bold" : ""
                    }`}
                  >
                    {item.value}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
