import { notFound } from "next/navigation";
import { articles } from "@/app/data/articles";
import ArticleClient from "./ArticleClient";

export async function generateStaticParams() {
  return articles
    .filter((article) => article.published) // فقط مقالات منتشر شده
    .map((article) => ({
      slug: article.slug,
    }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article || !article.published) {
    notFound();
  }

  return <ArticleClient article={article} locale={locale} />;
}
