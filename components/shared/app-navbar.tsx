import AppNavbarMenu from "@/components/shared/app-navbar-menu";
import NotificationButton from "@/components/shared/notification-button";
import SearchButton from "@/components/shared/search-button";
import ShoppingCartButton from "@/components/shared/shopping-cart-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function AppNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background border-b z-50">
      <div className="container mx-auto h-14 px-4 xl:px-0 grid grid-cols-2">
        <section className="flex items-center">
          <Link href="/" className="font-bold text-2xl tracking-tighter">
            Next Shop
          </Link>
          <Separator orientation="vertical" className="mx-4" />
          <AppNavbarMenu />
        </section>

        <section className="flex items-center justify-end">
          <SearchButton />
          <ShoppingCartButton />
          <NotificationButton />
          <Separator orientation="vertical" className="mr-4 ml-2" />
          <Popover>
            <PopoverTrigger className="flex items-center gap-2">
              <p>Username</p>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>VN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
          </Popover>
        </section>
      </div>
    </nav>
  );
}
