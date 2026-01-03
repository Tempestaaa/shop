import CommentCard from "@/components/pages/shop/book/comment-card";
import UserWrapper from "@/components/pages/user/user-wrapper";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import Pagination from "@/components/ui/pagination";
import { Search } from "lucide-react";
import Link from "next/link";

export default function UserReviewsPage() {
  return (
    <UserWrapper header="My Reviews (10)">
      <InputGroup className="w-1/2">
        <InputGroupInput placeholder="Search review" />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <ul className="flex flex-col gap-4 mb-4">
        {[...Array(10)].map((_, id) => (
          <li
            key={id}
            className="flex flex-col gap-2 rounded-md p-2 border-2 border-transparent hover:border-foreground transition-colors duration-300"
          >
            <Link
              href="/shop/book/1"
              className="font-semibold text-base hover:underline underline-offset-2 w-fit"
            >
              Frieren: Beyond the Journey's End Vol.1
            </Link>
            <CommentCard disableHover />
          </li>
        ))}
      </ul>
      <Pagination />
    </UserWrapper>
  );
}
