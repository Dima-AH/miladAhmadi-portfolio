"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Send } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function Hero() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <section className="relative h-[100vh] overflow-hidden gradient-cinematic">
      {/* Animated Light Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-emerald/30 rounded-full blur-[150px] animate-pulse-glow" />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/40 rounded-full blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-forest/20 rounded-full blur-[200px]" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-20 min-h-screen flex flex-col justify-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold/30 bg-black/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              {t("hero.badge")}
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
              <span className="text-xs uppercase tracking-[0.4em] text-gold/80 font-medium">
                {t("hero.role")}
              </span>
            </div>

            <h1
              className={`font-display text-[16vw] md:text-[12vw] lg:text-[11vw] font-light leading-[0.85] tracking-tight text-ivory ${
                locale === "fa" ? "font-peyda font-black" : ""
              }`}
            >
              <span className="block">{t("hero.firstName")}</span>
              <span className="block italic text-shine font-medium z-50 ps-3">
                {t("hero.lastName")}
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Description + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-6"
          >
            <p className="text-lg md:text-xl text-ivory/70 leading-relaxed max-w-xl font-light">
              {t.rich("hero.description", {
                em: (chunks) => (
                  <span className="text-gold italic">{chunks}</span>
                ),
              })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-6 flex flex-col sm:flex-row lg:justify-end gap-4"
          >
            <Link
              href={`/${locale}/#projects`}
              className="group relative px-8 py-5 bg-gold text-brand font-medium rounded-full overflow-hidden transition-all duration-500 hover:glow-gold"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em]">
                {t("hero.ctaProjects")}
                <ArrowDownRight
                  className="group-hover:rotate-45 transition-transform duration-500"
                  size={18}
                />
              </span>
            </Link>
            <Link
              href={`/${locale}/#contact`}
              className="group px-8 py-5 border border-ivory/20 text-ivory rounded-full hover:border-gold hover:text-gold transition-all duration-500 text-sm uppercase tracking-[0.2em] flex items-center justify-center"
            >
              {t("hero.ctaContact")}
            </Link>
          </motion.div>
        </div>

        {/* Bottom Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 start-6 md:start-12 end-6 md:end-12 flex justify-between items-end"
        >
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Dima-AH"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-ivory/50 hover:text-gold transition-colors"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="hidden md:inline text-xs uppercase tracking-widest">
                {t("hero.github")}
              </span>
            </a>

            <a
              href="https://linkedin.com/in/mr-ahmadi7377"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-ivory/50 hover:text-gold transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 stroke-current"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <path d="M2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="hidden md:inline text-xs uppercase tracking-widest">
                {t("hero.linkedin")}
              </span>
            </a>

            <a
              href="https://t.me/Dima_devs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-ivory/50 hover:text-gold transition-colors"
            >
              <Send className="w-5 h-5 stroke-current" />
              <span className="hidden md:inline text-xs uppercase tracking-widest">
                {t("hero.telegram")}
              </span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-ivory/50">
            <span className="text-[10px] uppercase tracking-[0.3em]">
              {t("hero.location")}
            </span>
            <div className="h-px w-12 bg-ivory/30" />
            <span className="text-[10px] uppercase tracking-[0.3em]">
              {t("hero.scroll")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
