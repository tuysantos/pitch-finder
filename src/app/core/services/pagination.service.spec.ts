import { TestBed } from "@angular/core/testing";
import { PaginationService } from "./pagination.service";

describe("PaginationService", () => {
  let paginationService: PaginationService;
  const arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationService]
    });
    paginationService = TestBed.get(PaginationService);
  });

  it("should be created", () => {
    const service: PaginationService = TestBed.get(PaginationService);
    expect(service).toBeTruthy();
  });

  it("should return a page with 10 records", () => {
    let result = paginationService.getPageByNumber(1, 10, arrayData);
    expect(result.length).toBe(10);
  });

  it("should return a page with 4 records", () => {
    let result = paginationService.getPageByNumber(2, 10, arrayData);
    expect(result.length).toBe(4);
  });

  it("should return 0 records", () => {
    let result = paginationService.getPageByNumber(1, 10, []);
    expect(result.length).toBe(0);
  });
});
