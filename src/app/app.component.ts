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
  houses: object[] = [
    {city: 'Lviv', meters: '100', price: '1000000', street: 'Gasd 23/7'},
    {city: 'Kyiv', meters: '120', price: '1500000', street: 'Hilan 17/19'},
    {city: 'Ivano-Frankivsk', meters: '90', price: '800000', street: 'Kolopita 3/21'},
    {city: 'Lviv', meters: '105', price: '1200000', street: 'Hurika 1/1'},
  ];
  render: boolean;

  onInput(ev): void {
    this.inputValue = ev.target.value;
  }

  search() {
    this.valueToFront = this.inputValue;
  }

  renderLogin() {
    this.status = 1;
  }

  renderRegister() {
    this.status = 2;
  }

  renderHouses() {
    this.render = !this.render;
  }
}
