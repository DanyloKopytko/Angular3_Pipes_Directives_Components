import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CurrencyExchangerPipe } from './pipes/currencyExchanger.pipe';
import { HouseComponentComponent } from './components/house-component/house-component.component';
import { UserComponentComponent } from './components/user-component/user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyExchangerPipe,
    CurrencyExchangerPipe,
    HouseComponentComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
