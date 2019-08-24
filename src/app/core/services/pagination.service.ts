import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PaginationService {
  constructor() {}

  getPageByNumber(page: number, pageSize: number, list: any[]): any[] {
    const start = page * pageSize - pageSize;
    const tempEnd = start + pageSize;
    const endIndex = tempEnd > list.length ? list.length : tempEnd;
    return list.slice(start, endIndex);
  }
}
