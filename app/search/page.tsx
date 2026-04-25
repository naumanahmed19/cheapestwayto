import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { GuideCard } from "@/components/guide-card";
import { categories, guides } from "@/data/site-content";
import { createMetadata } from "@/lib/seo";

type SearchPageProps = {
  searchParams?: Promise<{ q?: string }>;
};

export const metadata = createMetadata({
  title: "Search CheapestWayTo Guides",
  description: "Search practical cheapest-way guides by task, category, cost driver, and situation.",
  path: "/search",
  keywords: ["search cheapest way to", "cost guide search", "cheap option finder"]
});

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = (params?.q ?? "").trim();
  const normalizedQuery = query.toLowerCase();
  const results = normalizedQuery
    ? guides.filter((guide) => {
        const haystack = [
          guide.h1,
          guide.description,
          guide.primaryKeyword,
          ...guide.secondaryKeywords,
          guide.listingMeta,
          guide.verdict,
          ...guide.costDrivers,
          ...guide.redFlags,
          ...guide.options.flatMap((option) => [option.name, option.bestFor, option.watchOut])
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      })
    : guides;

  return (
    <main className="bg-white">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#ff385c]">Guide finder</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              Search by the thing you need to make cheaper.
            </h1>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Try a task, fee, situation, or category. Results search the guide advice, cost drivers, and red flags.
            </p>
          </div>
          <form action="/search" className="mt-7 flex max-w-3xl flex-col gap-3 rounded-lg border border-zinc-200 bg-white p-2 shadow-sm sm:flex-row">
            <label className="sr-only" htmlFor="guide-search">
              Search guides
            </label>
            <div className="flex min-h-12 flex-1 items-center gap-3 px-3">
              <Search className="size-5 shrink-0 text-zinc-500" />
              <input
                id="guide-search"
                name="q"
                type="search"
                defaultValue={query}
                placeholder="ship clothes, hotel fees, LLC, heating..."
                className="h-11 w-full bg-transparent text-base text-zinc-950 outline-none placeholder:text-zinc-400"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-[#ff385c] px-5 text-sm font-semibold text-white transition hover:bg-[#e31c5f]"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">
              {query ? `${results.length} result${results.length === 1 ? "" : "s"} for "${query}"` : "All published guides"}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
              Open a guide to use its chooser, cost drivers, cheapest-path checklist, and red flags.
            </p>
          </div>
          {query ? (
            <Link href="/search" className="text-sm font-semibold text-zinc-950 hover:underline">
              Clear search
            </Link>
          ) : null}
        </div>

        {results.length ? (
          <div className="mt-7 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((guide, index) => (
              <GuideCard key={guide.slug} guide={guide} priority={index === 0} />
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-6">
            <h3 className="font-semibold text-zinc-950">No exact guide yet</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
              Try a broader term or browse a nearby category. This also shows which topics should become new guides next.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.slice(0, 6).map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:border-zinc-400"
                >
                  {category.name}
                  <ArrowRight className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
