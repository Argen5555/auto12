import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Order } from 'src/app/model/order';
import { Owner } from 'src/app/model/owner';
import { OwnerService } from 'src/app/service/owner.service';
import { OwnersComponent } from '../owners.component';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnChanges {
  id!: number;
  owner!: Owner;
  orders: Order[] | undefined;
  isOwnerChanged: boolean = false;

  constructor(
    private ownersComponent: OwnersComponent,
    private ownerService: OwnerService) { }

  @Input() set ownerId(value: number) {
    this.id = value;
    this.isOwnerChanged = false;
    this.orders = undefined;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id != null) {
      this.getOwner();
    }
  }

  getOwner(): void {
    this.ownerService.getOwner(this.id)
      .subscribe(owner => this.owner = owner);
  }

  updateOwner(): void {
    const body = {
      carIds: this.owner.carIds.toString() == ''
        ? [] : [...new Set(this.owner.carIds.toString().split(/[, ]+/))],
      orderIds: this.owner.orderIds
    }
    this.ownerService.updateOwner(this.id, body)
      .subscribe(owner => {
        this.owner = owner;
        this.ownersComponent.updateOwnerInList(owner);
      });
    this.isOwnerChanged = false;
  }

  getOrders(): void {
    console.log('get orders');
    this.ownerService.getOrders(this.id)
      .subscribe(orders => this.orders = orders);
  }

  ownerChanged(): void {
    this.isOwnerChanged = true;
  }
}
