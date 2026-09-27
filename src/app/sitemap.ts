import type { MetadataRoute } from "next";
import { articles } from "./data/articles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://milad-ahmadi.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "fa"];
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    routes.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${SITE_URL}/en`,
          fa: `${SITE_URL}/fa`,
        },
      },
    });

    routes.push({
      url: `${SITE_URL}/${locale}/articles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/articles`,
          fa: `${SITE_URL}/fa/articles`,
        },
      },
    });

    for (const article of articles.filter((a) => a.published)) {
      routes.push({
        url: `${SITE_URL}/${locale}/articles/${article.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: {
            en: `${SITE_URL}/en/articles/${article.slug}`,
            fa: `${SITE_URL}/fa/articles/${article.slug}`,
          },
        },
      });
    }
  }

  return routes;
}
