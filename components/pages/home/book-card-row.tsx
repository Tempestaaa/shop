import InfoSquare from "@/components/pages/home/info-square";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

export default function BookCardRow() {
  return (
    <div className="flex gap-4 p-2 rounded hover:bg-muted transition-colors duration-300 group">
      <figure className="relative w-14 h-20 rounded overflow-hidden shrink-0">
        <Image src="/test.jpg" alt="Book's cover" fill />
        <div className="absolute top-0 left-0 size-full z-10 bg-transparent grid place-items-center group-hover:bg-background/60">
          <ShoppingCart className="scale-0 group-hover:scale-100 transition-transform duration-300 cursor-pointer" />
        </div>
      </figure>

      <div className="flex-1 flex flex-col">
        <p className="text-xs text-muted-foreground line-clamp-1">
          Yamada Kanehito
        </p>

        <header className="line-clamp-1 font-semibold tracking-tighter">
          Frieren: Beyond the Journey&apos;s End Vol.1
        </header>

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
      </div>
    </div>
  );
}
