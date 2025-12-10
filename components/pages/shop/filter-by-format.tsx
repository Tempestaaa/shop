import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

const bookFormats = [
  "Ebook",
  "Mass Market Paperback",
  "Trade Paperback",
  "Hardcover",
  "Textbook",
];

export default function FilterByFormat() {
  return (
    <section className="space-y-2">
      <header className="text-base font-semibold flex items-center gap-2">
        <BookOpen className="size-4" />
        <span>Format</span>
      </header>
      <ul className="flex flex-wrap gap-2">
        {bookFormats.map((format) => (
          <Label
            key={format}
            className="grid place-items-center text-center rounded-md border-2 border-transparent hover:border-foreground hover:bg-muted transition-colors duration-300 cursor-pointer text-muted-foreground has-aria-checked:border-foreground has-aria-checked:bg-muted has-aria-checked:text-foreground"
          >
            <Checkbox className="sr-only" />
            <span className="px-4 py-2">{format}</span>
          </Label>
        ))}
      </ul>
    </section>
  );
}
