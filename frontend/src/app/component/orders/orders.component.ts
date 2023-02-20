import { Component, OnInit } from '@angular/core';
import { Order, OrderStatus } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  selectedOrderId: number | undefined;
  creatingNewOrder: boolean = false;
  statusValues = Object.values(OrderStatus);
  statusKeys = Object.keys(OrderStatus);

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(orders => {
        this.orders = orders;
        this.orders.sort((o1, o2) => o1.id - o2.id);
      });
  }

  selectOrder(id: number): void {
    this.selectedOrderId = id;
    this.creatingNewOrder = false;
  }

  toCreatingMode(): void {
    this.creatingNewOrder = true;
    this.selectedOrderId = undefined;
  }

  updateOrderInList(order: Order): void {
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id == order.id) {
        this.orders[i] = order;
      }
    }
  }
}
