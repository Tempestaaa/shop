import { Star } from "lucide-react";

type Props = {
  label: string;
  value: number;
  total: number;
};

export default function RatingRow({ label, value, total }: Props) {
  const width = ((value / total) * 100).toFixed(2);

  return (
    <li className="rounded-md border-2 border-transparent hover:border-foreground transition-colors duration-300 cursor-pointer px-4 py-2 grid grid-cols-[4rem_1fr] relative group">
      <div className="flex items-center gap-1">
        {label}
        <Star className="size-4 fill-yellow-500 text-yellow-500" />
      </div>

      <div className="text-muted-foreground h-5 rounded-md bg-muted">
        <div
          style={{ width: `${width}%` }}
          className="h-full bg-yellow-500 rounded-md"
        />
      </div>

      <span className="absolute top-1/2 -translate-y-1/2 right-6 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 z-10">
        {value.toLocaleString()} ({width}%)
      </span>
    </li>
  );
}
