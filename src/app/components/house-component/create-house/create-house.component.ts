import {Component, Input} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent {
  @Input() houses: any[];
  @Input() users: any[];

  houseCreationError: string;
  cityErrorCreation: boolean;
  metersErrorCreation: boolean;
  priceErrorCreation: boolean;
  streetErrorCreation: boolean;
  getRandomUser: number;

  createHouse(houseCreationForm: NgForm): number {
    if (!houseCreationForm.value.city) {
      this.cityErrorCreation = true;
    }

    if (!houseCreationForm.value.meters) {
      this.metersErrorCreation = true;
    }

    if (!houseCreationForm.value.city.price) {
      this.priceErrorCreation = true;
    }

    if (!houseCreationForm.value.city.street) {
      this.streetErrorCreation = true;
    }

    if (
      !houseCreationForm.value.city ||
      !houseCreationForm.value.meters ||
      !houseCreationForm.value.price ||
      !houseCreationForm.value.street
    ) {
      this.houseCreationError = 'Not all the fields was correctly fulfilled';

      return 0;
    }

    this.getRandomUser = Math.random() * (this.users.length - 1);

    this.houses.push(houseCreationForm.value);
    this.houses[this.houses.length - 1].user = this.users[this.getRandomUser.toFixed(0)];

    this.cityErrorCreation = false;
    this.metersErrorCreation = false;
    this.priceErrorCreation = false;
    this.streetErrorCreation = false;
    this.houseCreationError = '';
  }

}
