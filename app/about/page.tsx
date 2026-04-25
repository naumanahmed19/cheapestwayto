import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "About CheapestWayTo",
  description:
    "Learn how CheapestWayTo compares everyday costs, tradeoffs, sources, and assumptions across practical money-saving guides.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#ff385c]">{siteConfig.name}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">About CheapestWayTo</h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            CheapestWayTo is a practical guide library for comparing everyday costs. Each guide is built to show the cheapest likely path, the tradeoffs that can change the answer, hidden fees to check, and sources worth verifying before paying.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">How guides are built</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            We compare common options, separate low upfront prices from total cost, and call out situations where the cheapest choice stops being practical. Guides are reviewed for source quality, clear assumptions, and current cost caveats.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">What to verify</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            Final prices can change by location, timing, weight, distance, fees, eligibility, and provider rules. Use each guide as a comparison framework, then confirm live prices directly with the provider or official agency.
          </p>
        </div>
        <div>
          <Link href="/editorial-policy" className="text-sm font-semibold text-zinc-950 hover:underline">
            Read the editorial policy
          </Link>
        </div>
      </section>
    </main>
  );
}
