import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  IFilterSearch,
  IResult,
  IPitch,
  ICriteria
} from "src/app/core/model/interfaces";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/internal/Subscription";
import { PitchService } from "../../services/pitch.service";
import { PaginationService } from "src/app/core/services/pagination.service";

@Component({
  selector: "app-pitches",
  templateUrl: "./pitches.component.html",
  styleUrls: ["./pitches.component.scss"]
})
export class PitchesComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  pitches: IPitch[] = [];
  criteria: ICriteria;
  totalRecords: number = 0;
  pageSize: number = 10;
  pagePitches: IPitch[] = [];
  exchangeRate: string = "1.13";
  errorsFound: boolean = false;
  serverErrorMessage: string = "";

  constructor(
    private route: Router,
    private activeRoute: ActivatedRoute,
    private pitchService: PitchService,
    private paginationService: PaginationService
  ) {}

  ngOnInit() {
    this.errorsFound = false;
    this.serverErrorMessage = "";
    this.pagePitches = [];
    this.totalRecords = 0;
    this.hasParameters() ? this.refreshedData() : "";
  }

  filterData(data: IFilterSearch): void {
    this.serverErrorMessage = "";
    this.errorsFound = false;
    this.pagePitches = [];
    this.totalRecords = 0;
    this.route.navigate(["/pitches", data.id, data.starts, data.ends]);
    this.getPitches(data.id, data.starts, data.ends);
  }

  hasParameters(): boolean {
    return (
      this.activeRoute.snapshot.paramMap.has("id") &&
      this.activeRoute.snapshot.paramMap.has("starts") &&
      this.activeRoute.snapshot.paramMap.has("ends")
    );
  }

  refreshedData(): void {
    const id = this.activeRoute.snapshot.paramMap.get("id");
    const starts = this.activeRoute.snapshot.paramMap.get("starts");
    const ends = this.activeRoute.snapshot.paramMap.get("ends");
    this.getPitches(id, starts, ends);
  }

  getPitches(id: string, start: string, end: string): void {
    this.errorsFound = false;
    this.serverErrorMessage = "";
    this.subscription = this.pitchService
      .getPitches(id, start, end)
      .pipe()
      .subscribe(
        (result: IResult) => {
          this.pitches = result.data;
          this.criteria = result.meta;

          this.totalRecords = this.criteria.total_items;
          if (this.totalRecords > 0) {
            this.pageChanged(1);
          }
          if (result.meta.total_items === 0) {
            this.errorsFound = true;
            this.serverErrorMessage = "400 - No records";
          }
        },
        (err: any) => {
          this.pitches = [];
          this.errorsFound = true;
          this.serverErrorMessage = err;
        }
      );
  }

  pageChanged(event) {
    this.pagePitches = this.paginationService.getPageByNumber(
      event,
      this.pageSize,
      this.pitches
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
