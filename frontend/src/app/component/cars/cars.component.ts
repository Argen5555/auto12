import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  selectedCarId: number | undefined;
  creatingNewCar: boolean = false;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => {
        this.cars = cars;
        this.cars.sort((c1, c2) => c1.id - c2.id);
      });
  }

  selectCar(id: number): void {
    this.selectedCarId = id;
    this.creatingNewCar = false;
  }

  toCreatingMode = (): void => {
    this.selectedCarId = undefined;
    this.creatingNewCar = true;
  }

  updateCarInList(car: Car): void {
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].id == car.id) {
        this.cars[i] = car;
      }
    }
  }
}
