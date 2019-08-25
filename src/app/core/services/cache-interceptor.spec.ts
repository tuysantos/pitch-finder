import { TestBed } from "@angular/core/testing";
import { RequestCacheService } from "./request-cache.service";
import {
  HttpTestingController,
  HttpClientTestingModule
} from "@angular/common/http/testing";
import { HTTP_INTERCEPTORS, HttpResponse } from "@angular/common/http";
import { CachingInterceptor } from "./cache-interceptor";
import { PitchService } from "src/app/pitch/services/pitch.service";
import { environment } from "src/environments/environment";

describe("", () => {
  let pitchService: PitchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RequestCacheService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CachingInterceptor,
          multi: true
        }
      ]
    });

    pitchService = TestBed.get(PitchService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should call the end point", () => {
    const strUrl = `${environment.apiEndPoint}/pitches/32990/slots?filter[starts]=2018-01-09&filter[ends]=2018-01-15`;
    pitchService
      .getPitches("32990", "2018-01-09", "2018-01-15")
      .subscribe(response => {
        expect(response).toBeTruthy();
      });

    const httpRequest = httpMock.expectOne(strUrl);
    expect(httpRequest.request.url).toBe(strUrl);
    expect(httpRequest.cancelled).toBe(false);
  });

  it("should not call the end point", () => {
    const strUrl = `${environment.apiEndPoint}/pitches/32990/slots?filter[starts]=2018-01-09&filter[ends]=2018-01-15`;
    const subs1 = pitchService
      .getPitches("32990", "2018-01-09", "2018-01-15")
      .subscribe(response => {
        expect(response).toBeTruthy();
      });

    const httpRequest = httpMock.expectOne(strUrl);
    expect(httpRequest.request.method).toEqual("GET");

    httpRequest.flush({});
    subs1.unsubscribe();

    const subs2 = pitchService
      .getPitches("32990", "2018-01-09", "2018-01-15")
      .subscribe(response => {
        expect(response).toBeTruthy();
      });

    httpMock.expectNone(strUrl);
    subs2.unsubscribe();
    expect(httpRequest.cancelled).toBe(true);
  });
});
