import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const book = {
  title: "Frieren: Beyond Journey's End Vol.1",
  cover: "test.jpg",
  author: "Yamada Kanehito",
  rating: 4.43,
  ratingCount: 1531,
  price: 7.99,
  oldPrice: 9.99,
  isSales: true,
  isBestseller: true,
};

export default function BookCard() {
  return (
    <div className="relative flex flex-col rounded-md overflow-hidden group">
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1.5">
        {book.isBestseller && <Badge variant="secondary">Bestseller</Badge>}

        {book.isSales && (
          <Badge variant="destructive">
            Sale {Math.floor((1 - book.price / book.oldPrice) * 100)}%
          </Badge>
        )}
      </div>

      <Image src={`/${book.cover}`} alt="Book's cover" fill />

      <div className="absolute top-0 left-0 size-full bg-linear-to-t from-card to-transparent group-hover:bg-muted/80 transition-colors duration-300">
        <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1">
          <p className="text-xs text-foreground/80 line-clamp-1">
            {book.author}
          </p>
          <Link
            href="/shop/book/1"
            className="text-base font-bold tracking-tighter leading-tight line-clamp-2 hover:underline underline-offset-2"
          >
            {book.title}
          </Link>
          <div className="flex items-center gap-2 mt-1">
            <Rating
              defaultValue={Math.floor(book.rating)}
              readOnly
              className="gap-0"
            >
              {Array.from({ length: 5 }).map((_, id) => (
                <RatingButton key={id} size={14} className="text-yellow-500" />
              ))}
            </Rating>
            <span className="text-xs font-semibold">{book.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({book.ratingCount})
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-xl font-bold">{formatPrice(book.price)}</p>
            <s className="text-xs text-foreground/80">
              {formatPrice(book.oldPrice)}
            </s>
            <Button size="sm" className="ml-auto">
              <ShoppingCart />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
