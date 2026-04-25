import { notFound } from "next/navigation";
import { Check, CircleDollarSign } from "lucide-react";
import { ClothesShippingEstimator } from "@/components/cost-estimator";
import { categories, getCategory, getGuide, guides } from "@/data/site-content";
import { createMetadata, jsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return createMetadata({
    title: guide.title,
    description: guide.description,
    path: `/cheapest-way-to/${guide.slug}`,
    keywords: [guide.primaryKeyword, ...guide.secondaryKeywords]
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const category = getCategory(guide.category);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    dateModified: guide.updated,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    },
    mainEntityOfPage: `${siteConfig.url}/cheapest-way-to/${guide.slug}`
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqData)} />
      <article>
        <section className="border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-4xl px-4 py-12">
            <p className="text-sm font-medium text-emerald-700">{category?.name || "Cost Comparison"}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">{guide.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-zinc-600">{guide.description}</p>
            <p className="mt-4 text-sm text-zinc-500">Updated {guide.updated}</p>
          </div>
        </section>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-start gap-3">
                <CircleDollarSign className="mt-1 size-5 shrink-0 text-emerald-800" />
                <div>
                  <h2 className="text-xl font-semibold text-zinc-950">Cheapest answer</h2>
                  <p className="mt-2 leading-7 text-zinc-700">{guide.verdict}</p>
                </div>
              </div>
            </section>

            {guide.slug === "ship-clothes" ? <ClothesShippingEstimator /> : null}

            <section>
              <h2 className="text-2xl font-semibold text-zinc-950">Compare your options</h2>
              <div className="mt-5 overflow-hidden rounded-lg border border-zinc-200">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-zinc-100 text-zinc-700">
                    <tr>
                      <th className="p-4 font-medium">Option</th>
                      <th className="p-4 font-medium">Cost signal</th>
                      <th className="p-4 font-medium">Best for</th>
                      <th className="p-4 font-medium">Watch out for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white">
                    {guide.options.map((option) => (
                      <tr key={option.name}>
                        <td className="p-4 font-medium text-zinc-950">{option.name}</td>
                        <td className="p-4 text-zinc-700">{option.cost}</td>
                        <td className="p-4 text-zinc-700">{option.bestFor}</td>
                        <td className="p-4 text-zinc-700">{option.watchOut}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-950">Keyword coverage</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[guide.primaryKeyword, ...guide.secondaryKeywords].map((keyword) => (
                  <div key={keyword} className="flex items-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
                    <Check className="size-4 text-emerald-700" />
                    {keyword}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-950">FAQs</h2>
              <div className="mt-4 divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white">
                {guide.faqs.map((faq) => (
                  <div key={faq.question} className="p-5">
                    <h3 className="font-semibold text-zinc-950">{faq.question}</h3>
                    <p className="mt-2 leading-7 text-zinc-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-lg border border-zinc-200 bg-white p-5 lg:sticky lg:top-6">
            <h2 className="font-semibold text-zinc-950">Expansion categories</h2>
            <div className="mt-4 grid gap-2">
              {categories.slice(0, 6).map((category) => (
                <a key={category.slug} href={`/category/${category.slug}`} className="text-sm text-zinc-600 hover:text-zinc-950">
                  {category.name}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
