export interface Service {
  id: number;
  diagnostic: boolean;
  orderId: number;
  masterId: number;
  price: number;
  status: ServiceStatus;
}

export enum ServiceStatus {
  PAID = "Paid",
  UNPAID = "Unpaid"
}
