import BookCardRow from "@/components/pages/home/book-card-row";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowRight, Flame } from "lucide-react";

export default function BestsellersCard() {
  return (
    <section className="col-span-4 h-[400px]! bg-card p-4 rounded-md flex flex-col gap-2">
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Flame className="size-5 fill-red-600 text-red-600" />
          <h1 className="text-xl font-bold">Best Sellers</h1>
        </div>

        <Button variant="ghost">
          <ArrowRight />
        </Button>
      </header>

      <div className="flex-1 overflow-y-hidden">
        <ScrollArea className="h-full">
          <ul className="flex flex-col">
            {[...Array(4)].map((_, id) => (
              <BookCardRow key={id} showBuyOption />
            ))}
          </ul>

          <ScrollBar />
        </ScrollArea>
      </div>
    </section>
  );
}
