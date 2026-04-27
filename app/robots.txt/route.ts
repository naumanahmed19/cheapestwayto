import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "anthropic-ai",
  "FacebookBot",
  "Amazonbot"
];

export function GET() {
  const crawlerRules = aiCrawlers.map((crawler) => `User-agent: ${crawler}\nAllow: /`).join("\n\n");
  const body = `User-agent: *
Allow: /

${crawlerRules}

Sitemap: ${siteConfig.url}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
