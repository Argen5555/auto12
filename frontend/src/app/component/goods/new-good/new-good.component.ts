import { Component } from '@angular/core';
import { GoodService } from 'src/app/service/good.service';

@Component({
  selector: 'app-new-good',
  templateUrl: './new-good.component.html',
  styleUrls: ['./new-good.component.css']
})
export class NewGoodComponent {
  name!: string;
  price!: number;

  constructor(private goodService: GoodService) {}

  saveGood(): void {
    const body = {
      name: this.name,
      price: this.price
    }
    this.goodService.saveGood(body)
      .subscribe(good => window.location.reload());
  }
}
