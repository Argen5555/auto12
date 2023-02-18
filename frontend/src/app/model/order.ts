export interface Order {
  id: number;
  carId: number;
  description: string;
  orderTime: Date;
  serviceIds: number[];
  goodsIds: number[];
  status: OrderStatus;
  price: number;
  completionTime: Date;
}

export enum OrderStatus {
  ACCEPTED = "Accepted",
  IN_PROCESS = "In process",
  COMPLETED_SUCCESSFULLY = "Completed successfully",
  COMPLETED_UNSUCCESSFULLY = "Completed unsuccessfully",
  PAID = "Paid"
}
