import { Component } from '@angular/core';
import { OrderStatus } from 'src/app/model/order';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent {
  statusKeys = Object.keys(OrderStatus);
  statusValues = Object.values(OrderStatus);
}
