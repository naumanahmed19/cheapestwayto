import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact CheapestWayTo",
  description:
    "Contact CheapestWayTo for editorial corrections, source updates, privacy questions, and feedback on cost comparison guides.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#ff385c]">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Contact CheapestWayTo
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Send source updates, correction requests, and feedback about comparison guides to the editorial team.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Editorial corrections</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            Email{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="font-semibold text-zinc-950 hover:underline">
              {siteConfig.contactEmail}
            </a>{" "}
            with the page URL, the claim that needs review, and the source that supports the correction.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">What to include</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            Helpful requests include a provider pricing page, government fee schedule, calculator result, or screenshot showing a changed rule. The {siteConfig.editorialName} reviews updates for source quality before changing a guide.
          </p>
        </div>
        <div>
          <Link href="/methodology" className="text-sm font-semibold text-zinc-950 hover:underline">
            Read the methodology
          </Link>
        </div>
      </section>
    </main>
  );
}
