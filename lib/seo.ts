import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({ title, description, path = "/", keywords }: SeoInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c")
  };
}
