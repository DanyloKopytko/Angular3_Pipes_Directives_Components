import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-render-houses',
  templateUrl: './render-houses.component.html',
  styleUrls: ['./render-houses.component.css']
})
export class RenderHousesComponent {
  @Input() houses: any[];
  @Input() users: any[];

  renderAllHouses: boolean;
  showFullInfoUser: boolean;
  showHouseByStreet: string;

  renderHouses(): void {
    this.renderAllHouses = !this.renderAllHouses;
  }

  showFullInfo(street: string): void {
    this.showHouseByStreet = street;
    this.showFullInfoUser = !this.showFullInfoUser;
  }
}
