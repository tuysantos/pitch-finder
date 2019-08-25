import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: "currencyConverterPipe" })
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: string, rate: string): string {
    if (value.trim() === "" || rate.trim() === "") {
      return "";
    }

    if (!this.isValidId(value) || !this.isValidId(rate)) {
      return "";
    }

    return (parseFloat(value) * parseFloat(rate)).toString();
  }

  isValidId(num): boolean {
    if (num.match(/^-{0,1}\d+$/) || num.match(/^\d+\.\d+$/)) {
      return true;
    }
    return false;
  }
}
