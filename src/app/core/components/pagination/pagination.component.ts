import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  SimpleChange
} from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  private pagerTotalItems: number;
  private pagerPageSize: number;

  totalPages: number;
  pages: number[] = [];
  currentPage: number = 1;
  isVisible: boolean = false;
  previousEnabled: boolean = false;
  nextEnabled: boolean = true;
  pageStart: number = 1;
  pageEnd: number = 1;

  @Input() get pageSize(): number {
    return this.pagerPageSize;
  }

  set pageSize(size: number) {
    this.pagerPageSize = size;
    this.update();
  }

  @Input() get totalItems(): number {
    return this.pagerTotalItems;
  }

  set totalItems(itemCount: number) {
    this.pagerTotalItems = itemCount;
    this.pageEnd =
      this.pagerTotalItems > this.pagerPageSize
        ? this.pagerPageSize
        : this.pagerTotalItems;
    this.update();
  }

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  update() {
    if (this.pagerTotalItems && this.pagerPageSize) {
      this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
      this.isVisible = true;
      if (this.totalItems >= this.pageSize) {
        for (let i = 1; i < this.totalPages + 1; i++) {
          this.pages.push(i);
        }
      }
      return;
    }

    this.isVisible = false;
  }

  previousNext(direction: number, event?: MouseEvent) {
    if (event) {
      event.preventDefault();
    }
    if (direction == -1) {
      this.pageStart =
        this.pageStart === 1 ? 1 : this.pageStart - this.pagerPageSize;
      this.pageEnd = this.pageStart + this.pagerPageSize - 1;
    } else {
      this.pageStart =
        this.pageStart + this.pagerPageSize < this.totalPages
          ? this.pageStart + this.pagerPageSize
          : this.pageStart;
      this.pageEnd =
        this.pageEnd + this.pagerPageSize < this.totalPages
          ? this.pageEnd + this.pagerPageSize
          : this.totalPages;
    }

    this.currentPage = this.pageStart;
    this.pageChanged.emit(this.currentPage);
  }

  changePage(page: number, event?: MouseEvent) {
    if (event) {
      event.preventDefault();
    }
    if (this.currentPage === page) return;
    this.currentPage = page;
    this.previousEnabled = this.currentPage > 1;
    this.nextEnabled = this.currentPage < this.totalPages;
    this.pageChanged.emit(page);
  }
}
