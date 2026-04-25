"use client";

import { Select } from "@base-ui-components/react/select";
import { Check, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

type CategoryOption = {
  slug: string;
  name: string;
};

type CategorySearchFormProps = {
  categories: CategoryOption[];
  defaultCategory?: string;
  defaultQuery?: string;
  className?: string;
  variant?: "hero" | "page" | "header";
};

export function CategorySearchForm({
  categories,
  defaultCategory = "",
  defaultQuery = "",
  className,
  variant = "hero"
}: CategorySearchFormProps) {
  const categoryLabel = (value: string | null) => {
    if (!value) return "All categories";
    return categories.find((category) => category.slug === value)?.name || "All categories";
  };
  const isHero = variant === "hero";
  const isHeader = variant === "header";
  const categoryId = isHeader ? "header-guide-category" : "guide-category";
  const searchId = isHeader ? "header-guide-search" : "guide-search";

  return (
    <form
      action="/search"
      className={cn(
        "grid overflow-hidden rounded-lg border border-zinc-200 bg-white md:rounded-full",
        isHeader
          ? "w-full max-w-xl shadow-sm md:grid-cols-[130px_1fr_auto]"
          : "shadow-xl md:grid-cols-[170px_1fr_auto]",
        isHero ? "mx-auto mt-8 max-w-3xl" : null,
        !isHero && !isHeader ? "mt-7 max-w-2xl" : null,
        className
      )}
    >
      <div className={cn("flex items-center border-b border-zinc-200 text-left md:border-b-0 md:border-r", isHeader ? "min-h-10 px-3 py-2" : "min-h-16 px-5 py-3")}>
        <div className="min-w-0 flex-1">
          <label className="sr-only" htmlFor={categoryId}>
            Category
          </label>
          <Select.Root name="category" defaultValue={defaultCategory}>
            <Select.Trigger
              id={categoryId}
              type="button"
              className={cn(
                "flex w-full items-center justify-between gap-2 bg-transparent text-left font-medium text-zinc-600 outline-none",
                isHeader ? "text-xs" : "mt-1 text-sm"
              )}
            >
              <Select.Value>{categoryLabel}</Select.Value>
              <Select.Icon>
                <ChevronDown className="size-4 text-zinc-500" />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Positioner sideOffset={8} align="start" className="z-50">
                <Select.Popup className="min-w-64 overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 shadow-xl outline-none">
                  <Select.List>
                    <Select.Item
                      value=""
                      className="flex cursor-default items-center justify-between gap-3 rounded-md px-3 py-2 text-sm text-zinc-700 outline-none data-[highlighted]:bg-zinc-100 data-[selected]:font-semibold data-[selected]:text-zinc-950"
                    >
                      <Select.ItemText>All categories</Select.ItemText>
                      <Select.ItemIndicator>
                        <Check className="size-4 text-[#ff385c]" />
                      </Select.ItemIndicator>
                    </Select.Item>
                    {categories.map((category) => (
                      <Select.Item
                        key={category.slug}
                        value={category.slug}
                        className="flex cursor-default items-center justify-between gap-3 rounded-md px-3 py-2 text-sm text-zinc-700 outline-none data-[highlighted]:bg-zinc-100 data-[selected]:font-semibold data-[selected]:text-zinc-950"
                      >
                        <Select.ItemText>{category.name}</Select.ItemText>
                        <Select.ItemIndicator>
                          <Check className="size-4 text-[#ff385c]" />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.List>
                </Select.Popup>
              </Select.Positioner>
            </Select.Portal>
          </Select.Root>
        </div>
      </div>

      <div className={cn("flex items-center", isHeader ? "min-h-10 px-3 py-2" : "min-h-16 px-5 py-3")}>
        <div className="min-w-0 flex-1 text-left">
          <label htmlFor={searchId} className={isHeader ? "sr-only" : "block text-xs font-semibold uppercase tracking-wide text-zinc-950"}>
            Search
          </label>
          <input
            id={searchId}
            name="q"
            type="search"
            defaultValue={defaultQuery}
            placeholder={isHeader ? "Search guides..." : "cheapest way to file taxes, ship clothes, book hotels..."}
            className={cn(
              "w-full bg-transparent text-zinc-600 outline-none placeholder:text-zinc-400",
              isHeader ? "text-xs" : "mt-1 text-sm"
            )}
          />
        </div>
      </div>

      <button
        type="submit"
        aria-label="Search guides"
        className={cn("flex items-center justify-center border-t border-zinc-200 md:border-t-0", isHeader ? "p-1 pr-1.5" : "p-2.5")}
      >
        <span className={cn("flex items-center justify-center rounded-full bg-[#ff385c] text-white transition hover:bg-[#e63253]", isHeader ? "size-8" : "size-11")}>
          <Search className={isHeader ? "size-4" : "size-5"} />
        </span>
      </button>
    </form>
  );
}
