import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: "dateFormatPipe" })
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    const unformatedDate = value.split("T");
    const tempDate = unformatedDate[0].split("-");
    const tempTime1 = unformatedDate[1].split("+");
    const tempTime2 = tempTime1[0].split(":");
    return `${tempTime2[0]}:${tempTime2[1]} ${tempDate[2]}/${tempDate[1]}/${tempDate[0]}`;
  }
}
