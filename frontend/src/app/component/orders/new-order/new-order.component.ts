import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderStatus } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent {
  carId!: number;
  description!: string;
  goodsIds!: string;
  orderStatus = 'ACCEPTED';
  statusKeys = Object.keys(OrderStatus);
  statusValues = Object.values(OrderStatus);

  constructor(
    private orderService: OrderService,
    private router: Router) {}

  saveOrder(): void {
    const body = {
      carId: this.carId,
      description: this.description,
      goodsIds: this.goodsIds.split(','),
      status: this.orderStatus
    }
    this.orderService.saveOrder(body)
      .subscribe(order => this.router.navigate(['orders/' + order.id]));
  }
}
