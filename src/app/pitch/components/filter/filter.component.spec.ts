import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { FilterComponent } from "./filter.component";
import * as Errors from "src/app/pitch/model/error-enum";
import { IFilterSearch } from "src/app/pitch/model/interfaces";

describe("FilterComponent", () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let componentForm: ComponentForm;
  let spanElement: DebugElement;
  let btnElement: DebugElement;

  class ComponentForm {
    fillForm(pitchId: string, startDate: string, endDate: string): void {
      component.startDateElementRef.nativeElement.value = startDate;
      component.endDateElementRef.nativeElement.value = endDate;
      component.filterForm.controls["PitchId"].setValue(pitchId);
      component.filterForm.controls["StartsId"].setValue(startDate);
      component.filterForm.controls["EndsId"].setValue(endDate);
    }

    resetForm(): void {
      component.startDateElementRef.nativeElement.value = "";
      component.endDateElementRef.nativeElement.value = "";
      component.filterForm.controls["PitchId"].setValue("");
      component.filterForm.controls["StartsId"].setValue("");
      component.filterForm.controls["EndsId"].setValue("");
    }

    init(): void {
      btnElement = fixture.debugElement.query(By.css("button[id=btnSearch]"));

      spanElement = fixture.debugElement.query(
        By.css("span[id=spErrorMessage]")
      );
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should display error message 'All fields mandatory' - No Slot Id", () => {
    componentForm = new ComponentForm();
    componentForm.init();
    componentForm.resetForm();
    componentForm.fillForm("", "2001-05-09", "2001-05-15");
    btnElement.nativeElement.click();
    fixture.detectChanges();
    expect(spanElement.nativeElement.innerText).toBe(Errors.MANDATORY_FIELDS);
  });

  it("Should display error message 'All fields mandatory' - No Start Date", () => {
    componentForm = new ComponentForm();
    componentForm.init();
    componentForm.resetForm();
    componentForm.fillForm("9000", "", "2001-05-15");
    btnElement.nativeElement.click();
    fixture.detectChanges();
    expect(spanElement.nativeElement.innerText).toBe(Errors.MANDATORY_FIELDS);
  });

  it("Should display error message 'All fields mandatory' - No End Date", () => {
    componentForm = new ComponentForm();
    componentForm.init();
    componentForm.resetForm();
    componentForm.fillForm("9000", "2001-05-09", "");
    btnElement.nativeElement.click();
    fixture.detectChanges();
    expect(spanElement.nativeElement.innerText).toBe(Errors.MANDATORY_FIELDS);
  });

  it("Should display error message 'Invalid Slot Id'", () => {
    componentForm = new ComponentForm();
    componentForm.init();
    componentForm.resetForm();
    componentForm.fillForm("90RRxxxxx", "2001-05-09", "2001-05-15");
    btnElement.nativeElement.click();
    fixture.detectChanges();
    expect(spanElement.nativeElement.innerText).toBe(Errors.INVALID_PITCH_ID);
  });

  it("Should display error message 'Invalid sarte date or end date'", () => {
    componentForm = new ComponentForm();
    componentForm.init();
    componentForm.resetForm();
    componentForm.fillForm("90000", "xxxxxxx", "2001-05-15");
    btnElement.nativeElement.click();
    fixture.detectChanges();
    expect(spanElement.nativeElement.innerText).toBe(Errors.INVALID_DATES);
  });

  it("Should display error message 'End date should be greater then start date'", () => {
    componentForm = new ComponentForm();
    componentForm.init();
    componentForm.resetForm();
    componentForm.fillForm("90000", "2001-05-21", "2001-05-15");
    btnElement.nativeElement.click();
    fixture.detectChanges();
    expect(spanElement.nativeElement.innerText).toBe(Errors.END_DATE_GREATER);
  });

  it("Should display error message 'Date range cannot exceed 14 days'", () => {
    componentForm = new ComponentForm();
    componentForm.init();
    componentForm.resetForm();
    componentForm.fillForm("90000", "2001-05-02", "2001-05-28");
    btnElement.nativeElement.click();
    fixture.detectChanges();
    expect(spanElement.nativeElement.innerText).toBe(Errors.INVALID_DATE_RANGE);
  });

  it("Should emit a click event to the parent", () => {
    const obj: IFilterSearch = {
      id: "90000",
      starts: "2001-05-06",
      ends: "2001-05-10"
    };

    spyOn(component.filterEvent, "emit").and.callThrough();
    componentForm = new ComponentForm();
    componentForm.init();
    componentForm.resetForm();
    componentForm.fillForm("90000", "2001-05-06", "2001-05-10");
    btnElement.nativeElement.click();
    fixture.detectChanges();
    expect(component.filterEvent.emit).toHaveBeenCalled();
    expect(component.filterEvent.emit).toHaveBeenCalledWith(obj);
  });
});
