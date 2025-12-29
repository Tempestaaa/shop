import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { userMeta } from "@/lib/meta";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default function UserButton() {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2">
        <p>Username</p>
        <Avatar>
          <AvatarImage />
          <AvatarFallback>VN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent align="end" className="p-2">
        <header className="flex items-center gap-4">
          <Avatar className="size-10">
            <AvatarImage />
            <AvatarFallback>VN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-semibold">Username</p>
            <p className="text-xs text-muted-foreground">username@gmail.com</p>
          </div>
        </header>
        <Separator className="my-2" />
        <ul>
          {userMeta.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center gap-2 p-2 hover:bg-muted rounded-md"
              >
                <Icon className="size-3.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </ul>
        <Separator className="my-2" />
        <div className="hover:bg-red-600 transition-colors duration-300 cursor-pointer flex items-center gap-2 p-2 rounded-md">
          <LogOut className="size-3.5" />
          Logout
        </div>
      </PopoverContent>
    </Popover>
  );
}
