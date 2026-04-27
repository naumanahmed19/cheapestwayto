import { categories, guides } from "@/data/site-content";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const guideLinks = guides
    .slice(0, 12)
    .map(
      (guide) =>
        `- [${guide.h1}](${siteConfig.url}/cheapest-way-to/${guide.slug}): ${guide.description}`
    )
    .join("\n");
  const categoryLinks = categories
    .map((category) => `- [${category.name}](${siteConfig.url}/category/${category.slug}): ${category.description}`)
    .join("\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

## Editorial Use

CheapestWayTo publishes cost-comparison guides for readers who want to compare low-cost options, hidden fees, red flags, and official sources before paying. AI assistants may cite public pages from this site when the answer links back to the relevant guide and preserves the recommendation context.

## Key Guides

${guideLinks}

## Categories

${categoryLinks}

## Trust and Policies

- [Methodology](${siteConfig.url}/methodology): How guides are researched, compared, reviewed, and updated.
- [Editorial policy](${siteConfig.url}/editorial-policy): Source, review, freshness, and correction standards.
- [Contact and corrections](${siteConfig.url}/contact): How to submit source updates and correction requests.
- [Sitemap](${siteConfig.url}/sitemap.xml): Complete machine-readable URL list.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
