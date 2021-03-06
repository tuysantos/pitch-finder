import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { PaginationComponent } from "./pagination.component";

describe("PaginationComponent", () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.pageSize = 10;
    component.totalItems = 13;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create 2 pages", () => {
    const liElements: DebugElement[] = fixture.debugElement.queryAll(
      By.css("li[id=pageElement]")
    );
    fixture.detectChanges();
    expect(liElements.length).toBe(2);
  });

  it("should have page 2 active", () => {
    spyOn(component.pageChanged, "emit").and.callThrough();
    const liElements: DebugElement[] = fixture.debugElement.queryAll(
      By.css("li[id=pageElement]")
    );
    liElements[1].childNodes[0].nativeNode.click();
    fixture.detectChanges();
    expect(component.pageChanged.emit).toHaveBeenCalled();
    expect(component.pageChanged.emit).toHaveBeenCalledWith(2);
  });

  it("should display total of pages", () => {
    const divElement: DebugElement = fixture.debugElement.query(
      By.css("div[id=totalPages]")
    );
    fixture.detectChanges();
    expect(divElement.nativeElement.innerText).toBe("Total Pages: 2");
  });
});
