import {Component, Input} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  @Input() houses;
  @Input() users;

  isBlocked: boolean;
  registerError: string;
  emailErrorReg: boolean;
  nameErrorReg: boolean;
  passwordErrorReg: boolean;
  blockOrNotToBlock: number;
  email: string;
  name: string;
  password: string;

  newUser = {
    email: '',
    name: '',
    password: '',
    isBlocked: false
  };

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
}
