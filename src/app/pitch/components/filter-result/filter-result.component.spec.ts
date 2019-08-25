import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { FilterResultComponent } from "./filter-result.component";
import { PitchCardComponent } from "../pitch-card/pitch-card.component";
import { DateFormatPipe } from "src/app/core/pipes/dateFormat";
import { DurationPipe } from "src/app/core/pipes/duration";
import { CurrencyConverterPipe } from "src/app/core/pipes/currencyConverter";
import { IPitch } from "src/app/core/model/interfaces";

describe("FilterResultComponent", () => {
  let component: FilterResultComponent;
  let fixture: ComponentFixture<FilterResultComponent>;
  let pitchesMock: PitchesMock;

  class PitchesMock {
    getPitches(): IPitch[] {
      return [
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
        }
      ];
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterResultComponent,
        PitchCardComponent,
        DateFormatPipe,
        DurationPipe,
        CurrencyConverterPipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterResultComponent);
    component = fixture.componentInstance;
    pitchesMock = new PitchesMock();
    component.exchangeRate = "1.13";
    component.pitches = pitchesMock.getPitches();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create 3 pitch cards", () => {
    let cardElements: DebugElement[] = fixture.debugElement.queryAll(
      By.css("div[class=result-wrapper]")
    );
    expect(cardElements.length).toBe(3);
  });
});
