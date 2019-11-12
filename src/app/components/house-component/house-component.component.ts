import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-house-component',
  templateUrl: './house-component.component.html',
  styleUrls: ['./house-component.component.css']
})
export class HouseComponentComponent {
  @Input() houses: any[];
  @Input() users: any[];
}
