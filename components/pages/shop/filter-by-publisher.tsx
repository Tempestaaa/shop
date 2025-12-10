import { Label } from "@/components/ui/label";
import { Printer } from "lucide-react";

const bookPublishers = [
  "Penguin Random House",
  "HarperCollins Publishers",
  "Hachette Livre",
  "Simon & Schuster",
  "Macmillan Publishers",
  "RELX Group",
  "Thomson Reuters",
  "Pearson",
  "Oxford University Press",
  "Springer Nature",
  "Scholastic Corporation",
  "Bloomsbury Publishing",
  "Wiley",
];

export default function FilterByPublisher() {
  return (
    <section className="space-y-2">
      <header className="text-base font-semibold flex items-center gap-2">
        <Printer className="size-4" />
        <span>Publisher</span>
      </header>
      <ul className="flex flex-wrap gap-2">
        {bookPublishers.map((publisher) => (
          <Label
            key={publisher}
            className="grid place-items-center text-center rounded-md border-2 border-transparent hover:border-foreground hover:bg-muted transition-colors duration-300 cursor-pointer text-muted-foreground has-checked:border-foreground has-checked:bg-muted has-checked:text-foreground"
          >
            <input type="radio" name="publisher" className="sr-only" />
            <span className="px-4 py-2">{publisher}</span>
          </Label>
        ))}
      </ul>
    </section>
  );
}
