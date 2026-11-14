
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { articles } from "@/app/data/articles";
import { useParams } from "next/navigation";

export default function ArticlesClient() {
  const t = useTranslations("articles");

  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isFa = locale === "fa";

  const publishedArticles = articles.filter(
    (article) => article.published
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-brand px-6 py-32 dark:bg-surface-dark md:px-12 md:py-48">

      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 noise-overlay opacity-20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1600px]">

        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`mb-20 font-display text-5xl font-light leading-[1.05] text-ivory md:text-7xl lg:text-8xl ${
            isFa ? "font-peyda font-black" : ""
          }`}
        >
          {t.rich("title", {
            em: (chunks) => (
              <span className="italic text-gold">
                {chunks}
              </span>
            ),
          })}
        </motion.h1>

        {/* Articles Grid */}
        <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">

          {publishedArticles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
              }}
              className="group h-full"
            >
              <Link
                href={`/${locale}/articles/${article.slug}`}
                className="flex flex-col rounded-2xl border border-ivory/10 bg-black/20 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold/40 hover:bg-black/40"
              >

                {/* Card Header */}
                <div className="mb-8 flex min-h-8 items-center justify-between gap-3">

                  <span
                    className={`inline-flex min-h-7 items-center whitespace-nowrap rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand dark:border-gold/20 dark:bg-gold/10 dark:text-gold ${
                      isFa ? "font-peyda" : ""
                    }`}
                  >
                    {t(`categories.${article.category}`)}
                  </span>

                  {article.featured && (
                    <span
                      className="shrink-0 text-lg text-gold"
                      aria-label="Featured article"
                    >
                      ⭐
                    </span>
                  )}

                </div>

                {/* Card Content */}
                <div className="flex flex-col">

                  {/* Title */}
                  <h2
                    className={`mb-4 line-clamp-2 min-h-[4.5rem] font-display text-2xl font-light leading-[1.4] text-ivory transition-colors duration-500 group-hover:text-gold md:text-3xl md:leading-[1.4] ${
                      isFa
                        ? "font-peyda font-bold"
                        : ""
                    }`}
                  >
                    {isFa
                      ? article.titleFa
                      : article.title}
                  </h2>

                  {/* Description */}
                  <p
                    className={`line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed text-ivory/60 ${
                      isFa ? "font-peyda" : ""
                    }`}
                  >
                    {isFa
                      ? article.excerptFa
                      : article.excerpt}
                  </p>

                </div>

                {/* Card Footer */}
                <div className="pt-8">

                  {/* Date & Reading Time */}
                  <div className="flex min-h-8 flex-wrap items-center gap-x-4 gap-y-2 border-t border-ivory/10 pt-6">

                    <div className="flex items-center gap-2 text-xs text-ivory/40">
                      <Calendar
                        size={14}
                        className="shrink-0"
                        aria-hidden="true"
                      />

                      <span className={isFa ? "font-peyda" : ""}>
                        {isFa
                          ? article.dateFa
                          : article.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-ivory/40">
                      <Clock
                        size={14}
                        className="shrink-0"
                        aria-hidden="true"
                      />

                      <span className={isFa ? "font-peyda" : ""}>
                        {article.readTime} {t("readTime")}
                      </span>
                    </div>

                  </div>

                  {/* Read Article */}
                  <div
                    className={`mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold transition-all duration-300 group-hover:gap-4 ${
                      isFa ? "font-peyda" : ""
                    }`}
                  >
                    {t("readMore")}

                    <ArrowUpRight
                      size={14}
                      className={isFa ? "rotate-180" : ""}
                      aria-hidden="true"
                    />
                  </div>

                </div>

              </Link>
            </motion.article>
          ))}

        </div>

        {/* Empty State */}
        {publishedArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 text-center"
          >
            <p
              className={`text-lg text-ivory/60 ${
                isFa ? "font-peyda" : ""
              }`}
            >
              {isFa
                ? "هنوز مقاله‌ای منتشر نشده است"
                : "No articles published yet"}
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}
