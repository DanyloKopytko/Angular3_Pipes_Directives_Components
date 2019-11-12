import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CurrencyExchangerPipe } from './pipes/currencyExchanger.pipe';
import { HouseComponentComponent } from './components/house-component/house-component.component';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { FindHouseComponent } from './components/house-component/find-house/find-house.component';
import { CreateHouseComponent } from './components/house-component/create-house/create-house.component';
import { RenderHousesComponent } from './components/house-component/render-houses/render-houses.component';
import { LoginUserComponent } from './components/user-component/login-user/login-user.component';
import { RegisterUserComponent } from './components/user-component/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyExchangerPipe,
    HouseComponentComponent,
    UserComponentComponent,
    FindHouseComponent,
    CreateHouseComponent,
    RenderHousesComponent,
    LoginUserComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
