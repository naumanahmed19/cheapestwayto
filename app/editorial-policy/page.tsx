import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Editorial Policy",
  description:
    "How CheapestWayTo researches, reviews, and updates cost comparison guides, including source and accuracy standards.",
  path: "/editorial-policy"
});

export default function EditorialPolicyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#ff385c]">Editorial standards</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">Editorial policy</h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            CheapestWayTo guides are written to help readers compare real-world cost options, not to push one provider as universally cheapest.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Research standards</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            Guides prioritize official sources, provider pricing pages, government agencies, published fee schedules, and clearly stated assumptions. Where exact prices vary, we explain the cost drivers readers should check.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Updates</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            Each guide carries an updated date. Time-sensitive topics should be checked against current provider or agency pages before a reader books, files, ships, or pays.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Corrections</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            When a pricing rule, source, or recommendation changes, the affected guide should be corrected and its updated date changed so readers and search engines can see the freshness signal.
          </p>
        </div>
        <div>
          <Link href="/about" className="text-sm font-semibold text-zinc-950 hover:underline">
            Back to about
          </Link>
        </div>
      </section>
    </main>
  );
}
