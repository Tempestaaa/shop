import { Heart, KeyRound, Settings, Ticket, User } from "lucide-react";

export const userMeta = [
  {
    label: "My profile",
    icon: User,
    href: "/user/profile",
    isProtected: true,
  },
  {
    label: "Change password",
    icon: KeyRound,
    href: "/user/change-password",
    isProtected: true,
  },
  {
    label: "Voucher",
    icon: Ticket,
    href: "/user/voucher",
    isProtected: true,
  },
  {
    label: "Wishlist",
    icon: Heart,
    href: "/user/wishlist",
    isProtected: true,
  },
];
