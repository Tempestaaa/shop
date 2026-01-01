import UserWrapper from "@/components/pages/user/user-wrapper";
import VoucherCard from "@/components/pages/user/voucher/voucher-card";
import SortButton from "@/components/shared/sort-button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { voucherSortOptions } from "@/lib/meta";
import { DiscountType, iVoucher, VoucherStatus } from "@/types/voucher.type";
import { Search } from "lucide-react";

const voucherList: iVoucher[] = [
  {
    id: "v-001",
    code: "WELCOME20",
    description: "Get $20 off on your first purchase over $100.",
    type: DiscountType.FIXED_AMOUNT,
    discountValue: 20,
    minOrderValue: 100,
    validFrom: new Date("2024-01-01T00:00:00Z"),
    validTo: new Date("2024-12-31T23:59:59Z"),
    usageLimit: 1000,
    usedCount: 245,
    limitPerUser: 1,
    status: VoucherStatus.ACTIVE,
    createdAt: new Date("2024-01-01T08:00:00Z"),
  },
  {
    id: "v-002",
    code: "SUMMERREADS",
    description: "Summer Sale: 15% off all books. Max discount $50.",
    type: DiscountType.PERCENTAGE,
    discountValue: 15,
    maxDiscount: 50,
    minOrderValue: 50,
    validFrom: new Date("2024-06-01T00:00:00Z"),
    validTo: new Date("2024-08-31T23:59:59Z"),
    usageLimit: 500,
    usedCount: 120,
    limitPerUser: 2,
    status: VoucherStatus.ACTIVE,
    createdAt: new Date("2024-05-20T10:30:00Z"),
  },
  {
    id: "v-003",
    code: "FREESHIP30",
    description: "Free shipping for orders over $30.",
    type: DiscountType.FREE_SHIPPING,
    discountValue: 10,
    minOrderValue: 30,
    validFrom: new Date("2024-01-01T00:00:00Z"),
    validTo: new Date("2024-12-31T23:59:59Z"),
    usageLimit: 5000,
    usedCount: 1500,
    limitPerUser: 5,
    status: VoucherStatus.ACTIVE,
    createdAt: new Date("2024-01-01T00:00:00Z"),
  },
];

export default function UserVoucherPage() {
  return (
    <UserWrapper header="Voucher Wallet">
      <div className="flex items-center justify-between gap-4">
        <InputGroup className="w-1/2">
          <InputGroupInput placeholder="Search voucher" />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <SortButton sortOptions={voucherSortOptions} />
      </div>

      <ul className="grid grid-cols-2 gap-4">
        {voucherList.map((v) => (
          <VoucherCard key={v.id} item={v} />
        ))}
      </ul>
    </UserWrapper>
  );
}
