import { categories, guides } from "@/data/site-content";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const guideSections = guides
    .map((guide) => {
      const sources = guide.sources.map((source) => `  - ${source.label}: ${source.url}`).join("\n");
      const options = guide.options
        .map((option) => `  - ${option.name}: ${option.cost}; best for ${option.bestFor}; watch ${option.watchOut}`)
        .join("\n");

      return `## ${guide.h1}

URL: ${siteConfig.url}/cheapest-way-to/${guide.slug}
Primary keyword: ${guide.primaryKeyword}
Updated: ${guide.updated}
Summary: ${guide.description}
Cheapest answer: ${guide.verdict}

Options:
${options}

Sources:
${sources}`;
    })
    .join("\n\n");

  const categoryList = categories
    .map((category) => `- ${category.name}: ${siteConfig.url}/category/${category.slug}`)
    .join("\n");

  const body = `# ${siteConfig.name} Full LLM Context

> ${siteConfig.description}

## Editorial Policy

The ${siteConfig.editorialName} compares common low-cost routes, official sources, cost drivers, hidden fees, and situations where the cheapest-looking option stops being practical. Readers should verify final prices with current provider or agency pages.

## Categories

${categoryList}

${guideSections}

## Policy Links

- Methodology: ${siteConfig.url}/methodology
- Editorial policy: ${siteConfig.url}/editorial-policy
- Contact: ${siteConfig.url}/contact
- Sitemap: ${siteConfig.url}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
