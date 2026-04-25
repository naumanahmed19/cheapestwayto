import Link from "next/link";
import { CircleDollarSign } from "lucide-react";
import { HeaderSearch } from "@/components/header-search";
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
          <HeaderSearch categories={categories.map(({ slug, name }) => ({ slug, name }))} />
        </div>
      </div>
    </header>
  );
}
