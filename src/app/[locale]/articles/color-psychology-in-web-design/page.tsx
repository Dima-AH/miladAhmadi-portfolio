
import type { Metadata } from "next";
import { articles } from "@/app/data/articles";
import Script from "next/script";
import ArticleClient from "./ArticleClient";
import { notFound } from "next/navigation";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://milad-ahmadi.dev";

const ARTICLE_SLUG = "color-psychology-in-web-design";

const article = articles.find((a) => a.slug === ARTICLE_SLUG);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isFa = locale === "fa";

  const title = isFa
    ? article?.titleFa || "فراتر از پالت رنگ: روان‌شناسی رنگ در طراحی وب"
    : article?.title || "Beyond the Palette: The Psychology of Color in Web Design";

  const description = isFa
    ? article?.excerptFa
    : article?.excerpt;

  const url = `${SITE_URL}/${locale}/articles/${ARTICLE_SLUG}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/articles/${ARTICLE_SLUG}`,
        fa: `${SITE_URL}/fa/articles/${ARTICLE_SLUG}`,
      },
    },

    openGraph: {
      type: "article",
      title,
      description,
      url,
      locale: isFa ? "fa_IR" : "en_US",
      publishedTime: "2026-11-14",
      authors: ["Milad Ahmadi"],
      tags: [
        "color psychology",
        "web design",
        "UI UX",
        "frontend",
        "accessibility",
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!article || !article.published) {
    notFound();
  }

  const isFa = locale === "fa";

  const url = `${SITE_URL}/${locale}/articles/${ARTICLE_SLUG}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isFa ? article.titleFa : article.title,
    description: isFa ? article.excerptFa : article.excerpt,
    author: {
      "@type": "Person",
      name: isFa ? "میلاد احمدی" : "Milad Ahmadi",
      url: `${SITE_URL}/${locale}`,
    },
    datePublished: "2026-11-14",
    dateModified: "2026-11-14",
    inLanguage: isFa ? "fa-IR" : "en-US",
    mainEntityOfPage: url,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isFa ? "خانه" : "Home",
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isFa ? "مقالات" : "Articles",
        item: `${SITE_URL}/${locale}/articles`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isFa
          ? "روان‌شناسی رنگ در طراحی وب"
          : "Color Psychology in Web Design",
        item: url,
      },
    ],
  };

  return (
    <>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Script
        id="breadcrumb-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c"),
        }}
      />

      <ArticleClient />
    </>
  );
}
