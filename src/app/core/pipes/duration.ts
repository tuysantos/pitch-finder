import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: "durationPipe" })
export class DurationPipe implements PipeTransform {
  transform(date1: string, date2: string): string {
    const startDate = new Date(this.fixDateFormat(date1));
    const endDate = new Date(this.fixDateFormat(date2));

    const msec = endDate.getTime() - startDate.getTime();

    const mins = Math.floor(msec / 60000);
    const hrs = Math.floor(mins / 60);
    return `${hrs} hour(s) and ${mins} minute(s)`;
  }

  fixDateFormat(date: string): string {
    const unformatedDate = date.split("T");
    const tempTime1 = unformatedDate[1].split("+");
    return `${unformatedDate[0]} ${tempTime1[0]}`;
  }
}
