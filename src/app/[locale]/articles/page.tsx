"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { articles } from "@/app/data/articles";
import { useParams } from "next/navigation";

export default function ArticlesPage() {
  const t = useTranslations("articles");
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isFa = locale === "fa";

  const publishedArticles = articles.filter((article) => article.published);

  return (
    <section className="relative h-full py-32 md:py-48 px-6 md:px-12 bg-brand dark:bg-surface-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 noise-overlay opacity-20" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-forest/30 rounded-full blur-[150px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-[1600px] mx-auto relative">
        {/* Section Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-6 mb-20"
        >
          <span
            className={`text-xs uppercase tracking-[0.4em] text-gold font-medium ${isFa ? "font-peyda" : ""}`}
          >
            {t("label")}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </motion.div> */}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-ivory mb-20 ${
            isFa ? "font-peyda font-black" : ""
          }`}
        >
          {t.rich("title", {
            em: (chunks) => <span className="italic text-gold">{chunks}</span>,
          })}
        </motion.h1>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedArticles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link
                href={`/${locale}/articles/${article.slug}`}
                className="block h-full p-8 rounded-2xl border border-ivory/10 bg-black/20 backdrop-blur-sm hover:border-gold/40 hover:bg-black/40 transition-all duration-500"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`px-3 py-1 rounded-full bg-brand/10 dark:bg-gold/10 text-brand dark:text-gold text-xs uppercase tracking-[0.2em] font-medium border border-brand/20 dark:border-gold/20 ${isFa ? "font-peyda" : ""}`}
                  >
                    {t(`categories.${article.category}`)}
                  </span>
                  {article.featured && (
                    <span className="text-gold text-lg">⭐</span>
                  )}
                </div>

                {/* Title */}
                <h2
                  className={`font-display text-2xl md:text-3xl font-light text-ivory mb-4 group-hover:text-gold transition-colors duration-500 leading-tight ${isFa ? "font-peyda font-bold" : ""}`}
                >
                  {isFa ? article.titleFa : article.title}
                </h2>

                {/* Excerpt */}
                <p
                  className={`text-sm text-ivory/60 leading-relaxed mb-6 ${isFa ? "font-peyda" : ""}`}
                >
                  {isFa ? article.excerptFa : article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-ivory/10">
                  <div className="flex items-center gap-2 text-xs text-ivory/40">
                    <Calendar size={14} />
                    <span className={isFa ? "font-peyda" : ""}>
                      {isFa ? article.dateFa : article.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ivory/40">
                    <Clock size={14} />
                    <span>
                      {article.readTime} {t("readTime")}
                    </span>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-medium group-hover:gap-4 transition-all duration-300">
                  {t("readMore")}
                  <ArrowUpRight
                    size={14}
                    className={isFa ? "rotate-180" : ""}
                  />
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
            className="text-center py-32"
          >
            <p className="text-ivory/60 text-lg">
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
