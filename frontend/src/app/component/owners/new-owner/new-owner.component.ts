import { Component } from '@angular/core';
import { OwnerService } from 'src/app/service/owner.service';

@Component({
  selector: 'app-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrls: ['./new-owner.component.css']
})
export class NewOwnerComponent {
  constructor(private ownerService: OwnerService) {}

  createOwner(): void {
    this.ownerService.createOwner()
      .subscribe(_ => window.location.reload());
  }
}
