import { Button } from "@/components/ui/button";
import { iVoucher } from "@/types/voucher.type";
import dayjs from "dayjs";
import { Copy } from "lucide-react";

type Props = {
  item: Pick<iVoucher, "description" | "validTo" | "code">;
};

export default function VoucherCard({ item }: Props) {
  return (
    <li className="flex bg-card rounded-md transition-all duration-300 overflow-hidden">
      <div className="bg-green-500 w-10"></div>
      <div className="flex-1 flex flex-col px-4 py-2">
        <header className="flex items-center justify-between gap-2">
          <p className="font-semibold text-base line-clamp-1">
            {item.description}
          </p>
          <Button variant="ghost" size="sm" className="text-xs">
            Details
          </Button>
        </header>
        <p className="text-xs text-muted-foreground">{item.description}</p>
        <Button variant="outline" className="mt-4 self-start px-4!">
          <Copy />
          <span>{item.code}</span>
        </Button>
        <div className="flex items-end justify-between">
          <p className="text-blue-500">
            Expire: {dayjs(item.validTo).format("DD/MM/YYYY")}
          </p>
          <Button size="sm" className="text-xs">
            Copy code
          </Button>
        </div>
      </div>
    </li>
  );
}
