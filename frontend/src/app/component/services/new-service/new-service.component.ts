import { Component } from '@angular/core';
import { ServiceStatus } from 'src/app/model/service';
import { ServiceModelService } from 'src/app/service/service-model.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent {
  diagnostic: boolean = false;
  orderId!: number;
  masterId!: number;
  price!: number;
  serviceStatus = 'UNPAID';
  statusKeys = Object.keys(ServiceStatus);
  statusValues = Object.values(ServiceStatus);

  constructor(private serviceModelService: ServiceModelService) {}

  saveService(): void {
    const body = {
      diagnostic: this.diagnostic,
      orderId: this.orderId,
      masterId: this.masterId,
      price: this.price,
      status: this.serviceStatus
    }
    this.serviceModelService.saveService(body)
      .subscribe(service => window.location.reload());
  }
}
