import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map, catchError, share } from "rxjs/operators";
import { IPitch, IResult } from "src/app/core/model/interfaces";
import { of } from "rxjs/internal/observable/of";

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
    error: { errorNum: 404, message: "Server error" }
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
      catchError(this.handleError<IResult>("getPitches", this.errorObj))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error("server error", error.error.errors);
      const arrayErrors = error.error.errors;
      if (arrayErrors.length > 0) {
        this.errorObj.error = {
          errorNum: arrayErrors[0].status,
          message: arrayErrors[0].title
        };
      } else {
        this.errorObj.error = {
          errorNum: error.status,
          message: error.message
        };
      }

      return of(result as T);
    };
  }
}
