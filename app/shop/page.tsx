import BookCard from "@/components/shared/book-card";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";

export default function ShopPage() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-base font-semibold tracking-tighter">
            All Products
          </h1>
          <p className="text-muted-foreground">
            (Displaying 12 out of 120 products)
          </p>
        </div>
        <div className="flex items-center">
          <Button variant="ghost">Sort by</Button>
          <Button variant="ghost">Filters</Button>
        </div>
      </section>

      <section className="grid grid-cols-4 gap-4">
        {[...Array(12)].map((_, id) => (
          <div key={id} className="*:h-110">
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
