import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { FilterResultComponent } from "./filter-result.component";
import { PitchCardComponent } from "../pitch-card/pitch-card.component";
import { DateFormatPipe } from "src/app/core/pipes/dateFormat";
import { DurationPipe } from "src/app/core/pipes/duration";
import { CurrencyConverterPipe } from "src/app/core/pipes/currencyConverter";
import { IPitch } from "src/app/core/model/interfaces";
import { pitchMockResults } from "../../pitch-fixture";

describe("FilterResultComponent", () => {
  let component: FilterResultComponent;
  let fixture: ComponentFixture<FilterResultComponent>;
  let pitchesMock: PitchesMock;

  class PitchesMock {
    getPitches(): IPitch[] {
      return pitchMockResults;
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
    component.convertedCurrency = "EUR";
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
