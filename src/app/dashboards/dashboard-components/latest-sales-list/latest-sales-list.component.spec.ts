import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSalesListComponent } from './latest-sales-list.component';

describe('LatestSalesListComponent', () => {
  let component: LatestSalesListComponent;
  let fixture: ComponentFixture<LatestSalesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestSalesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestSalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
