import { Component } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-new-master',
  templateUrl: './new-master.component.html',
  styleUrls: ['./new-master.component.css']
})
export class NewMasterComponent {
  constructor(private masterService: MasterService) {}

  saveMaster(data: any): void {
    this.masterService.saveMaster(data)
      .subscribe(_ => window.location.reload());
  }
}
