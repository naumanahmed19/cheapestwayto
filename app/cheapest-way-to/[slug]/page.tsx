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
  FileSearch,
  Gauge,
  Info,
  Layers3,
  ListChecks,
  ReceiptText,
  ShieldCheck,
  TriangleAlert
} from "lucide-react";
import { ClothesShippingEstimator } from "@/components/cost-estimator";
import { GuideDecisionTool } from "@/components/guide-decision-tool";
import { categories, getCategory, getGuide, getGuideDetailContent, guides } from "@/data/site-content";
import { createMetadata, jsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function faviconUrl(url: string) {
  try {
    const { hostname } = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
  } catch {
    return "https://www.google.com/s2/favicons?domain=example.com&sz=64";
  }
}

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
    keywords: [guide.primaryKeyword, ...guide.secondaryKeywords],
    image: guide.image,
    imageAlt: guide.h1,
    type: "article"
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const category = getCategory(guide.category);
  const detailContent = getGuideDetailContent(guide.slug);
  const relatedGuides = guides
    .filter((candidate) => candidate.category === guide.category && candidate.slug !== guide.slug)
    .slice(0, 3);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: [guide.image],
    url: `${siteConfig.url}/cheapest-way-to/${guide.slug}`,
    datePublished: guide.updated,
    dateModified: guide.updated,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon`
      }
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
      ...(category
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: category.name,
              item: `${siteConfig.url}/category/${category.slug}`
            }
          ]
        : []),
      {
        "@type": "ListItem",
        position: category ? 3 : 2,
        name: guide.h1,
        item: `${siteConfig.url}/cheapest-way-to/${guide.slug}`
      }
    ]
  };
  const optionListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${guide.h1} options`,
    itemListElement: guide.options.map((option, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: option.name,
      description: `${option.cost}. Best for: ${option.bestFor}. Watch out for: ${option.watchOut}.`
    }))
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqData)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbData)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(optionListData)} />
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
                alt={guide.h1}
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

            {detailContent ? (
              <>
                <section>
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                    <div>
                      <h2 className="text-2xl font-semibold text-zinc-950">Where to check first</h2>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
                        Start with these specific sites or tools, then verify the final price and terms before paying.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 lg:grid-cols-3">
                    {detailContent.tools.map((tool) => (
                      <a
                        key={tool.url}
                        href={tool.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex min-h-64 flex-col justify-between rounded-lg border border-zinc-200 bg-white p-5 transition hover:border-zinc-400 hover:shadow-sm"
                      >
                        <span>
                          <span className="flex items-start justify-between gap-4">
                            <span className="flex min-w-0 items-start gap-3">
                              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white shadow-sm">
                                <Image
                                  src={faviconUrl(tool.url)}
                                  alt={`${tool.name} logo`}
                                  width={28}
                                  height={28}
                                  unoptimized
                                  className="rounded-sm"
                                />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-semibold text-[#ff385c]">{tool.bestFor}</span>
                                <span className="mt-2 block text-xl font-semibold tracking-tight text-zinc-950">{tool.name}</span>
                              </span>
                            </span>
                            <ExternalLink className="size-4 shrink-0 text-zinc-500 transition group-hover:text-zinc-950" />
                          </span>
                          <span className="mt-4 block text-sm leading-6 text-zinc-700">{tool.useWhen}</span>
                        </span>
                        <span className="mt-5 block rounded-lg bg-[#f7f7f7] p-3 text-sm leading-6 text-zinc-600">
                          <strong className="text-zinc-950">Watch:</strong> {tool.watchOut}
                        </span>
                      </a>
                    ))}
                  </div>
                </section>

                <section className="grid gap-5 lg:grid-cols-2">
                  <div className="rounded-lg border border-zinc-200 bg-white p-5">
                    <div className="flex items-center gap-3">
                      <ListChecks className="size-5 text-[#ff385c]" />
                      <h2 className="text-xl font-semibold text-zinc-950">Quote checklist</h2>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      Gather these before comparing prices so every quote uses the same assumptions.
                    </p>
                    <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-700">
                      {detailContent.quoteChecklist.map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-zinc-200 bg-white p-5">
                    <div className="flex items-center gap-3">
                      <ReceiptText className="size-5 text-amber-600" />
                      <h2 className="text-xl font-semibold text-zinc-950">Hidden costs to verify</h2>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      These are the common add-ons that make the cheapest-looking option more expensive.
                    </p>
                    <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-700">
                      {detailContent.hiddenFees.map((fee) => (
                        <li key={fee} className="flex gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-500" />
                          <span>{fee}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3">
                    <FileSearch className="size-5 text-[#ff385c]" />
                    <h2 className="text-2xl font-semibold text-zinc-950">Example situations</h2>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
                    Use these as thinking models, then verify the final price with your exact details.
                  </p>
                  <div className="mt-5 grid gap-4 lg:grid-cols-3">
                    {detailContent.examples.map((example) => (
                      <div key={example.title} className="rounded-lg border border-zinc-200 bg-white p-5">
                        <h3 className="font-semibold text-zinc-950">{example.title}</h3>
                        <div className="mt-4 grid gap-3 text-sm leading-6">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Situation</p>
                            <p className="mt-1 text-zinc-700">{example.situation}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Compare</p>
                            <p className="mt-1 text-zinc-700">{example.compare}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Likely cheapest</p>
                            <p className="mt-1 font-semibold text-zinc-950">{example.likelyCheapest}</p>
                          </div>
                        </div>
                        <p className="mt-4 rounded-lg bg-[#f7f7f7] p-3 text-sm leading-6 text-zinc-700">{example.note}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-zinc-950 shadow-sm">
                      <Info className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-500">Recommendation confidence</p>
                      <h2 className="mt-1 text-xl font-semibold text-zinc-950">{detailContent.confidence.label}</h2>
                      <p className="mt-2 leading-7 text-zinc-700">{detailContent.confidence.note}</p>
                      <div className="mt-4 border-t border-zinc-200 pt-4">
                        <p className="text-sm font-semibold text-zinc-950">What still needs a live check</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {detailContent.confidence.missingData.map((item) => (
                            <span key={item} className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-zinc-700 shadow-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ) : null}

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

            {relatedGuides.length ? (
              <section>
                <h2 className="text-2xl font-semibold text-zinc-950">Related guides</h2>
                <div className="mt-4 grid gap-3">
                  {relatedGuides.map((relatedGuide) => (
                    <Link
                      key={relatedGuide.slug}
                      href={`/cheapest-way-to/${relatedGuide.slug}`}
                      className="group rounded-lg border border-zinc-200 bg-white p-4 transition hover:border-zinc-400"
                    >
                      <span className="flex items-center justify-between gap-4">
                        <span className="font-semibold text-zinc-950">{relatedGuide.h1}</span>
                        <ArrowUpRight className="size-4 shrink-0 text-zinc-500 transition group-hover:text-zinc-950" />
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-zinc-600">{relatedGuide.description}</span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

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
