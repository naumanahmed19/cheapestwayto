import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Cost Comparison Methodology",
  description:
    "How CheapestWayTo researches, compares, reviews, and updates cheapest-way guides using official sources, cost drivers, and practical tradeoffs.",
  path: "/methodology"
});

export default function MethodologyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#ff385c]">Research standards</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Cost comparison methodology
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            {siteConfig.name} guides are built to help readers narrow the cheapest practical path before they request a final quote, book, file, ship, repair, or pay.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">How options are compared</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            Each guide starts by identifying the common low-cost routes for a task, then separating fixed costs from costs that change by location, weight, timing, distance, eligibility, service level, or provider rules. We compare the likely cheapest path against convenience, risk, speed, and total out-of-pocket cost.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Source standards</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            Guides prioritize official calculators, government agencies, provider pricing pages, published fee schedules, and sources that let readers verify the final price directly. When an exact price changes too often to quote reliably, the guide explains which details the reader should gather before comparing options.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Review and freshness</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            Published guides show an updated date and are reviewed by the {siteConfig.editorialName}. Time-sensitive topics should be refreshed when provider rules, eligibility thresholds, government fees, shipping rates, or major market conditions change.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Corrections</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            If a source, fee, or recommendation is outdated, readers can send a correction request. The affected guide should be updated with the new source, the changed recommendation if needed, and a fresh updated date.
          </p>
          <Link href="/contact" className="mt-4 inline-flex text-sm font-semibold text-zinc-950 hover:underline">
            Contact the editorial team
          </Link>
        </div>
      </section>
    </main>
  );
}
