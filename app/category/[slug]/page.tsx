import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Search } from "lucide-react";
import { GuideCard } from "@/components/guide-card";
import { categories, getCategory, getGuidesByCategory, getTopicHref, guides as allGuides } from "@/data/site-content";
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
    keywords: category.examples.map((example) => `cheapest way to ${example}`),
    image: category.image,
    imageAlt: `${category.name} cost comparison guides`
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
    url: `${siteConfig.url}/category/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.h1,
        url: `${siteConfig.url}/cheapest-way-to/${guide.slug}`
      }))
    }
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.name,
        item: `${siteConfig.url}/category/${category.slug}`
      }
    ]
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbData)} />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-14">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-[#ff385c]/10 text-[#ff385c]">
                <Icon className="size-6" />
              </span>
              <span className="text-sm font-semibold text-zinc-500">Cost category</span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">{category.name}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">{category.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {category.examples.slice(0, 5).map((example) => {
                const exampleGuide = allGuides.find(
                  (guide) =>
                    guide.category === category.slug &&
                    (guide.primaryKeyword === `cheapest way to ${example}` || guide.primaryKeyword.includes(example))
                );

                if (exampleGuide) {
                  return (
                    <Link
                      key={example}
                      href={`/cheapest-way-to/${exampleGuide.slug}`}
                      className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-800 hover:border-zinc-400"
                    >
                      {example}
                    </Link>
                  );
                }

                return (
                  <span
                    key={example}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-500"
                  >
                    {example}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-lg bg-zinc-100 lg:min-h-96">
            <Image
              src={category.image}
              alt={`${category.name} cost comparison guides`}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/95 p-4 shadow-lg">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Browse guides</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-950">{guides.length || category.examples.length} comparisons to start</p>
                </div>
                <span className="flex size-10 items-center justify-center rounded-full bg-[#ff385c] text-white">
                  <Search className="size-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">Guides in this category</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
              Each guide compares the lowest-cost paths, practical tradeoffs, and situations where a cheaper option stops being worth it.
            </p>
          </div>
          <Link href="/" className="text-sm font-semibold text-zinc-950 hover:underline">
            All categories
          </Link>
        </div>
        <div className="mt-7 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {guides.length ? (
            guides.map((guide, index) => <GuideCard key={guide.slug} guide={guide} priority={index === 0} />)
          ) : (
            category.examples.map((example) => (
              <Link
                key={example}
                href={getTopicHref(example)}
                className="flex min-h-40 flex-col justify-between rounded-lg border border-dashed border-zinc-300 bg-white p-5 text-sm font-semibold text-zinc-950 transition hover:border-zinc-500"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-zinc-100">
                  <CheckCircle2 className="size-4 text-[#ff385c]" />
                </span>
                <span className="flex items-center justify-between gap-3">
                  cheapest way to {example}
                  <ArrowRight className="size-4 shrink-0" />
                </span>
              </Link>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
