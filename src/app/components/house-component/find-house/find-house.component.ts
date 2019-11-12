import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-find-house',
  templateUrl: './find-house.component.html',
  styleUrls: ['./find-house.component.css']
})
export class FindHouseComponent {
  @Input() houses: any[];
  @Input() users: any[];

  inputValue: string;
  valueToFront: string;
  renderSearchedHouses: boolean;
  foundedHouse: any;
  houseSearchError: string;

  onInput(ev): void {
    this.inputValue = ev.target.value;
  }

  search(): void {
    this.valueToFront = this.inputValue;
    this.foundedHouse = undefined;
    this.houseSearchError = '';

    this.foundedHouse = this.houses.find((house) => +house.price === +this.valueToFront);

    if (!this.foundedHouse) {
      this.houseSearchError = 'No house, dude';
    }

    this.renderSearchedHouses = true;
  }
}

