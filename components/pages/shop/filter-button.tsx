import FilterByGenre from "@/components/pages/shop/filter-by-genre";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { ListFilter } from "lucide-react";

export default function FilterButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Filters</Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl!">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <ListFilter />
            <span>Filters</span>
          </DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            {[...Array(4)].map((_, id) => (
              <Badge
                key={id}
                className="cursor-pointer hover:bg-muted-foreground transition-colors duration-300"
              >
                Filter {id + 1}
              </Badge>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col justify-start!">
          <FilterByGenre />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
