import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { PitchCardComponent } from "./pitch-card.component";
import { DateFormatPipe } from "src/app/core/pipes/dateFormat";
import { DurationPipe } from "src/app/core/pipes/duration";
import { CurrencyConverterPipe } from "src/app/core/pipes/currencyConverter";

describe("PitchCardComponent", () => {
  let component: PitchCardComponent;
  let fixture: ComponentFixture<PitchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PitchCardComponent,
        DurationPipe,
        DateFormatPipe,
        CurrencyConverterPipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchCardComponent);
    component = fixture.componentInstance;
    component.slotId = "32990";
    component.startDate = "2018-01-09T09:20:00+00:00";
    component.endDate = "2018-01-09T10:00:00+00:00";
    component.price = "9.90";
    component.availabilities = 4;
    component.currency = "GBP";
    component.exchangeRate = "1.13";
    component.convertedCurrency = "EUR";
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should display Correct Slot Id", () => {
    const divElement: DebugElement = fixture.debugElement.query(
      By.css("span[id=spSlotId]")
    );
    fixture.detectChanges();
    expect(divElement.nativeElement.innerText).toBe("32990");
  });

  it("Should display Correct Availabilities", () => {
    const divElement: DebugElement = fixture.debugElement.query(
      By.css("span[id=spAvailabilities]")
    );
    fixture.detectChanges();
    expect(divElement.nativeElement.innerText).toBe("4");
  });

  it("Should display start date with format 'hh:mm d/m/y'", () => {
    const divElement: DebugElement = fixture.debugElement.query(
      By.css("span[id=spStartDate]")
    );
    fixture.detectChanges();
    expect(divElement.nativeElement.innerText).toBe("09:20 09/01/2018");
  });

  it("Should display duration in hours and minutes", () => {
    const divElement: DebugElement = fixture.debugElement.query(
      By.css("span[id=spDuration]")
    );
    fixture.detectChanges();
    expect(divElement.nativeElement.innerText).toBe(
      "0 hour(s) and 40 minute(s)"
    );
  });

  it("Should display Price in GBP", () => {
    const divElement: DebugElement = fixture.debugElement.query(
      By.css("span[id=spPrice]")
    );
    fixture.detectChanges();
    expect(divElement.nativeElement.innerText).toBe("£9.90");
  });

  it("Should display Converted Price in different currency with exchange rate of 1.13", () => {
    const divElement: DebugElement = fixture.debugElement.query(
      By.css("span[id=spConvertedPrice]")
    );
    fixture.detectChanges();
    expect(divElement.nativeElement.innerText).toBe("€11.19");
  });
});
