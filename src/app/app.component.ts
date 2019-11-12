import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {email: 'Ivan@gmail.com', name: 'Lyah', password: '37123', isBlocked: true},
    {email: 'Nazar@gmail.com', name: 'Yanchishin', password: '42aszxc', isBlocked: false},
    {email: 'Bogdana@gmail.com', name: 'Metelyuk', password: '28ad123', isBlocked: true},
    {email: 'Ruslan@gmail.com', name: 'Dudez', password: '55zcx9876', isBlocked: false}
  ];
  houses = [
    {city: 'Lviv', meters: 100, price: 100000, street: 'Gasd 23/7', user: this.users[0]},
    {city: 'Kyiv', meters: 120, price: 150000, street: 'Hilan 17/19', user: this.users[1]},
    {city: 'Ivano-Frankivsk', meters: 90, price: 80000, street: 'Kolopita 3/21', user: this.users[2]},
    {city: 'Lviv', meters: 105, price: 120000, street: 'Hurika 1/1', user: this.users[3]}
  ];
}
