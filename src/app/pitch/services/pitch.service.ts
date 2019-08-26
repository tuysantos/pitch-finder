import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map, catchError, share } from "rxjs/operators";
import { IPitch, IResult } from "src/app/core/model/interfaces";

@Injectable({
  providedIn: "root"
})
export class PitchService {
  pitches: IPitch[];
  errorObj: IResult = {
    meta: {
      total_items: 0,
      filter: null
    },
    data: [],
    error: { errorNum: 0, message: "" }
  };

  constructor(private http: HttpClient) {}

  getPitches(
    pitchId: string,
    starts: string,
    ends: string
  ): Observable<IResult> {
    const strUrl = `${environment.apiEndPoint}/pitches/${pitchId}/slots?filter[starts]=${starts}&filter[ends]=${ends}`;
    return this.http.get<IResult>(strUrl).pipe(
      map((item: IResult) => {
        return item;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error("server error:", error);
    if (error.error instanceof Error) {
      let errMessage = error.error;
      return Observable.throw(errMessage);
    }
    return Observable.throw(`${error.status} - ${error.error.errors[0].title}`);
  }
}
