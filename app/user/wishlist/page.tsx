import UserWrapper from "@/components/pages/user/user-wrapper";
import BookCard from "@/components/shared/book-card";
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
        <InputGroupInput placeholder="Search voucher" />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <ul className="grid grid-cols-3 gap-4 mb-8">
        {[...Array(9)].map((_, id) => (
          <div
            key={id}
            className="*:h-110 *:outline-2 *:outline-transparent *:hover:outline-foreground *:transition-colors *:duration-300"
          >
            <BookCard />
          </div>
        ))}
      </ul>

      <Pagination />
    </UserWrapper>
  );
}
