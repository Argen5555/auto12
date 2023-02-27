import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/model/owner';
import { OwnerService } from 'src/app/service/owner.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  owners: Owner[] = [];
  selectedOwnerId: number | undefined;
  creatingNewOwner: boolean = false;

  constructor(private ownerService: OwnerService) {}

  ngOnInit(): void {
    this.getOwners();
  }

  getOwners(): void {
    this.ownerService.getOwners()
      .subscribe(owners => {
        this.owners = owners;
        this.owners.sort((o1, o2) => o1.id - o2.id);
      })
  }

  selectOwner(id: number): void {
    this.selectedOwnerId = id;
    this.creatingNewOwner = false;
  }

  toCreatingMode = (): void => {
    this.creatingNewOwner = true;
    this.selectedOwnerId = undefined;
  }

  updateOwnerInList(owner: Owner): void {
    for (let i = 0; i < this.owners.length; i++) {
      if (this.owners[i].id == owner.id) {
        this.owners[i] = owner;
      }
    }
  }
}
