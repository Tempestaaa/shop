import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button variant="ghost">
        <ChevronsLeft />
      </Button>
      <Button variant="ghost">
        <ChevronLeft />
      </Button>
      <InputGroup className="w-20">
        <InputGroupInput defaultValue={1} className="text-center" />
        <InputGroupAddon align="inline-end">/ 10</InputGroupAddon>
      </InputGroup>
      <Button variant="ghost">
        <ChevronRight />
      </Button>
      <Button variant="ghost">
        <ChevronsRight />
      </Button>
    </div>
  );
}
