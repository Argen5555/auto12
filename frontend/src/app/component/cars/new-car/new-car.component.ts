import { Component } from '@angular/core';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent {
  constructor(private carService: CarService) {}

  saveCar(data: any): void {
    this.carService.saveCar(data)
      .subscribe(_ => window.location.reload());
  }
}
