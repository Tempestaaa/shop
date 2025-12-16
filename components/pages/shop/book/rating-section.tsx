import RatingRow from "@/components/pages/shop/book/rating-row";
import { Dot, Star } from "lucide-react";

const ratings = [
  {
    label: "5",
    value: 1131,
  },
  {
    label: "4",
    value: 104,
  },
  {
    label: "3",
    value: 93,
  },
  {
    label: "2",
    value: 125,
  },
  {
    label: "1",
    value: 78,
  },
];

export default function RatingSection() {
  return (
    <section className="col-span-6 p-4 rounded-md">
      <header className="text-base font-bold">Rating</header>
      <div className="flex items-center gap-2 my-2">
        <Star className="size-6 text-yellow-500 fill-yellow-500" />
        <span className="text-base font-semibold">4.43</span>
        <Dot className="size-4" />
        <span className="text-base font-semibold">1531 reviews</span>
      </div>
      <ul className="mt-3 bg-card rounded-md p-2">
        {ratings.map((item) => (
          <RatingRow
            key={item.label}
            label={item.label}
            value={item.value}
            total={1531}
          />
        ))}
      </ul>
    </section>
  );
}
