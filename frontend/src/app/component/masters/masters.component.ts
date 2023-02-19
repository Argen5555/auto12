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

  constructor(private masterService: MasterService) {}

  ngOnInit(): void {
    this.getMasters();
  }

  getMasters(): void {
    this.masterService.getMasters()
      .subscribe(masters => this.masters = masters);
  }
}
