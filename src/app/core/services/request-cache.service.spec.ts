import { RequestCacheService } from "./request-cache.service";
import { HttpRequest, HttpResponse } from "@angular/common/http";
import { IResult } from "../model/interfaces";
import { TestBed } from "@angular/core/testing";
import { environment } from "src/environments/environment";

describe("Request Cache Service", () => {
  let requestCacheService: RequestCacheService;
  const strUrl = `${environment.apiEndPoint}/pitches/32990/slots?filter[starts]=2018-01-09&filter[ends]=2018-01-15`;
  let req: HttpRequest<IResult> = new HttpRequest<IResult>("GET", strUrl);
  const resultData: IResult = {
    meta: {
      total_items: 14,
      filter: {
        starts: "2018-01-09",
        ends: "2018-01-15",
        fromTime: "00:00",
        toTime: "23:59"
      }
    },
    data: [],
    error: { errorNum: 0, message: "" }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestCacheService]
    });
    requestCacheService = TestBed.get(RequestCacheService);
  });

  it("should be created", () => {
    const service: RequestCacheService = TestBed.get(RequestCacheService);
    expect(service).toBeTruthy();
  });

  it("Should have an empty cache", () => {
    const respose = requestCacheService.get(req);
    expect(respose).toBeUndefined();
    expect(requestCacheService.cache.size).toBe(0);
  });

  it("Should store in the cache", () => {
    const response: HttpResponse<IResult> = new HttpResponse<IResult>({
      url: strUrl,
      body: resultData
    });
    requestCacheService.put(req, response);
    expect(requestCacheService.cache.size).toBe(1);
  });

  it("Should have a response object", () => {
    const response: HttpResponse<IResult> = new HttpResponse<IResult>({
      url: strUrl,
      body: resultData
    });
    requestCacheService.put(req, response);
    const respose = requestCacheService.get(req);
    expect(respose).not.toBeUndefined();
  });
});
