import type { MetadataRoute } from "next";
import { categories, guides } from "@/data/site-content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestGuideDate = new Date(Math.max(...guides.map((guide) => new Date(guide.updated).getTime())));

  return [
    {
      url: siteConfig.url,
      lastModified: latestGuideDate,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteConfig.url}/cheapest-way-to`,
      lastModified: latestGuideDate,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: latestGuideDate,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${siteConfig.url}/editorial-policy`,
      lastModified: latestGuideDate,
      changeFrequency: "monthly",
      priority: 0.6
    },
    ...categories.map((category) => ({
      url: `${siteConfig.url}/category/${category.slug}`,
      lastModified: new Date(
        Math.max(
          ...guides
            .filter((guide) => guide.category === category.slug)
            .map((guide) => new Date(guide.updated).getTime()),
          latestGuideDate.getTime()
        )
      ),
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...guides.map((guide) => ({
      url: `${siteConfig.url}/cheapest-way-to/${guide.slug}`,
      lastModified: new Date(guide.updated),
      changeFrequency: "monthly" as const,
      priority: 0.9
    }))
  ];
}
