import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';
import { CarsComponent } from '../cars.component';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnChanges {
  @Input()
  id!: number;
  car!: Car;
  isCarChanged: boolean = false;

  constructor(
    private carComponent: CarsComponent,
    private carService: CarService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id != null) {
      this.getMaster();
    }
  }

  getMaster(): void {
    this.carService.getCar(this.id)
      .subscribe(car => this.car = car);
  }
  
  carChanged(): void {
    this.isCarChanged = true;
  }

  updateCar(): void {
    const body = {
      brand: this.car.brand,
      model: this.car.model,
      year: this.car.year,
      number: this.car.number,
      ownerId: this.car.ownerId
    }
    this.carService.updateCar(this.id, body)
      .subscribe(car => {
        this.car = car;
        this.carComponent.updateCarInList(car);
      });
    this.isCarChanged = false;
  }
}
