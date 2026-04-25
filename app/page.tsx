import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Search, SlidersHorizontal, Sparkles, TrendingUp } from "lucide-react";
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
  ],
  image: guides[0]?.image,
  imageAlt: `${siteConfig.name} cost comparison guide`
});

export default function Home() {
  const featuredGuide = guides[0];
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
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm">
              <Sparkles className="size-4 text-[#ff385c]" />
              Cost guides with real tradeoffs
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
              Find the cheapest way to handle everyday costs.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              Browse practical comparisons for shipping, travel, repairs, cars, money, and admin tasks with clear options and hidden-fee notes.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-xl md:grid-cols-[1fr_1fr_1fr_auto] md:rounded-full">
            <Link href="/category/shipping-moving" className="border-b border-zinc-200 px-6 py-4 hover:bg-zinc-50 md:border-b-0 md:border-r">
              <span className="block text-xs font-semibold uppercase tracking-wide text-zinc-950">Compare</span>
              <span className="mt-1 block text-sm text-zinc-500">Ship, move, repair</span>
            </Link>
            <Link href="/cheapest-way-to/ship-clothes" className="border-b border-zinc-200 px-6 py-4 hover:bg-zinc-50 md:border-b-0 md:border-r">
              <span className="block text-xs font-semibold uppercase tracking-wide text-zinc-950">First guide</span>
              <span className="mt-1 block text-sm text-zinc-500">Clothes shipping</span>
            </Link>
            <Link href="/category/travel" className="border-b border-zinc-200 px-6 py-4 hover:bg-zinc-50 md:border-b-0 md:border-r">
              <span className="block text-xs font-semibold uppercase tracking-wide text-zinc-950">Browse</span>
              <span className="mt-1 block text-sm text-zinc-500">Travel and home costs</span>
            </Link>
            <Link href="/cheapest-way-to/ship-clothes" className="flex items-center justify-center p-3">
              <span className="flex size-12 items-center justify-center rounded-full bg-[#ff385c] text-white">
                <Search className="size-5" />
              </span>
            </Link>
          </div>

          {featuredGuide ? (
            <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
              <Link
                href={`/cheapest-way-to/${featuredGuide.slug}`}
                className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-72 sm:h-96">
                  <Image
                    src={featuredGuide.image}
                    alt={featuredGuide.h1}
                    fill
                    priority
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#ff385c]">{featuredGuide.primaryKeyword}</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">{featuredGuide.h1}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">{featuredGuide.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-950">
                    Compare now <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
              <div className="grid gap-5">
                <div className="rounded-lg border border-zinc-200 bg-[#f7f7f7] p-5">
                  <div className="flex items-center gap-3">
                    <SlidersHorizontal className="size-5 text-[#ff385c]" />
                    <p className="font-semibold text-zinc-950">Compare by situation</p>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {["Light item", "Heavy box", "Moving day", "International"].map((label) => (
                      <div key={label} className="flex items-center justify-between rounded-lg bg-white px-4 py-3 text-sm font-medium text-zinc-800">
                        <span>{label}</span>
                        <CheckCircle2 className="size-4 text-emerald-600" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="size-5 text-amber-600" />
                    <p className="font-semibold text-zinc-950">Research queue</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {keywordBacklog.slice(0, 6).map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-700"
                      >
                        {keyword.replace("cheapest way to ", "")}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">Explore by category</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
              Pick a cost area, then narrow into a guide with a direct comparison table and practical next steps.
            </p>
          </div>
          <Link href="/cheapest-way-to" className="text-sm font-semibold text-zinc-950 hover:underline">
            All guides
          </Link>
        </div>
        <div className="no-scrollbar mt-6 flex gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group min-w-64"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-zinc-100">
                  <Image
                    src={category.image}
                    alt={`${category.name} cost comparison`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 75vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/95 text-zinc-950 shadow-sm">
                    <Icon className="size-5" />
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-zinc-950">{category.name}</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-600">{category.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="guides" className="border-y border-zinc-200 bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-950">Published comparisons</h2>
              <p className="mt-2 text-sm text-zinc-600">Image-led guides with quick verdicts, option tables, and cost caveats.</p>
            </div>
            <Link href="/category/shipping-moving" className="hidden text-sm font-semibold text-zinc-950 hover:underline sm:inline">
              View shipping
            </Link>
          </div>
          <div className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((guide, index) => (
              <GuideCard key={guide.slug} guide={guide} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
