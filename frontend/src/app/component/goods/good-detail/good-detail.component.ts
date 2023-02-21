import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Good } from 'src/app/model/good';
import { GoodService } from 'src/app/service/good.service';
import { GoodsComponent } from '../goods.component';

@Component({
  selector: 'app-good-detail',
  templateUrl: './good-detail.component.html',
  styleUrls: ['./good-detail.component.css']
})
export class GoodDetailComponent implements OnChanges {
  id!: number;
  good!: Good;
  isGoodChanged: boolean = false;

  constructor(
    private goodsComponent: GoodsComponent,
    private goodService: GoodService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id != null) {
      this.getGood();
    }
  }

  @Input() set goodId(value: number) {
    this.id = value;
    this.isGoodChanged = false;
  }

  getGood(): void {
    this.goodService.getGood(this.id)
      .subscribe(good => this.good = good);
  }
  
  goodChanged(): void {
    this.isGoodChanged = true;
  }

  updateGood(): void {
    const body = {
      name: this.good.name,
      price: this.good.price
    }
    this.goodService.updateGood(this.id, body)
      .subscribe(good => {
        this.good = good;
        this.goodsComponent.updateGoodInList(good);
      });
    this.isGoodChanged = false;
  }
}
