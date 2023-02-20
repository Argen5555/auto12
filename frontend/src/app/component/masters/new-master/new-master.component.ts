import { Component } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-new-master',
  templateUrl: './new-master.component.html',
  styleUrls: ['./new-master.component.css']
})
export class NewMasterComponent {
  masterName!: string;

  constructor(private masterService: MasterService) {}

  saveMaster(): void {
    const body = {
      name: this.masterName
    }
    this.masterService.saveMaster(body)
      .subscribe(master => window.location.reload());
  }
}
