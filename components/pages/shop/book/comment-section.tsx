import CommentCard from "@/components/pages/shop/book/comment-card";
import Pagination from "@/components/ui/pagination";

export default function CommentSection() {
  return (
    <section className="col-span-7 flex flex-col gap-4">
      <header className="text-base font-bold">
        Community Reviews <span className="text-muted-foreground">(1,531)</span>
      </header>
      <ul className="flex flex-col gap-4">
        {[...Array(5)].map((_, id) => (
          <CommentCard key={id} />
        ))}
      </ul>
      <div className="mt-4">
        <Pagination />
      </div>
    </section>
  );
}
