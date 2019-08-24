import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: "currencyConverterPipe" })
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: string, rate: string): string {
    return (parseFloat(value) * parseFloat(rate)).toString();
  }
}
