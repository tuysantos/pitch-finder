import { TestBed } from "@angular/core/testing";
import { PaginationService } from "./pagination.service";
import { IPitch } from "../model/interfaces";

describe("PaginationService", () => {
  let paginationService: PaginationService;
  const pitchesMock: IPitch[] = [
    {
      type: "slots",
      id: "446273",
      attributes: {
        starts: "2018-01-09T09:20:00+00:00",
        ends: "2018-01-09T10:00:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 4
      }
    },
    {
      type: "slots",
      id: "446274",
      attributes: {
        starts: "2018-01-09T10:20:00+00:00",
        ends: "2018-01-09T10:40:00+00:00",
        price: "10.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 1
      }
    },
    {
      type: "slots",
      id: "446275",
      attributes: {
        starts: "2018-01-09T11:00:00+00:00",
        ends: "2018-01-09T11:40:00+00:00",
        price: "12.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 2
      }
    },
    {
      type: "slots",
      id: "446276",
      attributes: {
        starts: "2018-01-09T09:20:00+00:00",
        ends: "2018-01-09T10:00:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 4
      }
    },
    {
      type: "slots",
      id: "446277",
      attributes: {
        starts: "2018-01-09T10:20:00+00:00",
        ends: "2018-01-09T10:40:00+00:00",
        price: "10.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 1
      }
    },
    {
      type: "slots",
      id: "446278",
      attributes: {
        starts: "2018-01-09T11:00:00+00:00",
        ends: "2018-01-09T11:40:00+00:00",
        price: "12.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 2
      }
    },
    {
      type: "slots",
      id: "446279",
      attributes: {
        starts: "2018-01-09T09:20:00+00:00",
        ends: "2018-01-09T10:00:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 4
      }
    },
    {
      type: "slots",
      id: "446270",
      attributes: {
        starts: "2018-01-09T10:20:00+00:00",
        ends: "2018-01-09T10:40:00+00:00",
        price: "10.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 1
      }
    },
    {
      type: "slots",
      id: "446271",
      attributes: {
        starts: "2018-01-09T11:00:00+00:00",
        ends: "2018-01-09T11:40:00+00:00",
        price: "12.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 2
      }
    },
    {
      type: "slots",
      id: "446272",
      attributes: {
        starts: "2018-01-09T09:20:00+00:00",
        ends: "2018-01-09T10:00:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 4
      }
    },
    {
      type: "slots",
      id: "446234",
      attributes: {
        starts: "2018-01-09T10:20:00+00:00",
        ends: "2018-01-09T10:40:00+00:00",
        price: "10.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 1
      }
    },
    {
      type: "slots",
      id: "446223",
      attributes: {
        starts: "2018-01-09T11:00:00+00:00",
        ends: "2018-01-09T11:40:00+00:00",
        price: "12.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 2
      }
    },
    {
      type: "slots",
      id: "446288",
      attributes: {
        starts: "2018-01-09T09:20:00+00:00",
        ends: "2018-01-09T10:00:00+00:00",
        price: "9.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 4
      }
    },
    {
      type: "slots",
      id: "446211",
      attributes: {
        starts: "2018-01-09T10:20:00+00:00",
        ends: "2018-01-09T10:40:00+00:00",
        price: "10.90",
        admin_fee: "0.00",
        currency: "GBP",
        availabilities: 1
      }
    }
  ];

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
    let result = paginationService.getPageByNumber(1, 10, pitchesMock);
    expect(result.length).toBe(10);
  });

  it("should return a page with 4 records", () => {
    let result = paginationService.getPageByNumber(2, 10, pitchesMock);
    expect(result.length).toBe(4);
  });

  it("should return 0 records", () => {
    let result = paginationService.getPageByNumber(1, 10, []);
    expect(result.length).toBe(0);
  });
});
