import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const updatedDate = "April 25, 2026";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: "How CheapestWayTo uses cookies, local storage, analytics, and similar technologies.",
  path: "/cookie-policy"
});

export default function CookiePolicyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#ff385c]">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">Cookie Policy</h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            This page explains how {siteConfig.name} uses cookies and similar technologies.
          </p>
          <p className="mt-4 text-sm font-semibold text-zinc-500">Last updated: {updatedDate}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-8 px-4 py-12 leading-7 text-zinc-600 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Current Cookie Use</h2>
          <p className="mt-3">
            The current app does not intentionally set non-essential cookies, advertising trackers, analytics cookies, or browser local storage. It also does not require users to create an account.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Strictly Necessary Technologies</h2>
          <p className="mt-3">
            Hosting, security, CDN, or load-balancing providers may process technical requests or use strictly necessary technologies to deliver pages, protect the site, and keep the service reliable. These are used only where needed for the service to work.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Analytics, Advertising, and Affiliate Tracking</h2>
          <p className="mt-3">
            If analytics, advertising pixels, affiliate tracking, A/B testing, embedded social widgets, or similar non-essential technologies are added later, this page should be updated with a cookie inventory. EU/EEA/UK visitors should be asked for consent before those technologies are used, unless an exemption applies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Managing Cookies</h2>
          <p className="mt-3">
            You can block or delete cookies through your browser settings. If we add optional cookies later, the site should provide a way to accept, reject, and change cookie preferences.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Related Policy</h2>
          <p className="mt-3">
            See the <Link href="/privacy-policy" className="font-semibold text-zinc-950 hover:underline">Privacy Policy</Link> for more information about personal data handling.
          </p>
        </div>
      </section>
    </main>
  );
}
