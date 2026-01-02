export enum NotificationType {
  ALL = "all",
  ORDER = "order",
  EVENT = "event",
  VOUCHER = "voucher",
}

export interface iNotification {
  id: number;
  title: string;
  description: string;
  type: NotificationType;
  createdAt: string;
}
