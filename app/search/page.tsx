import Link from "next/link";
import { CategorySearchForm } from "@/components/category-search-form";
import { GuideCard } from "@/components/guide-card";
import { categories, getCategory, getGuideDetailContent, guides, keywordBacklog, normalizeSearchTerm } from "@/data/site-content";
import { createMetadata, jsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type SearchPageProps = {
  searchParams: Promise<{ q?: string; category?: string }>;
};

export const metadata = {
  ...createMetadata({
    title: "Search CheapestWayTo Guides",
    description: "Search published CheapestWayTo comparison guides and research topics.",
    path: "/search",
    image: guides[0]?.image,
    imageAlt: "Search CheapestWayTo guides"
  }),
  robots: {
    index: false,
    follow: true
  }
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q, category } = await searchParams;
  const query = typeof q === "string" ? q.trim() : "";
  const selectedCategory = categories.find((item) => item.slug === category);
  const selectedCategorySlug = selectedCategory?.slug ?? "";
  const normalizedQuery = query.toLowerCase();
  const searchLabel = query ? normalizeSearchTerm(query) : "";
  const scopedGuides = selectedCategorySlug ? guides.filter((guide) => guide.category === selectedCategorySlug) : guides;
  const matchingGuides = query
    ? scopedGuides.filter((guide) => {
        const category = getCategory(guide.category);
        const detailContent = getGuideDetailContent(guide.slug);
        const haystack = [
          guide.title,
          guide.h1,
          guide.description,
          guide.primaryKeyword,
          ...guide.secondaryKeywords,
          guide.listingMeta,
          category?.name || "",
          ...(detailContent?.quoteChecklist ?? []),
          ...(detailContent?.hiddenFees ?? []),
          ...(detailContent?.tools.flatMap((tool) => [tool.name, tool.bestFor, tool.useWhen, tool.watchOut]) ?? []),
          ...(detailContent?.examples.flatMap((example) => [
            example.title,
            example.situation,
            example.compare,
            example.likelyCheapest,
            example.note
          ]) ?? [])
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(normalizedQuery.replace(/^cheapest way to\s+/i, "")) || haystack.includes(normalizedQuery);
      })
    : scopedGuides;
  const suggestionsSource = selectedCategory
    ? [
        ...selectedCategory.examples.map((example) => normalizeSearchTerm(example)),
        ...scopedGuides.flatMap((guide) => [guide.primaryKeyword, ...guide.secondaryKeywords])
      ]
    : [
        ...new Set([
          ...keywordBacklog,
          ...categories.flatMap((category) => category.examples.map((example) => normalizeSearchTerm(example)))
        ])
      ];
  const suggestions = [...new Set(suggestionsSource)]
    .filter((term) => !searchLabel || term.toLowerCase().includes(normalizedQuery.replace(/^cheapest way to\s+/i, "")))
    .slice(0, 10);
  const searchUrlParams = new URLSearchParams();
  if (selectedCategorySlug) searchUrlParams.set("category", selectedCategorySlug);
  if (query) searchUrlParams.set("q", query);
  const searchUrl = `${siteConfig.url}/search${searchUrlParams.toString() ? `?${searchUrlParams.toString()}` : ""}`;
  const getSuggestionHref = (suggestion: string) => {
    const params = new URLSearchParams();
    if (selectedCategorySlug) params.set("category", selectedCategorySlug);
    params.set("q", suggestion);
    return `/search?${params.toString()}`;
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    name: query ? `Search results for ${query}` : "Search CheapestWayTo Guides",
    url: searchUrl
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#ff385c]">Search</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              Search cost comparison guides
            </h1>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Find published guides first. Unpublished research topics are kept visible without sending visitors to dead pages.
            </p>
          </div>
          <CategorySearchForm
            categories={categories.map(({ slug, name }) => ({ slug, name }))}
            defaultCategory={selectedCategorySlug}
            defaultQuery={query}
            variant="page"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">
              {query
                ? `Results for "${query}"${selectedCategory ? ` in ${selectedCategory.name}` : ""}`
                : selectedCategory
                  ? `${selectedCategory.name} guides`
                  : "Published guides"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {matchingGuides.length} {matchingGuides.length === 1 ? "guide" : "guides"} available.
            </p>
          </div>
          <Link href="/cheapest-way-to" className="text-sm font-semibold text-zinc-950 hover:underline">
            View all guides
          </Link>
        </div>

        {matchingGuides.length ? (
          <div className="mt-7 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {matchingGuides.map((guide, index) => (
              <GuideCard key={guide.slug} guide={guide} priority={index < 2} />
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
            <h3 className="font-semibold text-zinc-950">No exact published guide yet</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              This topic can stay in the research queue until a full guide exists with sources and real cost checks.
            </p>
          </div>
        )}
      </section>

      {suggestions.length ? (
        <section className="border-t border-zinc-200 bg-[#f7f7f7]">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-zinc-950">Research topics</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <Link
                  key={suggestion}
                  href={getSuggestionHref(suggestion)}
                  className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-zinc-700 shadow-sm hover:text-zinc-950"
                >
                  {suggestion.replace("cheapest way to ", "")}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
