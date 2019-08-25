import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PitchesComponent } from "./pitches.component";
import { DateFormatPipe } from "src/app/core/pipes/dateFormat";
import { FilterComponent } from "../filter/filter.component";
import { FilterResultComponent } from "../filter-result/filter-result.component";
import { PaginationComponent } from "src/app/core/components/pagination/pagination.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { DurationPipe } from "src/app/core/pipes/duration";
import { PitchCardComponent } from "../pitch-card/pitch-card.component";
import { CurrencyConverterPipe } from "src/app/core/pipes/currencyConverter";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PitchService } from "../../services/pitch.service";
import { IResult } from "src/app/core/model/interfaces";

describe("PitchesComponent", () => {
  let component: PitchesComponent;
  let fixture: ComponentFixture<PitchesComponent>;

  class pitchServiceServiceMock {
    getPitches(
      pitchId: string,
      starts: string,
      ends: string
    ): Observable<IResult> {
      return pitchId === "1111"
        ? of(this.getErrorData())
        : of(this.getMockData());
    }
    getMockData(): IResult {
      return data;
    }

    getErrorData(): IResult {
      return {
        meta: {
          total_items: 0,
          filter: {
            starts: "2018-01-09",
            ends: "2018-01-15",
            fromTime: "00:00",
            toTime: "23:59"
          }
        },
        data: [],
        error: { errorNum: 404, message: "Not Found" }
      };
    }
  }

  const data: IResult = {
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PitchesComponent,
        PitchCardComponent,
        FilterComponent,
        FilterResultComponent,
        PaginationComponent,
        DateFormatPipe,
        DurationPipe,
        CurrencyConverterPipe
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [{ provide: PitchService, useClass: pitchServiceServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should return the correct meta data", () => {
    component.getPitches("32990", "2018-01-09", "2018-01-15");
    fixture.detectChanges();
    expect(component.criteria.total_items).toBe(14);
    expect(component.criteria.filter.starts).toEqual("2018-01-09");
    expect(component.criteria.filter.ends).toEqual("2018-01-15");
    expect(component.exchangeRate).toBe("1.13");
    expect(component.pageSize).toBe(10);
  });

  it("Should return a list of 14 pitches", () => {
    component.getPitches("32990", "2018-01-09", "2018-01-15");
    fixture.detectChanges();
    expect(component.totalRecords).toBe(14);
    expect(component.pitches.length).toBe(14);
  });

  it("Should display a list of 10 pitches", () => {
    component.getPitches("32990", "2018-01-09", "2018-01-15");
    fixture.detectChanges();
    expect(component.pagePitches.length).toBe(10);
  });

  it("Should display an error message", () => {
    component.getPitches("1111", "2018-01-09", "2018-01-15");
    fixture.detectChanges();
    expect(component.pagePitches.length).toBe(0);
    expect(component.serverErrorMessage).toBe("404 - Not Found");
  });

  it("should display the correct title", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("span").textContent).toContain(
      "List of Pitches"
    );
  });
});
