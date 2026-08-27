"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send } from "lucide-react";
import Link from "next/link";
import LanguageSwitcher from "./features/LanguageSwitcher";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { navItems } from "../configs/NavbarItems";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isRTL = locale === "fa";
  const t = useTranslations("nav");

  const slideDirection = isRTL ? "-100%" : "100%";

  return (
    <>
      <header
        className={`fixed top-0 start-0 end-0 z-50 transition-all duration-500 ease-luxury ${
          isScrolled
            ? "bg-luxury-bg/80 dark:bg-luxury-darkBg/80 backdrop-blur-md border-b border-luxury"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center glow-emerald group-hover:scale-110 transition-transform duration-500">
              <span className="font-display text-xl font-bold text-gold">
                M
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-lg py-0.5 font-semibold text-brand dark:text-ivory tracking-tight leading-none">
                {t("fullName")}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-luxury-muted dark:text-luxury-darkMuted mt-0.5">
                {isRTL ? "توسعه‌دهنده فرانت‌اند" : "Frontend Developer"}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const href =
                item.path === "/" ? `/${locale}` : `/${locale}${item.path}`;
              const name = t(item.key);

              return (
                <Link
                  key={item.key}
                  href={href}
                  className="group relative text-sm uppercase tracking-[0.2em] text-luxury-muted dark:text-luxury-darkMuted hover:text-brand dark:hover:text-gold transition-colors duration-500"
                >
                  {name}
                  <span className="absolute -bottom-1 start-0 w-0 h-px bg-brand dark:bg-gold group-hover:w-full transition-all duration-500 ease-luxury" />
                </Link>
              );
            })}

            <div className="w-px h-6 bg-luxury-border dark:bg-luxury-darkBorder mx-2" />
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 rounded-full border border-luxury dark:border-gold/20 flex items-center justify-center text-brand dark:text-gold hover:bg-brand/5 dark:hover:bg-gold/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <motion.div
              initial={{ x: slideDirection }}
              animate={{ x: 0 }}
              exit={{ x: slideDirection }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-luxury-bg dark:bg-luxury-darkBg flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-luxury">
                <span className="font-display text-2xl font-semibold text-brand dark:text-ivory">
                  {isRTL ? "منو" : "Menu"}
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full border border-luxury dark:border-gold/20 flex items-center justify-center text-brand dark:text-gold hover:bg-brand/5 dark:hover:bg-gold/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
                {navItems.map((item, i) => {
                  const href =
                    item.path === "/" ? `/${locale}` : `/${locale}${item.path}`;
                  const name = t(item.key);

                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                    >
                      <Link
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`font-display text-4xl md:text-5xl text-brand dark:text-ivory hover:text-gold transition-colors duration-300 ${
                          isRTL ? "font-vazir font-bold" : ""
                        }`}
                      >
                        {name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="p-8 border-t border-luxury flex flex-wrap gap-6 justify-center items-center">
                {/* GitHub Icon */}
                <a
                  href="https://github.com/Dima-AH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-luxury dark:border-gold/20 flex items-center justify-center text-brand dark:text-gold hover:bg-brand hover:text-ivory dark:hover:bg-gold dark:hover:text-brand transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>

                {/* LinkedIn Icon */}
                <a
                  href="https://linkedin.com/in/mr-ahmadi7377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-luxury dark:border-gold/20 flex items-center justify-center text-brand dark:text-gold hover:bg-brand hover:text-ivory dark:hover:bg-gold dark:hover:text-brand transition-all duration-300"
                  aria-label="LinkedIn"
                >
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
                </a>

                {/* Telegram Icon */}
                <a
                  href="https://t.me/dima-devs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-luxury dark:border-gold/20 flex items-center justify-center text-brand dark:text-gold hover:bg-brand hover:text-ivory dark:hover:bg-gold dark:hover:text-brand transition-all duration-300"
                  aria-label="Telegram"
                >
                  <Send className="w-6 h-6 stroke-current" />
                </a>

                <LanguageSwitcher />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
