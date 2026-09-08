"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Article {
  slug: string;
  title: string;
  titleFa: string;
  category: string;
  featured: boolean;
  date: string;
  dateFa: string;
  readTime: string;
  content: string;
  contentFa: string;
}

export default function ArticleClient({
  article,
  locale,
}: {
  article: Article;
  locale: string;
}) {
  const t = useTranslations("articles");
  const isFa = locale === "fa";

  return (
    <article className="relative min-h-screen py-32 md:py-48 px-6 md:px-12 bg-brand dark:bg-surface-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 noise-overlay opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald/20 rounded-full blur-[150px] animate-pulse-glow" />

      <div className="max-w-4xl mx-auto relative">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: isFa ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href={`/${locale}/articles`}
            className={`inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 ${
              isFa ? "font-peyda" : ""
            }`}
          >
            <ArrowLeft size={18} className={isFa ? "rotate-180" : ""} />
            {t("backToArticles")}
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Tag size={16} className="text-gold" />
            <span
              className={`text-xs uppercase tracking-[0.3em] text-gold ${isFa ? "font-peyda" : ""}`}
            >
              {t(`categories.${article.category}`)}
            </span>
            {article.featured && (
              <span className="text-gold text-sm uppercase tracking-wider ms-2">
                Featured
              </span>
            )}
          </div>

          <h1
            className={`font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-ivory mb-8 ${isFa ? "font-peyda font-black" : ""}`}
          >
            {isFa ? article.titleFa : article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-ivory/10">
            <div className="flex items-center gap-3 text-ivory/60">
              <Calendar size={16} />
              <span className={`text-sm ${isFa ? "font-peyda" : ""}`}>
                {isFa ? article.dateFa : article.date}
              </span>
            </div>
            <div className="flex items-center gap-3 text-ivory/60">
              <Clock size={16} />
              <span className="text-sm">
                {article.readTime} {t("readTime")}
              </span>
            </div>
          </div>
        </motion.header>

        {/* Featured Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-black/30 border border-ivory/10 mb-16"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[15rem] md:text-[25rem] font-light text-ivory/5 select-none">
              {isFa ? article.titleFa.charAt(0) : article.title.charAt(0)}
            </span>
          </div>
          <div className="absolute inset-0 noise-overlay opacity-20 mix-blend-overlay" />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`prose prose-lg dark:prose-invert max-w-none ${isFa ? "font-peyda" : ""}`}
        >
          <div
            className={`
              text-ivory leading-loose text-lg
              [&>p]:mb-6 
              [&>h2]:font-display [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-gold [&>h2]:mt-12 [&>h2]:mb-6
              [&>h3]:font-display [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-ivory [&>h3]:mt-8 [&>h3]:mb-4
              [&>blockquote]:my-8 [&>blockquote]:p-6 [&>blockquote]:border-gold [&>blockquote]:bg-gold/5 [&>blockquote]:rounded-lg [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:text-ivory
              [&>ul]:list-disc [&>ul]:ps-6 [&>ul]:mb-6
              [&>ol]:list-decimal [&>ol]:ps-6 [&>ol]:mb-6
              [&>li]:mb-2
              [&>code]:bg-black/30 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-gold
              [&>pre]:bg-black/30 [&>pre]:p-6 [&>pre]:rounded-lg [&>pre]:mb-6 [&>pre]:overflow-x-auto
              ${isFa ? "[&>blockquote]:border-r-4 [&>blockquote]:border-l-0" : "[&>blockquote]:border-l-4 [&>blockquote]:border-r-0"}
            `}
            dangerouslySetInnerHTML={{
              __html: isFa ? article.contentFa : article.content,
            }}
          />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-12 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <Link
            href={`/${locale}/articles`}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full border border-ivory/20 text-ivory hover:bg-gold hover:text-brand hover:border-gold transition-all duration-500 ${isFa ? "font-peyda" : ""}`}
          >
            <ArrowLeft size={18} className={isFa ? "rotate-180" : ""} />
            {t("backToArticles")}
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
