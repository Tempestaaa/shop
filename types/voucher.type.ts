export enum DiscountType {
  FIXED_AMOUNT = "FIXED_AMOUNT",
  PERCENTAGE = "PERCENTAGE",
  FREE_SHIPPING = "FREE_SHIPPING",
}

export enum VoucherStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  DISABLED = "DISABLED",
}

export interface iVoucher {
  id: string;
  code: string;
  description: string;

  type: DiscountType;
  discountValue: number;
  maxDiscount?: number;

  minOrderValue?: number;
  validFrom: Date;
  validTo: Date;

  usageLimit: number;
  usedCount: number;
  limitPerUser: number;

  status: VoucherStatus;
  createdAt: Date;
}
