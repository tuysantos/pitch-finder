import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IFilterSearch } from "src/app/core/model/interfaces";
import * as Errors from "src/app/core/model/error-enum";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  errorMessage: string = "";
  filterForm: FormGroup;
  @ViewChild("startDateRef") startDateElementRef: ElementRef;
  @ViewChild("endDateRef") endDateElementRef: ElementRef;
  @Output() filterEvent: EventEmitter<IFilterSearch> = new EventEmitter<
    IFilterSearch
  >();
  get formControls() {
    return this.filterForm.controls;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.formBuilder.group({
      PitchId: ["", Validators.required],
      StartsId: ["", Validators.required],
      EndsId: ["", Validators.required]
    });
  }

  copyData(strLabel) {
    setTimeout(() => {
      strLabel === "StartsId"
        ? this.filterForm.controls[strLabel].setValue(
            this.startDateElementRef.nativeElement.value
          )
        : this.filterForm.controls[strLabel].setValue(
            this.endDateElementRef.nativeElement.value
          );
    }, 500);
  }

  filterData() {
    this.errorMessage = "";

    if (this.filterForm.invalid) {
      this.errorMessage = Errors.MANDATORY_FIELDS;
      return;
    }

    if (
      !this.isValidDate(this.startDateElementRef.nativeElement.value) ||
      !this.isValidDate(this.endDateElementRef.nativeElement.value)
    ) {
      this.errorMessage = Errors.INVALID_DATES;
      return;
    }

    if (
      !this.isValidDateRange(
        this.formateDate("StartsId"),
        this.formateDate("EndsId")
      )
    ) {
      this.errorMessage = Errors.END_DATE_GREATER;
      return;
    }

    if (
      !this.isValidDateRangeLength(
        this.formateDate("StartsId"),
        this.formateDate("EndsId")
      )
    ) {
      this.errorMessage = Errors.INVALID_DATE_RANGE;
      return;
    }

    if (!this.isValidId(this.filterForm.controls["PitchId"].value)) {
      this.errorMessage = Errors.INVALID_PITCH_ID;
      return;
    }

    this.sendFilterCriteria();
  }

  isValidDate(strDate: string): boolean {
    let result = true;
    try {
      const date1 = new Date(strDate);
      if (date1.toString() === "Invalid Date") {
        result = false;
      }
    } catch (err) {
      result = false;
    }
    return result;
  }

  formateDate(strLabel: string): Date {
    var d = new Date(this.filterForm.controls[strLabel].value);
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    return d;
  }

  isValidDateRange(start: Date, end: Date): boolean {
    return start > end ? false : true;
  }

  isValidDateRangeLength(start, end): boolean {
    var res = Math.abs(start - end) / 1000;
    var days = Math.floor(res / 86400);
    return days > 14 ? false : true;
  }

  isValidId(num): boolean {
    if (num.match(/^-{0,1}\d+$/) || num.match(/^\d+\.\d+$/)) {
      return true;
    }
    return false;
  }

  sendFilterCriteria(): void {
    const obj: IFilterSearch = {
      id: this.filterForm.controls["PitchId"].value,
      starts: this.filterForm.controls["StartsId"].value,
      ends: this.filterForm.controls["EndsId"].value
    };
    this.filterEvent.emit(obj);
  }
}
