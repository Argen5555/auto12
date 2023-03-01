import { Component, OnInit } from '@angular/core';
import { Master } from 'src/app/model/master';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {
  masters: Master[] = [];
  selectedMasterId: number | undefined;
  creatingNewMaster: boolean = false;

  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.getMasters();
  }

  getMasters(): void {
    this.masterService.getMasters()
      .subscribe(masters => {
        this.masters = masters;
        this.masters.sort((m1, m2) => m1.id - m2.id);
      });
  }

  selectMaster(id: number): void {
    this.selectedMasterId = id;
    this.creatingNewMaster = false;
  }

  toCreatingMode = (): void => {
    this.creatingNewMaster = true;
    this.selectedMasterId = undefined;
  }

  updateMasterInList(master: Master): void {
    for (let i = 0; i < this.masters.length; i++) {
      if (this.masters[i].id == master.id) {
        this.masters[i] = master;
      }
    }
  }
}
