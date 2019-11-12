import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent  {

  @Input() houses;
  @Input() users;

  loginData = {
    email: '',
    password: ''
  };
  email: string;
  name: string;
  password: string;
  foundedUser: any;
  welcomeMessage: string;



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
