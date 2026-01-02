import { iNotification, NotificationType } from "@/types/notification.type";
import { iSortOption } from "@/types/sort-option.type";
import {
  ArrowDownCircle,
  ArrowDownNarrowWide,
  ArrowUpCircle,
  ArrowUpWideNarrow,
  Calendar,
  Clock,
  ClockArrowDown,
  ClockArrowUp,
  Flame,
  Heart,
  KeyRound,
  Star,
  ThumbsUp,
  Ticket,
  User,
} from "lucide-react";

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

export const bookShopSortOptions: iSortOption[] = [
  {
    label: "Best-Selling",
    value: "popularity",
    icon: "Flame",
    shortcut: "Popularity",
  },
  {
    label: "Newest Arrivals",
    value: "newest",
    icon: "Clock",
    shortcut: "Newest",
  },
  { label: "Highest Rated", value: "rating", icon: "Star", shortcut: "Rating" },
  {
    label: "Price: Low to High",
    value: "price_asc",
    icon: "ArrowDownNarrowWide",
    shortcut: "Price ascended",
  },
  {
    label: "Price: High to Low",
    value: "price_desc",
    icon: "ArrowUpWideNarrow",
    shortcut: "Price desended",
  },
];

export const reviewSortOptions: iSortOption[] = [
  {
    label: "Newest",
    value: "newest",
    icon: "Calendar",
  },
  {
    label: "Most Helpful",
    value: "helpful",
    icon: "ThumbsUp",
  },
  {
    label: "Highest Rating",
    value: "rating_high",
    icon: "ArrowUpCircle",
  },
  {
    label: "Lowest Rating",
    value: "rating_low",
    icon: "ArrowDownCircle",
  },
];

export const voucherSortOptions: iSortOption[] = [
  {
    label: "Newest",
    value: "newest",
    icon: "ClockArrowDown",
  },
  {
    label: "Oldest",
    value: "oldest",
    icon: "ClockArrowUp",
  },
];

export const MOCK_NOTIFICATIONS: iNotification[] = [
  {
    id: 1,
    title: "Order Confirmed",
    description: "Your order #3345 has been confirmed by the system.",
    type: NotificationType.ORDER,
    createdAt: "2024-05-23T08:30:00Z",
  },

  {
    id: 2,
    title: "Super Shopping Sale",
    description: "Up to 70% off the entire store.",
    type: NotificationType.EVENT,
    createdAt: "2024-05-22T14:15:00Z",
  },

  {
    id: 3,

    title: "50k Voucher Expires Soon",
    description: "Use the voucher before it expires at the end of the day.",
    type: NotificationType.VOUCHER,
    createdAt: "2024-05-22T09:00:00Z",
  },

  {
    id: 4,
    title: "Delivery successful",
    description: "Your package has been delivered.",
    type: NotificationType.ORDER,
    createdAt: "2024-05-21T16:45:00Z",
  },
];
