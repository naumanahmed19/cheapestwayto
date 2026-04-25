import Link from "next/link";
import { CircleDollarSign, Search } from "lucide-react";
import { categories } from "@/data/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-950">
          <span className="flex size-9 items-center justify-center rounded-full bg-[#ff385c] text-white">
            <CircleDollarSign className="size-5" />
          </span>
          <span>CheapestWayTo</span>
        </Link>
        <div className="hidden justify-center lg:flex">
          <nav className="flex items-center rounded-full border border-zinc-200 bg-white text-sm font-semibold text-zinc-800 shadow-sm">
            {categories.slice(0, 3).map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="border-r border-zinc-200 px-5 py-3 hover:text-zinc-950"
              >
                {category.name}
              </Link>
            ))}
            <Link href="/search" className="flex items-center gap-3 py-2 pl-5 pr-2">
              <span className="text-zinc-500">Search guides</span>
              <span className="flex size-8 items-center justify-center rounded-full bg-[#ff385c] text-white">
                <Search className="size-4" />
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
