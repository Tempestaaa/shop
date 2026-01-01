import FilterButton from "@/components/pages/shop/filter-button";
import BookCard from "@/components/shared/book-card";
import SortButton from "@/components/shared/sort-button";
import Pagination from "@/components/ui/pagination";
import { bookShopSortOptions } from "@/lib/meta";

export default function ShopPage() {
  const sortOptions = bookShopSortOptions;

  return (
    <div className="flex flex-col gap-4 py-4">
      <section className="flex items-center justify-between bg-card py-2 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <h1 className="text-base font-semibold tracking-tighter">
            All Products
          </h1>
          <p className="text-muted-foreground">
            (Displaying 12 out of 120 products)
          </p>
        </div>
        <div className="flex items-center">
          <SortButton sortOptions={sortOptions} />
          <FilterButton />
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(308px,1fr))] gap-4">
        {[...Array(12)].map((_, id) => (
          <div
            key={id}
            className="*:h-110 *:outline-2 *:outline-transparent *:hover:outline-foreground *:transition-colors *:duration-300"
          >
            <BookCard />
          </div>
        ))}
      </section>

      <section className="mt-4">
        <Pagination />
      </section>
    </div>
  );
}
