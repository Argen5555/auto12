import { Component } from '@angular/core';
import { ServiceStatus } from 'src/app/model/service';
import { ServiceModelService } from 'src/app/service/service-model.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent {
  statusKeys = Object.keys(ServiceStatus);
  statusValues = Object.values(ServiceStatus);

  constructor(private serviceModelService: ServiceModelService) {}

  saveService(data: any): void {
    if (data.diagnostic == '') {
      data.diagnostic = false;
    }
    this.serviceModelService.saveService(data)
      .subscribe(_ => window.location.reload());
  }
}
