import InfoSquare from "@/components/pages/home/info-square";
import { InputGroup, InputGroupButton } from "@/components/ui/input-group";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  showBuyOption?: boolean;
  isInShoppingCart?: boolean;
};

export default function BookCardRow({
  showBuyOption = false,
  isInShoppingCart = false,
}: Props) {
  return (
    <div className="flex gap-4 p-2 rounded hover:bg-muted transition-colors duration-300 group">
      <figure className="relative w-14 h-20 rounded overflow-hidden shrink-0">
        <Image src="/test.jpg" alt="Book's cover" fill />
        {showBuyOption && (
          <div className="absolute top-0 left-0 size-full z-10 bg-transparent grid place-items-center group-hover:bg-background/60">
            <ShoppingCart className="scale-0 group-hover:scale-100 transition-transform duration-300 cursor-pointer" />
          </div>
        )}
      </figure>

      <div className="flex-1 flex flex-col">
        <p className="text-xs text-muted-foreground line-clamp-1">
          Yamada Kanehito
        </p>

        <Link
          href="/shop/book/1"
          className="line-clamp-1 font-semibold tracking-tighter hover:underline underline-offset-2 w-fit"
        >
          Frieren: Beyond the Journey&apos;s End Vol.1
        </Link>

        {isInShoppingCart ? (
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <p>{formatPrice(7.99)}</p>
              <p className="text-muted-foreground">x1</p>
              <InputGroup className="w-fit h-6 ml-4">
                <InputGroupButton>
                  <Minus />
                </InputGroupButton>
                <InputGroupButton>
                  <Plus />
                </InputGroupButton>
              </InputGroup>
            </div>
            <div className="text-base font-bold">{formatPrice(7.99)}</div>
          </div>
        ) : (
          <div className="grid grid-cols-3 divide-x-2 mt-auto">
            <InfoSquare
              label="Rating"
              children={
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-500 fill-yellow-500 size-3" />
                  <span className="font-medium">4.43</span>
                </div>
              }
            />
            <InfoSquare
              label="Reviews"
              children={<p className="font-medium">1531</p>}
            />
            <InfoSquare
              label={formatPrice(9.99)}
              children={<p className="font-medium">{formatPrice(7.99)}</p>}
            />
          </div>
        )}
      </div>
    </div>
  );
}
