import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { PitchService } from "./pitch.service";
import { IResult } from "src/app/core/model/interfaces";
import { environment } from "src/environments/environment";
import { of } from "rxjs/internal/observable/of";

describe("PitchService", () => {
  let pitchService: PitchService;
  let httpMock: HttpTestingController;

  const pitchMock: IResult = {
    meta: {
      total_items: 14,
      filter: {
        starts: "2018-01-09",
        ends: "2018-01-15",
        fromTime: "00:00",
        toTime: "23:59"
      }
    },
    data: [
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
        id: "446270",
        attributes: {
          starts: "2018-01-09T07:20:00+00:00",
          ends: "2018-01-09T08:00:00+00:00",
          price: "9.90",
          admin_fee: "0.00",
          currency: "GBP",
          availabilities: 0
        }
      },
      {
        type: "slots",
        id: "446271",
        attributes: {
          starts: "2018-01-09T08:00:00+00:00",
          ends: "2018-01-09T08:40:00+00:00",
          price: "9.90",
          admin_fee: "0.00",
          currency: "GBP",
          availabilities: 0
        }
      },
      {
        type: "slots",
        id: "446272",
        attributes: {
          starts: "2018-01-09T08:40:00+00:00",
          ends: "2018-01-09T09:20:00+00:00",
          price: "9.90",
          admin_fee: "0.00",
          currency: "GBP",
          availabilities: 4
        }
      },

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
          starts: "2018-01-09T10:00:00+00:00",
          ends: "2018-01-09T10:40:00+00:00",
          price: "9.90",
          admin_fee: "0.00",
          currency: "GBP",
          availabilities: 3
        }
      },
      {
        type: "slots",
        id: "446275",
        attributes: {
          starts: "2018-01-09T10:40:00+00:00",
          ends: "2018-01-09T11:20:00+00:00",
          price: "9.90",
          admin_fee: "0.00",
          currency: "GBP",
          availabilities: 3
        }
      },
      {
        type: "slots",
        id: "446276",
        attributes: {
          starts: "2018-01-09T11:20:00+00:00",
          ends: "2018-01-09T12:00:00+00:00",
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
          starts: "2018-01-09T12:00:00+00:00",
          ends: "2018-01-09T12:40:00+00:00",
          price: "12.05",
          admin_fee: "0.00",
          currency: "GBP",
          availabilities: 0
        }
      },
      {
        type: "slots",
        id: "446278",
        attributes: {
          starts: "2018-01-09T12:40:00+00:00",
          ends: "2018-01-09T13:20:00+00:00",
          price: "12.05",
          admin_fee: "0.00",
          currency: "GBP",
          availabilities: 0
        }
      },
      {
        type: "slots",
        id: "446279",
        attributes: {
          starts: "2018-01-09T13:20:00+00:00",
          ends: "2018-01-09T14:00:00+00:00",
          price: "12.05",
          admin_fee: "0.00",
          currency: "GBP",
          availabilities: 1
        }
      },
      {
        type: "slots",
        id: "446280",
        attributes: {
          starts: "2018-01-09T14:00:00+00:00",
          ends: "2018-01-09T14:40:00+00:00",
          price: "12.05",
          admin_fee: "0.00",
          currency: "GBP",
          availabilities: 4
        }
      },
      {
        type: "slots",
        id: "446281",
        attributes: {
          starts: "2018-01-09T14:40:00+00:00",
          ends: "2018-01-09T15:20:00+00:00",
          price: "9.90",
          admin_fee: "0.00",
          currency: "GBP",
          availabilities: 4
        }
      },
      {
        type: "slots",
        id: "446282",
        attributes: {
          starts: "2018-01-09T15:20:00+00:00",
          ends: "2018-01-09T16:00:00+00:00",
          price: "9.90",
          admin_fee: "0.00",
          currency: "GBP",
          availabilities: 4
        }
      }
    ],
    error: { errorNum: 0, message: "" }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PitchService],
      imports: [HttpClientTestingModule]
    });
    pitchService = TestBed.get(PitchService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    const service: PitchService = TestBed.get(PitchService);
    expect(service).toBeTruthy();
  });

  it("should return repos", inject(
    [HttpTestingController, PitchService],
    (httpMock: HttpTestingController, service: PitchService) => {
      const pitchId = "32990";
      const starts = "2018-01-09";
      const ends = "2018-01-15";
      service.getPitches(pitchId, starts, ends).subscribe(result => {
        expect(result.meta.total_items).toEqual(14);
        expect(result).toEqual(pitchMock);
      });

      const req = httpMock.expectOne(
        `${environment.apiEndPoint}/pitches/${pitchId}/slots?filter[starts]=${starts}&filter[ends]=${ends}`
      );
      expect(req.request.method).toEqual("GET");
      req.flush(pitchMock);
    }
  ));

  it("should throw an error", inject(
    [HttpTestingController, PitchService],
    (httpMock: HttpTestingController, service: PitchService) => {
      const ErrorObj = {
        type: "ERROR",
        status: 404,
        body: "Not Found"
      };

      const pitchId = "11111";
      const starts = "2018-01-09";
      const ends = "2018-01-15";

      service.getPitches(pitchId, starts, ends).subscribe(data => {
        expect(of(data)).toBeTruthy();
        expect(data).not.toBeNull();
      });

      const req = httpMock.expectOne(
        `${environment.apiEndPoint}/pitches/${pitchId}/slots?filter[starts]=${starts}&filter[ends]=${ends}`
      );
      expect(req.request.method).toEqual("GET");
      req.flush(ErrorObj);
    }
  ));
});
