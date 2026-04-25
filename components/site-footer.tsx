import Link from "next/link";
import { categories } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-[#f7f7f7] text-zinc-700">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <p className="text-base font-semibold text-zinc-950">CheapestWayTo</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
            Practical cost comparisons for everyday decisions, built around transparent assumptions and useful tools.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/cheapest-way-to" className="text-sm font-semibold text-zinc-950 hover:underline">
            All guides
          </Link>
          <Link href="/search" className="text-sm font-semibold text-zinc-950 hover:underline">
            Search
          </Link>
          <Link href="/about" className="text-sm font-semibold text-zinc-950 hover:underline">
            About
          </Link>
          <Link href="/editorial-policy" className="text-sm font-semibold text-zinc-950 hover:underline">
            Editorial policy
          </Link>
          <Link href="/privacy-policy" className="text-sm font-semibold text-zinc-950 hover:underline">
            Privacy policy
          </Link>
          <Link href="/terms" className="text-sm font-semibold text-zinc-950 hover:underline">
            Terms
          </Link>
          <Link href="/cookie-policy" className="text-sm font-semibold text-zinc-950 hover:underline">
            Cookie policy
          </Link>
          {categories.slice(0, 8).map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className="text-sm hover:text-zinc-950">
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
