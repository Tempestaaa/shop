"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SearchButton() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative group">
      <InputGroup className="w-72 mr-2">
        <InputGroupInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <div className="w-72 absolute z-10 top-[calc(100%+6px)] bg-background border border-muted p-2 rounded-md hidden group-focus-within:block">
        {query.length > 0 ? (
          <ul>
            <Link
              href="/shop/book/1"
              className="p-2 rounded hover:bg-muted transition-colors duration-300 flex"
            >
              Frieren: Beyond the Journey's End Vol.1
            </Link>
          </ul>
        ) : (
          <p className="p-2">No books found</p>
        )}
      </div>
    </div>
  );
}
