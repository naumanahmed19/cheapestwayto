import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const updatedDate = "April 25, 2026";
const contactEmail = `privacy@${siteConfig.domain}`;

export const metadata = createMetadata({
  title: "Terms of Use",
  description: "Terms for using CheapestWayTo cost comparison guides, calculators, search, and related content.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#ff385c]">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">Terms of Use</h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            These terms govern your use of {siteConfig.name}, including guides, calculators, search, and linked resources.
          </p>
          <p className="mt-4 text-sm font-semibold text-zinc-500">Last updated: {updatedDate}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-8 px-4 py-12 leading-7 text-zinc-600 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Acceptance</h2>
          <p className="mt-3">
            By using this site, you agree to these terms. If you do not agree, do not use the site.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Informational Content Only</h2>
          <p className="mt-3">
            The site provides general informational guides and tools. Content is not financial, tax, legal, insurance, professional, or personalized advice. You should verify prices, eligibility, deadlines, fees, laws, and provider rules with official sources or qualified professionals before acting.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">No Guarantee of Prices or Outcomes</h2>
          <p className="mt-3">
            Costs change based on location, timing, provider rules, taxes, fees, availability, personal circumstances, and other factors. We do not guarantee that any option will be available, cheapest, accurate, complete, or suitable for your situation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Calculators and Interactive Tools</h2>
          <p className="mt-3">
            Calculators and decision tools are simplified estimates or comparison aids. They are not quotes, offers, or guarantees. Use them as a starting point and confirm all details directly with relevant providers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Third-Party Links</h2>
          <p className="mt-3">
            Guides may link to third-party websites, official agencies, providers, or resources. We are not responsible for third-party content, pricing, policies, security, or availability.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Affiliate Links and Advertising</h2>
          <p className="mt-3">
            The current site should clearly disclose paid placements, affiliate links, sponsorships, or advertising if they are added. Recommendations should remain based on practical comparison criteria, not payment alone.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Acceptable Use</h2>
          <p className="mt-3">
            Do not misuse the site, interfere with security, scrape at abusive rates, submit malicious code, attempt unauthorized access, or use the site in a way that violates applicable law.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Intellectual Property</h2>
          <p className="mt-3">
            Site content, design, branding, and code are owned by or licensed to the site operator, except where third-party materials are identified. You may link to public pages, but you may not copy substantial portions of the site without permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Disclaimer of Warranties</h2>
          <p className="mt-3">
            The site is provided on an as-is and as-available basis. To the fullest extent permitted by law, we disclaim warranties of accuracy, reliability, fitness for a particular purpose, non-infringement, and uninterrupted availability.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Limitation of Liability</h2>
          <p className="mt-3">
            To the fullest extent permitted by law, the site operator is not liable for indirect, incidental, consequential, special, punitive, or lost-profit damages arising from your use of the site or reliance on its content.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Privacy</h2>
          <p className="mt-3">
            Our <Link href="/privacy-policy" className="font-semibold text-zinc-950 hover:underline">Privacy Policy</Link> explains how information may be processed when you use the site.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Contact</h2>
          <p className="mt-3">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${contactEmail}`} className="font-semibold text-zinc-950 hover:underline">
              {contactEmail}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
