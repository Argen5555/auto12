import { Component } from '@angular/core';
import { GoodService } from 'src/app/service/good.service';

@Component({
  selector: 'app-new-good',
  templateUrl: './new-good.component.html',
  styleUrls: ['./new-good.component.css']
})
export class NewGoodComponent {
  constructor(private goodService: GoodService) {}

  saveGood(data: any): void {
    this.goodService.saveGood(data)
      .subscribe(_ => window.location.reload());
  }
}
