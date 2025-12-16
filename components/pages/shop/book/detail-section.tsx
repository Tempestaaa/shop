import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { formatPrice } from "@/lib/utils";
import {
  Bookmark,
  Heart,
  Minus,
  Plus,
  Share2,
  ShoppingCart,
} from "lucide-react";

const bookGenres = [
  "Fiction",
  "Nonfiction",
  "Fantasy",
  "Children's Literature",
  "Science Fiction",
  "Mystery",
  "Thriller",
  "Architecture",
  "Religion & Spirituality",
  "Horror",
  "Romance",
  "Historical Fiction",
  "Literary Fiction",
  "Young Adult",
  "Poetry",
  "Photography",
  "Drama",
  "Biography",
  "Cookbooks, Food & Wine",
  "History",
  "Science & Technology",
  "Philosophy",
  "Self-Help",
  "Travel",
  "True Crime",
  "Graphic Novel",
];

export default function DetailSection() {
  return (
    <section className="col-span-9 bg-card p-4 rounded-md flex flex-col gap-1.5">
      <Badge>Bestseller</Badge>
      <h1 className="text-3xl font-bold tracking-tighter line-clamp-2">
        Frieren: Beyond Journey's End Vol.1
      </h1>
      <p className="text-muted-foreground italic">Yamada Kanehito</p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Rating defaultValue={4.43} readOnly className="gap-0">
            {[...Array(5)].map((_, id) => (
              <RatingButton key={id} className="text-yellow-500 " size={24} />
            ))}
          </Rating>
          <span className="text-base font-bold">{4.43}</span>
        </div>
        <span className="text-muted-foreground">
          ({(1531).toLocaleString()} reviews)
        </span>
      </div>
      <div className="flex flex-wrap gap-2 mt-1 mb-2">
        {bookGenres.slice(0, 4).map((genre) => (
          <Badge
            key={genre}
            variant="secondary"
            className="shadow-xs shadow-muted-foreground"
          >
            {genre}
          </Badge>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <header className="text-base font-semibold">Description</header>
        <p className="line-clamp-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          error recusandae architecto saepe nulla iste minima est voluptatum.
          Dolorum quo molestias explicabo, corporis porro incidunt natus est
          nihil aliquid mollitia, sequi voluptatem? Unde ipsum quidem vero quis
          obcaecati fugiat officiis quasi commodi tempore. Neque, quasi! Impedit
          quisquam aliquid quas doloribus.
        </p>
      </div>

      <div className="mt-auto space-y-3">
        <div className="">
          <p className="font-semibold">Price</p>
          <div className="flex items-center gap-4">
            <p className="text-3xl font-semibold">{formatPrice(7.99)}</p>
            <s className="text-base text-muted-foreground">
              {formatPrice(9.99)}
            </s>
            <p className="text-muted-foreground">(1.2K products sold)</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <InputGroup className="w-fit">
            <InputGroupButton>
              <Minus />
            </InputGroupButton>
            <InputGroupInput defaultValue={1} className="w-12 text-center" />
            <InputGroupButton>
              <Plus />
            </InputGroupButton>
          </InputGroup>
          <Button className="px-8!">
            <ShoppingCart />
            Add to cart
          </Button>
          <Button variant="secondary">
            <Heart />
          </Button>
          <Button variant="secondary">
            <Bookmark />
          </Button>
          <Button variant="secondary">
            <Share2 />
          </Button>
        </div>
      </div>
    </section>
  );
}
