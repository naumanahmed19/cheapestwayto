"use client";

import { usePathname } from "next/navigation";
import { CategorySearchForm } from "@/components/category-search-form";

type HeaderSearchProps = {
  categories: {
    slug: string;
    name: string;
  }[];
};

export function HeaderSearch({ categories }: HeaderSearchProps) {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/search") return null;

  return <CategorySearchForm categories={categories} variant="header" />;
}
