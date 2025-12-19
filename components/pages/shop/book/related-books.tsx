import SalesCard from "@/components/pages/home/sales-card";
import BookCard from "@/components/shared/book-card";

export default function RelatedBooks() {
  return (
    <div className="col-span-5 space-y-4">
      <header className="text-base font-bold">Related Books</header>
      <ul className="grid grid-cols-2 gap-4">
        {[...Array(4)].map((_, id) => (
          <div key={id} className="*:h-90">
            <BookCard />
          </div>
        ))}
      </ul>
      <SalesCard />
    </div>
  );
}
