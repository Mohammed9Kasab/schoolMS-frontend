import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRatio2linesComponent } from './sales-ratio2lines.component';

describe('SalesRatio2linesComponent', () => {
  let component: SalesRatio2linesComponent;
  let fixture: ComponentFixture<SalesRatio2linesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesRatio2linesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRatio2linesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
