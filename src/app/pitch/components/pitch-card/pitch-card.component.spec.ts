import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchCardComponent } from './pitch-card.component';

describe('PitchCardComponent', () => {
  let component: PitchCardComponent;
  let fixture: ComponentFixture<PitchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
