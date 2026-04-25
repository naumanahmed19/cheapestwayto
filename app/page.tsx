import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, Sparkles } from "lucide-react";
import { GuideCard } from "@/components/guide-card";
import { categories, guides, keywordBacklog } from "@/data/site-content";
import { createMetadata, jsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "CheapestWayTo - Compare the Cheapest Ways to Do Almost Anything",
  description:
    "Find the cheapest way to ship, move, travel, repair, start, file, learn, and buy with practical comparison guides and calculators.",
  path: "/",
  keywords: [
    "cheapest way to",
    "cost comparison",
    "shipping cost comparison",
    "cheapest way to ship",
    "saving money guides"
  ]
});

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-900">
              <Sparkles className="size-4" />
              SEO-first comparison engine
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              Find the cheapest way to ship, move, repair, travel, and handle everyday costs.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              CheapestWayTo is built for high-intent searches: clear comparisons, calculators, hidden fees, and practical next steps for people who need a cheaper option now.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cheapest-way-to/ship-clothes"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-zinc-950 px-5 text-sm font-medium text-white hover:bg-zinc-800"
              >
                See first guide <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/category/shipping-moving"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-medium text-zinc-950 ring-1 ring-zinc-200 hover:bg-zinc-50"
              >
                Shipping cluster
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-5">
            <div className="flex items-center gap-3 border-b border-zinc-200 pb-4">
              <Search className="size-5 text-emerald-700" />
              <p className="font-medium text-zinc-950">Keyword cluster plan</p>
            </div>
            <div className="mt-4 grid gap-3">
              {keywordBacklog.slice(0, 8).map((keyword) => (
                <div key={keyword} className="flex items-center justify-between rounded-md bg-zinc-50 px-3 py-2">
                  <span className="text-sm text-zinc-700">{keyword}</span>
                  <CheckCircle2 className="size-4 text-emerald-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">Core Categories</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
              Start with focused topical clusters, then expand with AI-assisted briefs and manually checked pricing assumptions.
            </p>
          </div>
          <Link href="/sitemap.xml" className="text-sm font-medium text-zinc-950 hover:underline">
            XML sitemap
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="rounded-lg border border-zinc-200 bg-white p-5 transition hover:border-zinc-400"
              >
                <Icon className="size-6 text-emerald-700" />
                <h3 className="mt-4 font-semibold text-zinc-950">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{category.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold text-zinc-950">Published Templates</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
