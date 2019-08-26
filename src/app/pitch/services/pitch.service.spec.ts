import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { PitchService } from "./pitch.service";
import { environment } from "src/environments/environment";
import { of } from "rxjs/internal/observable/of";
import { pitchMock } from "../pitch-fixture";

describe("PitchService", () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PitchService],
      imports: [HttpClientTestingModule]
    });
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
