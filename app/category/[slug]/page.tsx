import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { GuideCard } from "@/components/guide-card";
import { categories, getCategory, getGuidesByCategory } from "@/data/site-content";
import { createMetadata, jsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return createMetadata({
    title: `${category.name} Cost Comparison Guides`,
    description: category.description,
    path: `/category/${category.slug}`,
    keywords: category.examples.map((example) => `cheapest way to ${example}`)
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const guides = getGuidesByCategory(category.slug);
  const Icon = category.icon;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Cost Comparison Guides`,
    description: category.description,
    url: `${siteConfig.url}/category/${category.slug}`
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <Icon className="size-8 text-emerald-700" />
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">{category.description}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-semibold text-zinc-950">Guides in this cluster</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {guides.length ? (
            guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)
          ) : (
            category.examples.map((example) => (
              <Link
                key={example}
                href={`/cheapest-way-to/${example.replaceAll(" ", "-")}`}
                className="flex items-center justify-between rounded-lg border border-dashed border-zinc-300 bg-white p-5 text-sm font-medium text-zinc-950"
              >
                cheapest way to {example}
                <ArrowRight className="size-4" />
              </Link>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
