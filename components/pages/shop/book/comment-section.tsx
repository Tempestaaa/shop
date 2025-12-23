import CommentCard from "@/components/pages/shop/book/comment-card";
import CommentSortButton from "@/components/pages/shop/book/comment-sort-button";
import Pagination from "@/components/ui/pagination";

export default function CommentSection() {
  return (
    <section className="col-span-7 flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <p className="text-base font-bold">
          Community Reviews{" "}
          <span className="text-muted-foreground">(1,531)</span>
        </p>
        <CommentSortButton />
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
