import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue: string;
  valueToFront: string;
  status: number;
  houses = [
    {city: 'Lviv', meters: 100, price: 1000000, street: 'Gasd 23/7'},
    {city: 'Kyiv', meters: 120, price: 1500000, street: 'Hilan 17/19'},
    {city: 'Ivano-Frankivsk', meters: 90, price: 800000, street: 'Kolopita 3/21'},
    {city: 'Lviv', meters: 105, price: 1200000, street: 'Hurika 1/1'},
  ];
  renderAllHouses: boolean;
  renderSearchedHouses: boolean;
  foundedHouse: any;
  houseSearchError: string;
  city: string;
  meters: number;
  price: number;
  street: string;

  onInput(ev): void {
    this.inputValue = ev.target.value;
  }

  onHouseInputCity(ev): void {
    this.city = ev.target.value;
  }

  onHouseInputMeters(ev): void {
    this.meters = ev.target.value;
  }

  onHouseInputPrice(ev): void {
    this.price = ev.target.value;
  }

  onHouseInputStreet(ev): void {
    this.street = ev.target.value;
  }

  createHouse() {
    this.houses.push({city: this.city, meters: this.meters, price: this.price, street: this.street});
  }

  search() {
    this.valueToFront = this.inputValue;
    this.foundedHouse = undefined;
    this.houseSearchError = '';

    this.foundedHouse = this.houses.find((house) => {
      if (+house.price === +this.valueToFront) {
        return house;
      }
    });

    if (!this.foundedHouse) {
      this.houseSearchError = 'No house, dude';
    }

    this.renderSearchedHouses = true;
  }

  renderLogin() {
    this.status = 1;
  }

  renderRegister() {
    this.status = 2;
  }

  renderHouses() {
    this.renderAllHouses = !this.renderAllHouses;
  }
}
