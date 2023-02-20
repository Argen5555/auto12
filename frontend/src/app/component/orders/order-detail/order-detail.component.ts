import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Order, OrderStatus } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { OrdersComponent } from '../orders.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnChanges {
  @Input()
  id!: number;
  order!: Order;
  statusKeys = Object.keys(OrderStatus);
  statusValues = Object.values(OrderStatus);
  isOrderChanged: boolean = false;
  isStatusChanged: boolean = false;

  constructor(
    private ordersComponent: OrdersComponent,
    private orderService: OrderService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id != null) {
      this.getOrder();
    }
  }

  orderChanged(): void {
    this.isOrderChanged = true;
  }

  statusChanged(): void {
    this.isStatusChanged = true;
  }

  getOrder(): void {
    this.orderService.getOrder(this.id)
      .subscribe(order => this.order = order);
  }

  calculatePrice(): void {
    this.orderService.calculatePrice(this.id)
      .subscribe(price => this.order.price = price);
  }

  setOrder(order: Order): void {
    this.order = order;
    this.ordersComponent.updateOrderInList(order);
  }

  updateOrder(): void {
    const body = {
      carId: this.order.carId,
      description: this.order.description,
      goodsIds: this.order.goodsIds.toString().split(','), 
      status: this.order.status
    }
    this.orderService.updateOrder(this.id, body)
      .subscribe(order => this.setOrder(order));
    this.isOrderChanged = false;
    this.isStatusChanged = false;
  }

  updateStatus(): void {
    this.orderService.updateStatus(this.id, this.order.status)
      .subscribe(order => this.setOrder(order));
    this.isOrderChanged = false;
    this.isStatusChanged = false;
  }
}
