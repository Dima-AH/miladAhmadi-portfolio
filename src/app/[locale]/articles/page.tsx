import type { Metadata } from "next";
import ArticlesClient from "./ArticlesClient";
import Script from "next/script";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://milad-ahmadi.dev";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFa = locale === "fa";
  const title = isFa ? "مقالات — میلاد احمدی" : "Articles — Milad Ahmadi";
  const description = isFa
    ? "مقالات و نوشته‌های میلاد احمدی درباره مهندسی فرانت‌اند، معماری و تجربه کاربری."
    : "Writings by Milad Ahmadi on frontend engineering, architecture and user experience.";
  const url = `${SITE_URL}/${locale}/articles`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/articles`,
        fa: `${SITE_URL}/fa/articles`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      locale: isFa ? "fa_IR" : "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function ArticlesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/en`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: `${SITE_URL}/en/articles`,
      },
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-articles"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticlesClient />
    </>
  );
}
