import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: number;
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
  newUser = {
    email: '',
    name: '',
    password: '',
    isBlocked: false
  };
  loginData = {
    email: '',
    password: ''
  };
  blockOrNotToBlock: number;
  email: string;
  name: string;
  password: string;
  isBlocked: boolean;
  registerError: string;
  emailErrorReg: boolean;
  nameErrorReg: boolean;
  passwordErrorReg: boolean;
  foundedUser: any;
  welcomeMessage: string;

  renderLogin(): void {
    this.status = 2;
  }

  renderRegister(): void {
    this.status = 1;
  }

  registerUser(registrationForm: NgForm): number {
    this.blockOrNotToBlock = Math.random() * 100;

    this.email = this.newUser.email;
    this.name = this.newUser.name;
    this.password = this.newUser.password;

    if (!registrationForm.value.email) {
      this.emailErrorReg = true;
    }

    if (!registrationForm.value.name) {
      this.nameErrorReg = true;
    }

    if (!registrationForm.value.password) {
      this.passwordErrorReg = true;
    }

    if (!this.email || !this.name || !this.password) {
      this.registerError = 'Not all the fields was correctly fulfilled';

      return 0;
    }

    (this.blockOrNotToBlock < 50) ? this.isBlocked = true : this.isBlocked = false;

    this.users.push({email: this.email, name: this.name, password: this.password, isBlocked: this.isBlocked});

    this.newUser.email = '';
    this.newUser.name = '';
    this.newUser.password = '';
    this.registerError = '';
    this.emailErrorReg = false;
    this.nameErrorReg = false;
    this.passwordErrorReg = false;
  }

  loginUser(): number {
    if (!this.loginData.email || !this.loginData.password) {
      this.welcomeMessage = 'This fields are empty!';

      return 0;
    }

    this.foundedUser = this.users.find((user) => user.email === this.loginData.email && user.password === this.loginData.password);

    (this.foundedUser) ? this.welcomeMessage = 'Welcome home!' : this.welcomeMessage = 'No such user';

    this.loginData.email = '';
    this.loginData.password = '';
  }
}
