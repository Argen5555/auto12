import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/model/good';
import { GoodService } from 'src/app/service/good.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  goods: Good[] = [];
  selectedGoodId: number | undefined;
  creatingNewGood: boolean = false;

  constructor(private goodService: GoodService) {}

  ngOnInit(): void {
    this.getGoods();
  }

  getGoods(): void {
    this.goodService.getGoods()
      .subscribe(goods => {
        this.goods = goods;
        this.goods.sort((g1, g2) => g1.id - g2.id);
      });
  }

  selectGood(id: number): void {
    this.selectedGoodId = id;
    this.creatingNewGood = false;
  }

  toCreatingMode = (): void => {
    this.selectedGoodId = undefined;
    this.creatingNewGood = true;
  }

  updateGoodInList(good: Good): void {
    for (let i = 0; i < this.goods.length; i++) {
      if (this.goods[i].id == good.id) {
        this.goods[i] = good;
      }
    }
  }
}
