
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { news } from "@/lib/data";
import { Photo } from "@/components/ui";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested news article could not be found.",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = news.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="container-x mx-auto max-w-3xl py-14">
      <Link
        href="/news"
        className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-navy"
      >
        <ArrowLeft size={16} />
        All news
      </Link>

      <p className="text-xs font-semibold text-gold-600">
        {article.cat} ·{" "}
        {new Date(article.date).toLocaleDateString("en-GB", {
          dateStyle: "long",
        })}
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        {article.title}
      </h1>

      <Photo
        src={article.image}
        alt={article.title}
        sizes="(min-width: 768px) 768px, 100vw"
        priority
        className="my-8 h-72 rounded-2xl"
      />

      <div className="space-y-4">
        {article.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
