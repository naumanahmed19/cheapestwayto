import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const updatedDate = "April 25, 2026";
const contactEmail = `privacy@${siteConfig.domain}`;

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How CheapestWayTo handles personal data, server logs, search queries, cookies, third-party links, and privacy rights.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#ff385c]">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            This policy explains what information {siteConfig.name} may process when you browse cost guides, use search, or contact us.
          </p>
          <p className="mt-4 text-sm font-semibold text-zinc-500">Last updated: {updatedDate}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-8 px-4 py-12 leading-7 text-zinc-600 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Who We Are</h2>
          <p className="mt-3">
            {siteConfig.name} publishes informational cost comparison guides. For privacy questions, contact us at{" "}
            <a href={`mailto:${contactEmail}`} className="font-semibold text-zinc-950 hover:underline">
              {contactEmail}
            </a>
            . If the site is later operated by a registered company, this page should be updated with the full legal name and registered address.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Information We Process</h2>
          <p className="mt-3">
            You can browse most pages without creating an account or submitting personal information. Depending on hosting and security tools, we may process technical data such as IP address, browser type, device information, referring page, pages visited, dates and times, and error logs. If you use site search, the search term may be processed to return results. If you email us, we process the information you include in that message.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">How We Use Information</h2>
          <p className="mt-3">
            We use information to operate the website, protect it from abuse, debug errors, understand which guides need improvement, respond to requests, maintain records, and comply with legal obligations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Legal Bases for EU/EEA Visitors</h2>
          <p className="mt-3">
            Where the GDPR applies, our legal bases may include legitimate interests for operating, securing, and improving the site; consent where we ask for optional cookies, analytics, or marketing; contract or pre-contractual steps if you request a service; and legal obligation where records must be kept or disclosed.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">DPO and EU/UK Representative</h2>
          <p className="mt-3">
            We have not appointed a Data Protection Officer. If the site later offers services directly to EU/UK users, monitors their behaviour, or otherwise becomes subject to representative requirements, this page should be updated with the required representative details.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Cookies and Analytics</h2>
          <p className="mt-3">
            The current app loads Google Analytics to understand aggregate guide usage, search behavior, and page performance. Analytics providers may process technical data such as page URL, device details, browser information, approximate location, and interaction events. If advertising, affiliate tracking, embedded third-party widgets, or similar technologies are added later, we should update this policy, publish a cookie inventory, and request consent where required.
          </p>
          <p className="mt-3">
            See the <Link href="/cookie-policy" className="font-semibold text-zinc-950 hover:underline">Cookie Policy</Link> for more detail.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Sharing and Service Providers</h2>
          <p className="mt-3">
            We may share data with hosting, security, infrastructure, email, analytics, or support providers that help run the site. We may also disclose information if required by law, to protect rights and security, or as part of a business transfer.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">International Transfers</h2>
          <p className="mt-3">
            If you visit from outside the country where our providers operate, technical data may be processed in other countries. Where EU data transfer rules apply, appropriate safeguards should be used by the relevant service providers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Retention</h2>
          <p className="mt-3">
            We keep personal data only as long as reasonably needed for the purposes above. Server and security logs are normally kept for a limited period unless needed to investigate abuse, security incidents, or legal issues. Email messages are kept as long as needed to respond and maintain appropriate records.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Your Privacy Rights</h2>
          <p className="mt-3">
            Depending on where you live, you may have rights to access, correct, delete, restrict, export, or object to the processing of your personal data. You may also withdraw consent where processing is based on consent. EU/EEA visitors may lodge a complaint with their local data protection authority.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Automated Decision-Making</h2>
          <p className="mt-3">
            We do not use personal data for automated decisions that produce legal or similarly significant effects.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Children</h2>
          <p className="mt-3">
            This site is intended for general audiences and is not directed to children. We do not knowingly collect personal information from children.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-zinc-950">Changes</h2>
          <p className="mt-3">
            We may update this policy when the site, providers, data practices, or legal requirements change. The updated date at the top shows the latest version.
          </p>
        </div>
      </section>
    </main>
  );
}
