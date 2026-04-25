import Link from "next/link";
import { GuideCard } from "@/components/guide-card";
import { categories, guides } from "@/data/site-content";
import { createMetadata, jsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "All Cheapest Way To Guides",
  description:
    "Browse every CheapestWayTo comparison guide by topic, from shipping and travel to money, legal, home, career, and business costs.",
  path: "/cheapest-way-to",
  image: guides[0]?.image,
  imageAlt: "CheapestWayTo comparison guide library"
});

export default function GuidesIndexPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Cheapest Way To Guides",
    description:
      "Browse every CheapestWayTo comparison guide by topic, from shipping and travel to money, legal, home, career, and business costs.",
    url: `${siteConfig.url}/cheapest-way-to`,
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

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#ff385c]">Guide library</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              All cheapest way guides
            </h1>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Compare practical options, hidden fees, red flags, and source links before choosing the cheapest route.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-800 hover:border-zinc-400"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide, index) => (
            <GuideCard key={guide.slug} guide={guide} priority={index < 2} />
          ))}
        </div>
      </section>
    </main>
  );
}
