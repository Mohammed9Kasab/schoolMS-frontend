import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitStatisticComponent } from './visit-statistic.component';

describe('VisitStatisticComponent', () => {
  let component: VisitStatisticComponent;
  let fixture: ComponentFixture<VisitStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
