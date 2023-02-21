import { Component } from '@angular/core';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent {
  brand!: string;
  model!: string;
  year!: number;
  number!: number;
  ownerId!: number;

  constructor(private carService: CarService) {}

  saveCar(): void {
    const body = {
      brand: this.brand,
      model: this.model,
      year: this.year,
      number: this.number,
      ownerId: this.ownerId
    }
    this.carService.saveCar(body)
      .subscribe(car => window.location.reload());
  }
}
