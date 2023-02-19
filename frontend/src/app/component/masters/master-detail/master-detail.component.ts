import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Master } from 'src/app/model/master';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent implements OnInit {
  id: number;
  master!: Master;

  constructor(
    private masterService: MasterService,
    private route: ActivatedRoute) {
    this.id = parseInt(route.snapshot.paramMap.get('id')!);
  }

  ngOnInit(): void {
    this.getMaster();
  }

  getMaster(): void {
    this.masterService.getMaster(this.id)
      .subscribe(master => this.master = master);
  }
  
  masterChanged(): void {
    
  }
}
