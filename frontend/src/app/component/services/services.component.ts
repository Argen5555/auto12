import { Component, OnInit } from '@angular/core';
import { Service, ServiceStatus } from 'src/app/model/service';
import { ServiceModelService } from 'src/app/service/service-model.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  selectedServiceId: number | undefined;
  creatingNewService: boolean = false;
  statusValues = Object.values(ServiceStatus);
  statusKeys = Object.keys(ServiceStatus);

  constructor(private serviceModelService: ServiceModelService) {}

  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.serviceModelService.getServices()
      .subscribe(services => {
        this.services = services;
        this.services.sort((s1, s2) => s1.id - s2.id);
      });
  }

  selectService(id: number): void {
    this.selectedServiceId = id;
    this.creatingNewService = false;
  }

  toCreatingMode = (): void => {
    this.creatingNewService = true;
    this.selectedServiceId = undefined;
  }

  updateServiceInList(service: Service): void {
    for (let i = 0; i < this.services.length; i++) {
      if (this.services[i].id == service.id) {
        this.services[i] = service;
      }
    }
  }
}
