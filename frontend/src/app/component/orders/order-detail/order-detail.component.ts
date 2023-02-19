import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrderStatus } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  id: number;
  order!: Order;
  statusKeys = Object.keys(OrderStatus);
  statusValues = Object.values(OrderStatus);
  isOrderChanged: boolean = false;
  isStatusChanged: boolean = false;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute) {
    this.id = parseInt(route.snapshot.paramMap.get('id')!);
  }
  
  ngOnInit(): void {
    this.getOrder();
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

  updateOrder(): void {
    const body = {
      carId: this.order.carId,
      description: this.order.description,
      goodsIds: this.order.goodsIds.toString().split(','), 
      status: this.order.status
    }
    this.orderService.updateOrder(this.id, body)
      .subscribe(order => this.order = order);
    this.isOrderChanged = false;
    this.isStatusChanged = false;
  }

  updateStatus(): void {
    this.orderService.updateStatus(this.id, this.order.status)
      .subscribe(order => this.order = order);
    this.isOrderChanged = false;
    this.isStatusChanged = false;
  }
}
