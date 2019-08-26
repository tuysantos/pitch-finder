import { Component, OnInit, Input } from "@angular/core";
import { IPitch } from "src/app/core/model/interfaces";
import { ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-filter-result",
  templateUrl: "./filter-result.component.html",
  styleUrls: ["./filter-result.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterResultComponent implements OnInit {
  @Input() pitches: IPitch[] = [];
  @Input() exchangeRate: string;
  @Input() convertedCurrency: string;
  constructor() {}

  ngOnInit() {}

  trackByFn(index, item) {
    return index;
  }
}
