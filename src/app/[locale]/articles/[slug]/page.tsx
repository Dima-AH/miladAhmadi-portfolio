import { notFound } from "next/navigation";
import articlesData from "@/app/data/articles.json";
import ArticleClient from "./ArticleClient";
export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticleClient article={article} locale={locale} />;
}
