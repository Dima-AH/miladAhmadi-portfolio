"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";
import { useParams } from "next/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isRTL = locale === "fa";

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { key: "about", href: `/${locale}/#about` },
    { key: "skills", href: `/${locale}/#skills` },
    { key: "experience", href: `/${locale}/#experience` },
    { key: "projects", href: `/${locale}/#projects` },
    { key: "contact", href: `/${locale}/#contact` },
  ];

  return (
    <footer className="relative bg-brand dark:bg-deep-black overflow-hidden">
      {/* Top Decorative Line */}
      <div className="h-px w-full line-gold" />

      <div className="absolute inset-0 noise-overlay opacity-20" />

      <div className="max-w-[1600px] mx-auto relative px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-brand flex items-center justify-center glow-emerald border border-gold/30">
                <span className="font-display text-2xl font-bold text-gold">
                  M
                </span>
              </div>
              <div>
                <div
                  className={`font-display text-2xl text-ivory ${isRTL ? "font-peyda font-bold" : ""}`}
                >
                  {t("name")}
                </div>
                <div
                  className={`text-[10px] uppercase tracking-[0.3em] text-gold/70 mt-0.5 ${isRTL ? "font-peyda" : ""}`}
                >
                  {t("role")}
                </div>
              </div>
            </div>
            <p
              className={`text-ivory/60 max-w-md leading-relaxed ${isRTL ? "font-peyda" : ""}`}
            >
              {t("desc")}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <div
              className={`text-[10px] uppercase tracking-[0.3em] text-gold mb-6 ${isRTL ? "font-peyda" : ""}`}
            >
              {t("navTitle")}
            </div>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={`text-ivory/70 hover:text-gold transition-colors duration-300 ${isRTL ? "font-peyda" : ""}`}
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="lg:col-span-4">
            <div
              className={`text-[10px] uppercase tracking-[0.3em] text-gold mb-6 ${isRTL ? "font-peyda" : ""}`}
            >
              {t("connectTitle")}
            </div>

            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/Dima-AH"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/70 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/mr-ahmadi7377"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/70 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
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
                  className="w-5 h-5 stroke-current"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <path d="M2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://t.me/dima-devs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/70 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5 stroke-current" />
              </a>
            </div>

            <div className="pt-8 border-t border-ivory/10">
              <div
                className={`text-[10px] uppercase tracking-[0.3em] text-gold/70 mb-2 ${isRTL ? "font-peyda" : ""}`}
              >
                {t("phoneTitle")}
              </div>
              <a
                href="tel:+989982507377"
                className={`font-display text-xl text-ivory hover:text-gold transition-colors duration-300 ${isRTL ? "font-peyda font-bold" : ""}`}
              >
                {t("phone")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div
            className={`text-[10px] uppercase tracking-[0.3em] text-ivory/40 ${isRTL ? "font-peyda" : ""}`}
          >
            {t("copyright", { year: currentYear })}
          </div>
          <div
            className={`text-[10px] uppercase tracking-[0.3em] text-ivory/40 ${isRTL ? "font-peyda" : ""}`}
          >
            {t("crafted")}
          </div>
        </div>
      </div>
    </footer>
  );
}
