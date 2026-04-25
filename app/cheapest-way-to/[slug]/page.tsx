import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  ExternalLink,
  Gauge,
  Layers3,
  ShieldCheck,
  TriangleAlert
} from "lucide-react";
import { ClothesShippingEstimator } from "@/components/cost-estimator";
import { GuideDecisionTool } from "@/components/guide-decision-tool";
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
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqData)} />
      <article>
        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-14">
            <div className="flex flex-col justify-center">
              <Link
                href={category ? `/category/${category.slug}` : "/"}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-800 hover:border-zinc-400"
              >
                {category?.name || "Cost Comparison"}
                <ArrowUpRight className="size-4" />
              </Link>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">{guide.h1}</h1>
              <p className="mt-5 text-lg leading-8 text-zinc-600">{guide.description}</p>
              <div className="mt-7 grid gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-lg border border-zinc-200 bg-white p-4">
                  <Clock3 className="size-5 text-[#ff385c]" />
                  <p className="mt-2 font-semibold text-zinc-950">Updated</p>
                  <p className="mt-1 text-zinc-500">{guide.updated}</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-white p-4">
                  <Layers3 className="size-5 text-amber-600" />
                  <p className="mt-2 font-semibold text-zinc-950">Options</p>
                  <p className="mt-1 text-zinc-500">{guide.options.length} comparisons</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-white p-4">
                  <ShieldCheck className="size-5 text-emerald-600" />
                  <p className="mt-2 font-semibold text-zinc-950">Focus</p>
                  <p className="mt-1 text-zinc-500">Fees and tradeoffs</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-lg bg-zinc-100 lg:min-h-[460px]">
              <Image
                src={guide.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-lg">
                {guide.listingMeta}
              </div>
            </div>
          </div>
        </section>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
          <div className="space-y-8">
            <section className="rounded-lg border border-[#ff385c]/20 bg-[#fff8fa] p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#ff385c] text-white">
                  <CircleDollarSign className="size-5" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-zinc-950">Cheapest answer</h2>
                  <p className="mt-2 leading-7 text-zinc-700">{guide.verdict}</p>
                </div>
              </div>
            </section>

            <GuideDecisionTool guide={guide} />

            {guide.slug === "ship-clothes" ? <ClothesShippingEstimator /> : null}

            <section>
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-950">Compare your options</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">Scan cost signals, best-fit situations, and common gotchas before choosing.</p>
                </div>
              </div>
              <div className="mt-5 overflow-x-auto rounded-lg border border-zinc-200">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                  <thead className="bg-[#f7f7f7] text-zinc-700">
                    <tr>
                      <th className="p-4 font-medium">Option</th>
                      <th className="p-4 font-medium">Cost signal</th>
                      <th className="p-4 font-medium">Best for</th>
                      <th className="p-4 font-medium">Watch out for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white">
                    {guide.options.map((option) => (
                      <tr key={option.name} className="align-top">
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

            <section className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-zinc-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <Gauge className="size-5 text-[#ff385c]" />
                  <h2 className="text-xl font-semibold text-zinc-950">What changes the price</h2>
                </div>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-700">
                  {guide.costDrivers.map((driver) => (
                    <li key={driver} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span>{driver}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-zinc-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="size-5 text-emerald-600" />
                  <h2 className="text-xl font-semibold text-zinc-950">Cheapest practical path</h2>
                </div>
                <ol className="mt-4 grid gap-3 text-sm leading-6 text-zinc-700">
                  {guide.cheapestPath.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-700">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 lg:col-span-2">
                <div className="flex items-center gap-3">
                  <TriangleAlert className="size-5 text-amber-700" />
                  <h2 className="text-xl font-semibold text-zinc-950">Red flags before you pay</h2>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {guide.redFlags.map((flag) => (
                    <div key={flag} className="flex gap-2 text-sm leading-6 text-zinc-800">
                      <TriangleAlert className="mt-0.5 size-4 shrink-0 text-amber-700" />
                      <span>{flag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-950">Sources to check before booking</h2>
              <div className="mt-4 grid gap-3">
                {guide.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-lg border border-zinc-200 bg-white p-4 transition hover:border-zinc-400"
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-zinc-950">{source.label}</span>
                      <ExternalLink className="size-4 shrink-0 text-zinc-500 transition group-hover:text-zinc-950" />
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-zinc-600">{source.note}</span>
                  </a>
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

          <aside className="h-fit rounded-lg border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <h2 className="font-semibold text-zinc-950">At a glance</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-zinc-500">Category</span>
                <span className="font-semibold text-zinc-950">{category?.name || "Costs"}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-zinc-500">Options</span>
                <span className="font-semibold text-zinc-950">{guide.options.length}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-zinc-500">Updated</span>
                <span className="font-semibold text-zinc-950">{guide.updated}</span>
              </div>
            </div>
            <div className="mt-6 border-t border-zinc-200 pt-5">
              <h3 className="text-sm font-semibold text-zinc-950">More categories</h3>
              <div className="mt-4 grid gap-3">
              {categories.slice(0, 6).map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`} className="flex items-center justify-between text-sm text-zinc-600 hover:text-zinc-950">
                  {category.name}
                  <ArrowUpRight className="size-3.5" />
                </Link>
              ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
