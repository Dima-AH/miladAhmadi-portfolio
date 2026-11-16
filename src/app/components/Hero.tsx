
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, Send } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function Hero() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  const reveal = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden gradient-cinematic">

      {/* Background Texture */}
      <div
        className="absolute inset-0 noise-overlay opacity-30 mix-blend-overlay"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 pt-28 pb-36 min-h-screen flex flex-col justify-center">

        {/*
          Desktop:
          Column 1: Name + Description + Buttons
          Column 2: Portrait
          
          Mobile:
          Name -> Portrait -> Description -> Buttons
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-8 items-center">

          {/* NAME */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="min-w-0"
          >
            {/* Role */}
            <div className="flex items-center gap-5 mb-8">
              <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-gold" />

              <span className="text-xs uppercase tracking-[0.4em] text-gold/80 font-medium">
                {t("hero.role")}
              </span>
            </div>

            {/* Full Name */}
            <h1
              className={`font-display text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[7.5vw] xl:text-[7.2vw] font-light leading-[0.9] tracking-tight text-ivory ${
                locale === "fa" ? "font-peyda font-black lg:text-right" : "lg:text-left"
              }`}
            >
              <span className="lg:block whitespace-nowrap">
                {t("hero.firstName")}
              </span>

              <span className="lg:block whitespace-nowrap text-shine font-medium ps-2">
                {t("hero.lastName")}
              </span>
            </h1>
          </motion.div>

          {/* PORTRAIT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 55,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative row-span-1 lg:row-span-2 w-full h-[340px] sm:h-[430px] lg:h-[520px] xl:h-[600px] min-w-0"
          >
            {/* Ambient Golden Light */}
            <div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[75%] h-[35%] rounded-full bg-gold/20 blur-[90px]"
              aria-hidden="true"
            />

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] h-[65%] rounded-full bg-emerald/20 blur-[100px]"
              aria-hidden="true"
            />

            {/* Subtle Portrait Glow */}
            <div
              className="absolute inset-0 bg-gradient-to-t blur-md rounded-full from-gold/5 via-transparent to-transparent"
              aria-hidden="true"
            />

            {/* Portrait */}
            <Image
              src="/images/milad-portrait.png"
              alt="Milad Ahmadi - Frontend Developer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(212,175,55,0.12)]"
            />
          </motion.div>

          {/* DESCRIPTION + BUTTONS */}
          <div className="min-w-0 flex flex-col gap-8 lg:self-end">

            {/* Description */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-ivory/70 leading-relaxed max-w-xl font-light">
                {t.rich("hero.description", {
                  em: (chunks) => (
                    <span className="text-gold">{chunks}</span>
                  ),
                })}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Projects */}
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

              {/* Contact */}
              <Link
                href={`/${locale}/#contact`}
                className="group px-8 py-5 border border-ivory/20 text-ivory rounded-full hover:border-gold hover:text-gold transition-all duration-500 text-sm uppercase tracking-[0.2em] flex items-center justify-center"
              >
                {t("hero.ctaContact")}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute w-full bottom-8 flex items-center justify-between pl-10"
        >
          {/* Socials */}
          <div className="flex items-center gap-6">

            {/* GitHub */}
            <a
              href="https://github.com/Dima-AH"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
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

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/mr-ahmadi7377"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
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

            {/* Telegram */}
            <a
              href="https://t.me/Dima_devs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="group flex items-center gap-2 text-ivory/50 hover:text-gold transition-colors"
            >
              <Send className="w-5 h-5 stroke-current" />

              <span className="hidden md:inline text-xs uppercase tracking-widest">
                {t("hero.telegram")}
              </span>
            </a>
          </div>

          {/* Location + Scroll */}
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
