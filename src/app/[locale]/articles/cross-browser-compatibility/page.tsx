import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { articles } from "@/app/data/articles";
import Script from "next/script";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://milad-ahmadi.dev";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const article = articles.find((a) => a.slug === "cross-browser-compatibility");
  const isFa = locale === "fa";
  const title = isFa
    ? article?.titleFa || "مترجم‌های سرکش وب"
    : article?.title || "The Rogue Translators of the Web";
  const description = isFa ? article?.excerptFa : article?.excerpt;
  const url = `${SITE_URL}/${locale}/articles/cross-browser-compatibility`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/articles/cross-browser-compatibility`,
        fa: `${SITE_URL}/fa/articles/cross-browser-compatibility`,
      },
    },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      locale: isFa ? "fa_IR" : "en_US",
      alternateLocale: isFa ? "en_US" : "fa_IR",
      publishedTime: "2026-09-08",
      authors: ["Milad Ahmadi"],
      tags: ["cross-browser", "frontend", "compatibility"],
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
      creator: "@Dima_devs",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isFa = locale === "fa";
  const article = articles.find((a) => a.slug === "cross-browser-compatibility");
  const url = `${SITE_URL}/${locale}/articles/cross-browser-compatibility`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isFa ? article?.titleFa : article?.title,
    description: isFa ? article?.excerptFa : article?.excerpt,
    author: {
      "@type": "Person",
      name: isFa ? "میلاد احمدی" : "Milad Ahmadi",
      url: `${SITE_URL}/${locale}`,
    },
    datePublished: "2026-09-08",
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
          ? "مترجم‌های سرکش وب"
          : "Cross-Browser Compatibility",
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
