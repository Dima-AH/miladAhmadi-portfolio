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
      publishedTime: "2026-09-08",
      authors: ["Milad Ahmadi"],
      tags: ["cross-browser", "frontend", "compatibility"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Page() {
  // JSON-LD is inserted client-side wrapper needs locale, so we generate both variants statically
  const jsonLdEn = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Rogue Translators of the Web: Mastering Cross-Browser Compatibility",
    description:
      "Why does your flawless design break in Safari? Discover the conceptual reality of browser rendering and how modern frontend engineering ensures a seamless experience.",
    author: { "@type": "Person", name: "Milad Ahmadi", url: `${SITE_URL}/en` },
    datePublished: "2026-09-08",
    inLanguage: "en-US",
    mainEntityOfPage: `${SITE_URL}/en/articles/cross-browser-compatibility`,
  };
  const jsonLdFa = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "مترجم‌های سرکش وب: هنر تضمین تجربه کاربری یکپارچه در دنیای مرورگرها",
    description:
      "چرا طراحی بی‌نقص شما در سافاری به هم می‌ریزد؟ با واقعیت مفهومی رندرینگ مرورگرها و نحوه مهندسی فرانت‌اند مدرن آشنا شوید.",
    author: { "@type": "Person", name: "میلاد احمدی", url: `${SITE_URL}/fa` },
    datePublished: "2026-09-08",
    inLanguage: "fa-IR",
    mainEntityOfPage: `${SITE_URL}/fa/articles/cross-browser-compatibility`,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
      { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE_URL}/en/articles` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cross-Browser Compatibility",
        item: `${SITE_URL}/en/articles/cross-browser-compatibility`,
      },
    ],
  };

  return (
    <>
      <Script
        id="article-jsonld-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEn) }}
      />
      <Script
        id="article-jsonld-fa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFa) }}
      />
      <Script
        id="breadcrumb-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ArticleClient />
    </>
  );
}
