import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-navigation',
  templateUrl: './head-navigation.component.html',
  styleUrls: ['./head-navigation.component.css']
})
export class HeadNavigationComponent {
  @Input() toCreatingMode!: () => void;
  @Input() titleText!: string;
}
