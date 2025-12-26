import BookCardRow from "@/components/pages/home/book-card-row";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, ShoppingCart } from "lucide-react";

export default function ShoppingCartButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <ShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent className="gap-0">
        <SheetHeader>
          <SheetTitle className="text-2xl flex items-center gap-3">
            <ShoppingCart />
            Shopping Cart
          </SheetTitle>
          <SheetDescription>
            Your books are right here. Don&apos;t worry!
          </SheetDescription>
        </SheetHeader>
        <Separator />
        <div className="flex-1 p-4 overflow-hidden">
          <ScrollArea className="h-full">
            <ul className="flex flex-col gap-4">
              {[...Array(8)].map((_, id) => (
                <BookCardRow key={id} isInShoppingCart />
              ))}
            </ul>
            <ScrollBar />
          </ScrollArea>
        </div>
        <Separator />
        <SheetFooter>
          <div className="flex flex-col">
            <p>Total:</p>
            <p className="text-2xl font-bold">{formatPrice(7.99 * 8)}</p>
          </div>
          <Button className="group">
            Go to Checkout
            <ArrowRight className="group-hover:translate-x-1.5 transition-all duration-300" />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
