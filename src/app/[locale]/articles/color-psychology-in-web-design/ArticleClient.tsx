
"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { articles } from "@/app/data/articles";

const ARTICLE_SLUG = "color-psychology-in-web-design";

export default function ArticleClient() {
  const t = useTranslations("articles");

  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isFa = locale === "fa";

  // Get current article
  const article = articles.find(
    (a) => a.slug === ARTICLE_SLUG && a.published
  );

  if (!article) return null;

  // Localized article data
  const title = isFa ? article.titleFa : article.title;
  const content = isFa ? article.contentFa : article.content;
  const date = isFa ? article.dateFa : article.date;

  const initial = title.charAt(0);

  return (
    <article
      lang={locale}
      dir={isFa ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-brand px-6 py-32 dark:bg-surface-dark md:px-12 md:py-48"
    >
      {/* Background Effects */}
      <div
        className="pointer-events-none absolute inset-0 noise-overlay opacity-20"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-[600px] w-[600px] animate-pulse-glow rounded-full bg-emerald/20 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">

        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: isFa ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href={`/${locale}/articles`}
            className={`inline-flex items-center gap-2 text-gold transition-colors duration-300 hover:text-gold-light ${
              isFa ? "font-peyda" : ""
            }`}
          >
            <ArrowLeft
              size={18}
              className={isFa ? "rotate-180" : ""}
              aria-hidden="true"
            />

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
          {/* Category */}
          <div className="mb-6 flex items-center gap-3">
            <Tag
              size={16}
              className="text-gold"
              aria-hidden="true"
            />

            <span
              className={`text-xs uppercase tracking-[0.3em] text-gold ${
                isFa ? "font-peyda" : ""
              }`}
            >
              {t(`categories.${article.category}`)}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`mb-8 font-display text-4xl font-light leading-[1.1] text-ivory md:text-6xl lg:text-7xl ${
              isFa ? "font-peyda font-black leading-[1.7]" : ""
            }`}
          >
            {title}
          </h1>

          {/* Article Metadata */}
          <div className="flex flex-wrap items-center gap-6 border-t border-ivory/10 pt-8">

            {/* Date */}
            <div className="flex items-center gap-3 text-ivory/60">
              <Calendar size={16} aria-hidden="true" />

              <span
                className={`text-sm ${isFa ? "font-peyda" : ""}`}
              >
                {date}
              </span>
            </div>

            {/* Reading Time */}
            <div className="flex items-center gap-3 text-ivory/60">
              <Clock size={16} aria-hidden="true" />

              <span
                className={`text-sm ${isFa ? "font-peyda" : ""}`}
              >
                {article.readTime} {t("readTime")}
              </span>
            </div>

          </div>
        </motion.header>

        {/* Article Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative mb-16 aspect-[21/9] overflow-hidden rounded-2xl border border-ivory/10 bg-black/30"
          aria-hidden="true"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="select-none font-display text-[15rem] font-light text-ivory/5 md:text-[25rem]">
              {initial}
            </span>
          </div>

          <div className="noise-overlay absolute inset-0 opacity-20 mix-blend-overlay" />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`prose prose-lg dark:prose-invert max-w-none ${
            isFa ? "font-peyda" : ""
          }`}
        >
          <div
            className={`
              text-lg leading-loose text-ivory

              [&>p]:mb-6
              [&>h2]:mb-6
              [&>h2]:mt-12
              [&>h2]:font-display
              [&>h2]:text-3xl
              [&>h2]:font-bold
              [&>h2]:text-gold

              [&>h3]:mb-4
              [&>h3]:mt-8
              [&>h3]:font-display
              [&>h3]:text-2xl
              [&>h3]:font-semibold
              [&>h3]:text-ivory

              [&>blockquote]:my-8
              [&>blockquote]:rounded-lg
              [&>blockquote]:border-gold
              [&>blockquote]:bg-gold/5
              [&>blockquote]:p-6
              [&>blockquote]:text-xl
              [&>blockquote]:italic
              [&>blockquote]:text-ivory

              [&>ul]:mb-6
              [&>ul]:list-disc
              [&>ul]:ps-6

              [&>ol]:mb-6
              [&>ol]:list-decimal
              [&>ol]:ps-6

              [&_li]:mb-2

              [&_a]:text-gold
              [&_a]:underline
              [&_a]:underline-offset-4
              [&_a:hover]:text-gold-light

              [&_strong]:text-ivory

              [&_code]:rounded
              [&_code]:bg-black/30
              [&_code]:px-2
              [&_code]:py-1
              [&_code]:text-gold

              [&_pre]:mb-6
              [&_pre]:overflow-x-auto
              [&_pre]:rounded-lg
              [&_pre]:bg-black/30
              [&_pre]:p-6

              ${
                isFa
                  ? "[&>blockquote]:border-r-4 [&>blockquote]:border-l-0"
                  : "[&>blockquote]:border-l-4 [&>blockquote]:border-r-0"
              }
            `}
            dangerouslySetInnerHTML={{
              __html: content || "",
            }}
          />
        </motion.div>

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-ivory/10 pt-12 md:flex-row"
        >
          <Link
            href={`/${locale}/articles`}
            className={`inline-flex items-center gap-2 rounded-full border border-ivory/20 px-8 py-4 text-ivory transition-all duration-500 hover:border-gold hover:bg-gold hover:text-brand ${
              isFa ? "font-peyda" : ""
            }`}
          >
            <ArrowLeft
              size={18}
              className={isFa ? "rotate-180" : ""}
              aria-hidden="true"
            />

            {t("backToArticles")}
          </Link>
        </motion.div>

      </div>
    </article>
  );
}
