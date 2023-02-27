import { Component } from '@angular/core';
import { OrderStatus } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent {
  statusKeys = Object.keys(OrderStatus);
  statusValues = Object.values(OrderStatus);

  constructor(private orderService: OrderService) {}

  saveOrder(data: any): void {
    data.goodsIds = data.goodsIds == ''
      ? [] : [...new Set(data.goodsIds.split(/[, ]+/))];
    this.orderService.saveOrder(data)
      .subscribe(_ => window.location.reload());
  }
}
