import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyExchanger'
})

export class CurrencyExchangerPipe implements PipeTransform {
  transform(price: number, currency: string): string {
    // const currencyPrivatLink = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
    //
    // const currencies: any = await (await fetch(currencyPrivatLink)).json();

    if (currency === 'gryvnya') {
      // return `${price * +currencies[0].sale}₴`;
      return `${price * 25}₴`;
    }
  }
}
