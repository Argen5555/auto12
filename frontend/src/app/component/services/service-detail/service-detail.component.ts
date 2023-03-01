import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Service, ServiceStatus } from 'src/app/model/service';
import { ServiceModelService } from 'src/app/service/service-model.service';
import { ServicesComponent } from '../services.component';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnChanges {
  id!: number;
  service!: Service;
  statusKeys = Object.keys(ServiceStatus);
  statusValues = Object.values(ServiceStatus);
  isServiceChanged: boolean = false;
  isStatusChanged: boolean = false;

  constructor(
    private servicesComponent: ServicesComponent,
    private serviceModelService: ServiceModelService) { }

  @Input() set serviceId(value: number) {
    this.id = value;
    this.isServiceChanged = false;
    this.isStatusChanged = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id != null) {
      this.getService();
    }
  }

  getService(): void {
    this.serviceModelService.getService(this.id)
      .subscribe(service => this.service = service);
  }

  updateService(): void {
    const body = {
      diagnostic: this.service.diagnostic,
      orderId: this.service.orderId,
      masterId: this.service.masterId,
      price: this.service.price,
      status: this.service.status
    }
    this.serviceModelService.updateService(this.id, body)
      .subscribe(service => this.setService(service));
    this.isServiceChanged = false;
    this.isStatusChanged = false;
  }

  updateStatus(): void {
    this.serviceModelService.updateStatus(this.id, this.service.status)
      .subscribe(order => this.setService(order));
    this.isServiceChanged = false;
    this.isStatusChanged = false;
  }

  setService(service: Service): void {
    this.service = service;
    this.servicesComponent.updateServiceInList(service);
  }

  orderChanged(): void {
    this.isServiceChanged = true;
  }

  statusChanged(): void {
    this.isStatusChanged = true;
  }
}
