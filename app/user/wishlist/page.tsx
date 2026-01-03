import BookCardRow from "@/components/pages/home/book-card-row";
import UserWrapper from "@/components/pages/user/user-wrapper";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import Pagination from "@/components/ui/pagination";
import { Search } from "lucide-react";

export default function UserWishListPage() {
  return (
    <UserWrapper header="Wishlist">
      <InputGroup className="w-1/2">
        <InputGroupInput placeholder="Search book" />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <ul className="grid grid-cols-2 gap-4 mb-8">
        {[...Array(10)].map((_, id) => (
          <div
            key={id}
            className="*:outline-2 *:outline-transparent *:hover:outline-foreground *:transition-colors *:duration-300"
          >
            <BookCardRow showBuyOption />
          </div>
        ))}
      </ul>

      <Pagination />
    </UserWrapper>
  );
}
