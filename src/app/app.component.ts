import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputValue: string;
  valueToFront: string;
  status: number;
  users = [
    {email: 'Ivan@gmail.com', name: 'Lyah', password: '37123', isBlocked: true},
    {email: 'Nazar@gmail.com', name: 'Yanchishin', password: '42aszxc', isBlocked: false},
    {email: 'Bogdana@gmail.com', name: 'Metelyuk', password: '28ad123', isBlocked: true},
    {email: 'Ruslan@gmail.com', name: 'Dudez', password: '55zcx9876', isBlocked: false}
  ];
  houses = [
    {city: 'Lviv', meters: 100, price: 1000000, street: 'Gasd 23/7', user: this.users[0]},
    {city: 'Kyiv', meters: 120, price: 1500000, street: 'Hilan 17/19', user: this.users[1]},
    {city: 'Ivano-Frankivsk', meters: 90, price: 800000, street: 'Kolopita 3/21', user: this.users[2]},
    {city: 'Lviv', meters: 105, price: 1200000, street: 'Hurika 1/1', user: this.users[3]}
  ];
  newUser = {
    email: '',
    name: '',
    password: '',
    isBlocked: false
  };
  renderAllHouses: boolean;
  renderSearchedHouses: boolean;
  foundedHouse: any;
  houseSearchError: string;
  city: string;
  meters: number;
  price: number;
  street: string;
  showFullInfoUser: boolean;
  blockOrNotToBlock: number;

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
    this.houses.push({user: undefined, city: this.city, meters: this.meters, price: this.price, street: this.street});
  }

  search() {
    this.valueToFront = this.inputValue;
    this.foundedHouse = undefined;
    this.houseSearchError = '';

    this.foundedHouse = this.houses.find((house) => +house.price === +this.valueToFront);

    if (!this.foundedHouse) {
      this.houseSearchError = 'No house, dude';
    }

    this.renderSearchedHouses = true;
  }

  renderLogin() {
    this.status = 2;
  }

  renderRegister() {
    this.status = 1;
  }

  renderHouses() {
    this.renderAllHouses = !this.renderAllHouses;
  }

  showFullInfo() {
    this.showFullInfoUser = !this.showFullInfoUser;
  }

  registerUser() {
    this.blockOrNotToBlock = Math.random() * 100;

    this.users.push(this.newUser);

    (this.blockOrNotToBlock < 50) ? this.users[this.users.length - 1].isBlocked = true :
      this.users[this.users.length - 1].isBlocked = false;

    console.log(this.users);

    this.newUser.email = '';
    this.newUser.name = '';
    this.newUser.password = '';
  }

  loginUser() {

  }
}
