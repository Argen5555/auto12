import { Component } from '@angular/core';
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

  constructor(private orderService: OrderService) {}

  saveOrder(): void {
    const body = {
      carId: this.carId,
      description: this.description,
      goodsIds: this.goodsIds.split(','),
      status: this.orderStatus
    }
    this.orderService.saveOrder(body)
      .subscribe(order => window.location.reload());
  }
}
