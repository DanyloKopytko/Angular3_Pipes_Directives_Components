import {Component, Input} from '@angular/core';
import {AuthStatusEnum} from '../../constants/enums/auth-status.enum';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {
  @Input() houses;
  @Input() users;

  status: number;

  renderLogin(): void {
    this.status = AuthStatusEnum.REGISTER_STATUS;
  }

  renderRegister(): void {
    this.status = AuthStatusEnum.LOGIN_STATUS;
  }
}
